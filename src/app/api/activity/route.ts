import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const activities = await prisma.activityLog.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 100,
      include: {
        team: true,
      },
    });

    return NextResponse.json(activities);
  } catch (error) {
    console.error('Error fetching activity logs:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}