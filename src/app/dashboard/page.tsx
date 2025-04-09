'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { StarIcon, FlagIcon } from '@heroicons/react/24/outline';

interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  category: string;
  difficulty: string;
  isActive: boolean;
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null);
  const [flag, setFlag] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch('/api/challenges');
        const data = await response.json();
        setChallenges(data);
      } catch (error) {
        console.error('Error fetching challenges:', error);
      }
    };

    fetchChallenges();
  }, []);

  const handleSubmitFlag = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedChallenge || !flag) return;

    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          challengeId: selectedChallenge.id,
          flag,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Correct flag! Points awarded.');
        setFlag('');
        // Refresh challenges to update solved status
        const updatedResponse = await fetch('/api/challenges');
        const updatedData = await updatedResponse.json();
        setChallenges(updatedData);
      } else {
        setMessage(data.message || 'Incorrect flag. Try again!');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">CTF Challenges</h1>
          <div className="text-white">
            {session?.user?.teamId ? (
              <span>Team: {session.user.teamId}</span>
            ) : (
              <span>Individual Competitor</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges[0] && challenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`bg-gray-800 rounded-lg p-6 shadow-lg cursor-pointer transition-all hover:shadow-indigo-500/50 ${
                selectedChallenge?.id === challenge.id ? 'ring-2 ring-indigo-500' : ''
              }`}
              onClick={() => setSelectedChallenge(challenge)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{challenge.title}</h3>
                <div className="flex items-center">
                  <StarIcon className="h-5 w-5 text-yellow-500 mr-1" />
                  <span className="text-white">{challenge.points}</span>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{challenge.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-indigo-400">{challenge.category}</span>
                <span className="text-sm text-gray-400">{challenge.difficulty}</span>
              </div>
            </div>
          ))}
        </div>

        {selectedChallenge && (
          <div className="mt-8 bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">{selectedChallenge.title}</h2>
            <p className="text-gray-300 mb-6">{selectedChallenge.description}</p>
            
            <form onSubmit={handleSubmitFlag} className="space-y-4">
              <div>
                <label htmlFor="flag" className="block text-sm font-medium text-gray-300">
                  Submit Flag
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="flag"
                    id="flag"
                    value={flag}
                    onChange={(e) => setFlag(e.target.value)}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter flag here..."
                  />
                  <button
                    type="submit"
                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <FlagIcon className="h-5 w-5 mr-2" />
                    Submit
                  </button>
                </div>
              </div>
            </form>

            {message && (
              <div className="mt-4 p-4 rounded-md bg-gray-700">
                <p className="text-white">{message}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 