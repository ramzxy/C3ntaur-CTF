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
  difficulty: string;
  isActive: boolean;
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

type Tab = 'challenges' | 'users' | 'teams';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('challenges');
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [newChallenge, setNewChallenge] = useState({
    title: '',
    description: '',
    category: '',
    points: 0,
    flag: '',
    difficulty: 'easy',
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
    fetchData();
  }, [status, router]);

  const fetchData = async () => {
    try {
      const [challengesRes, usersRes, teamsRes] = await Promise.all([
        fetch('/api/admin/challenges'),
        fetch('/api/admin/users'),
        fetch('/api/admin/teams'),
      ]);
      
      const [challengesData, usersData, teamsData] = await Promise.all([
        challengesRes.json(),
        usersRes.json(),
        teamsRes.json(),
      ]);

      setChallenges(challengesData);
      setUsers(usersData);
      setTeams(teamsData);
    } catch (error) {
      console.error('Error fetching data:', error);
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
      const response = await fetch('/api/admin/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setUserToDelete(null);
        fetchData();
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setActiveTab('challenges')}
            className={`px-4 py-2 border border-white/20 ${
              activeTab === 'challenges'
                ? 'bg-white/20'
                : 'hover:bg-white/10'
            }`}
          >
            Challenges
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`px-4 py-2 border border-white/20 ${
              activeTab === 'users'
                ? 'bg-white/20'
                : 'hover:bg-white/10'
            }`}
          >
            Users
          </button>
          <button
            onClick={() => setActiveTab('teams')}
            className={`px-4 py-2 border border-white/20 ${
              activeTab === 'teams'
                ? 'bg-white/20'
                : 'hover:bg-white/10'
            }`}
          >
            Teams
          </button>
        </div>

        {/* Challenges Tab */}
        {activeTab === 'challenges' && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Challenges</h2>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center space-x-2 border border-white/20 px-4 py-2 hover:bg-white/10"
              >
                <PlusIcon className="h-5 w-5" />
                <span>Add Challenge</span>
              </button>
            </div>
            <div className="border border-white/20 rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-white/10">
                    <th className="px-6 py-3 text-left">Title</th>
                    <th className="px-6 py-3 text-left">Category</th>
                    <th className="px-6 py-3 text-left">Points</th>
                    <th className="px-6 py-3 text-left">Difficulty</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {challenges[0] && challenges.map((challenge) => (
                    <tr key={challenge.id} className="border-t border-white/20">
                      <td className="px-6 py-4">{challenge.title}</td>
                      <td className="px-6 py-4">{challenge.category}</td>
                      <td className="px-6 py-4">{challenge.points}</td>
                      <td className="px-6 py-4 capitalize">{challenge.difficulty}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded ${
                          challenge.isActive ? 'bg-green-600' : 'bg-red-600'
                        }`}>
                          {challenge.isActive ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleDelete(challenge.id)}
                          className="border border-red-500/50 text-red-500 px-3 py-1 hover:bg-red-500/10"
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
            <div className="border border-white/20 rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-white/10">
                    <th className="px-6 py-3 text-left">Alias</th>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Team</th>
                    <th className="px-6 py-3 text-left">Role</th>
                    <th className="px-6 py-3 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-t border-white/20">
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
                              className="border border-red-500/50 text-red-500 px-3 py-1 hover:bg-red-500/10"
                              disabled={user.isAdmin}
                            >
                              Confirm Delete
                            </button>
                            <button
                              onClick={() => setUserToDelete(null)}
                              className="border border-white/20 px-3 py-1 hover:bg-white/10"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setUserToDelete(user)}
                            className="border border-red-500/50 text-red-500 px-3 py-1 hover:bg-red-500/10"
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
            <div className="border border-white/20 rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-white/10">
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Code</th>
                    <th className="px-6 py-3 text-left">Score</th>
                    <th className="px-6 py-3 text-left">Members</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team) => (
                    <tr key={team.id} className="border-t border-gray-700">
                      <td className="px-6 py-4">{team.name}</td>
                      <td className="px-6 py-4">{team.code}</td>
                      <td className="px-6 py-4">{team.score}</td>
                      <td className="px-6 py-4">{team.members.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add Challenge Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
              <h2 className="text-2xl font-semibold mb-4">Add New Challenge</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <input
                    type="text"
                    value={newChallenge.title}
                    onChange={(e) =>
                      setNewChallenge({ ...newChallenge, title: e.target.value })
                    }
                    className="w-full bg-gray-700 rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    value={newChallenge.description}
                    onChange={(e) =>
                      setNewChallenge({ ...newChallenge, description: e.target.value })
                    }
                    className="w-full bg-gray-700 rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Category</label>
                  <input
                    type="text"
                    value={newChallenge.category}
                    onChange={(e) =>
                      setNewChallenge({ ...newChallenge, category: e.target.value })
                    }
                    className="w-full bg-gray-700 rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Points</label>
                  <input
                    type="number"
                    value={newChallenge.points}
                    onChange={(e) =>
                      setNewChallenge({ ...newChallenge, points: parseInt(e.target.value) })
                    }
                    className="w-full bg-gray-700 rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Flag</label>
                  <input
                    type="text"
                    value={newChallenge.flag}
                    onChange={(e) =>
                      setNewChallenge({ ...newChallenge, flag: e.target.value })
                    }
                    className="w-full bg-gray-700 rounded px-3 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Difficulty</label>
                  <select
                    value={newChallenge.difficulty}
                    onChange={(e) =>
                      setNewChallenge({ ...newChallenge, difficulty: e.target.value })
                    }
                    className="w-full bg-gray-700 rounded px-3 py-2"
                    required
                  >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                  </select>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
                  >
                    Create
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 