import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Create a single PrismaClient instance
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // @ts-ignore
  if (!global.prisma) {
    // @ts-ignore
    global.prisma = new PrismaClient();
  }
  // @ts-ignore
  prisma = global.prisma;
}

export async function POST(request: Request) {
  try {
    // Log environment variables (without sensitive data)
    console.log('Environment check:', {
      hasDbUrl: !!process.env.DATABASE_URL,
      hasJwtSecret: !!process.env.JWT_SECRET,
      nodeEnv: process.env.NODE_ENV
    });
    
    const { email, password } = await request.json();
    
    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Database connection test
    try {
      await prisma.$connect();
      console.log('Database connection successful');
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      return NextResponse.json(
        { error: 'Database connection failed', details: dbError instanceof Error ? dbError.message : 'Unknown error' },
        { status: 500 }
      );
    }

    // Find user
    let user;
    try {
      user = await prisma.user.findUnique({
        where: { email },
        include: { profile: true }
      });
      console.log('User lookup result:', user ? 'User found' : 'User not found');
    } catch (userError) {
      console.error('User lookup error:', userError);
      return NextResponse.json(
        { error: 'Failed to lookup user', details: userError instanceof Error ? userError.message : 'Unknown error' },
        { status: 500 }
      );
    }

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Verify password
    try {
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        );
      }
    } catch (passwordError) {
      console.error('Password verification error:', passwordError);
      return NextResponse.json(
        { error: 'Password verification failed', details: passwordError instanceof Error ? passwordError.message : 'Unknown error' },
        { status: 500 }
      );
    }

    // Create JWT token
    let token;
    try {
      if (!process.env.JWT_SECRET) {
        throw new Error('JWT_SECRET is not configured');
      }
      
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
        { error: 'Failed to create authentication token', details: tokenError instanceof Error ? tokenError.message : 'Unknown error' },
        { status: 500 }
      );
    }

    // Create response
    try {
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

      console.log('Login successful');
      return response;
    } catch (responseError) {
      console.error('Response creation error:', responseError);
      return NextResponse.json(
        { error: 'Failed to create response', details: responseError instanceof Error ? responseError.message : 'Unknown error' },
        { status: 500 }
      );
    }
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
      console.error('Error disconnecting from database:', disconnectError);
    }
  }
} 