import React from 'react';
import { NewAnnouncement } from '@/types';

interface AnnouncementModalProps {
  title: string;
  announcement: NewAnnouncement;
  setAnnouncement: React.Dispatch<React.SetStateAction<NewAnnouncement>>;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onClose: () => void;
  submitText: string;
}

export default function AnnouncementModal({
  title,
  announcement,
  setAnnouncement,
  onSubmit,
  onClose,
  submitText
}: AnnouncementModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 w-full max-w-2xl shadow-xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
            <input
              type="text"
              value={announcement.title}
              onChange={(e) =>
                setAnnouncement({ ...announcement, title: e.target.value })
              }
              className="w-full bg-gray-700 text-white px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Content</label>
            <textarea
              value={announcement.content}
              onChange={(e) =>
                setAnnouncement({ ...announcement, content: e.target.value })
              }
              className="w-full bg-gray-700 text-white px-3 py-2 rounded"
              rows={4}
              required
            />
          </div>
          <div className="flex justify-end space-x-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 text-gray-300 hover:bg-gray-600 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded"
            >
              {submitText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 