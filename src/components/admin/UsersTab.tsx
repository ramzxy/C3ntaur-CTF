import { useState, useEffect, useCallback } from 'react';
import { User, Team, ApiError } from './types';
import UserEditModal from './UserEditModal';
import toast from 'react-hot-toast';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { fetchAdminUsers, deleteAdminUser, updateAdminUser, fetchAdminTeams } from '@/utils/api';

export default function UsersTab() {
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsersAndTeams = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [usersData, teamsData] = await Promise.all([
        fetchAdminUsers(),
        fetchAdminTeams()
      ]);

      setUsers(usersData);
      setTeams(teamsData);
    } catch (err) {
      const error = err as ApiError;
      setError(error.message);
      toast.error(`Error fetching data: ${error.message}`);
      console.error('Error fetching users or teams:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsersAndTeams();
  }, [fetchUsersAndTeams]);

  const handleDeleteUser = async (id: string) => {
    try {
      await deleteAdminUser(id);
      setUserToDelete(null);
      await fetchUsersAndTeams();
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Error deleting user. See console for details.');
    }
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setIsEditModalOpen(true);
  };

  const handleUpdateUser = async (updatedData: Partial<User>) => {
    if (!editingUser) return;

    try {
      await updateAdminUser(updatedData);
      toast.success('User updated successfully!');
      setIsEditModalOpen(false);
      setEditingUser(null);
      await fetchUsersAndTeams();
    } catch (err) {
      const error = err as ApiError;
      console.error('Error updating user:', error);
      toast.error(`Error: ${error.message}`);
      throw error;
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-red-400">Error loading data: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
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
                  <div className="flex flex-row gap-2 items-center justify-end">
                    <button
                      onClick={() => handleEditUser(user)}
                      className="bg-blue-900 text-blue-300 px-3 py-1 rounded hover:bg-blue-800 transition-colors"
                      disabled={!!userToDelete}
                    >
                      Edit
                    </button>
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

      <UserEditModal
        user={editingUser}
        isOpen={isEditModalOpen}
        teams={teams}
        onDataRefresh={fetchUsersAndTeams}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingUser(null);
        }}
        onSave={handleUpdateUser}
      />
    </div>
  );
}