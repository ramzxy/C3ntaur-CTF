import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface GameConfig {
  startTime: string;
  endTime: string;
  isActive: boolean;
}

interface GameClockProps {
  timeLeft: string;
  gameConfig: GameConfig | null;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function GameClock({ timeLeft, gameConfig, isOpen, setIsOpen }: GameClockProps) {
  return (
    <div className="">
      
      {isOpen && (
        <div className="text-center p-2">
          <div className="text-4xl font-bold text-white mb-2">{timeLeft}</div>
          {gameConfig && (
            <div className="text-white">
              <div>Start: {new Date(gameConfig.startTime).toLocaleString()}</div>
              <div>End: {new Date(gameConfig.endTime).toLocaleString()}</div>
            </div>
          )}
        </div>
      )}
      {/* Fixed header at bottom */}
      <button
          className="flex items-center justify-between w-full z-10 text-white p-2 border-b-white border-b-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-semibold">GAMECLOCK</h3>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </button>
    </div>
  );
} 