import React from "react";
import { User, FileText, AlertTriangle } from "lucide-react";

export function StrategyMockup() {
  return (
    <div className="relative w-full h-[400px] sm:h-[460px] md:h-[500px] rounded-2xl bg-[#faf7f2] border border-[#e5ded6] shadow-2xl overflow-hidden flex flex-col text-zinc-900 select-none">
      {/* Subtle Dot Grid Background Pattern like Miro / FigJam */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(#b8b0a5 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Canvas Top Bar */}
      <div className="relative z-10 shrink-0 px-4 py-2 border-b border-[#e8e2d8] bg-white/70 backdrop-blur-sm flex items-center justify-between text-[11px] text-zinc-600">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ea3829]" />
          <span className="font-semibold text-zinc-800">Strategy Board // Audience & Insights</span>
          <span className="text-[10px] text-zinc-400 bg-zinc-100 px-1.5 py-0.5 rounded">v2.4 Live</span>
        </div>
        <div className="flex items-center gap-3 text-[10px] text-zinc-500 font-mono">
          <span>ZOOM: 100%</span>
          <span className="text-[#ea3829] font-bold">CLIENT REVIEW</span>
        </div>
      </div>

      {/* Scrollable Whiteboard Content */}
      <div className="relative z-10 flex-1 overflow-y-auto overflow-x-hidden p-3.5 sm:p-4.5 space-y-4 custom-scrollbar">
        {/* TOP ROW: Audience Personas + Concept Sketches + Typography */}
        <div className="grid grid-cols-12 gap-3.5">
          {/* Top Left: Audience Personas Card */}
          <div className="col-span-12 xl:col-span-7 bg-white rounded-xl p-3.5 shadow-sm border border-[#e8e2d8] flex flex-col gap-2.5">
            {/* Header pill & title */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-blue-200 bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-zinc-900 leading-tight">Audience Personas</div>
                  <div className="text-[9.5px] text-zinc-500">Distinct audience segments. Duplicate cards as needed.</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[8.5px] font-bold bg-[#ea3829] text-white uppercase tracking-wider">
                Personas
              </span>
            </div>

            {/* Personas Table */}
            <div className="border border-[#f0eae1] rounded-lg overflow-hidden flex flex-col divide-y divide-[#f0eae1] text-[9.5px]">
              {/* Row 1: The Procurement Manager */}
              <div className="flex bg-white">
                <div className="w-24 shrink-0 bg-[#ea3829] text-white font-bold p-2 flex flex-col justify-center items-center text-center">
                  <span className="text-[10.5px]">Persona 1</span>
                </div>
                <div className="p-2.5 flex-1 flex flex-col gap-0.5">
                  <div className="font-bold text-zinc-900 text-[10.5px]">The Procurement Manager</div>
                  <ul className="text-zinc-600 space-y-0.5 leading-snug">
                    <li>• <span className="font-semibold text-zinc-800">Role:</span> places the order</li>
                    <li>• <span className="font-semibold text-zinc-800">Mindset:</span> rational, comparing spec sheets, risk-averse</li>
                    <li>• <span className="font-semibold text-zinc-800">What they need to feel:</span> this supplier is credible and low-risk before they ever pick up the phone</li>
                  </ul>
                </div>
              </div>

              {/* Row 2: Plant / operator */}
              <div className="flex bg-white">
                <div className="w-24 shrink-0 bg-[#1f1f1f] text-white font-bold p-2 flex flex-col justify-center items-center text-center">
                  <span className="text-[10.5px]">Persona 2</span>
                </div>
                <div className="p-2.5 flex-1 flex flex-col gap-0.5">
                  <div className="font-bold text-zinc-900 text-[10.5px]">Plant / operator (downstream)</div>
                  <ul className="text-zinc-600 space-y-0.5 leading-snug">
                    <li>• <span className="font-semibold text-zinc-800">Role:</span> the part&apos;s failure is their safety problem</li>
                    <li>• <span className="font-semibold text-zinc-800">Mindset:</span> safety-driven, cares that the part will not fail</li>
                    <li>• <span className="font-semibold text-zinc-800">What they need to feel:</span> this brand is precise and dependable, not just cheap or fast-talking</li>
                  </ul>
                </div>
              </div>

              {/* Row 3: Core emotional pain point */}
              <div className="flex bg-white">
                <div className="w-24 shrink-0 bg-[#ea3829] text-white font-semibold p-2 flex flex-col justify-center items-center text-center leading-tight">
                  <span className="text-[8px] uppercase tracking-wider">Core emotional pain point</span>
                  <span className="text-[7.5px] opacity-80">(client framing)</span>
                </div>
                <div className="p-2.5 flex-1 flex flex-col gap-1">
                  <div className="font-bold text-zinc-900 leading-snug text-[10px]">
                    A part costing a few thousand rupees can be responsible for a plant losing lakhs of rupees an hour if it fails.
                  </div>
                  <div className="text-zinc-500 text-[8.5px] leading-tight">
                    • This is the emotional core the whole brand argument rests on, every visual and message decision should be checked against it.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Center & Right: Concept Sketches + Typography Preview */}
          <div className="col-span-12 xl:col-span-5 flex flex-col gap-3">
            {/* Concept Sketches Box */}
            <div className="bg-white rounded-xl p-3 shadow-sm border border-[#e8e2d8] flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-wider">Concept Sketches</span>
                <span className="text-[8.5px] text-zinc-400 font-mono">6 EXPLORATIONS</span>
              </div>
              <div className="grid grid-cols-6 gap-1.5 py-0.5">
                {/* Sketch 1: Clover / Knot */}
                <div className="h-10 rounded border border-dashed border-zinc-300 bg-[#fdfbf7] flex items-center justify-center p-1">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-zinc-700 stroke-current fill-none stroke-[1.6]">
                    <circle cx="9" cy="9" r="4" />
                    <circle cx="15" cy="9" r="4" />
                    <circle cx="12" cy="15" r="4" />
                  </svg>
                </div>
                {/* Sketch 2: Starburst */}
                <div className="h-10 rounded border border-dashed border-zinc-300 bg-[#fdfbf7] flex items-center justify-center p-1">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-zinc-700 stroke-current fill-none stroke-[1.6]">
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <line x1="5" y1="5" x2="19" y2="19" />
                    <line x1="5" y1="19" x2="19" y2="5" />
                  </svg>
                </div>
                {/* Sketch 3: Wave doodle */}
                <div className="h-10 rounded border border-dashed border-zinc-300 bg-[#fdfbf7] flex items-center justify-center p-1">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-zinc-700 stroke-current fill-none stroke-[1.8]">
                    <path d="M3 12c3-4 6 4 9 0s6 4 9 0" />
                  </svg>
                </div>
                {/* Sketch 4: Exclamation / Dot */}
                <div className="h-10 rounded border border-dashed border-zinc-300 bg-[#fdfbf7] flex items-center justify-center p-1">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-zinc-700 stroke-current fill-none stroke-[1.8]">
                    <line x1="12" y1="4" x2="12" y2="14" />
                    <circle cx="12" cy="19" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                {/* Sketch 5: Pebbles */}
                <div className="h-10 rounded border border-dashed border-zinc-300 bg-[#fdfbf7] flex items-center justify-center p-1">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-zinc-700 stroke-current fill-none stroke-[1.6]">
                    <circle cx="8" cy="8" r="3" />
                    <circle cx="16" cy="10" r="2.5" />
                    <circle cx="11" cy="16" r="3.5" />
                  </svg>
                </div>
                {/* Sketch 6: Venn Rings */}
                <div className="h-10 rounded border border-dashed border-zinc-300 bg-[#fdfbf7] flex items-center justify-center p-1">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-zinc-700 stroke-current fill-none stroke-[1.6]">
                    <circle cx="10" cy="12" r="5" />
                    <circle cx="14" cy="12" r="5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Typography Specimen */}
            <div className="bg-white rounded-xl p-3 shadow-sm border border-[#e8e2d8] flex flex-col gap-2 flex-1 justify-between">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[8.5px] font-bold bg-zinc-800 text-white uppercase tracking-wider">
                  Typography
                </span>
                <span className="px-2 py-0.5 rounded text-[8.5px] font-bold bg-zinc-100 text-zinc-600">
                  Industry Logos
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[8px]">
                <div className="p-1.5 rounded bg-zinc-50 border border-zinc-100">
                  <span className="font-bold text-zinc-800 text-[9px] block">Plus Jakarta Sans</span>
                  <p className="text-zinc-500 line-clamp-2 mt-0.5 leading-tight">
                    Design is the bridge between imagination and reality. Every great design starts with a vision.
                  </p>
                </div>
                <div className="p-1.5 rounded bg-zinc-50 border border-zinc-100">
                  <span className="font-bold text-zinc-800 text-[9px] block">Inter & Space</span>
                  <p className="text-zinc-500 line-clamp-2 mt-0.5 leading-tight">
                    Explaining design to someone who doesn&apos;t understand what it is. Precision engineered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Key Takeaways Stickies + Project Overview Table */}
        <div className="grid grid-cols-12 gap-3.5">
          {/* Bottom Left: Key Takeaways Sticky Notes */}
          <div className="col-span-12 lg:col-span-6 bg-white rounded-xl p-3.5 shadow-sm border border-[#e8e2d8] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-zinc-800 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#ea3829]" />
                Key Takeaways — Tag Each Sticky
              </span>
              <span className="text-[8.5px] font-mono text-zinc-400">DISCOVERY MATRIX</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {/* Sticky 1 */}
              <div className="bg-[#fcf8e8] border border-[#f0e7ba] p-2 rounded-lg flex flex-col justify-between shadow-xs">
                <div>
                  <span className="text-[8.5px] font-bold text-amber-900 block leading-tight">
                    Brand Story & Positioning
                  </span>
                  <p className="text-[7.5px] text-amber-800/90 mt-1 leading-snug">
                    Vimal Polymer Industries: 40-year family-run business (1976). Differentiated origin: grandfather taught himself PTFE from scratch to beat 2-month import lead times.
                  </p>
                </div>
                <span className="text-[7px] font-semibold text-amber-700/80 mt-1">FOUNDER HERITAGE</span>
              </div>

              {/* Sticky 2 */}
              <div className="bg-[#f0f9ff] border border-[#bae6fd] p-2 rounded-lg flex flex-col justify-between shadow-xs">
                <div>
                  <span className="text-[8.5px] font-bold text-sky-900 block leading-tight">
                    Core Differentiators
                  </span>
                  <p className="text-[7.5px] text-sky-800/90 mt-1 leading-snug">
                    Doesn&apos;t compete on price. Wins on genuine traceable virgin material, on-time delivery under pressure, and custom engineering at any quantity.
                  </p>
                </div>
                <span className="text-[7px] font-semibold text-sky-700/80 mt-1">VIRGIN PTFE</span>
              </div>

              {/* Sticky 3 */}
              <div className="bg-[#fdf2f8] border border-[#fbcfe8] p-2 rounded-lg flex flex-col justify-between shadow-xs">
                <div>
                  <span className="text-[8.5px] font-bold text-pink-900 block leading-tight">
                    Gaps Before Launch
                  </span>
                  <p className="text-[7.5px] text-pink-800/90 mt-1 leading-snug">
                    No certifications currently exist; ISO 9001 and traceability planned post facility-move. Three conflicting logos currently in circulation.
                  </p>
                </div>
                <span className="text-[7px] font-semibold text-pink-700/80 mt-1">LOGO UNIFICATION</span>
              </div>
            </div>
          </div>

          {/* Bottom Right: Project Overview Brief */}
          <div className="col-span-12 lg:col-span-6 bg-white rounded-xl p-3.5 shadow-sm border border-[#e8e2d8] flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded text-[8.5px] font-bold bg-[#ea3829] text-white">
                  Project Overview
                </span>
                <span className="text-[9px] text-zinc-500">Kickoff engagement brief</span>
              </div>
              <div className="flex items-center gap-1 text-[8px] text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                <AlertTriangle className="w-2.5 h-2.5" />
                <span>IN PROGRESS</span>
              </div>
            </div>

            <div className="border border-zinc-100 rounded-lg overflow-hidden text-[8.5px]">
              <div className="grid grid-cols-12 bg-zinc-50 border-b border-zinc-100 p-1.5 font-bold text-zinc-600">
                <div className="col-span-4">Field</div>
                <div className="col-span-8">Client Discovery Details</div>
              </div>
              <div className="divide-y divide-zinc-100">
                <div className="grid grid-cols-12 p-1.5 items-center">
                  <div className="col-span-4 font-semibold text-zinc-800">Legal Name</div>
                  <div className="col-span-8 text-zinc-600 flex items-center gap-1.5">
                    <span className="font-bold text-zinc-900">Vimal Polymer Industries</span>
                    <span className="text-[7px] px-1 bg-red-100 text-red-700 rounded font-semibold">VERIFIED</span>
                  </div>
                </div>
                <div className="grid grid-cols-12 p-1.5">
                  <div className="col-span-4 font-semibold text-zinc-800">Founding Story</div>
                  <div className="col-span-8 text-zinc-600 text-[8px] leading-tight">
                    Founded 1976 by client&apos;s grandfather (48 yrs). Self-taught PTFE from books to beat two-month import dependency.
                  </div>
                </div>
                <div className="grid grid-cols-12 p-1.5 items-center">
                  <div className="col-span-4 font-semibold text-zinc-800">Engagement Scope</div>
                  <div className="col-span-8 text-zinc-600 font-medium">
                    Full brand identity, visual guidelines, brochures &amp; catalog system
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
