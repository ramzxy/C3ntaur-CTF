import { useState } from 'react';
import { Announcement, NewAnnouncement } from './types';

interface AnnouncementsTabProps {
  announcements: Announcement[];
  fetchData: () => Promise<void>;
}

export default function AnnouncementsTab({ announcements, fetchData }: AnnouncementsTabProps) {
  const [newAnnouncement, setNewAnnouncement] = useState<NewAnnouncement>({
    title: '',
    content: '',
    isActive: true
  });

  const handleCreateAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/announcements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAnnouncement),
      });
      setNewAnnouncement({ title: '', content: '', isActive: true });
      fetchData();
    } catch (error) {
      console.error('Error creating announcement:', error);
    }
  };

  const handleDeleteAnnouncement = async (id: string) => {
    try {
      await fetch(`/api/announcements/${id}`, {
        method: 'DELETE',
      });
      fetchData();
    } catch (error) {
      console.error('Error deleting announcement:', error);
    }
  };

  const handleToggleAnnouncement = async (id: string, isActive: boolean) => {
    try {
      await fetch(`/api/announcements/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isActive: !isActive }),
      });
      fetchData();
    } catch (error) {
      console.error('Error toggling announcement:', error);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-gray-800/50 rounded-lg p-6">
        <h2 className="text-xl font-medium mb-4">Create New Announcement</h2>
        <form onSubmit={handleCreateAnnouncement} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300">
              Title
            </label>
            <input
              type="text"
              id="title"
              value={newAnnouncement.title}
              onChange={(e) =>
                setNewAnnouncement({ ...newAnnouncement, title: e.target.value })
              }
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded text-white focus:border-blue-500 focus:ring-blue-500 p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-300">
              Content
            </label>
            <textarea
              id="content"
              value={newAnnouncement.content}
              onChange={(e) =>
                setNewAnnouncement({ ...newAnnouncement, content: e.target.value })
              }
              rows={4}
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded text-white focus:border-blue-500 focus:ring-blue-500 p-2"
              required
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isActive"
              checked={newAnnouncement.isActive}
              onChange={(e) =>
                setNewAnnouncement({ ...newAnnouncement, isActive: e.target.checked })
              }
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600"
            />
            <label htmlFor="isActive" className="ml-2 block text-sm text-gray-300">
              Active
            </label>
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Create Announcement
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-xl font-medium mb-4">Announcements</h2>
        <div className="space-y-4">
          {announcements.length === 0 ? (
            <p className="text-gray-400 italic">No announcements yet</p>
          ) : (
            announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="border border-gray-700 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">{announcement.title}</h3>
                    <p className="text-gray-300 mt-1">{announcement.content}</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Created: {new Date(announcement.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleToggleAnnouncement(announcement.id, announcement.isActive)}
                      className={`px-3 py-1 text-sm rounded-md ${
                        announcement.isActive
                          ? 'bg-green-900 text-green-300 hover:bg-green-800'
                          : 'bg-red-900 text-red-300 hover:bg-red-800'
                      } transition-colors`}
                    >
                      {announcement.isActive ? 'Active' : 'Inactive'}
                    </button>
                    <button
                      onClick={() => handleDeleteAnnouncement(announcement.id)}
                      className="px-3 py-1 text-sm rounded-md bg-red-900 text-red-300 hover:bg-red-800 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}