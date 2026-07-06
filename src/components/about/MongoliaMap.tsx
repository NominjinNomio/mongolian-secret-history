"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

const regions = [
  { id: "ulaanbaatar", name: "Ulaanbaatar", x: 64, y: 44 },
  { id: "central", name: "Central Mongolia", x: 56, y: 56 },
  { id: "southern", name: "Southern Mongolia", x: 52, y: 82 },
  { id: "eastern", name: "Eastern Mongolia", x: 78, y: 58 },
  { id: "northern", name: "Northern Mongolia", x: 50, y: 24 },
  { id: "western", name: "Western Mongolia", x: 22, y: 48 },
];

function StarMarker({ x, y, active }: { x: number; y: number; active: boolean }) {
  const size = active ? 4 : 3;
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

  return (
    <polygon
      points={points}
      fill={active ? "#C9A227" : "#ffffff"}
      stroke="#2D5A4A"
      strokeWidth="0.25"
    />
  );
}

export default function MongoliaMap() {
  const t = useTranslations("about");
  const [active, setActive] = useState("central");

  const regionList = [
    { id: "ulaanbaatar", title: t("Ulaanbaatar"), provinces: t("UlaanbaatarProvinces") },
    { id: "central", title: t("centralMongolia"), provinces: t("CentralMongoliaProvinces") },
    { id: "eastern", title: t("easternMongolia"), provinces: t("EasternMongoliaProvinces") },
    { id: "northern", title: t("northernMongolia"), provinces: t("NorthernMongoliaProvinces") },
    { id: "southern", title: t("southernMongolia"), provinces: t("SouthernMongoliaProvinces") },
    { id: "western", title: t("westernMongolia"), provinces: t("WesternMongoliaProvinces") },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
      <div className="lg:col-span-3 relative aspect-[4/3] rounded-3xl bg-[#C9CED6] overflow-hidden">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M18,30 Q24,20 34,24 Q44,14 54,18 Q64,12 74,20 Q84,18 88,28 Q95,34 90,46 Q94,58 84,66 Q88,78 76,84 Q66,90 54,86 Q42,92 30,84 Q20,78 18,66 Q12,56 16,44 Q14,34 18,30 Z"
            fill="#B8BFC9"
            stroke="#9AA2AC"
            strokeWidth="0.3"
          />
          {regions.map((region) => (
            <g
              key={region.id}
              className="cursor-pointer"
              onMouseEnter={() => setActive(region.id)}
            >
              <StarMarker x={region.x} y={region.y} active={active === region.id} />
              <text
                x={region.x}
                y={region.y + 7}
                textAnchor="middle"
                fontSize="3.2"
                fill="#ffffff"
                fontWeight="500"
                className="pointer-events-none"
              >
                {region.name}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="lg:col-span-2 flex flex-col gap-4">
        {regionList.map((region) => (
          <div
            key={region.id}
            className={`rounded-2xl p-5 transition-colors ${
              active === region.id ? "bg-[#F8F6F1]" : "bg-[#F8F6F1]/60"
            }`}
            onMouseEnter={() => setActive(region.id)}
          >
            <div className="flex items-center gap-2">
              <Star size={14} className="text-[#C9A227]" fill="#C9A227" />
              <h3 className="font-display text-lg text-foreground">{region.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-1 pl-6">
              <span className="font-medium">Provinces:</span> {region.provinces}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
