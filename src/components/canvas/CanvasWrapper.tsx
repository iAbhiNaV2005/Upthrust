"use client";

import dynamic from "next/dynamic";
import React from "react";

export const DynamicSceneCanvas = dynamic(
  () => import("./SceneCanvas").then((mod) => mod.SceneCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[300px] flex flex-col items-center justify-center gap-3 bg-zinc-950/40 rounded-2xl border border-zinc-800/60 backdrop-blur-sm">
        <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
        <span className="text-xs font-mono text-zinc-400 tracking-wider uppercase">Loading 3D Engine...</span>
      </div>
    ),
  }
);
