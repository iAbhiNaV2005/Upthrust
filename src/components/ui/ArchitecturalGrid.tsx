import React from "react";

export function ArchitecturalGrid({ className = "" }: { className?: string }) {
  // Spacious architectural drafting grid (96px spacing, 6x wider than previous 16px)
  // Very light, delicate subtle grey tones
  const gridSize = 96;

  return (
    <div className={`absolute inset-0 pointer-events-none select-none z-0 ${className}`}>
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ shapeRendering: "crispEdges" }}
      >
        <defs>
          <pattern
            id="spacious-blueprint-grid"
            width={gridSize}
            height={gridSize}
            patternUnits="userSpaceOnUse"
          >
            {/* Very light, spacious grid lines */}
            <line
              x1="7"
              y1="0"
              x2={gridSize - 7}
              y2="0"
              stroke="#f1f1f6"
              strokeWidth="1"
            />
            <line
              x1="7"
              y1={gridSize}
              x2={gridSize - 7}
              y2={gridSize}
              stroke="#f1f1f6"
              strokeWidth="1"
            />
            <line
              x1="0"
              y1="7"
              x2="0"
              y2={gridSize - 7}
              stroke="#f1f1f6"
              strokeWidth="1"
            />
            <line
              x1={gridSize}
              y1="7"
              x2={gridSize}
              y2={gridSize - 7}
              stroke="#f1f1f6"
              strokeWidth="1"
            />

            {/* Delicate corner crosshair tick marks at the intersections */}
            {/* (0, 0) intersection */}
            <line x1="0" y1="0" x2="3.5" y2="0" stroke="#c0c0ca" strokeWidth="1" />
            <line x1={gridSize - 3.5} y1="0" x2={gridSize} y2="0" stroke="#c0c0ca" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="3.5" stroke="#c0c0ca" strokeWidth="1" />
            <line x1="0" y1={gridSize - 3.5} x2="0" y2={gridSize} stroke="#c0c0ca" strokeWidth="1" />

            {/* (gridSize, gridSize) intersection */}
            <line x1={gridSize - 3.5} y1={gridSize} x2={gridSize} y2={gridSize} stroke="#c0c0ca" strokeWidth="1" />
            <line x1="0" y1={gridSize} x2="3.5" y2={gridSize} stroke="#c0c0ca" strokeWidth="1" />
            <line x1={gridSize} y1={gridSize - 3.5} x2={gridSize} y2={gridSize} stroke="#c0c0ca" strokeWidth="1" />
            <line x1={gridSize} y1="0" x2={gridSize} y2="3.5" stroke="#c0c0ca" strokeWidth="1" />
          </pattern>
        </defs>

        {/* Fill entire background with the spacious light grid */}
        <rect width="100%" height="100%" fill="url(#spacious-blueprint-grid)" />
      </svg>
    </div>
  );
}
