'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

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

  const AccordionSection = ({ 
    title, 
    isOpen, 
    setIsOpen, 
    children 
  }: { 
    title: string; 
    isOpen: boolean; 
    setIsOpen: (open: boolean) => void; 
    children: React.ReactNode;
  }) => (
    <div className="bg-transparent border-2 border-white p-4">
      <button
        className="flex items-center justify-between w-full text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5" />
        ) : (
          <ChevronDownIcon className="h-5 w-5" />
        )}
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );

  return (
    <div className="h-[calc(100vh-8rem)] p-6">
      <div className="grid grid-cols-3 gap-4 h-[calc(100vh-8rem)]">
        {/* Top Left - Leaderboard */}
        <div className="col-span-1">
          <AccordionSection
            title="Leaderboard"
            isOpen={isLeaderboardOpen}
            setIsOpen={setIsLeaderboardOpen}
          >
            <div className="space-y-2">
              {leaderboard.currentUserTeam && (
                <div className="border-1 border-white p-3 ">
                  <div className="flex justify-between">
                    <span className="font-bold text-white">Your Team</span>
                    <span className="text-white">{leaderboard.currentUserTeam.score} pts</span>
                  </div>
                  <div className="text-white">{leaderboard.currentUserTeam.name}</div>
                </div>
              )}
              {leaderboard.teams.map((team, index) => (
                <div key={team.id} className="border-2 border-white p-3 ">
                  <div className="flex justify-between">
                    <span className="text-white">#{index + 1} {team.name}</span>
                    <span className="text-white">{team.score} pts</span>
                  </div>
                </div>
              ))}
            </div>
          </AccordionSection>
        </div>

        {/* Top Right - Announcements */}
        <div className="col-span-1 col-start-3">
          <AccordionSection
            title="Announcements"
            isOpen={isAnnouncementsOpen}
            setIsOpen={setIsAnnouncementsOpen}
          >
            <div className="space-y-2">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="border-2 border-white p-3 ">
                  <h4 className="text-white font-semibold">{announcement.title}</h4>
                  <p className="text-white mt-1">{announcement.content}</p>
                  <p className="text-white text-sm mt-2">
                    {new Date(announcement.createdAt).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </AccordionSection>
        </div>

        {/* Bottom Left - Activity */}
        <div className="col-span-1 relative">
          <div className="absolute bottom-0 left-0 right-0">
            <AccordionSection
              title="Activity"
              isOpen={isActivityOpen}
              setIsOpen={setIsActivityOpen}
            >
              <div className="space-y-2 max-h-[50vh] overflow-y-auto">
                {activities.map((activity) => (
                  <div key={activity.id} className="border-2 border-white p-3">
                    <div className="flex justify-between">
                      <span className="text-white">{activity.description}</span>
                      {activity.team && (
                        <span className="text-white">{activity.team.name}</span>
                      )}
                    </div>
                    <p className="text-white text-sm mt-1">
                      {new Date(activity.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </AccordionSection>
          </div>
        </div>

        {/* Bottom Right - Game Clock */}
        <div className="col-span-1 col-start-3 relative">
          <div className="absolute bottom-0 left-0 right-0">
            <AccordionSection
              title="Game Clock"
              isOpen={isGameClockOpen}
              setIsOpen={setIsGameClockOpen}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{timeLeft}</div>
                {gameConfig && (
                  <div className="text-white">
                    <div>Start: {new Date(gameConfig.startTime).toLocaleString()}</div>
                    <div>End: {new Date(gameConfig.endTime).toLocaleString()}</div>
                  </div>
                )}
              </div>
            </AccordionSection>
          </div>
        </div>
      </div>
    </div>
  );
} 