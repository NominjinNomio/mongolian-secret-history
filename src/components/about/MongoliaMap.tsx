"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

const regions = [
  {
    id: "western",
    name: "Western Mongolia",
    fill: "#7EB37F",
    path: "M15,32 L25,28 L35,28 L38,48 L45,48 L42,58 L42,70 L35,78 L18,75 L12,60 Z",
    starX: 26,
    starY: 48,
    labelX: 26,
    labelY: 54,
  },
  {
    id: "northern",
    name: "Northern Mongolia",
    fill: "#7BC4E0",
    path: "M25,28 L55,25 L72,28 L68,52 L58,52 L45,48 L38,48 L35,28 Z",
    starX: 52,
    starY: 34,
    labelX: 52,
    labelY: 40,
  },
  {
    id: "central",
    name: "Central Mongolia",
    fill: "#F5D65A",
    path: "M38,48 L45,48 L58,52 L62,60 L62,70 L55,74 L42,70 L42,58 Z",
    starX: 50,
    starY: 64,
    labelX: 50,
    labelY: 70,
  },
  {
    id: "eastern",
    name: "Eastern Mongolia",
    fill: "#F29B50",
    path: "M72,28 L85,32 L90,45 L88,60 L80,72 L62,82 L62,70 L62,60 L58,52 L68,52 Z",
    starX: 76,
    starY: 48,
    labelX: 76,
    labelY: 54,
  },
  {
    id: "southern",
    name: "Southern Mongolia",
    fill: "#8B7FB8",
    path: "M18,75 L35,78 L42,70 L55,74 L62,70 L62,82 L55,90 L38,88 L25,82 Z",
    starX: 42,
    starY: 82,
    labelX: 42,
    labelY: 88,
  },
];

function StarMarker({ x, y, fill = "#ffffff", size = 2 }: { x: number; y: number; fill?: string; size?: number }) {
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

  return <polygon points={points} fill={fill} />;
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

  const provincesLabel = t("provincesLabel");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-[1100px] mx-auto">
      <div className="lg:col-span-7 relative aspect-[4/3] rounded-[24px] bg-[#E8E8E8] overflow-hidden flex items-center justify-center shadow-sm">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-auto max-w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {regions.map((region) => (
            <g
              key={region.id}
              className="cursor-pointer transition-opacity"
              onMouseEnter={() => setActive(region.id)}
              style={{ opacity: active === region.id ? 1 : 0.92 }}
            >
              <path
                d={region.path}
                fill={region.fill}
                stroke="#ffffff"
                strokeWidth="2.2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <StarMarker x={region.starX} y={region.starY} />
              <text
                x={region.labelX}
                y={region.labelY}
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

          <g onMouseEnter={() => setActive("ulaanbaatar")}>
            <StarMarker x={50} y={54} fill="#C9A227" size={2.4} />
            <text
              x={50}
              y={60}
              textAnchor="middle"
              fontSize="3"
              fill="#ffffff"
              fontWeight="500"
              className="pointer-events-none"
            >
              Ulaanbaatar
            </text>
          </g>
        </svg>
      </div>

      <div className="lg:col-span-5 flex flex-col gap-4">
        {regionList.map((region) => (
          <div
            key={region.id}
            className={`rounded-xl p-5 transition-colors ${
              active === region.id ? "bg-[#F8F6F1]" : "bg-[#F8F6F1]/70"
            }`}
            onMouseEnter={() => setActive(region.id)}
          >
            <div className="flex items-center gap-2.5">
              <svg width="16" height="16" viewBox="0 0 12 12">
                <polygon
                  points="6,0 7.5,4 12,4.5 8.5,7.5 9.5,12 6,9.5 2.5,12 3.5,7.5 0,4.5 4.5,4"
                  fill="#C9A227"
                />
              </svg>
              <h3 className="font-display text-[22px] font-normal text-foreground">
                {region.title}
              </h3>
            </div>

            <p className="text-[15px] text-[#5A5A5A] mt-1.5 pl-[26px]">
              <span className="font-medium text-foreground/80">{provincesLabel}</span>{" "}
              {region.provinces}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
