"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Center, Environment } from "@react-three/drei";
import * as THREE from "three";

interface CurveModelProps {
  activeIndex?: number;
}

function CurveModel({ activeIndex = 0 }: CurveModelProps) {
  const { scene } = useGLTF("/models/curve.glb");
  const groupRef = useRef<THREE.Group>(null);

  // Clone scene and apply deep glossy metallic burnt-orange material
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        mesh.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color("#c43900"),
          metalness: 0.9,
          roughness: 0.08,
          clearcoat: 1.0,
          clearcoatRoughness: 0.03,
          reflectivity: 0.95,
          envMapIntensity: 2.4,
        });
      }
    });

    return clone;
  }, [scene]);

  // Subtle interactive parallax based on active slide and mouse movement
  useFrame(({ pointer }) => {
    if (!groupRef.current) return;

    const baseRotY = -0.15 + activeIndex * 0.12;
    const baseRotX = 0.05 + activeIndex * 0.04;
    const baseRotZ = -0.02;

    const targetY = baseRotY + pointer.x * 0.08;
    const targetX = baseRotX - pointer.y * 0.06;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, baseRotZ, 0.05);
  });

  return (
    <group ref={groupRef} scale={2.6} position={[0.2, 0.32, 0]}>
      <Center>
        <primitive object={clonedScene} />
      </Center>
    </group>
  );
}

useGLTF.preload("/models/curve.glb");

export function CurveCanvas({
  activeIndex = 0,
  className = "w-full h-full",
}: {
  activeIndex?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 42 }}
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

        {/* Directional studio lights creating bright glossy tubular specular highlights */}
        <directionalLight position={[12, 12, 8]} intensity={2.8} color="#ffffff" />
        <directionalLight position={[-12, 6, 4]} intensity={1.5} color="#ff7a00" />
        <directionalLight position={[0, -10, -5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[6, -2, 5]} intensity={1.8} color="#ff3700" />
        <pointLight position={[-6, 4, 3]} intensity={1.2} color="#ffffff" />

        <Environment preset="studio" background={false} />

        <React.Suspense fallback={null}>
          <CurveModel activeIndex={activeIndex} />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
