'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import ChallengesTab from '@/components/admin/ChallengesTab';
import UsersTab from '@/components/admin/UsersTab';
import TeamsTab from '@/components/admin/TeamsTab';
import AnnouncementsTab from '@/components/admin/AnnouncementsTab';
import GameConfigurationTab from '@/components/admin/GameConfigurationTab';
import SiteConfigurationTab from '@/components/admin/SiteConfigurationTab';
import { Challenge, User, Team, Announcement, Tab } from '@/components/admin/types';

export default function AdminDashboard() {
  const { status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('challenges');
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
    fetchData();
  }, [status, router]);

  const fetchData = async () => {
    try {
      const [challengesRes, usersRes, teamsRes, announcementsRes] = await Promise.all([
        fetch('/api/admin/challenges'),
        fetch('/api/admin/users'),
        fetch('/api/admin/teams'),
        fetch('/api/announcements')
      ]);

      const [challengesData, usersData, teamsData, announcementsData] = await Promise.all([
        challengesRes.json(),
        usersRes.json(),
        teamsRes.json(),
        announcementsRes.json()
      ]);

      setChallenges(challengesData);
      setUsers(usersData);
      setTeams(teamsData);
      setAnnouncements(announcementsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <div className="w-full max-w-6xl overflow-hidden">
          <div className="h-[80vh] overflow-y-auto">
            <h1 className="text-4xl font-bold mb-4 float-start uppercase">Admin Dashboard</h1>
            <div className="border border-gray-400 w-full h-5 flex items-center justify-center relative clear-both">
              <div className="absolute inset-x-0 border-t-2 border-gray-400 w-full"></div>
            </div>

            <div className="mt-6">
              {/* Navigation Tabs - Horizontal scroll on mobile */}
              <div className="flex overflow-x-auto pb-2 gap-2 hide-scrollbar">
                <button
                  onClick={() => setActiveTab('challenges')}
                  className={`px-4 py-2 whitespace-nowrap transition-colors rounded ${
                    activeTab === 'challenges'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Challenges
                </button>
                <button
                  onClick={() => setActiveTab('users')}
                  className={`px-4 py-2 whitespace-nowrap transition-colors rounded ${
                    activeTab === 'users'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Users
                </button>
                <button
                  onClick={() => setActiveTab('teams')}
                  className={`px-4 py-2 whitespace-nowrap transition-colors rounded ${
                    activeTab === 'teams'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Teams
                </button>
                <button
                  onClick={() => setActiveTab('announcements')}
                  className={`px-4 py-2 whitespace-nowrap transition-colors rounded ${
                    activeTab === 'announcements'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Announcements
                </button>
                <button
                  onClick={() => setActiveTab('siteconfig')}
                  className={`px-4 py-2 whitespace-nowrap transition-colors rounded ${
                    activeTab === 'siteconfig'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Site Configuration
                </button>
                <button
                  onClick={() => setActiveTab('configuration')}
                  className={`px-4 py-2 whitespace-nowrap transition-colors rounded ${
                    activeTab === 'configuration'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Game Configuration
                </button>
              </div>

              {/* Content Area */}
              <div className="mt-6 bg-black/50 rounded-lg p-4">
                {activeTab === 'challenges' && (
                  <ChallengesTab 
                    challenges={challenges}
                    fetchData={fetchData}
                  />
                )}
                {activeTab === 'users' && (
                  <UsersTab 
                    users={users}
                    teams={teams}
                    fetchData={fetchData}
                  />
                )}
                {activeTab === 'teams' && (
                  <TeamsTab 
                    teams={teams}
                    fetchData={fetchData}
                  />
                )}
                {activeTab === 'announcements' && (
                  <AnnouncementsTab 
                    announcements={announcements}
                    fetchData={fetchData}
                  />
                )}
                {activeTab === 'siteconfig' && (
                  <SiteConfigurationTab />
                )}
                {activeTab === 'configuration' && (
                  <GameConfigurationTab />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}