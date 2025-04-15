import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import * as GiIcons from 'react-icons/gi';

interface Team {
  id: string;
  name: string;
  score: number;
  color?: string;
  icon?: string;
}

interface LeaderboardProps {
  teams: Team[];
  currentUserTeam: Team | null;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  isMobile: boolean;
}

export default function Leaderboard({ teams, currentUserTeam, isOpen, setIsOpen, isMobile }: LeaderboardProps) {
  // Sort teams by score in descending order
  const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
  
  // Find current user's team rank
  const userTeamRank = currentUserTeam 
    ? sortedTeams.findIndex(team => team.id === currentUserTeam.id) + 1 
    : null;

  // Helper function to get the icon component
  const getTeamIcon = (iconName?: string, color?: string) => {
    if (!iconName) return null;
    const IconComponent = (GiIcons as any)[iconName];
    return IconComponent ? (
      <IconComponent 
        className="w-9 h-9" 
        style={{ color: color || '#fff' }}
      />
    ) : null;
  };

  return (
    <div className={`bg-black ${!isMobile && 'border'} ${isMobile && 'border-t-2'}`}>
      <div className="flex flex-col">
        {/* Fixed header at top */}
        <button
          className="flex items-center justify-between w-full text-white p-2 relative border-b-2 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-lg font-semibold">LEADERBOARD</h3>
          {isOpen ? (
            <FaChevronUp className="h-5 w-5" />
          ) : (
            <FaChevronDown className="h-5 w-5" />
          )}
        </button>

        {/* Content area with scroll */}
        <div 
          className={`overflow-y-auto transition-[max-height] duration-300 ease-in-out ${
            isOpen ? (isMobile ? 'max-h-[50vh]' : 'max-h-[calc(33vh-2.5rem)]') : 'max-h-0'
          }`}
        >
          <div className="space-y-1 p-2">
            {/* Current user's team details */}
            {currentUserTeam && (
              <div className="p-2">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    {getTeamIcon(currentUserTeam.icon, currentUserTeam.color)}
                    <h3 className="text-lg font-bold text-white">{currentUserTeam.name}</h3>
                  </div>
                  <div className="text-sm text-gray-400">
                    <div>Rank: #{userTeamRank}</div>
                    <div>Score: {currentUserTeam.score} pts</div>
                  </div>
                </div>
              </div>
            )}

            {/* Divider */}
            {currentUserTeam && sortedTeams.length > 0 && (
              <div className="border-t border-gray-700 my-2" />
            )}

            {/* Other teams list */}
            {sortedTeams.map((team, index) => (
              <div key={team.id} className="p-2">
                <div className="flex items-center gap-2">
                  {/* Team icon */}
                  <div>
                    {getTeamIcon(team.icon, team.color)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-white">{team.name}</span>
                      <span className="text-gray-400 text-sm">#{index + 1}</span>
                    </div>
                    <div className="text-gray-400 text-sm">{team.score} pts</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}