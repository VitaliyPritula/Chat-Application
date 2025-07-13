import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Flag: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  // Створюємо текстуру прапора через canvas
  const flagTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    // Верхня половина — синя
    ctx.fillStyle = '#0057b7';
    ctx.fillRect(0, 0, 512, 128);
    // Нижня половина — жовта
    ctx.fillStyle = '#ffd700';
    ctx.fillRect(0, 128, 512, 128);
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (meshRef.current) {
      const pos = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
       const wave =
          Math.sin(x * 2 + time * 3) * 0.18 * y +
          Math.sin(x * 5 + time * 5) * 0.07 * y;
        pos.setZ(i, wave);
      }
      pos.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[4, 2, 50, 20]} />
      <meshStandardMaterial map={flagTexture} />
    </mesh>
  );
};

const FlagScene: React.FC = () => {
  return (
    <Canvas className='h-2' camera={{ position: [5, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <Flag />
      <OrbitControls />
    </Canvas>
  );
};

export default FlagScene;