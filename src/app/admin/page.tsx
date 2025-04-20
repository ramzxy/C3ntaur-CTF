'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import PageLayout from '@/components/layouts/PageLayout';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import TabButton from '@/components/common/TabButton';
import ChallengesTab from '@/components/admin/ChallengesTab';
import UsersTab from '@/components/admin/UsersTab';
import TeamsTab from '@/components/admin/TeamsTab';
import AnnouncementsTab from '@/components/admin/AnnouncementsTab';
import GameConfigurationTab from '@/components/admin/GameConfigurationTab';
import SiteConfigurationTab from '@/components/admin/SiteConfigurationTab';
import { Challenge, User, Team, Announcement, Tab } from '@/components/admin/types';

const TABS = [
  { id: 'challenges' as Tab, label: 'Challenges' },
  { id: 'users' as Tab, label: 'Users' },
  { id: 'teams' as Tab, label: 'Teams' },
  { id: 'announcements' as Tab, label: 'Announcements' },
  { id: 'siteconfig' as Tab, label: 'Site Configuration' },
  { id: 'configuration' as Tab, label: 'Game Configuration' },
] as const;

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
    return <LoadingSpinner />;
  }

  const TabContent = {
    challenges: <ChallengesTab challenges={challenges} fetchData={fetchData} />,
    users: <UsersTab users={users} teams={teams} fetchData={fetchData} />,
    teams: <TeamsTab teams={teams} fetchData={fetchData} />,
    announcements: <AnnouncementsTab announcements={announcements} fetchData={fetchData} />,
    siteconfig: <SiteConfigurationTab />,
    configuration: <GameConfigurationTab />
  };

  return (
    <PageLayout title="Admin Dashboard" maxWidth="6xl">
      <div className="mt-6">
        {/* Navigation Tabs - Horizontal scroll on mobile */}
        <div className="flex overflow-x-auto pb-2 gap-2 hide-scrollbar">
          {TABS.map(tab => (
            <TabButton
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </TabButton>
          ))}
        </div>

        {/* Content Area */}
        <div className="mt-6">
          {TabContent[activeTab]}
        </div>
      </div>
    </PageLayout>
  );
}