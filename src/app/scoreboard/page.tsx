'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Righteous } from 'next/font/google';

const righteous = Righteous({weight: '400', subsets: ['latin']});

const ScoreboardChart = dynamic(() => import('@/components/ScoreboardChart'), {
  ssr: false,
});

const ScoreboardStandings = dynamic(() => import('@/components/ScoreboardStandings'), {
  ssr: false,
});

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

export default function ScoreboardPage() {
  const [scores, setScores] = useState<Score[]>([]);
  const [gameConfig, setGameConfig] = useState<GameConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [scoresRes, configRes] = await Promise.all([
          fetch('/api/scores'),
          fetch('/api/game-config')
        ]);

        if (!scoresRes.ok) throw new Error('Failed to fetch scores');
        if (!configRes.ok) throw new Error('Failed to fetch game configuration');

        const [scoresData, configData] = await Promise.all([
          scoresRes.json(),
          configRes.json()
        ]);

        setScores(scoresData);
        setGameConfig(configData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading || !gameConfig) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <div className="w-full max-w-7xl overflow-hidden">
          <div className="h-[80vh] overflow-y-auto">
            <h1 className={`text-5xl font-bold mb-4 float-start uppercase ${righteous.className}`}>Scoreboard</h1>
            <div className="border border-gray-400 w-full h-5 flex items-center justify-center relative clear-both">
              <div className="absolute inset-x-0 border-t-2 border-gray-400 w-full"></div>
            </div>

            <div className="prose prose-invert max-w-none mb-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
                <div className="lg:col-span-3 lg:block hidden">
                  <ScoreboardChart scores={scores} gameConfig={gameConfig} />
                </div>
                <div className="lg:col-span-1">
                  <ScoreboardStandings scores={scores} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}