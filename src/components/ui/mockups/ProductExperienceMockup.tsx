import React from "react";
import { Laptop, Sparkles, Layers, Sliders } from "lucide-react";

export function ProductExperienceMockup() {
  return (
    <div className="relative w-full h-[360px] sm:h-[420px] md:h-[460px] rounded-2xl bg-[#090b10] border border-zinc-800 p-4 sm:p-5 shadow-2xl overflow-hidden flex flex-col justify-between select-none">
      <div className="grid grid-cols-12 gap-3 h-full">
        {/* Top Left: Developer Dashboard */}
        <div className="col-span-6 rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-3.5 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-purple-400 font-semibold tracking-wider uppercase">Analytics UI</span>
            <Laptop className="w-3.5 h-3.5 text-purple-400" />
          </div>

          <div className="my-2 rounded-lg bg-zinc-950/90 border border-zinc-800 p-2 shadow-inner">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[8px] font-mono text-zinc-500 ml-2">app.neatlogs.io</span>
            </div>
            <div className="flex items-end gap-1 h-8 px-1">
              {[40, 65, 30, 85, 95, 60, 100].map((h, i) => (
                <div
                  key={i}
                  style={{ height: `${h}%` }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-indigo-600 to-purple-400"
                />
              ))}
            </div>
          </div>

          <span className="text-[10px] text-zinc-300 font-medium">
            Complex data, simplified workflows
          </span>
        </div>

        {/* Top Right: Type Specimen */}
        <div className="col-span-6 rounded-xl bg-gradient-to-tr from-zinc-900 to-black border border-zinc-800 p-3.5 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-emerald-400 font-semibold tracking-wider uppercase">Design System</span>
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
          </div>

          <div className="my-2 flex flex-col justify-center items-start">
            <span className="font-mono text-xl sm:text-2xl font-black text-white tracking-tighter">
              abcde
            </span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">Inter Variable</span>
              <span className="text-[10px] font-mono text-emerald-400">400 → 900</span>
            </div>
          </div>

          <div className="flex gap-1.5">
            <div className="h-2 flex-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
            <div className="h-2 w-8 rounded-full bg-emerald-400" />
          </div>
        </div>

        {/* Bottom Left: neatlogs Product Wordmark */}
        <div className="col-span-6 rounded-xl bg-zinc-900/90 border border-zinc-800 p-3.5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-base font-extrabold tracking-tight text-white flex items-center gap-1.5">
              neatlogs
              <span className="w-2 h-2 rounded-full bg-pink-500" />
            </span>
            <span className="text-[9px] font-mono text-zinc-500">v2.4.0</span>
          </div>

          <div className="flex gap-2 my-2">
            <div className="h-8 flex-1 rounded bg-zinc-950 border border-zinc-800 flex items-center justify-center text-[10px] font-mono text-zinc-400">
              Query Builder
            </div>
            <div className="h-8 flex-1 rounded bg-gradient-to-r from-purple-900/40 to-pink-900/40 border border-purple-500/30 flex items-center justify-center text-[10px] font-mono text-purple-300 font-semibold">
              Telemetry
            </div>
          </div>

          <span className="text-[9px] font-mono text-zinc-400">Sub-millisecond query engine</span>
        </div>

        {/* Bottom Right: UI Interactive Action Component */}
        <div className="col-span-6 rounded-xl bg-zinc-900/90 border border-zinc-800 p-3.5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Control Panel</span>
            <Sliders className="w-3 h-3 text-zinc-400" />
          </div>

          <button className="my-2 w-full py-2 px-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30">
            <Sparkles className="w-3.5 h-3.5" />
            Generate Visual Summary
          </button>

          <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500">
            <span>Latency: 12ms</span>
            <span className="text-emerald-400">Operational</span>
          </div>
        </div>
      </div>
    </div>
  );
}
