import { PrismaClient, UserRole } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

// Configure Prisma Client with special handling for connection pooling
const prismaClientSingleton = () => {
  return new PrismaClient({
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    },
    log: ['query', 'error', 'warn']
  })
}

const prisma = prismaClientSingleton();

async function verifyDatabaseConnection() {
  try {
    // Test query
    const count = await prisma.user.count();
    console.log(`✓ Database query successful (${count} users found)`);
    console.log('Database URL:', process.env.DATABASE_URL?.split('?')[0]); // Log URL without credentials
    return true;
  } catch (error) {
    console.error('✗ Database connection failed:', error);
    return false;
  }
}

async function main() {
  try {
    console.log('Starting database seeding...');
    console.log('Environment check:', {
      nodeEnv: process.env.NODE_ENV,
      hasDbUrl: !!process.env.DATABASE_URL,
      hasDirectUrl: !!process.env.DIRECT_URL
    });

    // Verify database connection
    const isConnected = await verifyDatabaseConnection();
    if (!isConnected) {
      throw new Error('Failed to connect to database');
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    console.log('Creating admin user...');
    const admin = await prisma.user.upsert({
      where: { email: 'admin@charity.org' },
      update: {
        password: hashedPassword,
        role: UserRole.ADMIN,
      },
      create: {
        email: 'admin@charity.org',
        name: 'Administrator',
        password: hashedPassword,
        role: UserRole.ADMIN,
        profile: {
          create: {
            phone: '+1234567890',
            bio: 'System Administrator',
          },
        },
      },
    });

    console.log('Admin user created/updated:', {
      id: admin.id,
      email: admin.email,
      role: admin.role
    });

    // Verify admin user was created
    const verifyAdmin = await prisma.user.findUnique({
      where: { email: 'admin@charity.org' },
      include: { profile: true }
    });

    if (!verifyAdmin) {
      throw new Error('Failed to verify admin user creation');
    }

    console.log('✓ Admin user verified:', {
      id: verifyAdmin.id,
      email: verifyAdmin.email,
      role: verifyAdmin.role,
      hasProfile: !!verifyAdmin.profile
    });

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
    console.log('Database connection closed');
  }
}

// Add error handling for unhandled rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled rejection:', error);
  process.exit(1);
});

main()
  .catch((e) => {
    console.error('Fatal error:', e);
    process.exit(1);
  }); 