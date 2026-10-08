"use client";

import React, { useRef } from "react";
import { useGLTF, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ModelProps {
  url: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

function LoadedGLTFModel({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: ModelProps) {
  const { scene } = useGLTF(url);
  return (
    <primitive
      object={scene.clone()}
      scale={scale}
      position={position}
      rotation={rotation}
    />
  );
}

export function GLTFModel(props: Partial<ModelProps> & { url?: string }) {
  if (!props.url) return null;
  return <LoadedGLTFModel url={props.url} {...props} />;
}

// Interactive stylized 3D placeholder when models are pending
export function ModelPlaceholder({
  color = "#6366f1",
  secondaryColor = "#ec4899",
}: {
  color?: string;
  secondaryColor?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x -= delta * 0.3;
      ringRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
      <group>
        <mesh ref={meshRef}>
          <octahedronGeometry args={[1.2, 0]} />
          <meshStandardMaterial
            color={color}
            roughness={0.2}
            metalness={0.8}
            wireframe={false}
          />
        </mesh>
        <mesh ref={ringRef}>
          <torusGeometry args={[1.8, 0.04, 16, 100]} />
          <meshStandardMaterial
            color={secondaryColor}
            emissive={secondaryColor}
            emissiveIntensity={0.6}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </group>
    </Float>
  );
}
