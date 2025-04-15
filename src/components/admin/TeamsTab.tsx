import { useState } from 'react';
import { Team } from './types';

interface TeamsTabProps {
  teams: Team[];
  fetchData: () => Promise<void>;
}

export default function TeamsTab({ teams, fetchData }: TeamsTabProps) {
  const [teamToDelete, setTeamToDelete] = useState<Team | null>(null);

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
        setTeamToDelete(null);
        fetchData();
      }
    } catch (error) {
      console.error('Error deleting team:', error);
    }
  };

  return (
    <div>
      {/* Table Container with horizontal scroll on mobile */}
      <div className="overflow-x-auto">
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
                  <div className="flex flex-row gap-2 justify-end">
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
    </div>
  );
}