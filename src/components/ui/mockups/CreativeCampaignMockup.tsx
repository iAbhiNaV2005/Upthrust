import React from "react";
import Image from "next/image";

export function CreativeCampaignMockup() {
  return (
    <div className="relative w-full aspect-[1024/685] max-h-[190px] xs:max-h-[220px] sm:max-h-[320px] md:max-h-[440px] lg:max-h-[520px] rounded-xl sm:rounded-3xl overflow-hidden drop-shadow-2xl flex items-center justify-center select-none group">
      <Image
        src="/creative-campaign.jpg"
        alt="Creative & Campaign Production Mockup Board"
        width={1024}
        height={685}
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
        priority
      />
    </div>
  );
}
