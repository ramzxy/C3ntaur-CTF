import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useRouter } from 'next/navigation';

interface Challenge {
  id: string;
  title: string;
  category: string;
  points: number;
  difficulty: string;
  isLocked: boolean;
  isSolved: boolean;
  solvedBy: { teamColor: string }[];
}

interface CategorySatellite {
  id: string;
  name: string;
  orbitRadius: number;
  orbitSpeed: number;
  rotationSpeed: number;
  orbitAngle: number;
  orbitTilt: number;
  position: [number, number, number];
  challenges: Challenge[];
  solvedCount: number;
}

// Function to generate evenly distributed points on a sphere
function generateOrbitConfigurations(count: number): { angle: number; tilt: number }[] {
  const configurations: { angle: number; tilt: number }[] = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;
  
  for (let i = 0; i < count; i++) {
    const y = count === 1 ? 0 : 1 - (i / Math.max(count - 1, 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = 2 * Math.PI * i / goldenRatio;
    const angle = theta;
    const tilt = Math.acos(y);
    
    configurations.push({ angle, tilt });
  }
  
  return configurations;
}

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[3, 12, 12]} />
      <meshBasicMaterial wireframe color="#4a90e2" />
    </mesh>
  );
}

function CategorySatellite({ satellite, onSelect }: { satellite: CategorySatellite; onSelect: () => void }) {
  const [hovered, setHovered] = useState(false);
  const satelliteRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);

  // Calculate base size based on number of challenges
  const baseSize = 0.3;
  const sizeMultiplier = 1 + (satellite.challenges.length / 10);
  const satelliteSize = baseSize * sizeMultiplier;

  // Calculate color based on solved challenges
  const getSatelliteColor = () => {
    if (satellite.solvedCount === 0) return "#ffffff";
    
    // Get the most common team color among solved challenges
    const teamColors = satellite.challenges
      .filter(c => c.isSolved)
      .flatMap(c => c.solvedBy.map(s => s.teamColor));
    
    if (teamColors.length === 0) return "#ffffff";
    
    // Count occurrences of each color
    const colorCounts = teamColors.reduce((acc, color) => {
      acc[color] = (acc[color] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    // Find the most common color
    const mostCommonColor = Object.entries(colorCounts)
      .sort((a, b) => b[1] - a[1])[0][0];
    
    return mostCommonColor;
  };

  useFrame((state, delta) => {
    if (satelliteRef.current) {
      timeRef.current += delta * satellite.orbitSpeed;
      
      const x = Math.cos(timeRef.current) * satellite.orbitRadius;
      const z = Math.sin(timeRef.current) * satellite.orbitRadius;
      
      const rotationMatrix = new THREE.Matrix4();
      rotationMatrix.makeRotationY(satellite.orbitAngle);
      rotationMatrix.multiply(new THREE.Matrix4().makeRotationX(satellite.orbitTilt));
      
      const position = new THREE.Vector3(x, 0, z);
      position.applyMatrix4(rotationMatrix);
      
      satelliteRef.current.position.copy(position);
      satelliteRef.current.rotation.y += delta * satellite.rotationSpeed;
    }
  });

  return (
    <group ref={satelliteRef}>
      <mesh
        onClick={onSelect}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[satelliteSize, 8, 8]} />
        <meshBasicMaterial 
          color={hovered ? "teal" : getSatelliteColor()} 
        />
      </mesh>
      <Text
        position={[1, 0.6, 0]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {satellite.name}
      </Text>
    </group>
  );
}

function OrbitTrail({ satellite }: { satellite: CategorySatellite }) {
  const points = useRef<THREE.Vector3[]>([]);
  const lineRef = useRef<THREE.Line>(null);
  const geometryRef = useRef<THREE.BufferGeometry>(new THREE.BufferGeometry());
  
  useEffect(() => {
    const segments = 64;
    const newPoints: THREE.Vector3[] = [];
    
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      const x = Math.cos(angle) * satellite.orbitRadius;
      const z = Math.sin(angle) * satellite.orbitRadius;
      
      const rotationMatrix = new THREE.Matrix4();
      rotationMatrix.makeRotationY(satellite.orbitAngle);
      rotationMatrix.multiply(new THREE.Matrix4().makeRotationX(satellite.orbitTilt));
      
      const position = new THREE.Vector3(x, 0, z);
      position.applyMatrix4(rotationMatrix);
      
      if (!isNaN(position.x) && !isNaN(position.y) && !isNaN(position.z)) {
        newPoints.push(position);
      }
    }
    
    points.current = newPoints;
    geometryRef.current.setFromPoints(points.current);
    
    if (lineRef.current) {
      lineRef.current.geometry = geometryRef.current;
    }
  }, [satellite.orbitRadius, satellite.orbitAngle, satellite.orbitTilt]);

  return (
    <primitive 
      ref={lineRef}
      object={new THREE.Line(
        geometryRef.current,
        new THREE.LineBasicMaterial({ 
          color: "#ffffff", 
          transparent: true, 
          opacity: 0.5,
          linewidth: 1
        })
      )} 
    />
  );
}

export default function SpaceScene() {
  const [categories, setCategories] = useState<CategorySatellite[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/challenges/categories');
        if (!response.ok) return;

        const { categories: categoryNames, challengesByCategory } = await response.json();

        const configs = generateOrbitConfigurations(categoryNames.length);
        const newCategories = categoryNames.map((category: string, index: number) => {
          const config = configs[index];
          const challenges = challengesByCategory[category];
          const solvedCount = challenges.filter((c: Challenge) => c.isSolved).length;
          
          return {
            id: category,
            name: category,
            orbitRadius: 5 + (index * 2),
            orbitSpeed: 0.05 / (1 + index * 0.2),
            rotationSpeed: 0.02 + (index * 0.02),
            orbitAngle: config.angle,
            orbitTilt: config.tilt,
            position: [0, 0, 0] as [number, number, number],
            challenges,
            solvedCount
          };
        });

        setCategories(newCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="fixed inset-0">
      <Canvas camera={{ position: [0, 10, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Earth />
        {categories.map((category) => (
          <group key={category.id}>
            <OrbitTrail satellite={category} />
            <CategorySatellite 
              satellite={category} 
              onSelect={() => router.push(`/categories/${category.id}`)} 
            />
          </group>
        ))}
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