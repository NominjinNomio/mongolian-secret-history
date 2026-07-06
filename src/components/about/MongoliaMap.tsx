"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const regions = [
  { id: "ulaanbaatar", name: "Ulaanbaatar", x: 64, y: 46 },
  { id: "central", name: "Central Mongolia", x: 56, y: 58 },
  { id: "eastern", name: "Eastern Mongolia", x: 76, y: 56 },
  { id: "northern", name: "Northern Mongolia", x: 50, y: 28 },
  { id: "southern", name: "Southern Mongolia", x: 50, y: 78 },
  { id: "western", name: "Western Mongolia", x: 24, y: 50 },
];

function StarMarker({ x, y }: { x: number; y: number }) {
  const size = 1.6;
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

  return <polygon points={points} fill="#ffffff" />;
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
            d="M18,28 Q24,18 34,22 Q44,12 54,16 Q64,10 74,18 Q84,16 88,26 Q95,32 90,44 Q94,56 84,64 Q88,76 76,82 Q66,88 54,84 Q42,90 30,82 Q20,76 18,64 Q12,54 16,42 Q14,32 18,28 Z"
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
              <StarMarker x={region.x} y={region.y} />
              <text
                x={region.x}
                y={region.y + 6}
                textAnchor="middle"
                fontSize="3"
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
            className={`rounded-xl p-5 transition-colors ${
              active === region.id ? "bg-[#F8F6F1]" : "bg-[#F8F6F1]/70"
            }`}
            onMouseEnter={() => setActive(region.id)}
          >
            <div className="flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 12 12">
                <polygon
                  points="6,0 7.5,4 12,4.5 8.5,7.5 9.5,12 6,9.5 2.5,12 3.5,7.5 0,4.5 4.5,4"
                  fill="#C9A227"
                />
              </svg>
              <h3 className="font-display text-lg text-foreground">{region.title}</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-1 pl-5">
              <span className="font-medium">Provinces:</span> {region.provinces}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
