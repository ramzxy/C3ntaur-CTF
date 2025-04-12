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
        fetchData();
        setTeamToDelete(null);
      }
    } catch (error) {
      console.error('Error deleting team:', error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Teams</h2>
      <div className="border border-gray-700 rounded-lg overflow-hidden">
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
                  {teamToDelete?.id === team.id ? (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleDeleteTeam(team.id)}
                        className="bg-red-900 text-red-300 px-3 py-1 rounded hover:bg-red-800 transition-colors"
                      >
                        Confirm Delete
                      </button>
                      <button
                        onClick={() => setTeamToDelete(null)}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setTeamToDelete(team)}
                      className="bg-red-900 text-red-300 px-3 py-1 rounded hover:bg-red-800 transition-colors"
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
  );
}