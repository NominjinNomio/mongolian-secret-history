"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const regions = [
  { id: "ulaanbaatar", name: "Ulaanbaatar", x: 64, y: 46 },
  { id: "central", name: "Central Mongolia", x: 52, y: 58 },
  { id: "gobi", name: "Gobi Desert", x: 48, y: 82 },
  { id: "eastern", name: "Eastern Mongolia", x: 74, y: 62 },
  { id: "northern", name: "Northern Mongolia", x: 44, y: 34 },
  { id: "western", name: "Western Mongolia", x: 24, y: 52 },
];

export default function MongoliaMap() {
  const t = useTranslations("about");
  const [active, setActive] = useState("central");

  return (
    <div className="relative aspect-square rounded-3xl bg-[#E8E4DC] overflow-hidden">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M20,35 Q25,25 35,28 Q45,18 55,22 Q65,15 75,25 Q85,22 88,32 Q95,38 90,50 Q95,62 85,70 Q88,82 75,88 Q65,95 52,90 Q40,96 28,88 Q18,82 16,70 Q10,60 14,48 Q12,38 20,35 Z"
          fill="#C9D5CE"
          stroke="#2D5A4A"
          strokeWidth="0.5"
        />
        {regions.map((region) => (
          <g key={region.id}>
            <circle
              cx={region.x}
              cy={region.y}
              r={active === region.id ? 2.5 : 2}
              fill={active === region.id ? "#C9A227" : "#2D5A4A"}
              className="cursor-pointer transition-all"
              onMouseEnter={() => setActive(region.id)}
            />
            <text
              x={region.x}
              y={region.y - 4}
              textAnchor="middle"
              fontSize="3"
              fill="#1A2B4A"
              className="pointer-events-none"
            >
              {region.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
