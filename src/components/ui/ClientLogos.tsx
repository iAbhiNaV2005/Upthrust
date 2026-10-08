import React from "react";

export function ClientLogos() {
  return (
    <div className="relative w-full border-t border-zinc-200 bg-white z-20 shrink-0">
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 divide-x divide-zinc-200 h-20 md:h-22 items-center">
        {/* Metric Cell */}
        <div className="px-4 py-2 flex flex-col justify-center h-full">
          <span className="text-2xl lg:text-3xl font-extrabold tracking-tight text-black leading-none">
            100+
          </span>
          <p className="text-[10px] lg:text-[11px] font-medium text-zinc-600 mt-1 leading-tight">
            Brands trusted us to define how they&apos;re seen.
          </p>
        </div>

        {/* Zomato */}
        <div className="px-4 flex items-center justify-center h-full group">
          <span className="text-black font-extrabold tracking-tighter text-2xl lowercase italic font-sans select-none transition-transform group-hover:scale-105">
            zomato
          </span>
        </div>

        {/* Bosch */}
        <div className="px-4 flex items-center justify-center gap-2 h-full group">
          <svg viewBox="0 0 40 40" className="h-6 w-6 fill-none stroke-black stroke-[3] shrink-0">
            <circle cx="20" cy="20" r="16" />
            <line x1="8" y1="14" x2="32" y2="14" strokeWidth="2.5" />
            <line x1="8" y1="26" x2="32" y2="26" strokeWidth="2.5" />
            <line x1="14" y1="14" x2="14" y2="26" strokeWidth="2.5" />
            <line x1="26" y1="14" x2="26" y2="26" strokeWidth="2.5" />
          </svg>
          <span className="font-black text-lg tracking-wider text-black">BOSCH</span>
        </div>

        {/* L'Oréal */}
        <div className="px-4 flex items-center justify-center h-full group">
          <span className="font-serif tracking-[0.2em] text-base lg:text-lg font-bold text-black uppercase transition-transform group-hover:scale-105">
            L&apos;ORÉAL
          </span>
        </div>

        {/* Vega */}
        <div className="px-4 flex items-center justify-center h-full group">
          <span className="font-black tracking-[0.18em] text-lg lg:text-xl text-black uppercase transition-transform group-hover:scale-105">
            VEGA
          </span>
        </div>

        {/* Dell */}
        <div className="px-4 flex items-center justify-center h-full group">
          <span className="font-black tracking-wider text-xl lg:text-2xl text-black flex items-center transition-transform group-hover:scale-105">
            D<span className="inline-block transform -rotate-12 scale-110 origin-center">E</span>LL
          </span>
        </div>

        {/* L'Oréal 2nd */}
        <div className="hidden md:flex px-4 items-center justify-center h-full group">
          <span className="font-serif tracking-[0.2em] text-base lg:text-lg font-bold text-black uppercase transition-transform group-hover:scale-105">
            L&apos;ORÉAL
          </span>
        </div>
      </div>
    </div>
  );
}
