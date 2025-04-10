'use client';

import { useMemo } from 'react';
import { IconContext } from 'react-icons';
import { GiSpaceship } from 'react-icons/gi';

interface Score {
  id: string;
  points: number;
  createdAt: string;
  team: {
    id: string;
    name: string;
    color: string;
    icon: string;
  };
}

interface LeaderboardProps {
  scores: Score[];
}

export default function Leaderboard({ scores }: LeaderboardProps) {
  const teamScores = useMemo(() => {
    const scoresByTeam = new Map<string, { team: Score['team']; total: number }>();

    scores.forEach((score) => {
      const existing = scoresByTeam.get(score.team.id);
      if (existing) {
        existing.total += score.points;
      } else {
        scoresByTeam.set(score.team.id, {
          team: score.team,
          total: score.points,
        });
      }
    });

    return Array.from(scoresByTeam.values()).sort((a, b) => b.total - a.total);
  }, [scores]);

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Current Standings</h2>
      <div className="space-y-4">
        {teamScores.map(({ team, total }, index) => (
          <div
            key={team.id}
            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold w-6">{index + 1}</span>
              <IconContext.Provider value={{ color: team.color, size: '1.5em' }}>
                <GiSpaceship />
              </IconContext.Provider>
              <span className="font-medium" style={{ color: team.color }}>
                {team.name}
              </span>
            </div>
            <span className="font-bold">{total} pts</span>
          </div>
        ))}
      </div>
    </div>
  );
} 