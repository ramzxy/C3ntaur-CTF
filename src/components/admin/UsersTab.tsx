import { useState } from 'react';
import { User, Team } from './types';

interface UsersTabProps {
  users: User[];
  teams: Team[];
  fetchData: () => Promise<void>;
}

export default function UsersTab({ users, teams, fetchData }: UsersTabProps) {
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

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

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      {/* Table Container with horizontal scroll on mobile */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left">Alias</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Team</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-t border-gray-700 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">{user.alias}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">
                  {user.teamId
                    ? teams.find((t) => t.id === user.teamId)?.name || 'Unknown Team'
                    : 'No Team'}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    user.isAdmin 
                      ? 'bg-purple-900 text-purple-200' 
                      : user.isTeamLeader 
                        ? 'bg-blue-900 text-blue-200' 
                        : 'bg-gray-700 text-gray-300'
                  }`}>
                    {user.isAdmin ? 'Admin' : user.isTeamLeader ? 'Team Leader' : 'Member'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-row gap-2 justify-end">
                    {userToDelete?.id === user.id ? (
                      <>
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="bg-red-900 text-red-300 px-3 py-1 rounded hover:bg-red-800 transition-colors"
                          disabled={user.isAdmin}
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setUserToDelete(null)}
                          className="bg-gray-700 text-gray-300 px-3 py-1 rounded hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setUserToDelete(user)}
                        className={`px-3 py-1 rounded transition-colors ${
                          user.isAdmin 
                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                            : 'bg-red-900 text-red-300 hover:bg-red-800'
                        }`}
                        disabled={user.isAdmin}
                        title={user.isAdmin ? "Cannot delete admin users" : "Delete user"}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}