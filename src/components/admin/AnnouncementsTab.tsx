import { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import { Announcement, NewAnnouncement } from './types';
import AnnouncementModal from './AnnouncementModal';

interface AnnouncementsTabProps {
  announcements: Announcement[];
  fetchData: () => Promise<void>;
}

export default function AnnouncementsTab({ announcements, fetchData }: AnnouncementsTabProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [announcementToDelete, setAnnouncementToDelete] = useState<Announcement | null>(null);
  const [newAnnouncement, setNewAnnouncement] = useState<NewAnnouncement>({
    title: '',
    content: '',
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
      setNewAnnouncement({ title: '', content: '' });
      setIsModalOpen(false);
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
      setAnnouncementToDelete(null);
      fetchData();
    } catch (error) {
      console.error('Error deleting announcement:', error);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-semibold mb-6">Announcements</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
        >
          <FaPlus className="h-5 w-5 mr-2" />
          Add Announcement
        </button>
      </div>

      <div className="">
        <div className="space-y-4">
          {announcements.length === 0 ? (
            <p className="text-gray-400 italic">No announcements yet</p>
          ) : (
            announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="border border-gray-700 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium truncate">{announcement.title}</h3>
                    <p className="text-gray-300 mt-1 break-words">{announcement.content}</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Created: {new Date(announcement.createdAt).toLocaleString()}
                    </p>
                  </div>
                  <button
                    onClick={() => announcementToDelete?.id === announcement.id 
                      ? handleDeleteAnnouncement(announcement.id)
                      : setAnnouncementToDelete(announcement)
                    }
                    onMouseLeave={() => setAnnouncementToDelete(null)}
                    className={`px-3 py-1 text-sm rounded-md transition-colors shrink-0 ${
                      announcementToDelete?.id === announcement.id
                        ? 'bg-red-700 text-red-200 hover:bg-red-600'
                        : 'bg-red-900 text-red-300 hover:bg-red-800'
                    }`}
                  >
                    {announcementToDelete?.id === announcement.id ? 'Confirm?' : 'Delete'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {isModalOpen && (
        <AnnouncementModal
          title="Create New Announcement"
          announcement={newAnnouncement}
          setAnnouncement={setNewAnnouncement}
          onSubmit={handleCreateAnnouncement}
          onClose={() => setIsModalOpen(false)}
          submitText="Create Announcement"
        />
      )}
    </div>
  );
}