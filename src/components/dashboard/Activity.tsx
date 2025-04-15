import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Team {
  id: string;
  name: string;
  score: number;
}

interface ActivityLog {
  id: string;
  type: string;
  description: string;
  createdAt: string;
  team?: Team;
}

interface ActivityProps {
  activities: ActivityLog[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
}

export default function Activity({ activities, isOpen, setIsOpen, isMobile = false }: ActivityProps) {
  return (
    <div className={`bg-black ${!isMobile && 'border'}`}>
      <button
        className="flex items-center justify-between w-full text-white p-2 relative border-b-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold">ACTIVITY</h3>
        {isOpen ? (
          <FaChevronUp className="h-5 w-5 transition-transform" />
        ) : (
          <FaChevronDown className="h-5 w-5 transition-transform" />
        )}
      </button>

      <div
        className={`overflow-y-auto transition-[max-height] duration-300 ease-in-out ${isOpen ? (isMobile ? 'max-h-[50vh]' : 'max-h-[33vh]') : 'max-h-0'
          }`}
      >
        <div className={`${isMobile ? 'max-h-[50vh]' : 'max-h-[33vh]'} min-h-[33vh]`}>
          <div className="space-y-1 p-2">
            {activities[0] ? (
              activities.map((activity) => (
                <div
                  key={activity.id}
                  className="p-2"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-400">
                        {activity.type.replace('_', ' ')}
                      </span>
                      <span className="text-sm text-gray-400">
                        {new Date(activity.createdAt).toLocaleTimeString()}
                      </span>
                    </div>
                    <p className="text-white text-sm mt-0.5">{activity.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-gray-400 py-2">
                No activity yet
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}