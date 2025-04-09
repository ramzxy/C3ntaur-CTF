'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface SatelliteProps {
  orbitRadius: number;
  orbitSpeed: number;
  inclination: number;
}

function Satellite({ orbitRadius, orbitSpeed, inclination }: SatelliteProps) {
  const satelliteRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (satelliteRef.current) {
      const time = state.clock.getElapsedTime();
      const angle = time * orbitSpeed;
      
      satelliteRef.current.position.x = Math.cos(angle) * orbitRadius;
      satelliteRef.current.position.y = Math.sin(angle) * Math.sin(inclination) * orbitRadius;
      satelliteRef.current.position.z = Math.sin(angle) * Math.cos(inclination) * orbitRadius;
    }
  });

  return (
    <mesh ref={satelliteRef}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="white" />
    </mesh>
  );
}

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshBasicMaterial
        color="rgba(255,255,255,0.1)"
        wireframe={true}
        wireframeLinewidth={1}
      />
    </mesh>
  );
}

export default function WireframeEarth() {
  return (
    <div className="w-full h-[500px]">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <color attach="background" args={['black']} />
        <ambientLight intensity={0.5} />
        <Earth />
        <Satellite orbitRadius={1.5} orbitSpeed={0.3} inclination={Math.PI / 6} />
        <Satellite orbitRadius={2} orbitSpeed={0.2} inclination={Math.PI / 3} />
        <Satellite orbitRadius={2.5} orbitSpeed={0.15} inclination={Math.PI / 4} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
} 