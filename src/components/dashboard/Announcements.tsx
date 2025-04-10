import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface Announcement {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

interface AnnouncementsProps {
  announcements: Announcement[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Announcements({ announcements, isOpen, setIsOpen }: AnnouncementsProps) {
  return (
    <div className="bg-transparent border-t-2 border-t-white p-2">
      <button
        className="flex items-center justify-between w-full text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold">ANNOUNCEMENTS</h3>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5" />
        ) : (
          <ChevronDownIcon className="h-5 w-5" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 space-y-2">
          {announcements[0] && announcements.map((announcement) => (
            <div key={announcement.id} className="p-2">
              <h4 className="text-white font-semibold">{announcement.title}</h4>
              <p className="text-white mt-1 float-start">{announcement.content}</p>
              <p className="text-white text-sm mt-2 float-end">
                {new Date(announcement.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 