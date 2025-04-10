'use client';

import { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
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

interface ScoreboardChartProps {
  scores: Score[];
}

export default function ScoreboardChart({ scores }: ScoreboardChartProps) {
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null);

  // Process scores into chart data
  const chartData = useMemo(() => {
    const teamScores: { [key: string]: { [key: string]: number } } = {};
    const timestamps: Set<string> = new Set();

    // First pass: collect all timestamps and initialize team scores
    scores.forEach((score) => {
      const date = new Date(score.createdAt).toLocaleTimeString();
      timestamps.add(date);
      if (!teamScores[score.team.id]) {
        teamScores[score.team.id] = {};
      }
    });

    // Second pass: calculate cumulative scores
    const sortedScores = [...scores].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    const cumulativeScores: { [key: string]: number } = {};
    sortedScores.forEach((score) => {
      const date = new Date(score.createdAt).toLocaleTimeString();
      cumulativeScores[score.team.id] = (cumulativeScores[score.team.id] || 0) + score.points;
      teamScores[score.team.id][date] = cumulativeScores[score.team.id];
    });

    // Convert to chart data format
    return Array.from(timestamps).map((timestamp) => {
      const dataPoint: any = { timestamp };
      Object.entries(teamScores).forEach(([teamId, scores]) => {
        dataPoint[teamId] = scores[timestamp] || 0;
      });
      return dataPoint;
    });
  }, [scores]);

  const teams = useMemo(() => {
    const uniqueTeams = new Map<string, Score['team']>();
    scores.forEach((score) => {
      if (!uniqueTeams.has(score.team.id)) {
        uniqueTeams.set(score.team.id, score.team);
      }
    });
    return Array.from(uniqueTeams.values());
  }, [scores]);

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 h-[600px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
          <XAxis
            dataKey="timestamp"
            stroke="#ffffff80"
            tick={{ fill: '#ffffff80' }}
          />
          <YAxis stroke="#ffffff80" tick={{ fill: '#ffffff80' }} />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid #ffffff20',
              borderRadius: '0.5rem',
            }}
          />
          <Legend
            onMouseEnter={(data) => setHoveredTeam(data.dataKey)}
            onMouseLeave={() => setHoveredTeam(null)}
          />
          {teams.map((team) => (
            <Line
              key={team.id}
              type="monotone"
              dataKey={team.id}
              name={team.name}
              stroke={team.color}
              strokeWidth={hoveredTeam === team.id ? 3 : 2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4 flex flex-wrap gap-4">
        {teams.map((team) => (
          <div
            key={team.id}
            className="flex items-center gap-2"
            onMouseEnter={() => setHoveredTeam(team.id)}
            onMouseLeave={() => setHoveredTeam(null)}
          >
            <IconContext.Provider value={{ color: team.color, size: '1.5em' }}>
              <GiSpaceship />
            </IconContext.Provider>
            <span className="text-sm" style={{ color: team.color }}>
              {team.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
} 