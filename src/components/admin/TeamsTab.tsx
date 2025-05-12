import { useState, useEffect, useCallback } from 'react';
import { Team, ApiError } from '@/types';
import TeamEditModal from './TeamEditModal';
import toast from 'react-hot-toast';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { fetchAdminTeams, deleteTeam, updateTeam } from '@/utils/api';

export default function TeamsTab() {
  const [teamToDelete, setTeamToDelete] = useState<Team | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTeam, setEditingTeam] = useState<Team | null>(null);
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTeams = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchAdminTeams();
      setTeams(data);
    } catch (err) {
      const error = err as ApiError;
      setError(error.message);
      toast.error(`Error fetching teams: ${error.message}`);
      console.error('Error fetching teams:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  const handleDeleteTeam = async (id: string) => {
    try {
      await deleteTeam(id);
      setTeamToDelete(null);
      await fetchTeams();
    } catch (error) {
      console.error('Error deleting team:', error);
      toast.error('Error deleting team. See console for details.');
    }
  };

  const handleEditTeam = (team: Team) => {
    setEditingTeam(team);
    setIsEditModalOpen(true);
  };

  const handleUpdateTeam = async (updatedData: Partial<Team>) => {
    if (!editingTeam) return;

    try {
      await updateTeam(updatedData);
      toast.success('Team updated successfully!');
      setIsEditModalOpen(false);
      setEditingTeam(null);
      await fetchTeams();
    } catch (err) {
      const error = err as ApiError;
      console.error('Error updating team:', error);
      toast.error(`Error: ${error.message}`);
      throw error;
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-red-400">Error loading teams: {error}</div>;
  }

  return (
    <div>
      {/* Table Container with horizontal scroll on mobile */}
      <div className="overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-6">Teams</h2>
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Code</th>
              <th className="px-6 py-3 text-left">Score</th>
              <th className="px-6 py-3 text-left">Members</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team) => (
              <tr key={team.id} className="border-t border-gray-700 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">{team.name}</td>
                <td className="px-6 py-4">{team.code}</td>
                <td className="px-6 py-4">{team.score}</td>
                <td className="px-6 py-4">
                  <span className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs">
                    {team.members.length} members
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-row gap-2 items-center justify-end">
                    <button
                      onClick={() => handleEditTeam(team)}
                      className="bg-blue-900 text-blue-300 px-3 py-1 rounded hover:bg-blue-800 transition-colors"
                      disabled={!!teamToDelete}
                    >
                      Edit
                    </button>
                    {teamToDelete?.id === team.id ? (
                      <>
                        <button
                          onClick={() => handleDeleteTeam(team.id)}
                          className="bg-red-900 text-red-300 px-3 py-1 rounded hover:bg-red-800 transition-colors"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setTeamToDelete(null)}
                          className="bg-gray-700 text-gray-300 px-3 py-1 rounded hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setTeamToDelete(team)}
                        className="bg-red-900 text-red-300 px-3 py-1 rounded hover:bg-red-800 transition-colors"
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

      <TeamEditModal
        team={editingTeam}
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingTeam(null);
        }}
        onDataRefresh={fetchTeams}
        onSave={handleUpdateTeam}
      />
    </div>
  );
}