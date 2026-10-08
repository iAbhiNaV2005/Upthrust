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
          color: new THREE.Color("#090e18"),
          metalness: 0.88,
          roughness: 0.12,
          clearcoat: 1.0,
          clearcoatRoughness: 0.08,
          iridescence: 1.0,
          iridescenceIOR: 1.85,
          iridescenceThicknessRange: [160, 560],
          reflectivity: 0.95,
          envMapIntensity: 2.5,
        });
      }
    });

    return clone;
  }, [scene]);

  // Gentle interactive mouse parallax tracking
  useFrame(({ pointer }) => {
    if (!modelRef.current) return;
    // Base orientation: facing 3/4 front-left (around 2.55 rad) to match Image 1
    const baseRotY = 2.55;
    const baseRotX = 0.04;

    const targetY = baseRotY + pointer.x * 0.25;
    const targetX = baseRotX - pointer.y * 0.15;

    modelRef.current.rotation.y = THREE.MathUtils.lerp(modelRef.current.rotation.y, targetY, 0.06);
    modelRef.current.rotation.x = THREE.MathUtils.lerp(modelRef.current.rotation.x, targetX, 0.06);
  });

  return (
    <group ref={modelRef} rotation={[0.04, 2.55, 0]}>
      <Center top={false}>
        <primitive object={clonedScene} scale={0.46} />
      </Center>
    </group>
  );
}

useGLTF.preload("/models/statue.glb");

export function HeroStatueCanvas() {
  return (
    <div className="relative w-full h-full bg-transparent">
      <Canvas
        camera={{ position: [0, 0.05, 5.2], fov: 38 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.25,
        }}
        dpr={[1, 2]}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(0x000000, 0); // Transparent canvas background
          scene.background = null;
        }}
      >
        <ambientLight intensity={0.5} />

        {/* High contrast key, rim and fill lights to trigger rich iridescence */}
        <directionalLight position={[6, 8, 6]} intensity={1.8} color="#ffffff" />
        <directionalLight position={[-6, 4, -4]} intensity={1.2} color="#38bdf8" />
        <pointLight position={[2, 5, 3]} intensity={1.5} color="#f472b6" />
        <pointLight position={[-4, -1, 3]} intensity={1.2} color="#34d399" />
        <directionalLight position={[0, -6, 5]} intensity={0.8} color="#fbbf24" />

        <Environment preset="studio" background={false} />

        <React.Suspense fallback={null}>
          <StatueModel />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
