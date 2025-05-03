import { useState, useEffect, useCallback } from 'react';
import { FaPlus, FaDownload, FaUpload } from "react-icons/fa";
import { Challenge, NewChallenge, UnlockCondition } from './types';
import ChallengeModal from './ChallengeModal';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { toast } from 'react-hot-toast';

export default function ChallengesTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingChallenge, setEditingChallenge] = useState<Challenge | NewChallenge | null>(null);
  const [challengeToDelete, setChallengeToDelete] = useState<Challenge | null>(null);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newChallenge, setNewChallenge] = useState<NewChallenge>({
    title: '',
    description: '',
    category: '',
    points: 0,
    flag: '',
    flags: [],
    multipleFlags: false,
    difficulty: 'easy',
    isLocked: false,
    files: [],
    hints: [],
    unlockConditions: []
  });

  const resetNewChallenge = () => {
    setNewChallenge({
      title: '',
      description: '',
      category: '',
      points: 0,
      flag: '',
      flags: [],
      multipleFlags: false,
      difficulty: 'easy',
      isLocked: false,
      files: [],
      hints: [],
      unlockConditions: []
    });
  };

  const fetchChallenges = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/admin/challenges');
      if (!response.ok) {
        throw new Error('Failed to fetch challenges');
      }
      const data = await response.json();
      setChallenges(data);
    } catch (err: any) {
      setError(err.message);
      toast.error(`Error fetching challenges: ${err.message}`);
      console.error('Error fetching challenges:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchChallenges();
  }, [fetchChallenges]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/challenges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newChallenge,
          unlockConditions: newChallenge.unlockConditions?.map(cond => ({ ...cond })) || []
        }),
      });

      if (response.ok) {
        resetNewChallenge();
        setIsModalOpen(false);
        await fetchChallenges();
      }
    } catch (error) {
      console.error('Error creating challenge:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch('/api/admin/challenges', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setChallengeToDelete(null);
        await fetchChallenges();
      }
    } catch (error) {
      console.error('Error deleting challenge:', error);
    }
  };

  const handleEdit = (challenge: Challenge) => {
    setEditingChallenge(challenge);
    setIsEditModalOpen(true);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingChallenge) return;

    try {
      const response = await fetch('/api/admin/challenges', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingChallenge),
      });

      if (response.ok) {
        setIsEditModalOpen(false);
        setEditingChallenge(null);
        await fetchChallenges();
      }
    } catch (error) {
      console.error('Error updating challenge:', error);
    }
  };

  const handleExportChallenges = async () => {
    try {
      const response = await fetch('/api/admin/challenges/bulk');
      const challenges = await response.json();
      
      // Create and download file
      const blob = new Blob([JSON.stringify(challenges, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'challenges-export.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error exporting challenges:', error);
      toast.error('Error exporting challenges. Check console.');
    }
  };

  const handleImportChallenges = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    try {
      const file = e.target.files[0];
      const content = await file.text();
      const challenges = JSON.parse(content);

      const response = await fetch('/api/admin/challenges/bulk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(challenges),
      });

      if (response.ok) {
        await fetchChallenges();
      } else {
        console.error('Error importing challenges:', await response.text());
        toast.error('Error importing challenges. Check console.');
      }
    } catch (error) {
      console.error('Error importing challenges:', error);
      toast.error('Error processing import file. Check console.');
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div className="text-red-400">Error loading challenges: {error}</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-2xl font-semibold mb-6">Challenges</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white hover:bg-blue-700"
          >
            <FaPlus className="h-5 w-5 mr-2" />
            Add Challenge
          </button>
          
          <button
            onClick={handleExportChallenges}
            className="flex items-center px-4 py-2 bg-green-600 text-white hover:bg-green-700"
          >
            <FaDownload className="h-5 w-5 mr-2" />
            Export All
          </button>

          <label className="flex items-center px-4 py-2 bg-yellow-600 text-white hover:bg-yellow-700 cursor-pointer">
            <FaUpload className="h-5 w-5 mr-2" />
            Import
            <input
              type="file"
              accept=".json"
              onChange={handleImportChallenges}
              className="hidden"
            />
          </label>
        </div>
      </div>
      {/* Table Container with horizontal scroll on mobile */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-gray-300">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Points</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Difficulty</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {challenges.map((challenge) => (
              <tr key={challenge.id} className="border-t border-gray-700 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">{challenge.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">{challenge.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {challenge.multipleFlags ? (
                    <div className="flex flex-col gap-1">
                      {challenge.flags.map((flag, index) => (
                        <span key={flag.id || index} className="text-sm">
                          {flag.points} pts
                        </span>
                      ))}
                      <span className="text-xs text-gray-500">
                        Total: {challenge.flags.reduce((sum, flag) => sum + flag.points, 0)} pts
                      </span>
                    </div>
                  ) : (
                    challenge.points
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{challenge.difficulty}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col gap-1">
                    <span className={`max-w-fit inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      challenge.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {challenge.isActive ? 'Active' : 'Inactive'}
                    </span>
                    {challenge.isLocked && (
                      <span className="max-w-fit inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Locked
                      </span>
                    )}
                    {challenge.multipleFlags && (
                      <span className="max-w-fit inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Multiple Flags
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-row gap-2 justify-end">
                    <button
                      onClick={() => handleEdit(challenge)}
                      className="bg-blue-900 text-blue-300 px-3 py-1 rounded hover:bg-blue-800 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => challengeToDelete?.id === challenge.id 
                        ? handleDelete(challenge.id)
                        : setChallengeToDelete(challenge)
                      }
                      onMouseLeave={() => setChallengeToDelete(null)}
                      className={`px-3 py-1 rounded transition-colors ${
                        challengeToDelete?.id === challenge.id
                          ? 'bg-red-700 text-red-200 hover:bg-red-600'
                          : 'bg-red-900 text-red-300 hover:bg-red-800'
                      }`}
                    >
                      {challengeToDelete?.id === challenge.id ? 'Confirm?' : 'Delete'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Challenge Modal */}
      {isModalOpen && (
        <ChallengeModal
          title="Add New Challenge"
          challenge={newChallenge}
          allChallenges={challenges}
          setChallenge={setNewChallenge as any}
          onDataRefresh={fetchChallenges}
          onSubmit={handleSubmit}
          onClose={() => setIsModalOpen(false)}
          submitText="Create"
        />
      )}

      {/* Edit Challenge Modal */}
      {isEditModalOpen && editingChallenge && (
        <ChallengeModal
          title={`Edit Challenge: ${editingChallenge.title}`}
          challenge={editingChallenge}
          allChallenges={challenges}
          setChallenge={setEditingChallenge as any}
          onDataRefresh={fetchChallenges}
          onSubmit={handleUpdate}
          onClose={() => setIsEditModalOpen(false)}
          submitText="Save Changes"
          isEditing={true}
        />
      )}
    </div>
  );
}