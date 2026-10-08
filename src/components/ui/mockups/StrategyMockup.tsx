import React from "react";
import { User, FileText } from "lucide-react";

export function StrategyMockup() {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] rounded-2xl bg-[#fdf5f0] border border-orange-200/60 p-4 sm:p-5 shadow-2xl overflow-hidden flex flex-col justify-between text-zinc-900 select-none">
      {/* Top Header Card */}
      <div className="grid grid-cols-12 gap-3 h-full">
        {/* Left Column: Personas & Strategy Flow */}
        <div className="col-span-7 flex flex-col gap-3">
          {/* Persona Card */}
          <div className="rounded-xl bg-white p-3.5 shadow-sm border border-orange-100 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <User className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-zinc-800">Audience Personas</div>
                <div className="text-[10px] text-zinc-500">Core market segments & behavioral archetypes</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-1">
              <div className="rounded-lg bg-red-500 text-white p-2 flex flex-col justify-between">
                <span className="text-[11px] font-bold">Persona 1</span>
                <span className="text-[9px] opacity-90 mt-1">Strategic Director & Growth Lead</span>
              </div>
              <div className="rounded-lg bg-orange-500 text-white p-2 flex flex-col justify-between">
                <span className="text-[11px] font-bold">Persona 2</span>
                <span className="text-[9px] opacity-90 mt-1">Digital Product Architect</span>
              </div>
            </div>
          </div>

          {/* Research Matrix & Grid */}
          <div className="flex-1 rounded-xl bg-white p-3 shadow-sm border border-orange-100 flex flex-col gap-2">
            <span className="text-[11px] font-bold text-zinc-800 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-orange-500" />
              Key Discovery & Insights
            </span>
            <div className="grid grid-cols-3 gap-2 flex-1">
              <div className="rounded-lg bg-zinc-50 p-2 border border-zinc-100 flex flex-col justify-between">
                <span className="text-[9px] font-bold text-zinc-700">Problem 01</span>
                <p className="text-[8px] text-zinc-500 leading-tight">Fragmented visual positioning across channels</p>
                <div className="w-full bg-red-100 h-1 rounded-full overflow-hidden mt-1">
                  <div className="bg-red-500 h-full w-3/4" />
                </div>
              </div>

              <div className="rounded-lg bg-zinc-50 p-2 border border-zinc-100 flex flex-col justify-between">
                <span className="text-[9px] font-bold text-zinc-700">Opportunity</span>
                <p className="text-[8px] text-zinc-500 leading-tight">Category dominance through high-contrast design</p>
                <div className="w-full bg-emerald-100 h-1 rounded-full overflow-hidden mt-1">
                  <div className="bg-emerald-500 h-full w-4/5" />
                </div>
              </div>

              <div className="rounded-lg bg-zinc-50 p-2 border border-zinc-100 flex flex-col justify-between">
                <span className="text-[9px] font-bold text-zinc-700">Metric Target</span>
                <p className="text-[8px] text-zinc-500 leading-tight">+140% conversion rate acceleration</p>
                <div className="w-full bg-orange-100 h-1 rounded-full overflow-hidden mt-1">
                  <div className="bg-orange-500 h-full w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Wireframe Sketches & Typography study */}
        <div className="col-span-5 flex flex-col gap-3">
          {/* Wireframe sticky note */}
          <div className="rounded-xl bg-white p-3 shadow-sm border border-orange-100 flex flex-col gap-2">
            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider">Concept Sketches</span>
            <div className="grid grid-cols-3 gap-1.5 py-1">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-10 rounded border border-dashed border-zinc-300 bg-zinc-50 flex items-center justify-center"
                >
                  <div className="w-4 h-4 rounded-sm border border-zinc-400 opacity-60" />
                </div>
              ))}
            </div>
          </div>

          {/* Typography Specimen Note */}
          <div className="flex-1 rounded-xl bg-white p-3 shadow-sm border border-orange-100 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Typography System</span>
              <div className="mt-1 text-xs font-black tracking-tight text-zinc-900">
                Editorial × Technical
              </div>
              <p className="text-[9px] text-zinc-500 mt-1 leading-snug">
                Establishing the brand voice between authority and accessibility.
              </p>
            </div>
            <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[9px] font-mono text-zinc-400">
              <span>WEIGHT: 900</span>
              <span>KERNING: TIGHT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
