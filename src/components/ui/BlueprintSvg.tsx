import React from "react";

export function BlueprintSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="#b4b4bd"
      strokeWidth="0.8"
    >
      {/* Outer construction circle */}
      <circle cx="280" cy="260" r="190" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="280" cy="260" r="160" opacity="0.6" />
      <circle cx="280" cy="260" r="130" strokeDasharray="6 3" opacity="0.5" />
      <circle cx="280" cy="260" r="100" opacity="0.7" />
      <circle cx="280" cy="260" r="65" strokeWidth="1.2" opacity="0.8" />
      <circle cx="280" cy="260" r="35" opacity="0.7" />
      <circle cx="280" cy="260" r="12" strokeWidth="1" opacity="0.9" />

      {/* Crosshairs & Angle axes */}
      <line x1="90" y1="260" x2="470" y2="260" strokeDasharray="8 4 2 4" opacity="0.6" />
      <line x1="280" y1="70" x2="280" y2="450" strokeDasharray="8 4 2 4" opacity="0.6" />

      {/* 45 degree angled axes */}
      <line x1="145" y1="125" x2="415" y2="395" strokeDasharray="4 4" opacity="0.4" />
      <line x1="145" y1="395" x2="415" y2="125" strokeDasharray="4 4" opacity="0.4" />

      {/* Radial tick marks */}
      {[...Array(24)].map((_, i) => {
        const angle = (i * 15 * Math.PI) / 180;
        const x1 = 280 + 95 * Math.cos(angle);
        const y1 = 260 + 95 * Math.sin(angle);
        const x2 = 280 + (i % 2 === 0 ? 108 : 103) * Math.cos(angle);
        const y2 = 260 + (i % 2 === 0 ? 108 : 103) * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            strokeWidth={i % 2 === 0 ? "1" : "0.6"}
            opacity="0.75"
          />
        );
      })}

      {/* Technical draft grid and architectural frames */}
      <rect x="180" y="290" width="80" height="60" strokeDasharray="2 2" opacity="0.5" />
      <rect x="220" y="320" width="40" height="30" opacity="0.6" />
      <line x1="160" y1="340" x2="200" y2="380" opacity="0.4" />
      <line x1="200" y1="380" x2="280" y2="380" opacity="0.5" />

      {/* Architectural staircase / stepped radial fan */}
      {[...Array(12)].map((_, i) => {
        const a1 = ((260 + i * 8) * Math.PI) / 180;
        const rInner = 130;
        const rOuter = 160;
        return (
          <path
            key={`step-${i}`}
            d={`M ${280 + rInner * Math.cos(a1)} ${260 + rInner * Math.sin(a1)} L ${280 + rOuter * Math.cos(a1)} ${260 + rOuter * Math.sin(a1)}`}
            opacity="0.6"
            strokeWidth="0.8"
          />
        );
      })}

      {/* Technical measurement markers and small dimension lines */}
      <path d="M 370 190 L 440 120 L 480 120" strokeWidth="0.8" opacity="0.6" />
      <circle cx="370" cy="190" r="2.5" fill="#b4b4bd" opacity="0.7" />
      <text x="445" y="115" fontSize="7" fill="#8e8e98" fontFamily="monospace">R160.00</text>

      <path d="M 280 430 L 320 470 L 370 470" strokeWidth="0.8" opacity="0.6" />
      <circle cx="280" cy="430" r="2.5" fill="#b4b4bd" opacity="0.7" />
      <text x="325" y="465" fontSize="7" fill="#8e8e98" fontFamily="monospace">SEC 04-A</text>

      {/* Outer framing diagonal guide */}
      <line x1="320" y1="40" x2="490" y2="210" strokeDasharray="12 4 4 4" strokeWidth="0.8" opacity="0.45" />
      <line x1="335" y1="25" x2="505" y2="195" strokeDasharray="3 3" opacity="0.3" />
    </svg>
  );
}
