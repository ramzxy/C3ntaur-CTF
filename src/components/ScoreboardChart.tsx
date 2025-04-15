'use client';

import { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import * as GiIcons from 'react-icons/gi';

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

interface GameConfig {
  startTime: string;
  endTime: string | null;
  isActive: boolean;
}

interface ScoreboardChartProps {
  scores: Score[];
  gameConfig: GameConfig;
}

export default function ScoreboardChart({ scores, gameConfig }: ScoreboardChartProps) {
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null);

  // Process scores into chart data
  const chartData = useMemo(() => {
    const teamScores: { [key: string]: { [key: string]: number } } = {};
    
    // Use game start time
    const startDate = new Date(gameConfig.startTime);
    startDate.setHours(startDate.getHours(), 0, 0, 0); // Round to hour

    // Generate hour markers - if game has end time, use that to determine duration
    const endDate = gameConfig.endTime 
      ? new Date(gameConfig.endTime) 
      : new Date(startDate.getTime() + 24 * 60 * 60 * 1000); // 24 hours from start if no end time

    const timePoints: Date[] = [];
    let currentTime = new Date(startDate);
    
    while (currentTime <= endDate) {
      timePoints.push(new Date(currentTime));
      currentTime.setHours(currentTime.getHours() + 1);
    }

    // Initialize all teams with 0 points at all timestamps
    scores.forEach((score) => {
      if (!teamScores[score.team.id]) {
        teamScores[score.team.id] = {};
        timePoints.forEach(time => {
          teamScores[score.team.id][time.toISOString()] = 0;
        });
      }
    });

    // Calculate running totals for each team
    const sortedScores = [...scores].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    const runningTotals: { [key: string]: number } = {};
    sortedScores.forEach((score) => {
      const scoreTime = new Date(score.createdAt);
      const teamId = score.team.id;
      
      // Initialize running total for team if not exists
      if (runningTotals[teamId] === undefined) {
        runningTotals[teamId] = 0;
      }

      // Update running total
      runningTotals[teamId] += score.points;
      
      // Update the score for this hour and all following hours
      timePoints.forEach(time => {
        if (scoreTime <= time) {
          teamScores[teamId][time.toISOString()] = runningTotals[teamId];
        }
      });
    });

    // Convert to chart data format
    return timePoints.map((time) => {
      const dataPoint: any = { 
        timestamp: time.toLocaleTimeString([], { 
          hour: '2-digit', 
          minute: '2-digit',
          hour12: false 
        })
      };
      Object.entries(teamScores).forEach(([teamId, scores]) => {
        dataPoint[teamId] = scores[time.toISOString()] || 0;
      });
      return dataPoint;
    });
  }, [scores, gameConfig]);

  const teams = useMemo(() => {
    const uniqueTeams = new Map<string, Score['team']>();
    scores.forEach((score) => {
      if (!uniqueTeams.has(score.team.id)) {
        uniqueTeams.set(score.team.id, score.team);
      }
    });
    return Array.from(uniqueTeams.values());
  }, [scores]);

  const getTeamIcon = (iconName?: string, color?: string) => {
    if (!iconName) return null;
    const IconComponent = (GiIcons as any)[iconName];
    return IconComponent ? (
      <IconComponent className="w-7 h-7" style={{ color: color || '#fff' }} />
    ) : null;
  };

  return (
    <div className="bg-gray-900/50 p-4 border border-gray-700 h-full">
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">Score History</h2>
      <div className="h-[500px]">
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
      </div>
    </div>
  );
}