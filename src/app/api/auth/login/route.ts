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
      dbUrlPreview: process.env.DATABASE_URL?.split('@')[1]?.split('?')[0], // Safe URL preview
      directUrlPreview: process.env.DIRECT_URL?.split('@')[1]?.split('?')[0] // Safe URL preview
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

    // Deallocate any existing prepared statements
    try {
      await prisma.$executeRaw`DEALLOCATE ALL`;
    } catch (deallocError) {
      console.warn('Failed to deallocate statements:', deallocError);
      // Continue anyway as this is not critical
    }

    // Use transaction for consistent database operations
    const result = await prisma.$transaction(async (tx) => {
      // Test database connection
      try {
        const testQuery = await tx.$queryRaw`SELECT current_database(), current_user`;
        console.log('Database connection test successful:', testQuery);
      } catch (connError) {
        console.error('Database connection test failed:', {
          error: connError instanceof Error ? connError.message : 'Unknown error',
          stack: connError instanceof Error ? connError.stack : undefined
        });
        throw new Error('Database connection failed');
      }

      // Find user
      const user = await tx.user.findUnique({
        where: { email },
        include: { profile: true }
      });

      console.log('User lookup result:', user ? {
        id: user.id,
        email: user.email,
        role: user.role,
        hasProfile: !!user.profile
      } : 'User not found');

      if (!user) {
        return { error: 'Invalid credentials', status: 401 };
      }

      // Verify password
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        console.log('Invalid password for user:', email);
        return { error: 'Invalid credentials', status: 401 };
      }

      return { user };
    });

    if ('error' in result) {
      return NextResponse.json(
        { error: result.error },
        { status: result.status }
      );
    }

    // Create JWT token
    const token = jwt.sign(
      { 
        userId: result.user.id,
        email: result.user.email,
        role: result.user.role
      },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    // Create response
    const response = NextResponse.json(
      { 
        user: {
          id: result.user.id,
          email: result.user.email,
          name: result.user.name,
          role: result.user.role,
          profile: result.user.profile
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
  }
} 