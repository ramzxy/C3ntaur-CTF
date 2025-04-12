import { useState } from 'react';
import { PlusIcon, ArrowDownTrayIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { Challenge, NewChallenge } from './types';
import ChallengeModal from './ChallengeModal';

interface ChallengesTabProps {
  challenges: Challenge[];
  fetchData: () => Promise<void>;
}

export default function ChallengesTab({ challenges, fetchData }: ChallengesTabProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingChallenge, setEditingChallenge] = useState<Challenge | null>(null);
  const [newChallenge, setNewChallenge] = useState<NewChallenge>({
    title: '',
    description: '',
    category: '',
    points: 0,
    flag: '',
    difficulty: 'easy',
    isLocked: false,
    files: [],
    hints: []
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/challenges', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newChallenge),
      });

      if (response.ok) {
        setNewChallenge({
          title: '',
          description: '',
          category: '',
          points: 0,
          flag: '',
          difficulty: 'easy',
          isLocked: false,
          files: [],
          hints: []
        });
        setIsModalOpen(false);
        fetchData();
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
        fetchData();
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
        body: JSON.stringify({
          ...editingChallenge,
          files: editingChallenge.files.map(file => ({
            name: file.name,
            path: file.path,
            size: file.size
          })),
          hints: editingChallenge.hints.map(hint => ({
            content: hint.content,
            cost: hint.cost,
            challengeId: hint.challengeId,
            id: hint.id,
            createdAt: hint.createdAt,
            updatedAt: hint.updatedAt
          }))
        }),
      });

      if (response.ok) {
        setIsEditModalOpen(false);
        setEditingChallenge(null);
        fetchData();
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
        fetchData(); // Refresh the challenges list
      } else {
        console.error('Error importing challenges:', await response.text());
      }
    } catch (error) {
      console.error('Error importing challenges:', error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <PlusIcon className="h-5 w-5 mr-2" />
            Add Challenge
          </button>
          
          {/* Export Button */}
          <button
            onClick={handleExportChallenges}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
            Export All
          </button>

          {/* Import Button */}
          <label className="flex items-center px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 cursor-pointer">
            <ArrowUpTrayIcon className="h-5 w-5 mr-2" />
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
      <div className="border border-gray-700 rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-800">
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Points</th>
              <th className="px-6 py-3 text-left">Difficulty</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {challenges.map((challenge) => (
              <tr key={challenge.id} className="border-t border-gray-700 hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">{challenge.title}</td>
                <td className="px-6 py-4">{challenge.category}</td>
                <td className="px-6 py-4">{challenge.points}</td>
                <td className="px-6 py-4 capitalize">{challenge.difficulty}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded ${
                    challenge.isActive ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                  }`}>
                    {challenge.isActive ? 'Active' : 'Inactive'}
                  </span>
                  {challenge.isLocked && (
                    <span className="ml-2 px-2 py-1 rounded bg-yellow-900 text-yellow-300">
                      Locked
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => handleEdit(challenge)}
                    className="bg-blue-900 text-blue-300 px-3 py-1 rounded hover:bg-blue-800 transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(challenge.id)}
                    className="bg-red-900 text-red-300 px-3 py-1 rounded hover:bg-red-800 transition-colors"
                  >
                    Delete
                  </button>
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
          setChallenge={setNewChallenge}
          onSubmit={handleSubmit}
          onClose={() => setIsModalOpen(false)}
          submitText="Create"
        />
      )}

      {/* Edit Challenge Modal */}
      {isEditModalOpen && editingChallenge && (
        <ChallengeModal
          title="Edit Challenge"
          challenge={editingChallenge}
          setChallenge={setEditingChallenge}
          onSubmit={handleUpdate}
          onClose={() => {
            setIsEditModalOpen(false);
            setEditingChallenge(null);
          }}
          submitText="Save Changes"
          isEditing={true}
        />
      )}
    </div>
  );
}