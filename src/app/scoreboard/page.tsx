'use client';

import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import * as GiIcons from 'react-icons/gi';
import { fetchScoreboardTeams, fetchTeamPointHistory, fetchGameConfig, type ScoreboardTeam, type PointHistory, type GameConfig } from '@/utils/api';
import PageLayout from '@/components/layouts/PageLayout';
import LoadingSpinner from '@/components/common/LoadingSpinner';

interface ProcessedPointHistory {
  timestamp: string;
  [key: string]: string | number;
}

export default function ScoreboardPage() {
  const [teams, setTeams] = useState<ScoreboardTeam[]>([]);
  const [pointHistories, setPointHistories] = useState<{ [key: string]: PointHistory[] }>({});
  const [, setGameConfig] = useState<GameConfig | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [teamsData, gameConfigData] = await Promise.all([
          fetchScoreboardTeams(),
          fetchGameConfig()
        ]);

        setTeams(teamsData);
        setGameConfig(gameConfigData);

        // Fetch point history for each team
        const historyPromises = teamsData.map(team => 
          fetchTeamPointHistory(team.id)
            .then(response => ({ teamId: team.id, history: response.items }))
            .catch(error => {
              console.error(`Failed to fetch point history for team ${team.id}:`, error);
              return { teamId: team.id, history: [] };
            })
        );

        const histories = await Promise.all(historyPromises);
        const historyMap = histories.reduce((acc, { teamId, history }) => {
          acc[teamId] = history;
          return acc;
        }, {} as { [key: string]: PointHistory[] });

        setPointHistories(historyMap);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Process data for the chart
  const processedData: ProcessedPointHistory[] = [];
  const allTimestamps = new Set<string>();

  // Filter teams that have score events
  const teamsWithScoreEvents = teams.filter(team => {
    const teamHistory = pointHistories[team.id] || [];
    return teamHistory.length > 0;
  });

  // Collect all unique timestamps from teams with score events
  teamsWithScoreEvents.forEach(team => {
    const history = pointHistories[team.id] || [];
    history.forEach(entry => {
      allTimestamps.add(entry.createdAt);
    });
  });

  // Create data points for each timestamp
  Array.from(allTimestamps).sort().forEach(timestamp => {
    const dataPoint: ProcessedPointHistory = {
      timestamp: format(new Date(timestamp), 'HH:mm:ss'),
    };

    teamsWithScoreEvents.forEach(team => {
      const teamHistory = pointHistories[team.id] || [];
      const lastEntry = teamHistory
        .filter(entry => entry.createdAt <= timestamp)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())[0];

      dataPoint[team.name] = lastEntry ? lastEntry.totalPoints : 0;
    });

    processedData.push(dataPoint);
  });

  // Filter teams with non-zero scores for standings
  const teamsWithScores = teams.filter(team => team.score > 0);

  if (isLoading) {
    return <LoadingSpinner size="lg" />;
  }

  const ChartView = () => (
    <div className="h-full bg-gray-900/50 border border-gray-700 rounded-lg">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-2xl font-semibold text-blue-400">Score Progression</h2>
      </div>
      <div className="p-6">
        <div className="h-[600px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={processedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="timestamp" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '0.375rem'
                }}
                labelStyle={{ color: '#9CA3AF' }}
              />
              <Legend wrapperStyle={{ color: '#9CA3AF' }} />
              {teamsWithScoreEvents.map(team => (
                <Line
                  key={team.id}
                  type="linear"
                  dataKey={team.name}
                  stroke={team.color}
                  strokeWidth={2}
                  dot={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  const StandingsView = () => (
    <div className="h-full bg-gray-900/50 border border-gray-700 rounded-lg shadow-none">
      <div className="p-6 border-b border-gray-700">
        <h2 className="text-2xl font-semibold text-blue-400">Current Standings</h2>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {teamsWithScores
            .sort((a, b) => b.score - a.score)
            .map((team, index) => (
              <div
                key={team.id}
                className="flex items-center justify-between p-2 border border-gray-700 bg-black/40 h-14"
                style={{ borderColor: team.color }}
              >
                {/* Rank */}
                <span className="text-xl font-bold font-mono text-gray-300 w-8 text-center select-none flex-shrink-0">
                  {index + 1}
                </span>
                {/* Icon and Team Name */}
                <div className="flex items-center flex-1 justify-center space-x-2 min-w-0">
                  {team.icon && (
                    <span className="text-2xl flex items-center" style={{ color: team.color }}>
                      {GiIcons[team.icon as keyof typeof GiIcons]
                        ? React.createElement(GiIcons[team.icon as keyof typeof GiIcons], { size: 28 })
                        : team.icon}
                    </span>
                  )}
                  <span
                    className="font-bold text-lg truncate max-w-[14rem]"
                    title={team.name}
                  >
                    {team.name}
                  </span>
                </div>
                {/* Score */}
                <span className="text-lg font-bold font-mono text-blue-400 w-16 text-right select-none">
                  {team.score}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout title="Scoreboard" maxWidth="8xl">
      {/* Mobile View */}
      <div className="md:hidden mt-6">
        <StandingsView />
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-4 gap-6 mt-6">
        <div className="col-span-3">
          <ChartView />
        </div>
        <div className="col-span-1">
          <StandingsView />
        </div>
      </div>
    </PageLayout>
  );
}