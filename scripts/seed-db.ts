import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

// Initialize PrismaClient with retries
async function getPrismaClient(retries = 3, delay = 2000): Promise<PrismaClient> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const prisma = new PrismaClient({
        log: ['query', 'error', 'warn'],
        datasources: {
          db: {
            url: process.env.DIRECT_URL || process.env.DATABASE_URL
          }
        }
      });

      // Test the connection
      await prisma.$connect();
      console.log(`✓ Database connection established on attempt ${attempt}`);
      return prisma;
    } catch (error) {
      console.error(`Connection attempt ${attempt} failed:`, error);
      if (attempt === retries) throw error;
      console.log(`Retrying in ${delay}ms...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw new Error('Failed to connect to database after multiple attempts');
}

async function verifyDatabaseConnection(prisma: PrismaClient) {
  try {
    // Log connection details (safely)
    console.log('Database connection config:', {
      dbUrl: process.env.DATABASE_URL?.split('@')[1]?.split('?')[0],
      directUrl: process.env.DIRECT_URL?.split('@')[1]?.split('?')[0],
      nodeEnv: process.env.NODE_ENV
    });

    // Simple connection test using count
    const userCount = await prisma.user.count();
    console.log('✓ Database connection verified, users found:', userCount);
    return true;
  } catch (error) {
    console.error('✗ Database connection verification failed:', error);
    return false;
  }
}

async function main() {
  console.log('Starting database seeding...');
  let prisma: PrismaClient | null = null;

  try {
    // Initialize Prisma with retries
    prisma = await getPrismaClient();

    // Verify database connection
    const isConnected = await verifyDatabaseConnection(prisma);
    if (!isConnected) {
      throw new Error('Failed to verify database connection');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash('admin123', 10);
    console.log('Password hashed successfully');

    // Create or update admin user
    console.log('Attempting to create/update admin user...');
    const admin = await prisma.user.upsert({
      where: { email: 'admin@charity.org' },
      update: {
        password: hashedPassword,
        role: 'ADMIN',
      },
      create: {
        email: 'admin@charity.org',
        password: hashedPassword,
        role: 'ADMIN',
        profile: {
          create: {
            bio: 'Admin user',
          }
        }
      },
      include: {
        profile: true
      }
    });

    console.log('Admin user created/updated successfully:', {
      id: admin.id,
      email: admin.email,
      role: admin.role,
      hasProfile: !!admin.profile
    });

    // Verify admin user
    console.log('Verifying admin user...');
    const verifiedAdmin = await prisma.user.findUnique({
      where: { email: 'admin@charity.org' },
      include: { profile: true }
    });

    if (!verifiedAdmin) {
      throw new Error('Failed to verify admin user after creation');
    }

    console.log('✓ Admin user verified:', {
      id: verifiedAdmin.id,
      email: verifiedAdmin.email,
      role: verifiedAdmin.role,
      hasProfile: !!verifiedAdmin.profile
    });

    console.log('Database seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  } finally {
    if (prisma) {
      await prisma.$disconnect();
      console.log('Database connection closed');
    }
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection:', error);
  process.exit(1);
});

main()
  .catch((error) => {
    console.error('Fatal error:', error);
    process.exit(1);
  }); 