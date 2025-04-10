'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SpaceScene from '@/components/SpaceScene';
import Leaderboard from '@/components/dashboard/Leaderboard';
import Announcements from '@/components/dashboard/Announcements';
import Activity from '@/components/dashboard/Activity';
import GameClock from '@/components/dashboard/GameClock';

interface Team {
  id: string;
  name: string;
  score: number;
}

interface Announcement {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

interface ActivityLog {
  id: string;
  type: string;
  description: string;
  createdAt: string;
  team?: Team;
}

interface GameConfig {
  startTime: string;
  endTime: string;
  isActive: boolean;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  // State for each section
  const [leaderboard, setLeaderboard] = useState<{
    teams: Team[];
    currentUserTeam: Team | null;
  }>({ teams: [], currentUserTeam: null });
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [activities, setActivities] = useState<ActivityLog[]>([]);
  const [gameConfig, setGameConfig] = useState<GameConfig | null>(null);
  const [timeLeft, setTimeLeft] = useState<string>('');
  
  // State for accordion sections
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(true);
  const [isAnnouncementsOpen, setIsAnnouncementsOpen] = useState(true);
  const [isActivityOpen, setIsActivityOpen] = useState(true);
  const [isGameClockOpen, setIsGameClockOpen] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [leaderboardRes, announcementsRes, activitiesRes, gameConfigRes] = await Promise.all([
          fetch('/api/leaderboard'),
          fetch('/api/announcements'),
          fetch('/api/activity'),
          fetch('/api/game-config'),
        ]);

        const [leaderboardData, announcementsData, activitiesData, gameConfigData] = await Promise.all([
          leaderboardRes.json(),
          announcementsRes.json(),
          activitiesRes.json(),
          gameConfigRes.json(),
        ]);

        setLeaderboard(leaderboardData);
        setAnnouncements(announcementsData);
        setActivities(activitiesData);
        setGameConfig(gameConfigData);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (gameConfig?.isActive) {
      const updateTimeLeft = () => {
        const endTime = new Date(gameConfig.endTime).getTime();
        const now = new Date().getTime();
        const timeLeftMs = endTime - now;

        if (timeLeftMs <= 0) {
          setTimeLeft('Game Over');
          return;
        }

        const hours = Math.floor(timeLeftMs / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeftMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeftMs % (1000 * 60)) / 1000);

        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      };

      updateTimeLeft();
      const interval = setInterval(updateTimeLeft, 1000);
      return () => clearInterval(interval);
    }
  }, [gameConfig]);

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative h-[calc(100vh-8rem)] p-6">
      <SpaceScene />
      <div className="relative grid grid-cols-3 gap-8 h-[calc(100vh-8rem)] pointer-events-none">
        {/* Top Left - Leaderboard */}
        <div className="col-span-1 pointer-events-auto">
          <Leaderboard
            teams={leaderboard.teams}
            currentUserTeam={leaderboard.currentUserTeam}
            isOpen={isLeaderboardOpen}
            setIsOpen={setIsLeaderboardOpen}
          />
        </div>

        {/* Top Right - Announcements */}
        <div className="col-span-1 col-start-3 pointer-events-auto">
          <Announcements
            announcements={announcements}
            isOpen={isAnnouncementsOpen}
            setIsOpen={setIsAnnouncementsOpen}
          />
        </div>

        {/* Bottom Left - Activity */}
        <div className="col-span-1 relative pointer-events-auto">
          <div className="absolute bottom-0 left-0 right-0">
            <Activity
              activities={activities}
              isOpen={isActivityOpen}
              setIsOpen={setIsActivityOpen}
            />
          </div>
        </div>

        {/* Bottom Right - Game Clock */}
        <div className="col-span-1 col-start-3 relative pointer-events-auto">
          <div className="absolute bottom-0 left-0 right-0">
            <GameClock
              timeLeft={timeLeft}
              gameConfig={gameConfig}
              isOpen={isGameClockOpen}
              setIsOpen={setIsGameClockOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 