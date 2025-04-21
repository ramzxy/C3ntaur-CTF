'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Righteous } from 'next/font/google';
import { MarkdownComponents } from '@/components/MarkdownComponents';
import toast from 'react-hot-toast';
import { IoArrowBack } from 'react-icons/io5';

const righteous = Righteous({ weight: '400', subsets: ['latin'] });

interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  difficulty: string;
  isSolved: boolean;
  category: string;
  solvedByTeamId?: string;
  files?: {
    name: string;
    url: string;
    size: string;
  }[];
}

interface Hint {
  id: string;
  content: string;
  cost: number;
  isPurchased: boolean;
}

export default function ChallengePage() {
  const params = useParams();
  const router = useRouter();
  const { data: session } = useSession();
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [hints, setHints] = useState<Hint[]>([]);
  const [flag, setFlag] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState<{
    message: string;
    isCorrect: boolean;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPurchasing, setIsPurchasing] = useState(false);
  const challengeId = params.challengeId as string;

  const handleDownload = async (url: string, filename: string) => {
    try {
      const response = await fetch(`/api/files/download?filename=${encodeURIComponent(filename)}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(downloadUrl);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading file:', error);
      alert('Error downloading file. Please try again.');
    }
  };

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const [challengeRes, hintsRes] = await Promise.all([
          fetch(`/api/challenges/${challengeId}`),
          session ? fetch(`/api/hints?challengeId=${challengeId}`) : Promise.resolve({ json: () => [] })
        ]);

        if (!challengeRes.ok) {
          router.push('/dashboard');
          return;
        }

        const [challengeData, hintsData] = await Promise.all([
          challengeRes.json(),
          hintsRes.json ? hintsRes.json() : []
        ]);

        setChallenge(challengeData);
        setHints(hintsData);
      } catch (error) {
        console.error('Error fetching challenge:', error);
        router.push('/dashboard');
      }
    };

    fetchChallenge();
  }, [challengeId, router, session]);

  const handlePurchaseHint = async (hintId: string) => {
    setIsPurchasing(true);
    try {
      const response = await fetch('/api/hints/purchase', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hintId }),
      });

      if (response.ok) {
        const hintsRes = await fetch(`/api/hints?challengeId=${challengeId}`);
        const hintsData = await hintsRes.json();
        setHints(hintsData);
      } else {
        const data = await response.json();
        toast.error(data.error || 'Error purchasing hint');
      }
    } catch (error) {
      console.error('Error purchasing hint:', error);
      toast.error('Error purchasing hint');
    } finally {
      setIsPurchasing(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const response = await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ challengeId, flag }),
      });

      const data = await response.json();
      setSubmissionStatus(data);

      if (data.isCorrect) {
        const challengeResponse = await fetch(`/api/challenges/${challengeId}`);
        const challengeData = await challengeResponse.json();
        setChallenge(challengeData);
      }
    } catch (error) {
      console.error('Error submitting flag:', error);
      setSubmissionStatus({
        message: 'Error submitting flag. Please try again.',
        isCorrect: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!challenge) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <div className="w-full max-w-5xl overflow-hidden">
          <div className="h-[80vh] overflow-y-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h1 className={`text-5xl font-bold ${righteous.className}`}>{challenge.title}</h1>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2 md:mt-0">
                <span className="px-3 py-1 bg-green-500/10 border border-green-500 text-green-400 rounded-full font-mono text-sm">
                  {challenge.points} POINTS
                </span>
                <span className="px-3 py-1 bg-blue-500/10 border border-blue-500 text-blue-400 rounded-full font-mono text-sm">
                  {challenge.category.toUpperCase()}
                </span>
              </div>
            </div>
            <div className="border border-gray-400 w-full h-5 flex items-center justify-center relative clear-both">
              <div className="absolute inset-x-0 border-t-2 border-gray-400 w-full"></div>
            </div>
            <div className="prose prose-invert max-w-none mb-6 min-h-52">
              <ReactMarkdown
                components={MarkdownComponents}
                remarkPlugins={[remarkGfm]}
                skipHtml={false}
              >
                {challenge.description}
              </ReactMarkdown>
            </div>

            {challenge.files && challenge.files.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Files</h2>
                <div className="border-t-2 border-b-2 border-gray-700 mb-4" />
                <div className="space-y-2">
                  {challenge.files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-800">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">📎</span>
                        <span>{file.name}</span>
                        <span className="text-gray-400 text-sm">({file.size})</span>
                      </div>
                      <button
                        onClick={() => handleDownload(file.url, file.name)}
                        className="px-3 py-1 border border-white hover:bg-white hover:text-black"
                      >
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {session && hints.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Hints</h2>
                <div className="border-t-2 border-b-2 border-gray-700 mb-6" />
                <div className="space-y-4">
                  {hints.map((hint) => (
                    <div key={hint.id}>
                      <div className="flex justify-between items-center mb-2">
                        <span>Cost: {hint.cost} points</span>
                        {!hint.isPurchased ? (
                          <button
                            onClick={() => handlePurchaseHint(hint.id)}
                            disabled={isPurchasing}
                            className="px-4 py-2 border-2 border-white hover:bg-white hover:text-black disabled:opacity-50"
                          >
                            {isPurchasing ? 'Purchasing...' : 'Purchase Hint'}
                          </button>
                        ) : (
                          <span className="px-3 py-1">Purchased</span>
                        )}
                      </div>
                      {hint.isPurchased && (
                        <div className="mt-2 p-3 border-2 border-white">
                          {hint.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {session && !challenge.isSolved && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Submit Flag</h2>
                <div className="border-t-2 border-b-2 border-gray-700 mb-6" />
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      value={flag}
                      onChange={(e) => setFlag(e.target.value)}
                      placeholder="Enter flag"
                      className="flex-1 px-4 py-2 bg-black border border-white"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-4 py-2 border-2 border-white hover:bg-white hover:text-black disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </div>
                  {submissionStatus && (
                    <div className={`p-4 border-2 ${submissionStatus.isCorrect ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}>
                      {submissionStatus.message}
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}