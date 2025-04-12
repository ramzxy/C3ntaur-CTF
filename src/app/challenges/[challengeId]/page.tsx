'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ReactNode, ComponentPropsWithoutRef, HTMLAttributes } from 'react';
import { Righteous } from 'next/font/google';

const monoton = Righteous({weight: '400'});

interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  difficulty: string;
  isSolved: boolean;
  category: string;
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

type MarkdownComponentProps<T extends keyof HTMLElementTagNameMap> = ComponentPropsWithoutRef<T> & {
  children?: ReactNode;
};

interface LinkProps extends MarkdownComponentProps<any> {
  href?: string;
}

const MarkdownComponents = {
  h1: ({ children, ...props }: MarkdownComponentProps<'h1'>) => <h1 className="text-4xl font-bold my-6" {...props}>{children}</h1>,
  h2: ({ children, ...props }: MarkdownComponentProps<'h2'>) => <h2 className="text-3xl font-bold my-5" {...props}>{children}</h2>,
  h3: ({ children, ...props }: MarkdownComponentProps<'h3'>) => <h3 className="text-2xl font-bold my-4" {...props}>{children}</h3>,
  h4: ({ children, ...props }: MarkdownComponentProps<'h4'>) => <h4 className="text-xl font-bold my-3" {...props}>{children}</h4>,
  p: ({ children, ...props }: MarkdownComponentProps<'p'>) => <p className="my-4" {...props}>{children}</p>,
  ul: ({ children, ...props }: MarkdownComponentProps<'ul'>) => <ul className="list-disc list-inside my-4" {...props}>{children}</ul>,
  ol: ({ children, ...props }: MarkdownComponentProps<'ol'>) => <ol className="list-decimal list-inside my-4" {...props}>{children}</ol>,
  li: ({ children, ...props }: MarkdownComponentProps<'li'>) => <li className="my-1" {...props}>{children}</li>,
  code: ({ children, ...props }: MarkdownComponentProps<'code'>) => <code className="bg-gray-800 px-2 py-1 rounded" {...props}>{children}</code>,
  pre: ({ children, ...props }: MarkdownComponentProps<'pre'>) => <pre className="bg-gray-800 p-4 rounded my-4 overflow-x-auto" {...props}>{children}</pre>,
  blockquote: ({ children, ...props }: MarkdownComponentProps<'blockquote'>) => <blockquote className="border-l-4 border-white pl-4 my-4 italic" {...props}>{children}</blockquote>,
  a: ({ children, ...props }: MarkdownComponentProps<'a'>) => <a className="text-blue-400 hover:underline" {...props}>{children}</a>,
  strong: ({ children, ...props }: MarkdownComponentProps<'strong'>) => <strong className="font-bold" {...props}>{children}</strong>,
  em: ({ children, ...props }: MarkdownComponentProps<'em'>) => <em className="italic" {...props}>{children}</em>,
};

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

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ hintId }),
      });

      if (response.ok) {
        // Refresh hints to show the purchased hint
        const hintsRes = await fetch(`/api/hints?challengeId=${challengeId}`);
        const hintsData = await hintsRes.json();
        setHints(hintsData);
      } else {
        const data = await response.json();
        alert(data.error || 'Error purchasing hint');
      }
    } catch (error) {
      console.error('Error purchasing hint:', error);
      alert('Error purchasing hint');
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ challengeId, flag }),
      });

      const data = await response.json();
      setSubmissionStatus(data);

      if (data.isCorrect) {
        // Refresh the challenge data to update isSolved status
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
    return <div className="flex items-center justify-center h-screen text-white">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-white">
      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <div className="w-full max-w-4xl shadow-lg overflow-hidden">
          <div className="h-[60vh] overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
            <h1 className={`text-5xl font-bold mb-4 float-start ${monoton.className}`}>{challenge.title}</h1>
            <div className="float-end flex items-baseline h-max">
              <span className="px-3 py-1">
                {challenge.category}
              </span>
              <span className="px-3 py-1">
                {challenge.difficulty}
              </span>
              <span className="px-3 py-1 font-bold">
                {challenge.points} points
              </span>
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

            {/* Files Section */}
            {challenge.files && challenge.files.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Files</h2>
                <div className="h-2 border-t-2 border-gray-700 border-b-2 mb-4"></div>
                <div className="space-y-2">
                  {challenge.files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-800 transition-colors">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">📎</span>
                        <span>{file.name}</span>
                        <span className="text-gray-400 text-sm">({file.size})</span>
                      </div>
                      <button
                        onClick={() => handleDownload(file.url, file.name)}
                        className="px-3 py-1 border border-white hover:bg-white hover:text-black transition-colors"
                      >
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hints Section - Only show if user is authenticated */}
            {session && hints.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Hints</h2>
                <div className="h-2 border-t-2 border-gray-700 border-b-2 mb-6"></div>
                <div className="space-y-4">
                  {hints.map((hint) => (
                    <div key={hint.id} className="">
                      <div className="flex justify-between items-center mb-2">
                        <span>Cost: {hint.cost} points</span>
                        {!hint.isPurchased ? (
                          <button
                            onClick={() => handlePurchaseHint(hint.id)}
                            disabled={isPurchasing}
                            className="px-4 py-2 border-2 border-white hover:bg-white hover:text-black transition-colors disabled:opacity-50"
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

            {/* Flag submission - Only show if user is authenticated */}
            {session ? (
              <>
                {!challenge.isSolved && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="flag" className="block text-xl font-semibold mb-4">
                        Submit Flag
                      </label>
                      <input
                        type="text"
                        id="flag"
                        value={flag}
                        onChange={(e) => setFlag(e.target.value)}
                        className="w-full px-4 py-2 bg-black border-2 border-white focus:outline-none"
                        placeholder="Enter your flag here"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-4 py-2 border-2 border-white hover:bg-white hover:text-black transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Flag'}
                    </button>
                  </form>
                )}

                {submissionStatus && (
                  <div className={`mt-4 p-4 border-2 ${submissionStatus.isCorrect ? 'border-green-500' : 'border-red-500'}`}>
                    {submissionStatus.message}
                  </div>
                )}

                {challenge.isSolved && (
                  <div className="mt-4 p-4 border-2 border-green-500">
                    Challenge solved! 🎉
                  </div>
                )}
              </>
            ) : (
              <div className="mt-4 p-4 border-2 border-white">
                <p>Please <a href="/auth/signin" className="text-blue-400 hover:underline">sign in</a> to submit a flag for this challenge.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}