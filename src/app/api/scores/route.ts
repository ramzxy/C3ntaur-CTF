import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
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