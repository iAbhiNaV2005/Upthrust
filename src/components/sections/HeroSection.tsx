"use client";

import React from "react";
import dynamic from "next/dynamic";
import { BlueprintSvg } from "@/components/ui/BlueprintSvg";
import { ClientLogos } from "@/components/ui/ClientLogos";

const DynamicHeroStatue = dynamic(
  () => import("@/components/canvas/HeroStatue").then((mod) => mod.HeroStatueCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-[#FF3700] border-t-transparent animate-spin" />
      </div>
    ),
  }
);

export function HeroSection() {
  return (
    <section className="relative w-full bg-white text-black overflow-hidden flex flex-col justify-between min-h-screen">
      {/* Top Navbar */}
      <header className="relative z-30 w-full px-6 md:px-12 py-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer">
          {/* Rocket Icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 fill-black text-black transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            <path d="M12.5 2C10.5 4 8.5 7 8 9.5L6.5 8 5 9.5l3.5 3.5c-.5 1.5-.5 3.5-.5 3.5s2 0 3.5-.5L15 19.5 16.5 18l-1.5-1.5c2.5-.5 5.5-2.5 7.5-4.5-1-6.5-6-9-10-10zm1.5 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
          <span className="text-2xl font-extrabold tracking-tight text-black">Upthrust</span>
        </a>

        {/* Contact Us Action */}
        <a
          href="#contact"
          className="text-lg md:text-xl font-black tracking-tight text-[#FF3700] hover:text-[#d42e00] transition-colors uppercase"
        >
          CONTACT US
        </a>
      </header>

      {/* Main Hero Visual Composition */}
      <div className="relative w-full flex-1 flex flex-col justify-center items-center px-4 md:px-8 py-2 md:py-6 max-w-[1550px] mx-auto">
        {/* Background Architectural Blueprint on right side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] md:w-[480px] lg:w-[620px] h-[340px] md:h-[480px] lg:h-[620px] pointer-events-none opacity-85 select-none -mr-16 md:-mr-12 lg:mr-0 z-0">
          <BlueprintSvg className="w-full h-full" />
        </div>

        {/* TOP HUGE TEXT: "BOLD DESIGN" */}
        <div className="relative z-10 w-full text-center select-none pointer-events-none">
          <h1 className="font-hero-bold text-[13vw] sm:text-[14vw] lg:text-[13.5vw] text-[#FF3700] tracking-[-0.05em] leading-[0.82] uppercase transform -skew-x-[6deg]">
            BOLD DESIGN
          </h1>
        </div>

        {/* MIDDLE SECTION WITH 3D STATUE & FLOATING ANNOTATIONS */}
        <div className="relative z-20 w-full min-h-[380px] sm:min-h-[440px] md:min-h-[520px] lg:min-h-[580px] flex items-center justify-center my-[-2vw]">
          {/* Left Annotations */}
          <div className="absolute left-2 sm:left-6 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 z-25 flex flex-col gap-10 md:gap-14 select-none">
            {/* "STRATEGY IS CHEAPER" */}
            <div className="flex flex-col items-start">
              <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-wide text-black uppercase">
                STRATEGY IS
              </span>
              <div className="relative mt-1 inline-block">
                <span className="text-xs sm:text-sm md:text-base font-extrabold tracking-wide text-black uppercase px-2 py-0.5">
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
              <span className="text-base sm:text-xl md:text-2xl font-black tracking-tight text-black uppercase">
                IDENTITY •
              </span>
              <span className="text-base sm:text-xl md:text-2xl font-black tracking-tight text-black uppercase">
                EXPERIENCE •
              </span>
              <div className="relative inline-block">
                <span className="text-base sm:text-xl md:text-2xl font-black tracking-tight text-black uppercase">
                  MOTION •
                </span>
                {/* Hand-drawn brush underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3.5 pointer-events-none"
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
          <div className="relative z-20 w-[340px] sm:w-[440px] md:w-[540px] lg:w-[640px] h-[420px] sm:h-[500px] md:h-[600px] lg:h-[680px] pointer-events-auto cursor-grab active:cursor-grabbing">
            <DynamicHeroStatue />
          </div>

          {/* Right Annotations: "THAT" + "COMFORTABLE IS EXPENSIVE" */}
          <div className="absolute right-2 sm:right-6 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 z-25 flex flex-col items-start gap-12 select-none">
            {/* "COMFORTABLE IS EXPENSIVE" */}
            <div className="flex flex-col items-start">
              <span className="text-sm sm:text-base md:text-lg font-black tracking-tight text-black uppercase">
                COMFORTABLE
              </span>
              <div className="relative inline-block mt-0.5">
                <span className="text-sm sm:text-base md:text-lg font-black tracking-tight text-black uppercase">
                  IS EXPENSIVE
                </span>
                {/* Hand-drawn wavy underline */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 pointer-events-none"
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

            {/* Giant "THAT" next to bust */}
            <div className="mt-2 pointer-events-none">
              <span className="font-hero-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#FF3700] tracking-tight uppercase transform -skew-x-[6deg] block">
                THAT
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM HUGE TEXT: "PERFORMS" */}
        <div className="relative z-10 w-full text-center select-none pointer-events-none">
          <h2 className="font-hero-bold text-[13.5vw] sm:text-[14.5vw] lg:text-[14vw] text-[#FF3700] tracking-[-0.05em] leading-[0.82] uppercase transform -skew-x-[6deg]">
            PERFORMS
          </h2>
        </div>
      </div>

      {/* Bottom Proof Section: Client Logos */}
      <ClientLogos />
    </section>
  );
}
