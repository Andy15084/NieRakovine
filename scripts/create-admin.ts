const { PrismaClient, UserRole } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@charity.org' },
    update: {},
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

  console.log('Admin user created:', admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 