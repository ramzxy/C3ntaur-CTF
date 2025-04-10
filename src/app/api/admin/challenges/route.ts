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
    const { title, description, category, points, flag, difficulty, isLocked, files, hints } = await req.json();

    const challenge = await prisma.challenge.create({
      data: {
        title,
        description,
        category,
        points,
        flag,
        difficulty,
        isLocked: isLocked || false,
        files: files ? {
          create: files.map((file: any) => ({
            name: file.name,
            path: file.path,
            size: file.size
          }))
        } : undefined,
        hints: hints ? {
          create: hints.map((hint: any) => ({
            content: hint.content,
            cost: hint.cost
          }))
        } : undefined
      },
      include: {
        files: true,
        hints: true
      }
    });

    return NextResponse.json(challenge, { status: 201 });
  } catch (error) {
    console.error('Error creating challenge:', error);
    return NextResponse.json(
      { error: 'Error creating challenge' },
      { status: 500 }
    );
  }
}

export async function GET() {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  try {
    const challenges = await prisma.challenge.findMany({
      include: {
        files: true,
        hints: true
      }
    });
    return NextResponse.json(challenges);
  } catch (error) {
    console.error('Error fetching challenges:', error);
    return NextResponse.json(
      { error: 'Error fetching challenges' },
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

    await prisma.challenge.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Challenge deleted successfully' });
  } catch (error) {
    console.error('Error deleting challenge:', error);
    return NextResponse.json(
      { error: 'Error deleting challenge' },
      { status: 500 }
    );
  }
}

export async function PATCH(req: Request) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  try {
    const { id, title, description, category, points, flag, difficulty, isActive, isLocked, files, hints } = await req.json();

    // Get the current challenge state to check if it was previously locked
    const currentChallenge = await prisma.challenge.findUnique({
      where: { id },
      select: { isLocked: true, title: true }
    });

    const challenge = await prisma.challenge.update({
      where: { id },
      data: {
        title,
        description,
        category,
        points,
        flag,
        difficulty,
        isActive,
        isLocked,
        files: files ? {
          deleteMany: {}, // Remove existing files
          create: files.map((file: any) => ({
            name: file.name,
            path: file.path,
            size: file.size
          }))
        } : undefined,
        hints: hints ? {
          deleteMany: {}, // Remove existing hints
          create: hints.map((hint: any) => ({
            content: hint.content,
            cost: hint.cost
          }))
        } : undefined
      },
      include: {
        files: true,
        hints: true
      }
    });

    // Log activity if challenge was unlocked
    if (currentChallenge?.isLocked && !isLocked) {
      await prisma.activityLog.create({
        data: {
          type: 'CHALLENGE_UNLOCKED',
          description: `Challenge "${challenge.title}" has been unlocked by an admin`,
        },
      });
    }

    return NextResponse.json(challenge);
  } catch (error) {
    console.error('Error updating challenge:', error);
    return NextResponse.json(
      { error: 'Error updating challenge' },
      { status: 500 }
    );
  }
} 