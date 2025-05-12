import React from 'react';
import { User, Team, ApiError } from '@/types'; // Import Team type and ApiError type

interface UserEditModalProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedUser: Partial<User>) => Promise<void>; // Function to call API
  onDataRefresh?: () => Promise<void>; // Add refresh callback prop
  teams: Team[]; // Pass teams for the dropdown
}

export default function UserEditModal({ user, isOpen, onClose, onSave, teams, onDataRefresh }: UserEditModalProps) {
  const [alias, setAlias] = React.useState(user?.alias || '');
  const [name, setName] = React.useState(user?.name || '');
  const [selectedTeamId, setSelectedTeamId] = React.useState<string | null>(user?.teamId || null);
  const [isTeamLeader, setIsTeamLeader] = React.useState(user?.isTeamLeader || false);
  const [error, setError] = React.useState<string | null>(null);
  const [isSaving, setIsSaving] = React.useState(false);

  // Update state when the user prop changes (e.g., when opening the modal for a different user)
  React.useEffect(() => {
    if (user) {
      setAlias(user.alias || '');
      setName(user.name || '');
      setSelectedTeamId(user.teamId || null);
      setIsTeamLeader(user.isTeamLeader || false);
      setError(null);
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSaving(true);

    if (!user) return;
    const trimmedAlias = alias.trim();
    const trimmedName = name.trim();

    if (!trimmedAlias) {
      setError('Alias cannot be empty.');
      setIsSaving(false);
      return;
    }
    if (!trimmedName) {
      setError('Name cannot be empty.');
      setIsSaving(false);
      return;
    }

    try {
      await onSave({
        id: user.id,
        alias: trimmedAlias,
        name: trimmedName,
        teamId: selectedTeamId,
        isTeamLeader: selectedTeamId ? isTeamLeader : false,
      });
      onClose(); // Close modal on successful save
      // Call refresh function if provided
      if (onDataRefresh) {
        await onDataRefresh();
      }
    } catch (err) {
      const error = err as ApiError;
      setError(error.message || 'Failed to update user alias.');
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 w-full max-w-md shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Edit User: {user.name} ({user.alias})</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="userAlias" className="block text-sm font-medium text-gray-300 mb-1">Alias</label>
            <input
              id="userAlias"
              type="text"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="userName" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
            <input
              id="userName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="userTeam" className="block text-sm font-medium text-gray-300 mb-1">Team</label>
            <select
              id="userTeam"
              value={selectedTeamId ?? '--no-team--'} // Use a special value for null
              onChange={(e) => {
                const value = e.target.value;
                setSelectedTeamId(value === '--no-team--' ? null : value);
                // Unset team leader if no team is selected
                if (value === '--no-team--') {
                  setIsTeamLeader(false);
                }
              }}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="--no-team--">-- No Team --</option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          <div className={`flex items-center ${!selectedTeamId ? 'opacity-50' : ''}`}>
            <input
              type="checkbox"
              id="isTeamLeader"
              checked={isTeamLeader}
              onChange={(e) => setIsTeamLeader(e.target.checked)}
              disabled={!selectedTeamId}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 disabled:cursor-not-allowed"
            />
            <label 
              htmlFor="isTeamLeader" 
              className={`ml-2 block text-sm text-gray-300 ${!selectedTeamId ? 'cursor-not-allowed' : ''}`}
            >
              Team Leader
            </label>
          </div>

          {error && (
            <p className="text-sm text-red-400">Error: {error}</p>
          )}

          <div className="flex justify-end space-x-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 text-gray-300 hover:bg-gray-600 rounded"
              disabled={isSaving}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded disabled:opacity-50"
              disabled={isSaving}
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 