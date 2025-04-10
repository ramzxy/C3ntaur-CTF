import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

async function isAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user?.isAdmin === true;
}

export async function POST(req: Request) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  try {
    const { challengeId, content, cost } = await req.json();

    const hint = await prisma.hint.create({
      data: {
        content,
        cost,
        challengeId,
      },
    });

    return NextResponse.json(hint, { status: 201 });
  } catch (error) {
    console.error('Error creating hint:', error);
    return NextResponse.json(
      { error: 'Error creating hint' },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(req.url);
    const challengeId = searchParams.get('challengeId');

    if (!challengeId) {
      return NextResponse.json({ error: 'Missing challengeId' }, { status: 400 });
    }

    // Get all hints for the challenge
    const hints = await prisma.hint.findMany({
      where: {
        challengeId,
      },
    });

    // Get hints purchased by the team
    const teamHints = await prisma.teamHint.findMany({
      where: {
        teamId: session.user.teamId ?? "",
        hint: {
          challengeId,
        },
      },
      select: {
        hintId: true,
      },
    });

    const purchasedHintIds = new Set(teamHints.map(th => th.hintId));

    // Return hints with purchase status
    const hintsWithStatus = hints.map(hint => ({
      ...hint,
      isPurchased: purchasedHintIds.has(hint.id),
    }));

    return NextResponse.json(hintsWithStatus);
  } catch (error) {
    console.error('Error fetching hints:', error);
    return NextResponse.json(
      { error: 'Error fetching hints' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  try {
    const { id } = await req.json();

    await prisma.hint.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Hint deleted successfully' });
  } catch (error) {
    console.error('Error deleting hint:', error);
    return NextResponse.json(
      { error: 'Error deleting hint' },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  try {
    const { id, content, cost } = await req.json();

    const hint = await prisma.hint.update({
      where: { id },
      data: {
        content,
        cost,
      },
    });

    return NextResponse.json(hint);
  } catch (error) {
    console.error('Error updating hint:', error);
    return NextResponse.json(
      { error: 'Error updating hint' },
      { status: 500 }
    );
  }
} 