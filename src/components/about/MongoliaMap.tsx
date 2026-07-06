"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const regions = [
  { id: "ulaanbaatar", name: "Ulaanbaatar", x: 68, y: 46 },
  { id: "central", name: "Central Mongolia", x: 60, y: 52 },
  { id: "eastern", name: "Eastern Mongolia", x: 80, y: 52 },
  { id: "northern", name: "Northern Mongolia", x: 54, y: 30 },
  { id: "southern", name: "Southern Mongolia", x: 52, y: 74 },
  { id: "western", name: "Western Mongolia", x: 24, y: 48 },
];

function StarMarker({ x, y, active }: { x: number; y: number; active: boolean }) {
  const size = active ? 2.2 : 1.8;
  const points = [
    `${x},${y - size}`,
    `${x + size * 0.3},${y - size * 0.3}`,
    `${x + size},${y - size * 0.1}`,
    `${x + size * 0.4},${y + size * 0.25}`,
    `${x + size * 0.6},${y + size}`,
    `${x},${y + size * 0.5}`,
    `${x - size * 0.6},${y + size}`,
    `${x - size * 0.4},${y + size * 0.25}`,
    `${x - size},${y - size * 0.1}`,
    `${x - size * 0.3},${y - size * 0.3}`,
  ].join(" ");

  return <polygon points={points} fill={active ? "#C9A227" : "#ffffff"} />;
}

export default function MongoliaMap() {
  const t = useTranslations("about");
  const [active, setActive] = useState("central");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="relative aspect-[4/3]">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M18,28 Q24,18 34,22 Q44,12 54,16 Q64,10 74,18 Q84,16 88,26 Q95,32 90,44 Q94,56 84,64 Q88,76 76,82 Q66,88 54,84 Q42,90 30,82 Q20,76 18,64 Q12,54 16,42 Q14,32 18,28 Z"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.6"
            strokeDasharray="1.5 1"
          />
          <path
            d="M42,22 Q48,18 54,24 Q60,20 66,28 M34,28 Q42,32 48,40 Q56,34 64,40 M28,44 Q38,42 46,50 Q54,44 62,52 M30,60 Q40,56 48,62 Q56,58 64,64 M42,72 Q50,68 58,74"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.4"
            strokeDasharray="1 1"
          />
          {regions.map((region) => (
            <g
              key={region.id}
              className="cursor-pointer"
              onMouseEnter={() => setActive(region.id)}
            >
              <StarMarker x={region.x} y={region.y} active={active === region.id} />
            </g>
          ))}
        </svg>
      </div>

      <div className="flex flex-col gap-4">
        {regions.map((region) => (
          <div
            key={region.id}
            className={`flex items-center gap-3 transition-colors ${
              active === region.id ? "text-white" : "text-white/80"
            }`}
            onMouseEnter={() => setActive(region.id)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16">
              <polygon
                points="8,0 9.8,5.2 16,5.9 11.2,9.6 12.7,16 8,12.3 3.3,16 4.8,9.6 0,5.9 6.2,5.2"
                fill={active === region.id ? "#C9A227" : "#ffffff"}
              />
            </svg>
            <span className="text-lg font-display">{region.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
