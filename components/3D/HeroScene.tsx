
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, AdaptiveDpr, AdaptiveEvents, Stars, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = ({ count = 600 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null!);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const { mouse } = useThree();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.005 + Math.random() / 500;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor });
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed;
      const s = Math.cos(t);
      const mx = mouse.x * 3;
      const my = mouse.y * 3;

      dummy.position.set(
        (mx) + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 15,
        (my) + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 15,
        (my) + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 15
      );
      dummy.scale.set(s * 0.5, s * 0.5, s * 0.5);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.1, 6, 6]} />
      <meshBasicMaterial color="#00F5FF" transparent opacity={0.15} />
    </instancedMesh>
  );
};

const AbstractCore = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const { mouse } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, t * 0.1 + mouse.y * 0.4, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, t * 0.15 + mouse.x * 0.4, 0.05);
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[2, 0, -2]}>
        <torusKnotGeometry args={[2.5, 0.7, 256, 64]} />
        <MeshDistortMaterial
          color="#00F5FF"
          emissive="#00F5FF"
          emissiveIntensity={0.8}
          wireframe
          transparent
          opacity={0.4}
          speed={2}
          distort={0.3}
        />
      </mesh>
    </Float>
  );
};

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        performance={{ min: 0.5 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={45} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00F5FF" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={3} color="#FFFFFF" />
        
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
        <ParticleField count={400} />
        <AbstractCore />
        
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
      </Canvas>
    </div>
  );
};
