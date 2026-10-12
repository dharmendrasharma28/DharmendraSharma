"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function getAccent() {
  if (typeof window === "undefined") return "#ff6a1f";
  const v = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  return v || "#ff6a1f";
}

function Core() {
  const group = useRef<THREE.Group>(null);
  const mat = useRef<any>(null);
  const scroll = useRef(0);
  const color = useMemo(() => new THREE.Color(getAccent()), []);

  useFrame((state, delta) => {
    if (typeof window !== "undefined") {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      scroll.current = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    }
    const s = scroll.current;
    if (group.current) {
      group.current.rotation.y += delta * (0.18 + s * 0.5);
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.12;
      const px = state.pointer.x * 0.4;
      const py = state.pointer.y * 0.25;
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, px, 0.04);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, py, 0.04);
      group.current.scale.setScalar(THREE.MathUtils.lerp(1, 0.72, s));
      group.current.position.z = THREE.MathUtils.lerp(0, -1.6, s);
    }
    if (mat.current) {
      mat.current.distort = 0.38 + Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.35, 4]} />
        <MeshDistortMaterial
          ref={mat}
          color={color}
          roughness={0.25}
          metalness={0.4}
          distort={0.4}
          speed={1.4}
          emissive={color}
          emissiveIntensity={0.18}
        />
      </mesh>
      <mesh scale={1.012}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.16} />
      </mesh>

      <Float speed={1.6} rotationIntensity={1.1} floatIntensity={1.4}>
        <mesh position={[2.3, 0.9, -0.6]}>
          <octahedronGeometry args={[0.28, 0]} />
          <meshStandardMaterial color="#19b6a8" roughness={0.3} metalness={0.5} />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={1.4} floatIntensity={1.8}>
        <mesh position={[-2.1, -0.6, -0.3]}>
          <boxGeometry args={[0.34, 0.34, 0.34]} />
          <meshStandardMaterial color={color} roughness={0.35} metalness={0.4} wireframe={false} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[0.4, -1.6, 0.4]}>
          <tetrahedronGeometry args={[0.26, 0]} />
          <meshStandardMaterial color="#f4f2ec" roughness={0.5} metalness={0.1} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      className="!touch-auto"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} />
      <pointLight position={[-4, -2, -2]} intensity={0.6} color="#19b6a8" />
      <Core />
      <Sparkles count={60} scale={[8, 5, 4]} size={1.6} speed={0.25} opacity={0.35} color="#f4f2ec" />
    </Canvas>
  );
}
