"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, Environment } from "@react-three/drei";
import * as THREE from "three";

function StatueModel() {
  const { scene } = useGLTF("/models/statue.glb");
  const modelRef = useRef<THREE.Group>(null);

  // Clone scene and apply physical iridescent material
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        mesh.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color("#0a0f1b"),
          metalness: 0.88,
          roughness: 0.12,
          clearcoat: 1.0,
          clearcoatRoughness: 0.06,
          iridescence: 1.0,
          iridescenceIOR: 1.85,
          iridescenceThicknessRange: [180, 580],
          reflectivity: 0.95,
          envMapIntensity: 2.6,
        });
      }
    });

    return clone;
  }, [scene]);

  // Subtle interactive cursor parallax
  useFrame(({ pointer }) => {
    if (!modelRef.current) return;
    // Base orientation: facing 3/4 left (-0.68 rad) exactly matching the user's Figma image
    const baseRotY = -0.68;
    const baseRotX = 0.02;

    const targetY = baseRotY + pointer.x * 0.22;
    const targetX = baseRotX - pointer.y * 0.12;

    modelRef.current.rotation.y = THREE.MathUtils.lerp(modelRef.current.rotation.y, targetY, 0.06);
    modelRef.current.rotation.x = THREE.MathUtils.lerp(modelRef.current.rotation.x, targetX, 0.06);
  });

  return (
    <group ref={modelRef} rotation={[0.02, -0.68, 0]}>
      <Center>
        <primitive object={clonedScene} scale={0.36} />
      </Center>
    </group>
  );
}

useGLTF.preload("/models/statue.glb");

export function HeroStatueCanvas() {
  return (
    <div className="relative w-full h-full bg-transparent">
      <Canvas
        camera={{ position: [0, 0.05, 6.8], fov: 38 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.25,
        }}
        dpr={[1, 2]}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(0x000000, 0);
          scene.background = null;
        }}
      >
        <ambientLight intensity={0.5} />

        {/* Studio and multi-colored rim lights bringing out holographic iridescence */}
        <directionalLight position={[6, 8, 6]} intensity={2.0} color="#ffffff" />
        <directionalLight position={[-6, 4, 3]} intensity={1.4} color="#38bdf8" />
        <pointLight position={[2, 6, 4]} intensity={1.6} color="#f472b6" />
        <pointLight position={[-4, 1, 4]} intensity={1.3} color="#34d399" />
        <directionalLight position={[0, -5, 5]} intensity={0.9} color="#fbbf24" />

        <Environment preset="studio" background={false} />

        <React.Suspense fallback={null}>
          <StatueModel />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
