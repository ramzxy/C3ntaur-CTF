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
import SubmissionsTab from '@/components/admin/SubmissionsTab';
import ActivityLogTab from '@/components/admin/ActivityLogTab';
import GameConfigurationTab from '@/components/admin/GameConfigurationTab';
import SiteConfigurationTab from '@/components/admin/SiteConfigurationTab';
import MetricsTab from '@/components/admin/MetricsTab';
import { Tab } from '@/types';

const TABS = [
  { id: 'metrics' as Tab, label: 'Metrics' },
  { id: 'challenges' as Tab, label: 'Challenges' },
  { id: 'users' as Tab, label: 'Users' },
  { id: 'teams' as Tab, label: 'Teams' },
  { id: 'submissions' as Tab, label: 'Submissions' },
  { id: 'announcements' as Tab, label: 'Announcements' },
  { id: 'activity' as Tab, label: 'Activity' },
  { id: 'siteconfig' as Tab, label: 'Site Config' },
  { id: 'configuration' as Tab, label: 'Game Config' },
] as const;

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('challenges');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    } else if (status === 'authenticated' && !session?.user?.isAdmin) {
      router.push('/dashboard');
    }
  }, [status, session, router]);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (!session?.user?.isAdmin) {
    return (
      <PageLayout title="Unauthorized" maxWidth="6xl">
        <div className="mt-6 text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Access Denied</h2>
          <p className="text-gray-300">You do not have permission to access this page.</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Admin Dashboard" maxWidth="7xl">
      <div className="mt-8">
        {/* Navigation Tabs - Horizontal scroll on mobile */}
        <div className="relative mb-8">
          <div className="flex overflow-x-auto pb-3 gap-3 hide-scrollbar snap-x snap-mandatory scroll-smooth">
            {TABS.map(tab => (
              <div key={tab.id} className="snap-start">
                <TabButton
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </TabButton>
              </div>
            ))}
          </div>
          {/* Decorative line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </div>

        {/* Content Area - Conditionally render the active tab */}
        <div className="bg-gray-900/30 border border-gray-800/50 p-6 backdrop-blur-sm">
          {activeTab === 'challenges' && <ChallengesTab />}
          {activeTab === 'metrics' && <MetricsTab />}
          {activeTab === 'users' && <UsersTab />}
          {activeTab === 'teams' && <TeamsTab />}
          {activeTab === 'submissions' && <SubmissionsTab />}
          {activeTab === 'announcements' && <AnnouncementsTab />}
          {activeTab === 'activity' && <ActivityLogTab />}
          {activeTab === 'siteconfig' && <SiteConfigurationTab />}
          {activeTab === 'configuration' && <GameConfigurationTab />}
        </div>
      </div>
    </PageLayout>
  );
}