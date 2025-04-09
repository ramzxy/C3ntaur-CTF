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
    const { title, description, category, points, flag, difficulty } = await req.json();

    const challenge = await prisma.challenge.create({
      data: {
        title,
        description,
        category,
        points,
        flag,
        difficulty,
      },
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
    const challenges = await prisma.challenge.findMany();
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