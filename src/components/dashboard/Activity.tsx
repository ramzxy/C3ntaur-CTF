import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

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
}

export default function Activity({ activities, isOpen, setIsOpen }: ActivityProps) {
  return (
    <div className="relative bg-black border">
      <button
        className="flex items-center justify-between w-full z-20 text-white p-2 border-t-2 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold">ACTIVITY</h3>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 transition-transform" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 transition-transform" />
        )}
      </button>

      <div 
        className={`absolute bottom-full left-0 right-0 transition-all duration-300 ease-in-out bg-black origin-bottom border border-b-0 ${
          isOpen ? 'max-h-[33vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="overflow-y-auto max-h-[33vh] min-h-[33vh]">
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