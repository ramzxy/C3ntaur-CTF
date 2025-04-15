'use client';

import { useMemo } from 'react';
import * as GiIcons from 'react-icons/gi';
import { IconType } from 'react-icons';

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

interface ScoreboardStandingsProps {
  scores: Score[];
}

export default function ScoreboardStandings({ scores }: ScoreboardStandingsProps) {
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

  const getTeamIcon = (iconName?: string, color?: string) => {
    if (!iconName) return null;
    const IconComponent: IconType | undefined = (GiIcons as Record<string, IconType>)[iconName];
    return IconComponent ? (
      <IconComponent
        className="w-7 h-7"
        style={{ color: color || '#fff' }}
      />
    ) : null;
  };

  return (
    <div className="bg-gray-900/50 p-4 border border-gray-700 h-full">
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">Current Standings</h2>
      <div className="space-y-3">
        {teamScores.map(({ team, total }, index) => (
          <div
            key={team.id}
            className="flex items-center justify-between p-3 rounded bg-black/30 hover:bg-black/50 transition-colors border border-gray-800"
          >
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold w-6 text-gray-400">{index + 1}</span>
              {getTeamIcon(team.icon, team.color)}
              <span className="font-medium" style={{ color: team.color }}>
                {team.name}
              </span>
            </div>
            <span className="font-bold text-blue-400">{total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}