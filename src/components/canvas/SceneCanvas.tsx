"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Environment } from "@react-three/drei";

interface SceneCanvasProps {
  children?: React.ReactNode;
  enableOrbit?: boolean;
  autoRotate?: boolean;
  className?: string;
}

export function SceneCanvas({
  children,
  enableOrbit = true,
  autoRotate = false,
  className = "w-full h-full",
}: SceneCanvasProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.4} />

        <Suspense fallback={null}>
          <Center>
            {children}
          </Center>
          <Environment preset="city" />
        </Suspense>

        {enableOrbit && (
          <OrbitControls
            enableZoom={false}
            autoRotate={autoRotate}
            autoRotateSpeed={1.5}
            makeDefault
          />
        )}
      </Canvas>
    </div>
  );
}
