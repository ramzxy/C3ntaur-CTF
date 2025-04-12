'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DetailedCategoryView from '@/components/DetailedCategoryView';
import { useRouter } from 'next/navigation';
import { IoArrowBack } from 'react-icons/io5';

interface Challenge {
  id: string;
  title: string;
  isSolved: boolean;
  isLocked: boolean;
  points: number;
  category: string;
  solvedBy: { teamId: string; teamColor: string }[];
}

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [hoveredChallenge, setHoveredChallenge] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dots, setDots] = useState('   '); // Initialize with 3 spaces
  const categoryId = params.categoryId as string;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const dotsTimer = setInterval(() => {
      setDots(prev => {
        if (prev === '   ') return '.  ';
        if (prev === '.  ') return '.. ';
        if (prev === '.. ') return '...';
        return '   ';
      });
    }, 500);

    return () => clearInterval(dotsTimer);
  }, []);

  // Calculate stats
  const totalPoints = challenges.reduce((sum, challenge) => sum + challenge.points, 0);
  const categoryName = challenges[0]?.category || decodeURIComponent(categoryId);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await fetch(`/api/challenges/categories/${categoryId}`);
        if (!response.ok) {
          router.push('/dashboard');
          return;
        }
        const data = await response.json();
        setChallenges(data.challenges);
      } catch (error) {
        console.error('Error fetching challenges:', error);
        router.push('/dashboard');
      }
    };

    fetchChallenges();
  }, [categoryId, router]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="max-w-[1800px] mx-auto flex gap-8">
        <div className="w-[1000px] h-[800px] border border-white overflow-hidden relative">
          {/* Corner boxes */}
          <div className="absolute top-0 left-0 w-[200px] h-[50px] bg-black border border-white z-10 p-3 text-blue-100">
            {currentTime.toLocaleTimeString()}
          </div>
          <div className="absolute top-[45px] left-0 w-[200px] h-[35px] z-10 p-3">
            EARTH TIME
          </div>
          <div className="absolute top-0 right-0 w-[200px] h-[50px] bg-black border border-white z-10 p-3 text-right text-red-100">
            <span className="font-normal">RECORDING</span>
            <span className="inline-block w-[24px] text-left font-mono">{dots}</span>
          </div>
          <div className="absolute top-[45px] right-0 w-[200px] h-[35px] z-10 p-3 text-right">
            VIDEO
          </div>
          <div className="absolute bottom-[50px] left-0 w-[200px] h-[45px] z-10 p-3">
            TARGET
          </div>
          <div className="absolute bottom-0 left-0 w-[275px] h-[50px] bg-black border border-white z-10 p-3">
            {hoveredChallenge ? hoveredChallenge.toUpperCase() : "NONE"}
          </div>
          <div className="absolute bottom-[50px] left-[275px] w-[200px] h-[45px] z-10 p-3">
            TYPE
          </div>
          <div className="absolute bottom-0 left-[275px] w-[200px] h-[50px] bg-black border border-white z-10 p-3">
            {hoveredChallenge ? "MODULE" : "CUBESAT"}
          </div>
          <div className="absolute bottom-[75px] right-0 w-[175px] h-[45px] z-10 text-right p-3">
            BATTERY
          </div>
          <div className="absolute bottom-0 right-0 w-[175px] h-[75px] bg-black border border-white z-10 flex items-center justify-center">
            <div className="battery-container relative w-[120px] h-[40px] border-2 border-white rounded-sm">
              {/* Battery tip */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-[4px] h-[16px] bg-white"></div>
              {/* Battery slots */}
              <div className="absolute inset-1 grid grid-cols-3 gap-1">
                <div className="bg-red-300"></div>
                <div className="border border-red-300 animate-battery-blink"></div>
                <div className="border border-red-300"></div>
              </div>
            </div>
          </div>
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <DetailedCategoryView
              challenges={challenges}
              hoveredChallenge={hoveredChallenge}
              setHoveredChallenge={setHoveredChallenge}
            />
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              minDistance={5}
              maxDistance={30}
            />
          </Canvas>
        </div>

        {/* Right column with Stats and Challenges */}
        <div className="flex flex-col h-[800px] relative">
          {/* Stats box */}
          <div className="w-[300px] border border-white p-4 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">CATEGORY</h2>
            <div className="space-y-2 text-white">
              <p>Category: <span className="text-blue-400">{categoryName}</span></p>
              <p>Total Challenges: <span className="text-blue-400">{challenges.length}</span></p>
              <p>Total Points Available: <span className="text-blue-400">{totalPoints}</span></p>
            </div>
          </div>

          {/* Challenges box */}
          <div className="w-[300px] border border-white p-4 h-[600px]">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">CHALLENGES</h2>
            <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-[320px]">
              {challenges.map((challenge) => (
                <div
                  key={challenge.id}
                  className={`p-4 border transition-colors duration-200 cursor-pointer
                    ${challenge.isLocked ? 'border-yellow-500 text-yellow-500' :
                      challenge.isSolved ? 'border-green-500 text-green-500' :
                        hoveredChallenge === challenge.id ? 'border-blue-400 text-blue-400' :
                          'border-white text-white hover:border-blue-400 hover:text-blue-400'}`}
                  onClick={() => !challenge.isLocked && router.push(`/challenges/${challenge.id}`)}
                  onMouseEnter={() => setHoveredChallenge(challenge.id)}
                  onMouseLeave={() => setHoveredChallenge(null)}
                >
                  <div className="flex items-center justify-between">
                    <span>{challenge.title}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">{challenge.points} pts</span>
                      {challenge.isLocked ? (
                        <span>🔒</span>
                      ) : challenge.isSolved ? (
                        <span>✓</span>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back button - now sticky */}
          <button
            onClick={() => router.push('/dashboard')}
            className="w-[300px] p-4 pl-0 border border-white text-white hover:text-blue-400 hover:border-blue-400 transition-colors duration-200 text-lg mt-8 flex items-center justify-center gap-2"
          >
            <IoArrowBack className="text-2xl" />
            BACK TO DASHBOARD
          </button>
        </div>
      </div>
    </div>
  );
}