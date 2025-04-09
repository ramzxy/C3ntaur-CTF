'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Team {
  id: string;
  name: string;
  code: string;
  score: number;
  members: {
    id: string;
    alias: string;
    name: string;
    isTeamLeader: boolean;
  }[];
}

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [team, setTeam] = useState<Team | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    } else if (status === 'authenticated' && session?.user?.teamId) {
      fetchTeamData();
    }
  }, [status, session, router]);

  const fetchTeamData = async () => {
    try {
      const response = await fetch(`/api/teams/${session?.user?.teamId}`);
      if (response.ok) {
        const data = await response.json();
        setTeam(data);
      }
    } catch (error) {
      console.error('Error fetching team data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* User Information */}
          <div className="bg-white/10 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">User Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-gray-400">Name</label>
                <p className="text-white">{session?.user?.name}</p>
              </div>
              <div>
                <label className="text-gray-400">Alias</label>
                <p className="text-white">{session?.user?.alias}</p>
              </div>
              <div>
                <label className="text-gray-400">Role</label>
                <p className="text-white">
                  {session?.user?.isAdmin ? 'Admin' : session?.user?.isTeamLeader ? 'Team Leader' : 'Member'}
                </p>
              </div>
            </div>
          </div>

          {/* Team Information */}
          {team && (
            <div className="bg-white/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Team Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-gray-400">Team Name</label>
                  <p className="text-white">{team.name}</p>
                </div>
                <div>
                  <label className="text-gray-400">Team Code</label>
                  <p className="text-white font-mono">{team.code}</p>
                </div>
                <div>
                  <label className="text-gray-400">Team Score</label>
                  <p className="text-white">{team.score} points</p>
                </div>
                <div>
                  <label className="text-gray-400">Team Members</label>
                  <div className="mt-2 space-y-2">
                    {team.members.map((member) => (
                      <div key={member.id} className="flex items-center space-x-2">
                        <span className="text-white">{member.alias}</span>
                        {member.isTeamLeader && (
                          <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                            Leader
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 