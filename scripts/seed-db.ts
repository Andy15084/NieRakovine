import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient({
  log: ['query', 'error', 'warn'],
  datasources: {
    db: {
      url: process.env.DIRECT_URL || process.env.DATABASE_URL
    }
  }
});

async function verifyDatabaseConnection() {
  try {
    // Simple connection test using count
    const userCount = await prisma.user.count();
    console.log('✓ Database connection successful, users found:', userCount);
    return true;
  } catch (error) {
    console.error('✗ Database connection failed:', error);
    return false;
  }
}

async function main() {
  console.log('Starting database seeding...');
  
  // Log environment check
  const envCheck = {
    nodeEnv: process.env.NODE_ENV,
    hasDbUrl: !!process.env.DATABASE_URL,
    hasDirectUrl: !!process.env.DIRECT_URL
  };
  console.log('Environment check:', envCheck);

  try {
    // Verify database connection
    const isConnected = await verifyDatabaseConnection();
    if (!isConnected) {
      throw new Error('Failed to connect to database');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash('admin123', 10);

    // Create or update admin user
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

    console.log('Admin user created/updated:', {
      id: admin.id,
      email: admin.email,
      role: admin.role
    });

    // Verify admin user
    const verifiedAdmin = await prisma.user.findUnique({
      where: { email: 'admin@charity.org' },
      include: { profile: true }
    });

    console.log('✓ Admin user verified:', {
      id: verifiedAdmin?.id,
      email: verifiedAdmin?.email,
      role: verifiedAdmin?.role,
      hasProfile: !!verifiedAdmin?.profile
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