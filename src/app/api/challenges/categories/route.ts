import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

interface ChallengeFile {
  id: string;
  name: string;
  path: string;
  size: number;
  challengeId: string;
}

interface Challenge {
  id: string;
  category: string;
  title: string;
  description: string;
  points: number;
  difficulty: string;
  isLocked: boolean;
  isActive: boolean;
  files: ChallengeFile[];
  isSolved: boolean;
  solvedBy: Array<{
    teamId: string;
    teamColor: string;
  }>;
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    
    // Get all challenges
    const challenges = await prisma.challenge.findMany({
      include: {
        files: true,
        submissions: {
          where: {
            isCorrect: true
          },
          select: {
            teamId: true,
            team: {
              select: {
                color: true
              }
            }
          }
        }
      }
    });

    // Get solved challenges for the current team if authenticated
    const solvedChallengeIds = new Set();
    if (session?.user?.teamId) {
      const solvedChallenges = await prisma.submission.findMany({
        where: {
          teamId: session.user.teamId,
          isCorrect: true,
        },
        select: {
          challengeId: true,
        },
      });
      solvedChallenges.forEach(sub => solvedChallengeIds.add(sub.challengeId));
    }

    // Group challenges by category
    const challengesByCategory = challenges.reduce((acc, challenge) => {
      if (!acc[challenge.category]) {
        acc[challenge.category] = [];
      }
      acc[challenge.category].push({
        id: challenge.id,
        title: challenge.title,
        description: challenge.description,
        points: challenge.points,
        category: challenge.category,
        difficulty: challenge.difficulty,
        isActive: challenge.isActive,
        isLocked: challenge.isLocked,
        files: challenge.files,
        isSolved: solvedChallengeIds.has(challenge.id),
        solvedBy: challenge.submissions.map(sub => ({
          teamId: sub.teamId,
          teamColor: sub.team.color
        }))
      });
      return acc;
    }, {} as Record<string, Challenge[]>);

    // Get unique categories
    const categories = Object.keys(challengesByCategory);

    return NextResponse.json({
      categories,
      challengesByCategory
    });
  } catch (error) {
    console.error('Error fetching challenges by category:', error);
    return NextResponse.json(
      { error: 'Error fetching challenges by category' },
      { status: 500 }
    );
  }
}