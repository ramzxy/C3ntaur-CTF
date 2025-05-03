import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

async function isAdmin() {
  const session = await getServerSession(authOptions);
  return session?.user?.isAdmin ?? false;
}

// Export all challenges
export async function GET() {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  try {
    const challenges = await prisma.challenge.findMany({
      include: {
        files: true,
        hints: true,
        flags: true,
        unlockConditions: true
      }
    });

    return NextResponse.json(challenges);
  } catch (error) {
    console.error('Error exporting challenges:', error);
    return NextResponse.json({ error: 'Error exporting challenges' }, { status: 500 });
  }
}

// Import challenges
export async function POST(req: Request) {
  if (!await isAdmin()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }

  try {
    const challenges = await req.json();

    // Validate that challenges is an array
    if (!Array.isArray(challenges)) {
      return NextResponse.json({ error: 'Invalid format - expected array of challenges' }, { status: 400 });
    }

    // Begin transaction to ensure all-or-nothing import
    const result = await prisma.$transaction(async (tx) => {
      const imported = await Promise.all(challenges.map(async (challenge) => {
        const { files, hints, flags, unlockConditions, ...challengeData } = challenge;
        
        return await tx.challenge.create({
          data: {
            ...challengeData,
            files: files ? {
              create: files.map((file: { name: string; path: string; size: number }) => ({
                name: file.name,
                path: file.path,
                size: file.size
              }))
            } : undefined,
            hints: hints ? {
              create: hints.map((hint: { content: string; cost: number }) => ({
                content: hint.content,
                cost: hint.cost
              }))
            } : undefined,
            flags: flags && challengeData.multipleFlags ? {
              create: flags.map((flag: { flag: string; points: number }) => ({
                flag: flag.flag,
                points: flag.points
              }))
            } : undefined,
            unlockConditions: unlockConditions ? {
              create: unlockConditions.map((cond: { type: string; requiredChallengeId?: string; timeThresholdSeconds?: number }) => ({
                type: cond.type,
                requiredChallengeId: cond.requiredChallengeId,
                timeThresholdSeconds: cond.timeThresholdSeconds
              }))
            } : undefined
          },
          include: {
            files: true,
            hints: true,
            flags: true,
            unlockConditions: true
          }
        });
      }));

      return imported;
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error importing challenges:', error);
    return NextResponse.json({ error: 'Error importing challenges' }, { status: 500 });
  }
}