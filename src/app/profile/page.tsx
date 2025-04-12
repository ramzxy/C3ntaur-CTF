'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import * as GiIcons from 'react-icons/gi';

interface Team {
  id: string;
  name: string;
  code: string;
  score: number;
  icon?: string;
  color?: string;
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
        console.log('Team data received:', data);
        setTeam(data);
      }
    } catch (error) {
      console.error('Error fetching team data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (team) {
      console.log('Team state in component:', team);
      console.log('Available GiIcons:', Object.keys(GiIcons).slice(0, 10), '... and more');
      if (team.icon) {
        console.log('Team icon exists:', team.icon);
        console.log('Icon component exists:', !!GiIcons[team.icon as keyof typeof GiIcons]);
      }
    }
  }, [team]);

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen text-white flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white flex items-center justify-center">
      <div className="max-w-4xl w-full px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">PROFILE</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* User Information */}
          <div className=" p-6 border-white border-2">
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
            <div className="border-white border-2 p-6">
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
                {team.icon && (
                  <div>
                    <label className="text-gray-400">Team Icon</label>
                    <div className="mt-2">
                      <span style={{ color: team.color || 'white' }} className="inline-block">
                        {GiIcons[team.icon as keyof typeof GiIcons] ? 
                          React.createElement(GiIcons[team.icon as keyof typeof GiIcons], { size: 32 }) 
                          : team.icon}
                      </span>
                    </div>
                  </div>
                )}
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