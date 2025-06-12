import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    const submissions = await prisma.submission.findMany({
      include: {
        user: { select: { id: true, alias: true } },
        team: { select: { id: true, name: true, color: true, icon: true } },
        challenge: { select: { id: true, title: true } }
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
