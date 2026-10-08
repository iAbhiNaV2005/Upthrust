import React from "react";
import Image from "next/image";

export function ProductExperienceMockup() {
  return (
    <div className="relative w-full aspect-[1024/685] max-h-[440px] sm:max-h-[480px] lg:max-h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden drop-shadow-2xl flex items-center justify-center select-none group">
      <Image
        src="/product-experience.png"
        alt="Product & Digital Experience Design System — neatlogs"
        width={1024}
        height={685}
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
        priority
      />
    </div>
  );
}
