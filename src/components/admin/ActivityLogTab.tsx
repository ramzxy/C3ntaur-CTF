import { useState, useEffect, useCallback } from 'react';
import { AdminActivityLog, ApiError, Team } from '@/types';
import ActivityLogEditModal from './ActivityLogEditModal';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import toast from 'react-hot-toast';
import {
  fetchAdminActivityLogs,
  deleteAdminActivityLog,
  updateAdminActivityLog,
  fetchAdminTeams,
} from '@/utils/api';

export default function ActivityLogTab() {
  const [logs, setLogs] = useState<AdminActivityLog[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [logToDelete, setLogToDelete] = useState<AdminActivityLog | null>(null);
  const [editingLog, setEditingLog] = useState<AdminActivityLog | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [logsData, teamsData] = await Promise.all([
        fetchAdminActivityLogs(),
        fetchAdminTeams(),
      ]);
      setLogs(logsData);
      setTeams(teamsData);
    } catch (err) {
      const e = err as ApiError;
      setError(e.error);
      console.error('Error fetching activity logs:', e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (id: string) => {
    try {
      await deleteAdminActivityLog(id);
      setLogToDelete(null);
      await fetchData();
    } catch (err) {
      const e = err as ApiError;
      toast.error(`Error deleting log: ${e.error}`);
    }
  };

  const handleEdit = (log: AdminActivityLog) => {
    setEditingLog(log);
    setIsEditModalOpen(true);
  };

  const handleUpdate = async (data: Partial<AdminActivityLog> & { id: string }) => {
    try {
      await updateAdminActivityLog(data);
      toast.success('Activity log updated');
      setIsEditModalOpen(false);
      setEditingLog(null);
      await fetchData();
    } catch (err) {
      const e = err as ApiError;
      toast.error(`Error updating log: ${e.error}`);
      throw err;
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-red-400">Error loading activity logs: {error}</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Activity Logs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700 text-sm">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">Team</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {logs.map((log) => (
              <tr key={log.id} className="border-t border-gray-700 hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-2 whitespace-nowrap">{log.type}</td>
                <td className="px-4 py-2">{log.description}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {log.team ? log.team.name : '—'}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  {new Date(log.createdAt).toLocaleString()}
                </td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => handleEdit(log)}
                      className="bg-blue-900 text-blue-300 px-3 py-1 rounded hover:bg-blue-800 transition-colors"
                      disabled={!!logToDelete}
                    >
                      Edit
                    </button>
                    {logToDelete?.id === log.id ? (
                      <>
                        <button
                          onClick={() => handleDelete(log.id)}
                          className="bg-red-900 text-red-300 px-3 py-1 rounded hover:bg-red-800 transition-colors"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setLogToDelete(null)}
                          className="bg-gray-700 text-gray-300 px-3 py-1 rounded hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setLogToDelete(log)}
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

      <ActivityLogEditModal
        log={editingLog}
        teams={teams}
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingLog(null);
        }}
        onSave={handleUpdate}
        onDataRefresh={fetchData}
      />
    </div>
  );
}
