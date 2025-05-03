import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { hintId } = await req.json();

    // Get the hint and team
    const [hint, team] = await Promise.all([
      prisma.hint.findUnique({
        where: { id: hintId },
        include: {
          challenge: {
            select: { title: true }
          }
        }
      }),
      prisma.team.findUnique({
        where: { id: session.user.teamId ?? "" },
      }),
    ]);

    if (!hint || !team) {
      return NextResponse.json(
        { error: 'Hint or team not found' },
        { status: 404 }
      );
    }

    // Check if hint is already purchased
    const existingPurchase = await prisma.teamHint.findUnique({
      where: {
        teamId_hintId: {
          teamId: team.id,
          hintId: hint.id,
        },
      },
    });

    if (existingPurchase) {
      return NextResponse.json(
        { error: 'Hint already purchased' },
        { status: 400 }
      );
    }

    // Check if team has enough points
    if (team.score < hint.cost) {
      return NextResponse.json(
        { error: 'Not enough points' },
        { status: 400 }
      );
    }

    // Start a transaction to ensure atomicity
    const result = await prisma.$transaction(async (tx) => {
      // Create the team hint record
      const teamHint = await tx.teamHint.create({
        data: {
          teamId: team.id,
          hintId: hint.id,
        },
      });

      // Deduct points from team if hint has a cost
      if (hint.cost > 0) {
        const updatedTeam = await tx.team.update({
          where: { id: team.id },
          data: {
            score: {
              decrement: hint.cost,
            },
          },
        });

        // Record point history
        await tx.teamPointHistory.create({
          data: {
            teamId: team.id,
            points: -hint.cost, // Negative points for hint purchase
            totalPoints: updatedTeam.score,
            reason: 'HINT_PURCHASE',
            metadata: JSON.stringify({
              hintId: hint.id,
              challengeTitle: hint.challenge.title,
              cost: hint.cost
            })
          }
        });

        // Record activity
        await tx.activityLog.create({
          data: {
            type: 'HINT_PURCHASE',
            description: `Team purchased a hint for challenge "${hint.challenge.title}" (-${hint.cost} points)`,
            teamId: team.id,
          },
        });
      }

      return teamHint;
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error purchasing hint:', error);
    return NextResponse.json(
      { error: 'Error purchasing hint' },
      { status: 500 }
    );
  }
} 