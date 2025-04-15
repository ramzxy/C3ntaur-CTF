import React from 'react';
import { Challenge, NewChallenge } from './types';

interface ChallengeModalProps {
  title: string;
  challenge: Challenge | NewChallenge;
  setChallenge: React.Dispatch<React.SetStateAction<Challenge | NewChallenge>>;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onClose: () => void;
  submitText: string;
  isEditing?: boolean;
}

export default function ChallengeModal({
  title,
  challenge,
  setChallenge,
  onSubmit,
  onClose,
  submitText,
  isEditing = false
}: ChallengeModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 p-6 w-full max-w-md rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
            <input
              type="text"
              value={challenge.title}
              onChange={(e) =>
                setChallenge({ ...challenge, title: e.target.value })
              }
              className="w-full bg-gray-700 text-white px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
            <textarea
              value={challenge.description}
              onChange={(e) =>
                setChallenge({ ...challenge, description: e.target.value })
              }
              className="w-full bg-gray-700 text-white px-3 py-2 rounded"
              rows={4}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
            <input
              type="text"
              value={challenge.category}
              onChange={(e) =>
                setChallenge({ ...challenge, category: e.target.value })
              }
              className="w-full bg-gray-700 text-white px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Points</label>
            <input
              type="number"
              value={challenge.points}
              onChange={(e) =>
                setChallenge({ ...challenge, points: parseInt(e.target.value) })
              }
              className="w-full bg-gray-700 text-white px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Flag</label>
            <input
              type="text"
              value={challenge.flag}
              onChange={(e) =>
                setChallenge({ ...challenge, flag: e.target.value })
              }
              className="w-full bg-gray-700 text-white px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Difficulty</label>
            <select
              value={challenge.difficulty}
              onChange={(e) =>
                setChallenge({ ...challenge, difficulty: e.target.value })
              }
              className="w-full bg-gray-700 text-white px-3 py-2 rounded"
              required
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          
          {isEditing && (
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isActive"
                checked={'isActive' in challenge ? challenge.isActive : false}
                onChange={(e) =>
                  setChallenge({ ...challenge, isActive: e.target.checked })
                }
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600"
              />
              <label htmlFor="isActive" className="ml-2 block text-sm text-gray-300">
                Active
              </label>
            </div>
          )}
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isLocked"
              checked={challenge.isLocked}
              onChange={(e) =>
                setChallenge({ ...challenge, isLocked: e.target.checked })
              }
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600"
            />
            <label htmlFor="isLocked" className="ml-2 block text-sm text-gray-300">
              Lock Challenge
            </label>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Files</label>
            <input
              type="file"
              multiple
              onChange={async (e) => {
                const files = await Promise.all(
                  Array.from(e.target.files || []).map(async (file) => {
                    const formData = new FormData();
                    formData.append('file', file);
                    
                    const response = await fetch('/api/files/upload', {
                      method: 'POST',
                      body: formData
                    });
                    
                    if (!response.ok) {
                      throw new Error('Failed to upload file');
                    }
                    
                    return await response.json();
                  })
                );
                
                setChallenge({ ...challenge, files: [...challenge.files, ...files] });
              }}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded"
            />
            {challenge.files && challenge.files.length > 0 && (
              <div className="mt-2 space-y-2">
                {challenge.files.map((file, index) => (
                  <div key={file.id || index} className="flex items-center justify-between bg-gray-700 p-2 rounded">
                    <span className="text-sm text-gray-300">{file.name}</span>
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          const filename = file.path.split('/').pop();
                          const response = await fetch(`/api/files/${filename}`, {
                            method: 'DELETE'
                          });
                          
                          if (response.ok) {
                            const updatedFiles = challenge.files.filter((_, i) => i !== index);
                            setChallenge({ ...challenge, files: updatedFiles });
                          } else {
                            throw new Error('Failed to delete file');
                          }
                        } catch (error) {
                          console.error('Error deleting file:', error);
                          alert('Failed to delete file');
                        }
                      }}
                      className="text-red-400 hover:text-red-300"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Hints</label>
            <div className="space-y-2">
              {challenge.hints.map((hint, index) => (
                <div key={hint.id || index} className="flex space-x-2">
                  <input
                    type="text"
                    value={hint.content}
                    onChange={(e) => {
                      const newHints = [...challenge.hints];
                      newHints[index] = { ...newHints[index], content: e.target.value };
                      setChallenge({ ...challenge, hints: newHints });
                    }}
                    className="flex-1 bg-gray-700 text-white px-3 py-2 rounded"
                    placeholder="Hint content"
                  />
                  <input
                    type="number"
                    value={hint.cost}
                    onChange={(e) => {
                      const newHints = [...challenge.hints];
                      newHints[index] = { ...newHints[index], cost: parseInt(e.target.value) };
                      setChallenge({ ...challenge, hints: newHints });
                    }}
                    className="w-20 bg-gray-700 text-white px-3 py-2 rounded"
                    placeholder="Cost"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const newHints = [...challenge.hints];
                      newHints.splice(index, 1);
                      setChallenge({ ...challenge, hints: newHints });
                    }}
                    className="px-2 py-1 bg-red-600 text-white hover:bg-red-700 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => {
                  const challengeId = 'id' in challenge ? challenge.id : '';
                  setChallenge({
                    ...challenge,
                    hints: [...challenge.hints, { 
                      content: '', 
                      cost: 0, 
                      challengeId, 
                      id: '', 
                      createdAt: '', 
                      updatedAt: '' 
                    }]
                  });
                }}
                className="w-full px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded"
              >
                Add Hint
              </button>
            </div>
          </div>
          
          <div className="flex justify-end space-x-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 text-gray-300 hover:bg-gray-600 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded"
            >
              {submitText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}