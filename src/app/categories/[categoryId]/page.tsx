'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import DetailedCategoryView from '@/components/DetailedCategoryView';
import { useRouter } from 'next/navigation';

interface Challenge {
  id: string;
  title: string;
  isSolved: boolean;
  isLocked: boolean;
  solvedBy: { teamId: string; teamColor: string }[];
}

export default function CategoryPage() {
  const params = useParams();
  const router = useRouter();
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const categoryId = params.categoryId as string;

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
    <div className="fixed inset-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <DetailedCategoryView 
          challenges={challenges} 
          onBack={() => router.push('/dashboard')} 
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
  );
} 