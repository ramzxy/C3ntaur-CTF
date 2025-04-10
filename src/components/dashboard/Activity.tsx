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
    <div className="relative h-[33vh]">

      {/* Content area */}
      <div className="h-full flex flex-col">
        {/* Activity items with scroll */}
        <div 
          className={`flex-1 overflow-y-auto duration-300  ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        >
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

        {/* Fixed header at bottom */}
        <button
          className="flex items-center justify-between w-full z-10 text-white p-2 border-b-white border-b-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-semibold">ACTIVITY</h3>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );
} 