import React from 'react';
import { Team, ApiError } from '@/types'; // Assuming Team type exists here

interface TeamEditModalProps {
  team: Team | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedTeam: Partial<Team>) => Promise<void>; // Function to call API
  onDataRefresh?: () => Promise<void>; // Add refresh callback prop
}

export default function TeamEditModal({ team, isOpen, onClose, onSave, onDataRefresh }: TeamEditModalProps) {
  const [name, setName] = React.useState(team?.name || '');
  const [icon, setIcon] = React.useState(team?.icon || 'GiSpaceship'); // Default icon from schema
  const [color, setColor] = React.useState(team?.color || '#ffffff'); // Default color from schema
  const [error, setError] = React.useState<string | null>(null);
  const [isSaving, setIsSaving] = React.useState(false);

  React.useEffect(() => {
    if (team) {
      setName(team.name || '');
      setIcon(team.icon || 'GiSpaceship');
      setColor(team.color || '#ffffff');
      setError(null);
    }
  }, [team]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSaving(true);

    if (!team) return;
    if (!name.trim()) {
      setError('Team name cannot be empty.');
      setIsSaving(false);
      return;
    }

    try {
      await onSave({ id: team.id, name: name.trim(), icon, color });
      onClose(); // Close modal on successful save
      if (onDataRefresh) {
        await onDataRefresh();
      }
    } catch (err) {
      const error = err as ApiError;
      setError(error.error || 'Failed to update team.');
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen || !team) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 w-full max-w-md shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Edit Team: {team.name}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="teamName" className="block text-sm font-medium text-gray-300 mb-1">Team Name</label>
            <input
              id="teamName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="teamIcon" className="block text-sm font-medium text-gray-300 mb-1">Icon Name (React Icons)</label>
            <input
              id="teamIcon"
              type="text"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
              placeholder="e.g., GiRocket, FaFlag, etc."
            />
            <p className="text-xs text-gray-400 mt-1">Enter a valid React Icons name (e.g., from &apos;react-icons/gi&apos;, &apos;react-icons/fa&apos;).</p>
          </div>
          <div>
            <label htmlFor="teamColor" className="block text-sm font-medium text-gray-300 mb-1">Team Color</label>
            <input
              id="teamColor"
              type="color" // Use color input type
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full h-10 bg-gray-700 text-white px-1 py-1 rounded border border-gray-600 cursor-pointer"
            />
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