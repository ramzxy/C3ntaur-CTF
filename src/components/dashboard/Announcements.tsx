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
    <div className="border bg-black">
      <div className="flex flex-col">
        <button
          className="flex items-center justify-between w-full text-white p-2 relative border-b-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-semibold">ANNOUNCEMENTS</h3>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>

        <div 
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            isOpen ? 'max-h-[calc(33vh-2.5rem)]' : 'max-h-0'
          }`}
        >
          <div className="space-y-2 p-2 min-h-[33vh]">
            {announcements[0] && announcements.map((announcement) => (
              <div key={announcement.id} className="p-2 space-y-2">
                <h4 className="text-white font-semibold">{announcement.title}</h4>
                <p className="text-white">{announcement.content}</p>
                <p className="text-gray-400 text-sm text-right">
                  {new Date(announcement.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}