import { PrismaClient, UserRole } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  try {
    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
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

    console.log('Admin user created/updated:', admin);
  } catch (error) {
    console.error('Error initializing database:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  }); 