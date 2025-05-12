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
import { Team, PointHistory } from '@/types';

interface ChartData {
  teams: Team[];
  pointHistories: Record<string, PointHistory[]>;
  chartStart: string;
  chartEnd: string;
}

interface ScoreboardChartProps {
  chartData: ChartData;
}

export default function ScoreboardChart({ chartData }: ScoreboardChartProps) {
  const [hoveredTeam] = useState<string | null>(null);
  const { teams, pointHistories, chartStart, chartEnd } = chartData;

  // Calculate time buckets (e.g., every 1 hour)
  const timePoints = useMemo(() => {
    const start = new Date(chartStart);
    const end = new Date(chartEnd);
    const points: Date[] = [];
    const current = new Date(start);
    current.setMinutes(0, 0, 0); // round to hour
    while (current <= end) {
      points.push(new Date(current));
      current.setHours(current.getHours() + 1);
    }
    return points;
  }, [chartStart, chartEnd]);

  // Build chart data: for each time bucket, for each team, the latest totalPoints at or before that time
  const chartRows = useMemo(() => {
    if (!timePoints.length) return [];
    return timePoints.map((time) => {
      const row: Record<string, number | string> = {
        timestamp: time.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
      };
      teams.forEach((team) => {
        const history = pointHistories[team.id] || [];
        // Find the latest event at or before this time
        let latest = 0;
        for (let i = 0; i < history.length; i++) {
          if (new Date(history[i].createdAt) <= time) {
            latest = history[i].totalPoints;
            break;
          }
        }
        // If no event before this time, use 0
        row[team.id] = latest;
      });
      return row;
    });
  }, [teams, pointHistories, timePoints]);

  // Only show teams with at least one point history event
  const teamsWithHistory = useMemo(() => {
    return teams.filter(team => (pointHistories[team.id] && pointHistories[team.id].length > 0));
  }, [teams, pointHistories]);

  return (
    <div className="bg-gray-900/50 p-4 border border-gray-700 h-full">
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">Score History</h2>
      <div className="h-[500px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartRows}>
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
            {teamsWithHistory.map((team) => (
              <Line
                key={team.id}
                type="linear"
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