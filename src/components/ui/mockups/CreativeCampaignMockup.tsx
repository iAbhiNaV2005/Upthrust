import React from "react";
import { Megaphone, Award, MapPin } from "lucide-react";

export function CreativeCampaignMockup() {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] rounded-2xl bg-[#0e1015] border border-zinc-800 p-4 sm:p-5 shadow-2xl overflow-hidden flex flex-col justify-between select-none">
      <div className="grid grid-cols-12 gap-3 h-full">
        {/* Top Left: Editorial Collateral */}
        <div className="col-span-4 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-3 flex flex-col justify-between">
          <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">Collateral</span>
          <div className="my-1.5 h-16 rounded bg-zinc-800/80 border border-zinc-700/80 flex flex-col justify-center items-center p-2 shadow-md">
            <div className="w-10 h-1 bg-[#FF3700] rounded-full mb-1.5" />
            <div className="w-14 h-1 bg-white/70 rounded-full mb-1" />
            <div className="w-8 h-1 bg-white/40 rounded-full" />
          </div>
          <span className="text-[9px] text-zinc-300 font-medium">Print & Editorial</span>
        </div>

        {/* Top Center: Triple Outdoor Posters */}
        <div className="col-span-4 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-3 flex flex-col justify-between">
          <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider">Street Flypost</span>
          <div className="my-1.5 flex gap-1 h-16 items-center justify-center">
            <div className="flex-1 h-full rounded bg-amber-500/80 border border-amber-400/60 shadow flex items-center justify-center text-[8px] font-bold text-black rotate-[-2deg]">
              POST
            </div>
            <div className="flex-1 h-full rounded bg-blue-600 border border-blue-400/60 shadow flex items-center justify-center text-[8px] font-bold text-white">
              BOLD
            </div>
            <div className="flex-1 h-full rounded bg-zinc-950 border border-zinc-700 shadow flex items-center justify-center text-[8px] font-bold text-white rotate-[2deg]">
              ACT
            </div>
          </div>
          <span className="text-[9px] text-zinc-300 font-medium">OOH Guerrilla</span>
        </div>

        {/* Top Right: Highway Billboard */}
        <div className="col-span-4 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono text-[#FF3700] uppercase tracking-wider">Billboard</span>
            <MapPin className="w-3 h-3 text-[#FF3700]" />
          </div>
          <div className="my-1.5 h-16 rounded bg-gradient-to-tr from-orange-600 to-red-600 border border-orange-400 p-2 flex flex-col justify-between shadow-lg">
            <span className="text-[8px] font-black text-white uppercase tracking-tight">HIGH-IMPACT REACH</span>
            <div className="w-6 h-0.5 bg-white/90 rounded" />
          </div>
          <span className="text-[9px] text-zinc-300 font-medium">Outdoor Display</span>
        </div>

        {/* Bottom Banner: Transit Shelter & Environmental Ad */}
        <div className="col-span-12 rounded-xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 p-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-[#FF3700]">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Transit & Experiential Placemaking</div>
              <div className="text-[10px] text-zinc-400 mt-0.5">
                Connecting physical environments with digital brand storytelling
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-zinc-950/80 px-3 py-1.5 rounded-lg border border-zinc-800">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[10px] font-mono text-zinc-300">Campaign ROAS: 4.8x</span>
          </div>
        </div>
      </div>
    </div>
  );
}
