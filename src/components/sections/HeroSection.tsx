"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArchitecturalGrid } from "@/components/ui/ArchitecturalGrid";
import { ClientLogos } from "@/components/ui/ClientLogos";

const DynamicHeroStatue = dynamic(
  () => import("@/components/canvas/HeroStatue").then((mod) => mod.HeroStatueCanvas),
  {
    ssr: false,
    loading: () => null,
  }
);

export function HeroSection() {
  return (
    <section className="relative w-full h-screen max-h-screen min-h-[640px] bg-white text-black overflow-hidden flex flex-col justify-between select-none">
      {/* Background Architectural Drafting Grid with Crosshairs */}
      <ArchitecturalGrid />

      {/* Full Architectural Hand Sketch Anchored Strictly in the Right-Bottom Corner of the Viewport */}
      <div className="absolute right-[-40px] sm:right-[-60px] md:right-[-80px] lg:right-[-90px] bottom-16 sm:bottom-20 md:bottom-22 w-[380px] sm:w-[480px] md:w-[560px] lg:w-[640px] pointer-events-none z-1 select-none mix-blend-multiply opacity-80 translate-y-[8%]">
        <Image
          src="/sketch.png"
          alt="Architectural minute hand sketch"
          width={1024}
          height={996}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Top Navbar */}
      <header className="relative z-30 w-full px-6 md:px-10 h-14 md:h-16 flex items-center justify-between shrink-0">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5 group cursor-pointer select-none">
          <Image
            src="/logo.png"
            alt="Upthrust Logo"
            width={28}
            height={28}
            className="w-6 h-6 md:w-7 md:h-7 object-contain transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            priority
          />
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-black">Upthrust</span>
        </div>

        {/* Orange Hamburger Menu Button matching Figma */}
        <button
          className="flex flex-col justify-center items-center gap-1.5 w-10 h-10 group cursor-pointer focus:outline-none"
          aria-label="Navigation Menu"
        >
          <span className="w-7 h-[3.5px] bg-[#FF3700] rounded-full transition-transform group-hover:scale-x-110" />
          <span className="w-7 h-[3.5px] bg-[#FF3700] rounded-full transition-transform group-hover:scale-x-110" />
          <span className="w-7 h-[3.5px] bg-[#FF3700] rounded-full transition-transform group-hover:scale-x-110" />
        </button>
      </header>

      {/* Main Hero Poster Stage */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-between items-center px-4 md:px-8 max-w-[1550px] mx-auto min-h-0 overflow-hidden">
        {/* TOP WORDMARK: "BOLD DESIGN" (Exact Warped Vector Graphic from Figma) */}
        <div className="relative z-10 w-full flex items-center justify-center shrink-0 pointer-events-none select-none pt-1">
          <Image
            src="/bold-design.png"
            alt="BOLD DESIGN"
            width={1024}
            height={128}
            className="w-[94%] max-w-[1360px] max-h-[12.5vh] h-auto object-contain"
            priority
          />
        </div>

        {/* MIDDLE SECTION: 3D BUST CENTERPIECE & PRECISELY ALIGNED MICRO-COPY */}
        <div className="relative z-20 w-full flex-1 min-h-0 flex items-center justify-center my-[-2vh]">
          {/* Left Side Annotations */}
          <div className="absolute left-[3%] sm:left-[5%] md:left-[7%] lg:left-[9%] top-1/2 -translate-y-1/2 z-25 flex flex-col gap-6 sm:gap-9 md:gap-12 select-none">
            {/* "STRATEGY IS CHEAPER" */}
            <div className="flex flex-col items-start">
              <span className="text-[11px] sm:text-xs md:text-sm font-extrabold tracking-wide text-black uppercase">
                STRATEGY IS
              </span>
              <div className="relative mt-0.5 inline-block">
                <span className="text-[11px] sm:text-xs md:text-sm font-extrabold tracking-wide text-black uppercase px-2 py-0.5">
                  CHEAPER
                </span>
                {/* Hand-drawn Orange Oval */}
                <svg
                  className="absolute inset-0 -left-1.5 -top-1 w-[calc(100%+12px)] h-[calc(100%+8px)] pointer-events-none"
                  viewBox="0 0 120 40"
                  fill="none"
                >
                  <ellipse
                    cx="60"
                    cy="20"
                    rx="56"
                    ry="17"
                    stroke="#FF3700"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    transform="rotate(-2 60 20)"
                  />
                </svg>
              </div>
            </div>

            {/* "IDENTITY • EXPERIENCE • MOTION •" */}
            <div className="flex flex-col items-start gap-1">
              <span className="text-sm sm:text-lg md:text-xl font-black tracking-tight text-black uppercase">
                IDENTITY •
              </span>
              <span className="text-sm sm:text-lg md:text-xl font-black tracking-tight text-black uppercase">
                EXPERIENCE •
              </span>
              <div className="relative inline-block">
                <span className="text-sm sm:text-lg md:text-xl font-black tracking-tight text-black uppercase">
                  MOTION •
                </span>
                {/* Hand-drawn brush underline */}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-3 pointer-events-none"
                  viewBox="0 0 100 12"
                  fill="none"
                >
                  <path
                    d="M 2 6 Q 25 10 50 5 T 98 6"
                    stroke="#FF3700"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* 3D IRIDESCENT BUST MODEL (CENTERPIECE) */}
          <div className="relative z-20 w-[290px] sm:w-[390px] md:w-[470px] lg:w-[570px] h-[350px] sm:h-[450px] md:h-[530px] lg:h-[620px] pointer-events-auto cursor-grab active:cursor-grabbing">
            <DynamicHeroStatue />
          </div>

          {/* "THAT" — Snug right next to the bust's neck and right shoulder */}
          <div className="absolute left-[calc(50%+25px)] sm:left-[calc(50%+45px)] md:left-[calc(50%+70px)] lg:left-[calc(50%+95px)] top-[47%] -translate-y-1/2 z-15 pointer-events-none select-none">
            <span className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FF3700] tracking-[-0.03em] leading-none uppercase block">
              THAT
            </span>
          </div>

          {/* "COMFORTABLE IS EXPENSIVE" — Moved to the right */}
          <div className="absolute right-[2%] sm:right-[4%] md:right-[6%] lg:right-[8%] top-[34%] z-25 flex flex-col items-start select-none">
            <span className="text-xs sm:text-sm md:text-base font-black tracking-tight text-black uppercase">
              COMFORTABLE
            </span>
            <div className="relative inline-block mt-0.5">
              <span className="text-xs sm:text-sm md:text-base font-black tracking-tight text-black uppercase">
                IS EXPENSIVE
              </span>
              {/* Hand-drawn wavy underline */}
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-3 pointer-events-none"
                viewBox="0 0 110 10"
                fill="none"
              >
                <path
                  d="M 2 5 Q 12 1 22 5 T 42 5 T 62 5 T 82 5 T 108 5"
                  stroke="#FF3700"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* BOTTOM WORDMARK: "PERFORMS" (Exact Warped Vector Graphic from Figma) */}
        <div className="relative z-10 w-full flex items-center justify-center shrink-0 pointer-events-none select-none pb-1">
          <Image
            src="/performs.png"
            alt="PERFORMS"
            width={1024}
            height={154}
            className="w-[96%] max-w-[1380px] max-h-[14vh] h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Bottom Proof Section: Client Logos Bar with Grid Dividers */}
      <ClientLogos />
    </section>
  );
}
