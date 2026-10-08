import React from "react";
import { Smartphone, Users } from "lucide-react";

export function BrandIdentityMockup() {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] rounded-2xl bg-[#0d0f12] border border-zinc-800 p-4 sm:p-5 shadow-2xl overflow-hidden flex flex-col justify-between select-none">
      <div className="grid grid-cols-12 gap-3 h-full">
        {/* Top Left: Creative Workshop */}
        <div className="col-span-6 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700/60 p-3.5 flex flex-col justify-between relative overflow-hidden group">
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-mono text-cyan-400 font-semibold tracking-wider uppercase">Workshop Session</span>
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          </div>
          {/* Stylized graphic representing creative workshop */}
          <div className="my-2 flex items-center justify-center">
            <div className="relative w-28 h-20 bg-zinc-950/80 rounded-lg border border-zinc-700/80 flex items-center justify-center shadow-inner overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20" />
              <Users className="w-8 h-8 text-zinc-300 relative z-10" />
              <div className="absolute bottom-1 right-2 text-[8px] font-mono text-zinc-400">TEAM // SYNC</div>
            </div>
          </div>
          <div className="text-[10px] text-zinc-300 font-medium z-10">
            Co-creation & identity blueprinting
          </div>
        </div>

        {/* Top Right: Digital Device & 3D Scroll */}
        <div className="col-span-6 rounded-xl bg-gradient-to-tr from-zinc-900 to-zinc-800 border border-zinc-700/60 p-3.5 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between z-10">
            <span className="text-[10px] font-mono text-pink-400 font-semibold tracking-wider uppercase">Foldable Device</span>
            <Smartphone className="w-3.5 h-3.5 text-pink-400" />
          </div>
          <div className="my-2 flex items-center justify-center">
            <div className="w-24 h-20 rounded-xl bg-zinc-950 border-2 border-zinc-700 relative flex items-center justify-center shadow-2xl overflow-hidden">
              <div className="w-16 h-12 rounded bg-gradient-to-b from-indigo-500/30 to-pink-500/30 border border-indigo-400/30 flex flex-col items-center justify-center gap-1">
                <div className="w-8 h-1 bg-white/60 rounded-full" />
                <div className="w-12 h-1 bg-pink-400/80 rounded-full" />
                <div className="w-6 h-1 bg-cyan-400/80 rounded-full" />
              </div>
            </div>
          </div>
          <div className="text-[10px] text-zinc-300 font-medium z-10">
            Cross-platform responsive system
          </div>
        </div>

        {/* Bottom Left: Color Palette Swatches & Brush Squiggle */}
        <div className="col-span-5 rounded-xl bg-zinc-900 border border-zinc-800 p-3 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400" />
            <div className="w-3 h-3 rounded-full bg-pink-500" />
            <div className="w-3 h-3 rounded-full bg-[#FF3700]" />
          </div>

          {/* Hand-drawn neon coral squiggle */}
          <div className="my-2 py-1">
            <svg viewBox="0 0 100 24" className="w-full h-8" fill="none">
              <path
                d="M 5 18 C 20 2, 35 22, 50 10 C 65 0, 80 20, 95 8"
                stroke="#ff4d79"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">Dynamic Gestures</span>
        </div>

        {/* Bottom Center: Pantone Color Swatches */}
        <div className="col-span-4 rounded-xl bg-zinc-900 border border-zinc-800 p-3 flex flex-col justify-between">
          <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">Color Tokens</span>
          <div className="flex gap-2 items-center my-1">
            <div className="w-8 h-12 rounded-md bg-[#00E5FF] shadow-lg flex items-end p-1">
              <span className="text-[7px] font-bold text-black font-mono">01</span>
            </div>
            <div className="w-8 h-12 rounded-md bg-[#7C4DFF] shadow-lg flex items-end p-1">
              <span className="text-[7px] font-bold text-white font-mono">02</span>
            </div>
            <div className="w-8 h-12 rounded-md bg-[#FF3700] shadow-lg flex items-end p-1">
              <span className="text-[7px] font-bold text-white font-mono">03</span>
            </div>
          </div>
          <span className="text-[9px] text-zinc-300 font-medium">HSL Harmonized</span>
        </div>

        {/* Bottom Right: Design Tokens / Icon Mark */}
        <div className="col-span-3 rounded-xl bg-zinc-900 border border-zinc-800 p-3 flex flex-col justify-between items-center">
          <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">Icon System</span>
          <div className="flex gap-1.5 items-center my-1">
            <div className="w-3.5 h-7 rounded-full bg-indigo-500" />
            <div className="w-3.5 h-7 rounded-full bg-pink-500 translate-y-1" />
            <div className="w-3.5 h-7 rounded-full bg-cyan-400 -translate-y-1" />
          </div>
          <span className="text-[9px] font-mono text-zinc-400">128+ GLYPHS</span>
        </div>
      </div>
    </div>
  );
}
