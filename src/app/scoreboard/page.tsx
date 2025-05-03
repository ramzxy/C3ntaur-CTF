'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import PageLayout from '@/components/layouts/PageLayout';

const ScoreboardChart = dynamic(() => import('@/components/ScoreboardChart'), {
  ssr: false,
});

const ScoreboardStandings = dynamic(() => import('@/components/ScoreboardStandings'), {
  ssr: false,
});

interface Team {
  id: string;
  name: string;
  color: string;
  icon: string;
  score: number;
}

interface PointHistory {
  id: string;
  points: number;
  totalPoints: number;
  reason: string;
  metadata: string | null;
  createdAt: string;
}

interface GameConfig {
  startTime: string;
  endTime: string | null;
  isActive: boolean;
}

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

export default function ScoreboardPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [pointHistories, setPointHistories] = useState<Record<string, PointHistory[]>>({});
  const [gameConfig, setGameConfig] = useState<GameConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [standingsScores, setStandingsScores] = useState<Score[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch all teams (admin endpoint)
        const [teamsRes, configRes] = await Promise.all([
          fetch('/api/admin/teams'),
          fetch('/api/game-config')
        ]);
        if (!teamsRes.ok) throw new Error('Failed to fetch teams');
        if (!configRes.ok) throw new Error('Failed to fetch game configuration');
        const [teamsData, configData] = await Promise.all([
          teamsRes.json(),
          configRes.json()
        ]);
        setTeams(teamsData);
        setGameConfig(configData);

        // Fetch point history for each team
        const histories: Record<string, PointHistory[]> = {};
        await Promise.all(
          teamsData.map(async (team: Team) => {
            const res = await fetch(`/api/teams/${team.id}/points/history?limit=1000`);
            if (res.ok) {
              const data = await res.json();
              histories[team.id] = data.items;
            } else {
              histories[team.id] = [];
            }
          })
        );
        setPointHistories(histories);

        // Prepare standings scores
        const now = new Date().toISOString();
        const scores: Score[] = teamsData.map((team: Team) => ({
          id: team.id,
          points: team.score,
          createdAt: now,
          team: {
            id: team.id,
            name: team.name,
            color: team.color,
            icon: team.icon,
          },
        }));
        setStandingsScores(scores);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !gameConfig) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  // Find earliest and latest event for chart timeframe
  let allEvents: PointHistory[] = [];
  Object.values(pointHistories).forEach(arr => { allEvents = allEvents.concat(arr); });
  const sortedEvents = allEvents.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  const chartStart = sortedEvents[0]?.createdAt || gameConfig.startTime;
  const chartEnd = sortedEvents[sortedEvents.length - 1]?.createdAt || gameConfig.endTime || new Date().toISOString();

  // Transform data for ScoreboardChart
  const chartData = { teams, pointHistories, chartStart, chartEnd };

  return (
    <PageLayout title="Scoreboard" maxWidth="7xl">
      <div className="prose prose-invert max-w-none mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
          <div className="lg:col-span-3 lg:block hidden">
            <ScoreboardChart chartData={chartData} gameConfig={gameConfig} />
          </div>
          <div className="lg:col-span-1">
            <ScoreboardStandings scores={standingsScores} />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}