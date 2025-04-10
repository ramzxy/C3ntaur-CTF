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

    const scores = await prisma.score.findMany({
      include: {
        team: true,
        user: true,
        challenge: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return NextResponse.json(scores);
  } catch (error) {
    console.error('Error fetching scores:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 