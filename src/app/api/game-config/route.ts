import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const gameConfig = await prisma.gameConfig.findFirst({
      where: {
        isActive: true,
      },
    });

    if (!gameConfig) {
      return NextResponse.json({
        isActive: false,
        startTime: null,
        endTime: null,
      });
    }

    return NextResponse.json(gameConfig);
  } catch (error) {
    console.error('Error fetching game config:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 