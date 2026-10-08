import React from "react";
import Image from "next/image";

export function BrandIdentityMockup() {
  return (
    <div className="relative w-full aspect-[984/664] max-h-[440px] sm:max-h-[480px] lg:max-h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden drop-shadow-2xl flex items-center justify-center select-none group">
      <Image
        src="/brand-identity.png"
        alt="Brand & Visual Identity Design System"
        width={984}
        height={664}
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
        priority
      />
    </div>
  );
}
