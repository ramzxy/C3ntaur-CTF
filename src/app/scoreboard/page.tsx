'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const ScoreboardChart = dynamic(() => import('@/components/ScoreboardChart'), {
  ssr: false,
});

const Leaderboard = dynamic(() => import('@/components/Leaderboard'), {
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

export default function ScoreboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [scores, setScores] = useState<Score[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
      return;
    }

    const fetchScores = async () => {
      try {
        const response = await fetch('/api/scores');
        if (!response.ok) throw new Error('Failed to fetch scores');
        const data = await response.json();
        setScores(data);
      } catch (error) {
        console.error('Error fetching scores:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchScores();
  }, [status, router]);

  if (loading) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">SCOREBOARD</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <ScoreboardChart scores={scores} />
          </div>
          <div className="lg:col-span-1">
            <Leaderboard scores={scores} />
          </div>
        </div>
      </div>
    </div>
  );
} 