'use client';

import { useEffect, useState } from 'react';
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
  id: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  hasEndTime: boolean;
}

export default function Dashboard() {
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

  // Add window resize listener for mobile view
  useEffect(() => {
    const checkMobileView = () => {
      const isMobile = window.innerWidth < 1100;

      // If switching to mobile view, collapse all panels
      if (isMobile) {
        setIsLeaderboardOpen(false);
        setIsAnnouncementsOpen(false);
        setIsActivityOpen(false);
        setIsGameClockOpen(false);
      }
    };

    // Check initial state
    checkMobileView();

    // Add resize listener
    window.addEventListener('resize', checkMobileView);
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  useEffect(() => {
    const fetchAndUpdate = async () => {
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

        // Update time left in the same interval if game is active
        if (gameConfigData?.isActive && gameConfigData.hasEndTime) {
          const endTime = new Date(gameConfigData.endTime).getTime();
          const now = new Date().getTime();
          const timeLeftMs = endTime - now;

          if (timeLeftMs <= 0) {
            setTimeLeft('Game Over');
          } else {
            const hours = Math.floor(timeLeftMs / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeftMs % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeftMs % (1000 * 60)) / 1000);
            setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
          }
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchAndUpdate(); // Initial call
    const interval = setInterval(fetchAndUpdate, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Desktop Layout - Grid */}
      <div className="relative hidden xl:grid grid-cols-4 gap-0 h-full pointer-events-none p-6">
        <SpaceScene isMobile={false} />
        {/* Top Left - Leaderboard */}
        <div className="col-span-1 pointer-events-auto w-11/12 z-10">
          <Leaderboard
            teams={leaderboard.teams}
            currentUserTeam={leaderboard.currentUserTeam}
            isOpen={isLeaderboardOpen}
            setIsOpen={setIsLeaderboardOpen}
            isMobile={false}
          />
        </div>

        {/* Top Right - Announcements */}
        <div className="col-span-1 col-start-4 pointer-events-auto w-3/4 ml-auto z-10">
          <Announcements
            announcements={announcements}
            isOpen={isAnnouncementsOpen}
            setIsOpen={setIsAnnouncementsOpen}
            isMobile={false}
          />
        </div>

        {/* Bottom Left - Activity */}
        <div className="col-span-1 relative pointer-events-auto z-10">
          <div className="absolute bottom-0 left-0 right-0">
            <Activity
              activities={activities}
              isOpen={isActivityOpen}
              setIsOpen={setIsActivityOpen}
              isMobile={false}
            />
          </div>
        </div>

        {/* Bottom Right - Game Clock */}
        <div className="col-span-1 col-start-4 relative pointer-events-auto z-10">
          <div className="absolute bottom-0 left-0 right-0">
            <GameClock
              timeLeft={timeLeft}
              gameConfig={gameConfig}
              isOpen={isGameClockOpen}
              setIsOpen={setIsGameClockOpen}
              isMobile={false}
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout - Stack */}
      <div className="xl:hidden flex flex-col h-screen">
        <div className="flex-none h-[60vh]">
          <SpaceScene isMobile={true} />
        </div>
        <div className="flex-1 overflow-auto bg-black">
          <div className="divide-y divide-gray-700">
            <Leaderboard
              teams={leaderboard.teams}
              currentUserTeam={leaderboard.currentUserTeam}
              isOpen={isLeaderboardOpen}
              setIsOpen={setIsLeaderboardOpen}
              isMobile={true}
            />
            <Announcements
              announcements={announcements}
              isOpen={isAnnouncementsOpen}
              setIsOpen={setIsAnnouncementsOpen}
              isMobile={true}
            />
            <Activity
              activities={activities}
              isOpen={isActivityOpen}
              setIsOpen={setIsActivityOpen}
              isMobile={true}
            />
            <GameClock
              timeLeft={timeLeft}
              gameConfig={gameConfig}
              isOpen={isGameClockOpen}
              setIsOpen={setIsGameClockOpen}
              isMobile={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}