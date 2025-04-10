'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { PlusIcon } from '@heroicons/react/24/outline';

interface Challenge {
  id: string;
  title: string;
  description: string;
  category: string;
  points: number;
  flag: string;
  difficulty: string;
  isActive: boolean;
  isLocked: boolean;
  files: ChallengeFile[];
  hints: Hint[];
}

interface ChallengeFile {
  id: string;
  name: string;
  path: string;
  size: number;
  createdAt: string;
  updatedAt: string;
}

interface User {
  id: string;
  alias: string;
  name: string;
  isAdmin: boolean;
  teamId: string | null;
  isTeamLeader: boolean;
}

interface Team {
  id: string;
  name: string;
  code: string;
  score: number;
  members: User[];
}

interface Announcement {
  id: string;
  title: string;
  content: string;
  isActive: boolean;
  createdAt: string;
}

interface Hint {
  id: string;
  content: string;
  cost: number;
  challengeId: string;
  createdAt: string;
  updatedAt: string;
}

interface SiteConfig {
  id: string;
  siteTitle: string;
  headerText: string;
}

type Tab = 'challenges' | 'users' | 'teams' | 'announcements' | 'configuration';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('challenges');
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingChallenge, setEditingChallenge] = useState<Challenge | null>(null);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [teamToDelete, setTeamToDelete] = useState<Team | null>(null);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    content: '',
    isActive: true
  });
  const [newChallenge, setNewChallenge] = useState({
    title: '',
    description: '',
    category: '',
    points: 0,
    flag: '',
    difficulty: 'easy',
    isLocked: false,
    files: [] as ChallengeFile[],
    hints: [] as Hint[]
  });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/challenges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newChallenge),
      });

      if (response.ok) {
        setNewChallenge({
          title: '',
          description: '',
          category: '',
          points: 0,
          flag: '',
          difficulty: 'easy',
          isLocked: false,
          files: [],
          hints: []
        });
        setIsModalOpen(false);
        fetchData();
      }
    } catch (error) {
      console.error('Error creating challenge:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch('/api/admin/challenges', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Error deleting challenge:', error);
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      });
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleCreateAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/announcements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAnnouncement),
      });
      setNewAnnouncement({ title: '', content: '', isActive: true });
      fetchData();
    } catch (error) {
      console.error('Error creating announcement:', error);
    }
  };

  const handleDeleteAnnouncement = async (id: string) => {
    try {
      await fetch(`/api/announcements/${id}`, {
        method: 'DELETE',
      });
      fetchData();
    } catch (error) {
      console.error('Error deleting announcement:', error);
    }
  };

  const handleToggleAnnouncement = async (id: string, isActive: boolean) => {
    try {
      await fetch(`/api/announcements/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isActive: !isActive }),
      });
      fetchData();
    } catch (error) {
      console.error('Error toggling announcement:', error);
    }
  };

  const handleEdit = (challenge: Challenge) => {
    setEditingChallenge(challenge);
    setIsEditModalOpen(true);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingChallenge) return;

    try {
      const response = await fetch('/api/admin/challenges', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...editingChallenge,
          files: editingChallenge.files.map(file => ({
            name: file.name,
            path: file.path,
            size: file.size
          })),
          hints: editingChallenge.hints.map(hint => ({
            content: hint.content,
            cost: hint.cost,
            challengeId: hint.challengeId,
            id: hint.id,
            createdAt: hint.createdAt,
            updatedAt: hint.updatedAt
          }))
        }),
      });

      if (response.ok) {
        setIsEditModalOpen(false);
        setEditingChallenge(null);
        fetchData();
      }
    } catch (error) {
      console.error('Error updating challenge:', error);
    }
  };

  const handleDeleteTeam = async (id: string) => {
    try {
      const response = await fetch('/api/admin/teams', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setTeams(teams.filter(team => team.id !== id));
        setTeamToDelete(null);
      }
    } catch (error) {
      console.error('Error deleting team:', error);
    }
  };

  const handleConfigUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/config', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(siteConfig),
      });

      if (response.ok) {
        fetchConfig();
      }
    } catch (error) {
      console.error('Error updating site config:', error);
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('challenges')}
              className={`px-4 py-2 ${
                activeTab === 'challenges'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Challenges
            </button>
            <button
              onClick={() => setActiveTab('users')}
              className={`px-4 py-2 ${
                activeTab === 'users'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Users
            </button>
            <button
              onClick={() => setActiveTab('teams')}
              className={`px-4 py-2 ${
                activeTab === 'teams'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Teams
            </button>
            <button
              onClick={() => setActiveTab('announcements')}
              className={`px-4 py-2 ${
                activeTab === 'announcements'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Announcements
            </button>
            <button
              onClick={() => setActiveTab('configuration')}
              className={`px-4 py-2 ${
                activeTab === 'configuration'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              Configuration
            </button>
          </div>

          {activeTab === 'announcements' && (
            <div className=" p-6">
              <div className="mb-6">
                <h2 className="text-lg font-medium mb-4">Create New Announcement</h2>
                <form onSubmit={handleCreateAnnouncement} className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-300">
                      Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      value={newAnnouncement.title}
                      onChange={(e) =>
                        setNewAnnouncement({ ...newAnnouncement, title: e.target.value })
                      }
                      className="mt-1 block w-full bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-300">
                      Content
                    </label>
                    <textarea
                      id="content"
                      value={newAnnouncement.content}
                      onChange={(e) =>
                        setNewAnnouncement({ ...newAnnouncement, content: e.target.value })
                      }
                      rows={4}
                      className="mt-1 block w-full bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isActive"
                      checked={newAnnouncement.isActive}
                      onChange={(e) =>
                        setNewAnnouncement({ ...newAnnouncement, isActive: e.target.checked })
                      }
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600"
                    />
                    <label htmlFor="isActive" className="ml-2 block text-sm text-gray-300">
                      Active
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Create Announcement
                  </button>
                </form>
              </div>

              <div>
                <h2 className="text-lg font-medium mb-4">Announcements</h2>
                <div className="space-y-4">
                  {announcements.map((announcement) => (
                    <div
                      key={announcement.id}
                      className="border border-gray-700 p-4 bg-gray-800"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium">{announcement.title}</h3>
                          <p className="text-gray-300 mt-1">{announcement.content}</p>
                          <p className="text-sm text-gray-400 mt-2">
                            Created: {new Date(announcement.createdAt).toLocaleString()}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleToggleAnnouncement(announcement.id, announcement.isActive)}
                            className={`px-3 py-1 text-sm ${
                              announcement.isActive
                                ? 'bg-green-900 text-green-300'
                                : 'bg-red-900 text-red-300'
                            }`}
                          >
                            {announcement.isActive ? 'Active' : 'Inactive'}
                          </button>
                          <button
                            onClick={() => handleDeleteAnnouncement(announcement.id)}
                            className="px-3 py-1 text-sm bg-red-900 text-red-300 hover:bg-red-800"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Challenges Tab */}
          {activeTab === 'challenges' && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Challenges</h2>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center space-x-2 bg-blue-600 px-4 py-2 hover:bg-blue-700"
                >
                  <PlusIcon className="h-5 w-5" />
                  <span>Add Challenge</span>
                </button>
              </div>
              <div className="border border-gray-700">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="px-6 py-3 text-left">Title</th>
                      <th className="px-6 py-3 text-left">Category</th>
                      <th className="px-6 py-3 text-left">Points</th>
                      <th className="px-6 py-3 text-left">Difficulty</th>
                      <th className="px-6 py-3 text-left">Status</th>
                      <th className="px-6 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {challenges.map((challenge) => (
                      <tr key={challenge.id} className="border-t border-gray-700">
                        <td className="px-6 py-4">{challenge.title}</td>
                        <td className="px-6 py-4">{challenge.category}</td>
                        <td className="px-6 py-4">{challenge.points}</td>
                        <td className="px-6 py-4 capitalize">{challenge.difficulty}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 ${
                            challenge.isActive ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                          }`}>
                            {challenge.isActive ? 'Active' : 'Inactive'}
                          </span>
                          {challenge.isLocked && (
                            <span className="ml-2 px-2 py-1 bg-yellow-900 text-yellow-300">
                              Locked
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 space-x-2">
                          <button
                            onClick={() => handleEdit(challenge)}
                            className="bg-blue-900 text-blue-300 px-3 py-1 hover:bg-blue-800"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(challenge.id)}
                            className="bg-red-900 text-red-300 px-3 py-1 hover:bg-red-800"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === 'users' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Users</h2>
              <div className="border border-gray-700">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="px-6 py-3 text-left">Alias</th>
                      <th className="px-6 py-3 text-left">Name</th>
                      <th className="px-6 py-3 text-left">Team</th>
                      <th className="px-6 py-3 text-left">Role</th>
                      <th className="px-6 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id} className="border-t border-gray-700">
                        <td className="px-6 py-4">{user.alias}</td>
                        <td className="px-6 py-4">{user.name}</td>
                        <td className="px-6 py-4">
                          {user.teamId
                            ? teams.find((t) => t.id === user.teamId)?.name
                            : 'No Team'}
                        </td>
                        <td className="px-6 py-4">
                          {user.isAdmin ? 'Admin' : user.isTeamLeader ? 'Team Leader' : 'Member'}
                        </td>
                        <td className="px-6 py-4">
                          {userToDelete?.id === user.id ? (
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleDeleteUser(user.id)}
                                className="bg-red-900 text-red-300 px-3 py-1 hover:bg-red-800"
                                disabled={user.isAdmin}
                              >
                                Confirm Delete
                              </button>
                              <button
                                onClick={() => setUserToDelete(null)}
                                className="bg-gray-700 text-gray-300 px-3 py-1 hover:bg-gray-600"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setUserToDelete(user)}
                              className="bg-red-900 text-red-300 px-3 py-1 hover:bg-red-800"
                              disabled={user.isAdmin}
                              title={user.isAdmin ? "Cannot delete admin users" : "Delete user"}
                            >
                              Delete
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Teams Tab */}
          {activeTab === 'teams' && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Teams</h2>
              <div className="border border-gray-700">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="px-6 py-3 text-left">Name</th>
                      <th className="px-6 py-3 text-left">Code</th>
                      <th className="px-6 py-3 text-left">Score</th>
                      <th className="px-6 py-3 text-left">Members</th>
                      <th className="px-6 py-3 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.map((team) => (
                      <tr key={team.id} className="border-t border-gray-700">
                        <td className="px-6 py-4">{team.name}</td>
                        <td className="px-6 py-4">{team.code}</td>
                        <td className="px-6 py-4">{team.score}</td>
                        <td className="px-6 py-4">{team.members.length}</td>
                        <td className="px-6 py-4">
                          {teamToDelete?.id === team.id ? (
                            <div className="flex space-x-2">
                              <button
                                onClick={() => handleDeleteTeam(team.id)}
                                className="bg-red-900 text-red-300 px-3 py-1 hover:bg-red-800"
                              >
                                Confirm Delete
                              </button>
                              <button
                                onClick={() => setTeamToDelete(null)}
                                className="bg-gray-700 text-gray-300 px-3 py-1 hover:bg-gray-600"
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setTeamToDelete(team)}
                              className="bg-red-900 text-red-300 px-3 py-1 hover:bg-red-800"
                            >
                              Delete
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Configuration Tab */}
          {activeTab === 'configuration' && (
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Site Configuration</h2>
              <form onSubmit={handleConfigUpdate} className="space-y-4">
                <div>
                  <label htmlFor="siteTitle" className="block text-sm font-medium text-gray-300">
                    Site Title
                  </label>
                  <input
                    type="text"
                    id="siteTitle"
                    value={siteConfig.siteTitle}
                    onChange={(e) => setSiteConfig({ ...siteConfig, siteTitle: e.target.value })}
                    className="mt-1 block w-full bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="headerText" className="block text-sm font-medium text-gray-300">
                    Header Text
                  </label>
                  <input
                    type="text"
                    id="headerText"
                    value={siteConfig.headerText}
                    onChange={(e) => setSiteConfig({ ...siteConfig, headerText: e.target.value })}
                    className="mt-1 block w-full bg-gray-700 border-gray-600 text-white focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save Configuration
                </button>
              </form>
            </div>
          )}

          {/* Add Challenge Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-gray-800 p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Add New Challenge</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                    <input
                      type="text"
                      value={newChallenge.title}
                      onChange={(e) =>
                        setNewChallenge({ ...newChallenge, title: e.target.value })
                      }
                      className="w-full bg-gray-700 text-white px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                    <textarea
                      value={newChallenge.description}
                      onChange={(e) =>
                        setNewChallenge({ ...newChallenge, description: e.target.value })
                      }
                      className="w-full bg-gray-700 text-white px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                    <input
                      type="text"
                      value={newChallenge.category}
                      onChange={(e) =>
                        setNewChallenge({ ...newChallenge, category: e.target.value })
                      }
                      className="w-full bg-gray-700 text-white px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Points</label>
                    <input
                      type="number"
                      value={newChallenge.points}
                      onChange={(e) =>
                        setNewChallenge({ ...newChallenge, points: parseInt(e.target.value) })
                      }
                      className="w-full bg-gray-700 text-white px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Flag</label>
                    <input
                      type="text"
                      value={newChallenge.flag}
                      onChange={(e) =>
                        setNewChallenge({ ...newChallenge, flag: e.target.value })
                      }
                      className="w-full bg-gray-700 text-white px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Difficulty</label>
                    <select
                      value={newChallenge.difficulty}
                      onChange={(e) =>
                        setNewChallenge({ ...newChallenge, difficulty: e.target.value })
                      }
                      className="w-full bg-gray-700 text-white px-3 py-2"
                      required
                    >
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isLocked"
                      checked={newChallenge.isLocked}
                      onChange={(e) =>
                        setNewChallenge({ ...newChallenge, isLocked: e.target.checked })
                      }
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600"
                    />
                    <label htmlFor="isLocked" className="ml-2 block text-sm text-gray-300">
                      Lock Challenge
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Files</label>
                    <input
                      type="file"
                      multiple
                      onChange={async (e) => {
                        const files = await Promise.all(
                          Array.from(e.target.files || []).map(async (file) => {
                            const formData = new FormData();
                            formData.append('file', file);
                            
                            const response = await fetch('/api/files/upload', {
                              method: 'POST',
                              body: formData
                            });
                            
                            if (!response.ok) {
                              throw new Error('Failed to upload file');
                            }
                            
                            return await response.json();
                          })
                        );
                        
                        setNewChallenge({ ...newChallenge, files: [...newChallenge.files, ...files] });
                      }}
                      className="w-full bg-gray-700 text-white px-3 py-2"
                    />
                    {newChallenge.files && newChallenge.files.length > 0 && (
                      <div className="mt-2 space-y-2">
                        {newChallenge.files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-700 p-2 rounded">
                            <span className="text-sm text-gray-300">{file.name}</span>
                            <button
                              type="button"
                              onClick={async () => {
                                try {
                                  const filename = file.path.split('/').pop();
                                  const response = await fetch(`/api/files/${filename}`, {
                                    method: 'DELETE'
                                  });
                                  
                                  if (response.ok) {
                                    const updatedFiles = newChallenge.files.filter((_, i) => i !== index);
                                    setNewChallenge({ ...newChallenge, files: updatedFiles });
                                  } else {
                                    throw new Error('Failed to delete file');
                                  }
                                } catch (error) {
                                  console.error('Error deleting file:', error);
                                  alert('Failed to delete file');
                                }
                              }}
                              className="text-red-400 hover:text-red-300"
                            >
                              Delete
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Hints</label>
                    <div className="space-y-2">
                      {newChallenge.hints.map((hint, index) => (
                        <div key={index} className="flex space-x-2">
                          <input
                            type="text"
                            value={hint.content}
                            onChange={(e) => {
                              const newHints = [...newChallenge.hints];
                              newHints[index] = { ...newHints[index], content: e.target.value };
                              setNewChallenge({ ...newChallenge, hints: newHints });
                            }}
                            className="flex-1 bg-gray-700 text-white px-3 py-2"
                            placeholder="Hint content"
                          />
                          <input
                            type="number"
                            value={hint.cost}
                            onChange={(e) => {
                              const newHints = [...newChallenge.hints];
                              newHints[index] = { ...newHints[index], cost: parseInt(e.target.value) };
                              setNewChallenge({ ...newChallenge, hints: newHints });
                            }}
                            className="w-20 bg-gray-700 text-white px-3 py-2"
                            placeholder="Cost"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newHints = [...newChallenge.hints];
                              newHints.splice(index, 1);
                              setNewChallenge({ ...newChallenge, hints: newHints });
                            }}
                            className="px-2 py-1 bg-red-600 text-white hover:bg-red-700"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          setNewChallenge({
                            ...newChallenge,
                            hints: [...newChallenge.hints, { content: '', cost: 0, challengeId: '', id: '', createdAt: '', updatedAt: '' }]
                          });
                        }}
                        className="w-full px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Add Hint
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 bg-gray-700 text-gray-300 hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Edit Challenge Modal */}
          {isEditModalOpen && editingChallenge && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-gray-800 p-6 w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-4">Edit Challenge</h2>
                <form onSubmit={handleUpdate} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                    <input
                      type="text"
                      value={editingChallenge.title}
                      onChange={(e) =>
                        setEditingChallenge({ ...editingChallenge, title: e.target.value })
                      }
                      className="w-full bg-gray-700 text-white px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                    <textarea
                      value={editingChallenge.description}
                      onChange={(e) =>
                        setEditingChallenge({ ...editingChallenge, description: e.target.value })
                      }
                      className="w-full bg-gray-700 text-white px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                    <input
                      type="text"
                      value={editingChallenge.category}
                      onChange={(e) =>
                        setEditingChallenge({ ...editingChallenge, category: e.target.value })
                      }
                      className="w-full bg-gray-700 text-white px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Points</label>
                    <input
                      type="number"
                      value={editingChallenge.points}
                      onChange={(e) =>
                        setEditingChallenge({ ...editingChallenge, points: parseInt(e.target.value) })
                      }
                      className="w-full bg-gray-700 text-white px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Flag</label>
                    <input
                      type="text"
                      value={editingChallenge.flag}
                      onChange={(e) =>
                        setEditingChallenge({ ...editingChallenge, flag: e.target.value })
                      }
                      className="w-full bg-gray-700 text-white px-3 py-2"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Difficulty</label>
                    <select
                      value={editingChallenge.difficulty}
                      onChange={(e) =>
                        setEditingChallenge({ ...editingChallenge, difficulty: e.target.value })
                      }
                      className="w-full bg-gray-700 text-white px-3 py-2"
                      required
                    >
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isActive"
                      checked={editingChallenge.isActive}
                      onChange={(e) =>
                        setEditingChallenge({ ...editingChallenge, isActive: e.target.checked })
                      }
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600"
                    />
                    <label htmlFor="isActive" className="ml-2 block text-sm text-gray-300">
                      Active
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isLocked"
                      checked={editingChallenge.isLocked}
                      onChange={(e) =>
                        setEditingChallenge({ ...editingChallenge, isLocked: e.target.checked })
                      }
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600"
                    />
                    <label htmlFor="isLocked" className="ml-2 block text-sm text-gray-300">
                      Locked
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Files</label>
                    <input
                      type="file"
                      multiple
                      onChange={async (e) => {
                        const files = await Promise.all(
                          Array.from(e.target.files || []).map(async (file) => {
                            const formData = new FormData();
                            formData.append('file', file);
                            
                            const response = await fetch('/api/files/upload', {
                              method: 'POST',
                              body: formData
                            });
                            
                            if (!response.ok) {
                              throw new Error('Failed to upload file');
                            }
                            
                            return await response.json();
                          })
                        );
                        
                        setEditingChallenge({ ...editingChallenge, files: [...editingChallenge.files, ...files] });
                      }}
                      className="w-full bg-gray-700 text-white px-3 py-2"
                    />
                    {editingChallenge.files && editingChallenge.files.length > 0 && (
                      <div className="mt-2 space-y-2">
                        {editingChallenge.files.map((file, index) => (
                          <div key={file.id || index} className="flex items-center justify-between bg-gray-700 p-2 rounded">
                            <span className="text-sm text-gray-300">{file.name}</span>
                            <button
                              type="button"
                              onClick={async () => {
                                try {
                                  const filename = file.path.split('/').pop();
                                  const response = await fetch(`/api/files/${filename}`, {
                                    method: 'DELETE'
                                  });
                                  
                                  if (response.ok) {
                                    const updatedFiles = editingChallenge.files.filter((_, i) => i !== index);
                                    setEditingChallenge({ ...editingChallenge, files: updatedFiles });
                                  } else {
                                    throw new Error('Failed to delete file');
                                  }
                                } catch (error) {
                                  console.error('Error deleting file:', error);
                                  alert('Failed to delete file');
                                }
                              }}
                              className="text-red-400 hover:text-red-300"
                            >
                              Delete
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Hints</label>
                    <div className="space-y-2">
                      {editingChallenge.hints.map((hint, index) => (
                        <div key={hint.id || index} className="flex space-x-2">
                          <input
                            type="text"
                            value={hint.content}
                            onChange={(e) => {
                              const newHints = [...editingChallenge.hints];
                              newHints[index] = { ...newHints[index], content: e.target.value };
                              setEditingChallenge({ ...editingChallenge, hints: newHints });
                            }}
                            className="flex-1 bg-gray-700 text-white px-3 py-2"
                            placeholder="Hint content"
                          />
                          <input
                            type="number"
                            value={hint.cost}
                            onChange={(e) => {
                              const newHints = [...editingChallenge.hints];
                              newHints[index] = { ...newHints[index], cost: parseInt(e.target.value) };
                              setEditingChallenge({ ...editingChallenge, hints: newHints });
                            }}
                            className="w-20 bg-gray-700 text-white px-3 py-2"
                            placeholder="Cost"
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newHints = [...editingChallenge.hints];
                              newHints.splice(index, 1);
                              setEditingChallenge({ ...editingChallenge, hints: newHints });
                            }}
                            className="px-2 py-1 bg-red-600 text-white hover:bg-red-700"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => {
                          setEditingChallenge({
                            ...editingChallenge,
                            hints: [...editingChallenge.hints, { content: '', cost: 0, challengeId: editingChallenge.id, id: '', createdAt: '', updatedAt: '' }]
                          });
                        }}
                        className="w-full px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
                      >
                        Add Hint
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditModalOpen(false);
                        setEditingChallenge(null);
                      }}
                      className="px-4 py-2 bg-gray-700 text-gray-300 hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 