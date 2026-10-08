"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

interface CurveSceneProps {
  scrollProgress?: number; // Continuous 0.0 to 3.0
  className?: string;
}

// Zoomed scale so the 3D tube spans generously from far-left to far-right across the entire screen
const S = 5.85;

// 4 distinct parts along the length of curve.glb
// As user scrolls down (0 -> 1 -> 2 -> 3), the model moves from left to right (+X to -X camera travel)
const partKeyframes = [
  // Part 1: Strategy and Insight — tube spans completely across, loop framing right
  {
    pos: [3.9, 0.22, 0],
    rot: [1.57, -0.02, 0.02],
    scale: S,
  },
  // Part 2: Brand & visual identity — moves left-to-right, high crest arching top
  {
    pos: [1.34, 0.35, 0],
    rot: [1.57, 0.05, -0.03],
    scale: S,
  },
  // Part 3: Product & digital experience — moves left-to-right, deep bottom loop
  {
    pos: [-1.34, -0.2, 0],
    rot: [1.57, -0.05, 0.04],
    scale: S,
  },
  // Part 4: Creative & campaign production — final twist loop on right
  {
    pos: [-3.9, 0.18, 0],
    rot: [1.57, 0.02, -0.02],
    scale: S,
  },
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function AnimatedCurveModel({ scrollProgress = 0 }: { scrollProgress?: number }) {
  const { scene } = useGLTF("/models/curve.glb");
  const modelRef = useRef<THREE.Group>(null);

  // Clone scene and apply ultra-glossy copper/orange metallic material
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        mesh.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color("#c83800"),
          metalness: 0.9,
          roughness: 0.08,
          clearcoat: 1.0,
          clearcoatRoughness: 0.03,
          reflectivity: 0.95,
          envMapIntensity: 2.5,
        });
      }
    });

    return clone;
  }, [scene]);

  // Smooth frame interpolation panning across the 4 parts from left to right as you scroll
  useFrame(({ pointer }) => {
    if (!modelRef.current) return;

    // Clamp progress between 0 and 3
    const clamped = Math.max(0, Math.min(3, scrollProgress));
    const idx0 = Math.min(2, Math.floor(clamped));
    const idx1 = idx0 + 1;
    const rawT = clamped - idx0;
    const t = easeInOut(rawT);

    const k0 = partKeyframes[idx0];
    const k1 = partKeyframes[idx1];

    // Interpolate position across the 4 parts of the continuous tube
    const targetPosX = lerp(k0.pos[0], k1.pos[0], t);
    const targetPosY = lerp(k0.pos[1], k1.pos[1], t);
    const targetPosZ = lerp(k0.pos[2], k1.pos[2], t);

    // Subtle pointer parallax
    const targetRotX = lerp(k0.rot[0], k1.rot[0], t) - pointer.y * 0.04;
    const targetRotY = lerp(k0.rot[1], k1.rot[1], t) + pointer.x * 0.05;
    const targetRotZ = lerp(k0.rot[2], k1.rot[2], t);

    const targetScale = lerp(k0.scale, k1.scale, t);

    // Apply smooth damping
    modelRef.current.position.x = THREE.MathUtils.lerp(modelRef.current.position.x, targetPosX, 0.08);
    modelRef.current.position.y = THREE.MathUtils.lerp(modelRef.current.position.y, targetPosY, 0.08);
    modelRef.current.position.z = THREE.MathUtils.lerp(modelRef.current.position.z, targetPosZ, 0.08);

    modelRef.current.rotation.x = THREE.MathUtils.lerp(modelRef.current.rotation.x, targetRotX, 0.08);
    modelRef.current.rotation.y = THREE.MathUtils.lerp(modelRef.current.rotation.y, targetRotY, 0.08);
    modelRef.current.rotation.z = THREE.MathUtils.lerp(modelRef.current.rotation.z, targetRotZ, 0.08);

    modelRef.current.scale.setScalar(THREE.MathUtils.lerp(modelRef.current.scale.x, targetScale, 0.08));
  });

  return (
    <group
      ref={modelRef}
      scale={S}
      position={partKeyframes[0].pos as [number, number, number]}
      rotation={partKeyframes[0].rot as [number, number, number]}
    >
      <primitive object={clonedScene} />
    </group>
  );
}

useGLTF.preload("/models/curve.glb");

export function CurveCanvas({
  scrollProgress = 0,
  className = "w-full h-full",
}: CurveSceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 2.5], fov: 46 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.35,
        }}
        dpr={[1, 2]}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(0x000000, 0);
          scene.background = null;
        }}
      >
        <ambientLight intensity={0.6} />

        {/* Studio lighting highlighting glossy tubular specular reflections across full width */}
        <directionalLight position={[12, 12, 8]} intensity={2.8} color="#ffffff" />
        <directionalLight position={[-12, 6, 4]} intensity={1.6} color="#ff7a00" />
        <directionalLight position={[0, -10, -5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[6, -2, 5]} intensity={2.0} color="#ff3700" />
        <pointLight position={[-6, 4, 3]} intensity={1.4} color="#ffffff" />

        <Environment preset="studio" background={false} />

        <React.Suspense fallback={null}>
          <AnimatedCurveModel scrollProgress={scrollProgress} />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
