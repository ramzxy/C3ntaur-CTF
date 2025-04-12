'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import ChallengesTab from '@/components/admin/ChallengesTab';
import UsersTab from '@/components/admin/UsersTab';
import TeamsTab from '@/components/admin/TeamsTab';
import AnnouncementsTab from '@/components/admin/AnnouncementsTab';
import ConfigurationTab from '@/components/admin/ConfigurationTab';
import { Challenge, User, Team, Announcement, SiteConfig, Tab } from '@/components/admin/types';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('challenges');
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [siteConfig, setSiteConfig] = useState<SiteConfig>({
    id: '',
    siteTitle: 'Orbital CTF',
    headerText: 'Welcome to Orbital CTF'
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
    fetchData();
    fetchConfig();
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

  const fetchConfig = async () => {
    try {
      const response = await fetch('/api/config');
      const config = await response.json();
      if (config) {
        setSiteConfig(config);
      }
    } catch (error) {
      console.error('Error fetching site config:', error);
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
    <div className="min-h-screen text-white flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
          
          <div className="flex flex-wrap space-x-2 mb-6">
            <button
              onClick={() => setActiveTab('challenges')}
              className={`px-4 py-2 mb-2 transition-colors ${
                activeTab === 'challenges'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Challenges
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`px-4 py-2 mb-2 transition-colors ${
                activeTab === 'users'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Users
            </button>
            <button
              onClick={() => setActiveTab('teams')}
              className={`px-4 py-2 mb-2 transition-colors ${
                activeTab === 'teams'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Teams
            </button>
            <button
              onClick={() => setActiveTab('announcements')}
              className={`px-4 py-2 mb-2 transition-colors ${
                activeTab === 'announcements'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Announcements
            </button>
            <button
              onClick={() => setActiveTab('configuration')}
              className={`px-4 py-2 mb-2 transition-colors ${
                activeTab === 'configuration'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Configuration
            </button>
          </div>

          <div className="max-h-[60vh] min-h-[60vh] overflow-y-auto">
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

            {activeTab === 'configuration' && (
              <ConfigurationTab 
                siteConfig={siteConfig}
                fetchConfig={fetchConfig}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}