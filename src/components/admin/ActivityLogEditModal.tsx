import React from 'react';
import { AdminActivityLog, Team, ApiError } from '@/types';

interface ActivityLogEditModalProps {
  log: AdminActivityLog | null;
  teams: Team[];
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Partial<AdminActivityLog> & { id: string }) => Promise<void>;
  onDataRefresh?: () => Promise<void>;
}

export default function ActivityLogEditModal({
  log,
  teams,
  isOpen,
  onClose,
  onSave,
  onDataRefresh,
}: ActivityLogEditModalProps) {
  const [type, setType] = React.useState(log?.type || '');
  const [description, setDescription] = React.useState(log?.description || '');
  const [teamId, setTeamId] = React.useState<string | null>(log?.teamId || null);
  const [error, setError] = React.useState<string | null>(null);
  const [isSaving, setIsSaving] = React.useState(false);

  React.useEffect(() => {
    if (log) {
      setType(log.type || '');
      setDescription(log.description || '');
      setTeamId(log.teamId || null);
      setError(null);
    }
  }, [log]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!log) return;
    setError(null);
    setIsSaving(true);
    try {
      await onSave({ id: log.id, type, description, teamId });
      onClose();
      if (onDataRefresh) await onDataRefresh();
    } catch (err) {
      const error = err as ApiError;
      setError(error.error || 'Failed to update activity log');
    } finally {
      setIsSaving(false);
    }
  };

  if (!isOpen || !log) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 w-full max-w-md shadow-xl">
        <h2 className="text-xl font-semibold mb-4">Edit Activity Log</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Type</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-500 focus:ring-blue-500"
              rows={3}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Team</label>
            <select
              value={teamId ?? '--no-team--'}
              onChange={(e) => setTeamId(e.target.value === '--no-team--' ? null : e.target.value)}
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
          {error && <p className="text-sm text-red-400">Error: {error}</p>}
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
