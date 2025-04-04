import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Configure Prisma Client with special handling for connection pooling
const prismaClientSingleton = () => {
  // Log database configuration
  console.log('Initializing Prisma Client with config:', {
    hasDbUrl: !!process.env.DATABASE_URL,
    hasDirectUrl: !!process.env.DIRECT_URL,
    dbUrlPreview: process.env.DATABASE_URL?.split('@')[1]?.split('?')[0], // Safe URL preview
    directUrlPreview: process.env.DIRECT_URL?.split('@')[1]?.split('?')[0] // Safe URL preview
  });

  return new PrismaClient({
    log: ['query', 'error', 'warn'],
    datasources: {
      db: {
        url: process.env.DIRECT_URL || process.env.DATABASE_URL
      }
    }
  })
}

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = prisma
}

export async function POST(request: Request) {
  try {
    // Log environment check
    const envCheck = {
      nodeEnv: process.env.NODE_ENV,
      hasDbUrl: !!process.env.DATABASE_URL,
      hasDirectUrl: !!process.env.DIRECT_URL,
      hasJwtSecret: !!process.env.JWT_SECRET,
      dbUrlPreview: process.env.DATABASE_URL?.split('@')[1]?.split('?')[0],
      directUrlPreview: process.env.DIRECT_URL?.split('@')[1]?.split('?')[0]
    };
    console.log('Environment check:', envCheck);

    if (!process.env.DATABASE_URL && !process.env.DIRECT_URL) {
      throw new Error('Neither DATABASE_URL nor DIRECT_URL is configured');
    }

    if (!process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is not configured');
    }

    const { email, password } = await request.json();
    console.log('Login attempt for email:', email);

    // Basic validation
    if (!email || !password) {
      console.log('Missing email or password');
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Test database connection and retry if needed
    let userCount: number | null = null;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        await prisma.$connect();
        userCount = await prisma.user.count();
        console.log(`Database connection successful on attempt ${attempt}, users found:`, userCount);
        break;
      } catch (connError) {
        console.error(`Database connection attempt ${attempt} failed:`, {
          error: connError instanceof Error ? connError.message : 'Unknown error',
          stack: connError instanceof Error ? connError.stack : undefined
        });
        if (attempt === 3) {
          return NextResponse.json(
            { error: 'Database connection failed after multiple attempts' },
            { status: 500 }
          );
        }
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds before retrying
      }
    }

    // Find user with retries
    let user = null;
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        user = await prisma.user.findUnique({
          where: { email },
          include: { profile: true }
        });
        
        console.log('User lookup result:', user ? {
          id: user.id,
          email: user.email,
          role: user.role,
          hasProfile: !!user.profile
        } : 'User not found');
        
        break;
      } catch (userError) {
        console.error(`User lookup attempt ${attempt} failed:`, userError);
        if (attempt === 3) {
          return NextResponse.json(
            { error: 'Failed to lookup user' },
            { status: 500 }
          );
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    if (!user) {
      console.log('No user found with email:', email);
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password
    try {
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        console.log('Invalid password for user:', email);
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        );
      }
    } catch (passwordError) {
      console.error('Password verification error:', passwordError);
      return NextResponse.json(
        { error: 'Password verification failed' },
        { status: 500 }
      );
    }

    // Create JWT token
    let token: string;
    try {
      token = jwt.sign(
        { 
          userId: user.id,
          email: user.email,
          role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );
    } catch (tokenError) {
      console.error('Token creation error:', tokenError);
      return NextResponse.json(
        { error: 'Failed to create authentication token' },
        { status: 500 }
      );
    }

    // Create response
    const response = NextResponse.json(
      { 
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          profile: user.profile
        }
      },
      { status: 200 }
    );

    response.cookies.set({
      name: 'auth-token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 86400 // 1 day
    });

    console.log('Login successful for user:', email);
    return response;
  } catch (error) {
    console.error('Unhandled login error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  } finally {
    try {
      await prisma.$disconnect();
    } catch (disconnectError) {
      console.warn('Error disconnecting from database:', disconnectError);
    }
  }
} 