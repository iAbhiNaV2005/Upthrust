import React from "react";

export function ClientLogos() {
  return (
    <div className="w-full border-t border-zinc-200/80 bg-white py-6 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Metric callout */}
        <div className="flex items-baseline gap-3 shrink-0">
          <span className="text-3xl lg:text-4xl font-extrabold tracking-tight text-black">100+</span>
          <p className="text-xs lg:text-[13px] font-medium leading-snug text-zinc-600 max-w-[170px]">
            Brands trusted us to define how they&apos;re seen.
          </p>
        </div>

        {/* Brand Logos Strip */}
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 w-full max-w-4xl opacity-90">
          {/* Zomato */}
          <div className="flex items-center text-black font-extrabold tracking-tighter text-2xl lowercase italic font-sans select-none hover:opacity-75 transition-opacity">
            zomato
          </div>

          {/* Bosch */}
          <div className="flex items-center gap-2 select-none hover:opacity-75 transition-opacity">
            <svg viewBox="0 0 40 40" className="h-6 w-6 fill-none stroke-black stroke-[3]">
              <circle cx="20" cy="20" r="16" />
              <line x1="8" y1="14" x2="32" y2="14" strokeWidth="2.5" />
              <line x1="8" y1="26" x2="32" y2="26" strokeWidth="2.5" />
              <line x1="14" y1="14" x2="14" y2="26" strokeWidth="2.5" />
              <line x1="26" y1="14" x2="26" y2="26" strokeWidth="2.5" />
            </svg>
            <span className="font-black text-xl tracking-wider text-black">BOSCH</span>
          </div>

          {/* L'Oréal */}
          <div className="flex items-center select-none hover:opacity-75 transition-opacity">
            <span className="font-serif tracking-[0.25em] text-lg font-bold text-black uppercase">
              L&apos;ORÉAL
            </span>
          </div>

          {/* Vega */}
          <div className="flex items-center select-none hover:opacity-75 transition-opacity">
            <span className="font-black tracking-[0.2em] text-xl text-black uppercase">
              VEGA
            </span>
          </div>

          {/* Dell */}
          <div className="flex items-center select-none hover:opacity-75 transition-opacity">
            <span className="font-black tracking-wider text-2xl text-black flex items-center">
              D<span className="inline-block transform -rotate-12 scale-110 origin-center">E</span>LL
            </span>
          </div>

          {/* L'Oréal 2nd */}
          <div className="hidden xl:flex items-center select-none hover:opacity-75 transition-opacity">
            <span className="font-serif tracking-[0.25em] text-lg font-bold text-black uppercase">
              L&apos;ORÉAL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
