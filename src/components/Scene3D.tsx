"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Fresnel halo shader — soft violet glow that fades at the sphere edge. */
const haloVert = `
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }
`;
const haloFrag = `
  uniform vec3 uColor;
  uniform float uPower;
  uniform float uIntensity;
  varying vec3 vNormal;
  varying vec3 vView;
  void main() {
    float f = pow(max(0.0, dot(vNormal, vView)), uPower);
    gl_FragColor = vec4(uColor, f * uIntensity);
  }
`;

function Orb({ light }: { light: boolean }) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const halo = useRef<THREE.ShaderMaterial>(null);
  const outer = useRef<THREE.ShaderMaterial>(null);
  const lamp = useRef<THREE.PointLight>(null);

  const haloUniforms = useMemo(
    () => ({ uColor: { value: new THREE.Color("#b23cff") }, uPower: { value: 2.2 }, uIntensity: { value: 1.2 } }),
    []
  );
  const outerUniforms = useMemo(
    () => ({ uColor: { value: new THREE.Color("#7a1fd1") }, uPower: { value: 3.6 }, uIntensity: { value: 0.5 } }),
    []
  );
  // Light mode: a deep violet/cobalt orb that reads on paper instead of an additive glow.
  const coreColor = light ? "#4f2dd9" : "#fff4fb";
  const blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
  haloUniforms.uColor.value.set(light ? "#6d4df0" : "#ff4d8d");
  outerUniforms.uColor.value.set(light ? "#ff5a1f" : "#22d3ee");

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const pulse = 1 + Math.sin(t * 1.4) * 0.045;
    if (group.current) {
      group.current.rotation.y += delta * 0.15;
      const px = state.pointer.x * 0.35;
      const py = state.pointer.y * 0.22;
      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, px, 0.035);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, py + Math.sin(t * 0.8) * 0.06, 0.035);
    }
    if (core.current) core.current.scale.setScalar(pulse);
    if (halo.current) halo.current.uniforms.uIntensity.value = 0.9 + Math.sin(t * 1.4) * 0.15;
    if (outer.current) outer.current.uniforms.uIntensity.value = 0.5 + Math.sin(t * 1.4 + 1) * 0.12;
    if (lamp.current) lamp.current.intensity = 6 + Math.sin(t * 1.4) * 1.5;
  });

  return (
    <group ref={group}>
      {/* bright white-pink core */}
      <mesh ref={core}>
        <sphereGeometry args={[0.3, 64, 64]} />
        <meshBasicMaterial color={coreColor} toneMapped={false} />
      </mesh>
      {/* inner violet halo */}
      <mesh scale={1.9}>
        <sphereGeometry args={[0.3, 64, 64]} />
        <shaderMaterial
          ref={halo}
          vertexShader={haloVert}
          fragmentShader={haloFrag}
          uniforms={haloUniforms}
          transparent
          depthWrite={false}
          blending={blending}
        />
      </mesh>
      {/* wide soft halo */}
      <mesh scale={3.4}>
        <sphereGeometry args={[0.3, 48, 48]} />
        <shaderMaterial
          ref={outer}
          vertexShader={haloVert}
          fragmentShader={haloFrag}
          uniforms={outerUniforms}
          transparent
          depthWrite={false}
          blending={blending}
        />
      </mesh>
      <pointLight ref={lamp} color="#ff4d8d" intensity={6} distance={12} decay={2} />
    </group>
  );
}

// Deterministic particle field (seeded, so render stays pure and SSR-safe).
const PARTICLE_POSITIONS = (() => {
  let seed = 1337;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  const n = 220;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const r = 2.2 + rand() * 5;
    const a = rand() * Math.PI * 2;
    const b = (rand() - 0.5) * Math.PI;
    arr[i * 3] = Math.cos(a) * Math.cos(b) * r;
    arr[i * 3 + 1] = Math.sin(b) * r * 0.6;
    arr[i * 3 + 2] = Math.sin(a) * Math.cos(b) * r - 1;
  }
  return arr;
})();

function Particles({ light }: { light: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = PARTICLE_POSITIONS;

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color={light ? "#4f2dd9" : "#67e8f9"} transparent opacity={0.35} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export default function Scene3D({ light = false }: { light?: boolean }) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 5], fov: 45 }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.2} />
      <Orb light={light} />
      <Particles light={light} />
    </Canvas>
  );
}
