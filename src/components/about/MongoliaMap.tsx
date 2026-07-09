"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { regions } from "@/lib/regions";
import { provinces } from "@/lib/provinces";

const regionList = (t: (key: string) => string) =>
  regions.map((r) => ({ ...r, name: t(r.nameKey) }));

const slugByRegionId = Object.fromEntries(regions.map((r) => [r.id, r.slug]));



export default function MongoliaMap() {
  const [active, setActive] = useState<string | null>(null);
  const t = useTranslations("about");
  const locale = useLocale();
  const router = useRouter();

  const list = regionList(t);

  const navigateToRegion = (regionId: string) => {
    const slug = slugByRegionId[regionId];
    if (slug) router.push(`/${locale}/${slug}`);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center items-center gap-6 md:gap-10 flex-wrap mb-8">
        {list.map((region) => (
          <Link
            key={region.id}
            href={`/${locale}/${region.slug}`}
            className="flex items-center gap-2 cursor-pointer transition-opacity select-none"
            onMouseEnter={() => setActive(region.id)}
            onMouseLeave={() => setActive(null)}
            style={{ opacity: active === null || active === region.id ? 1 : 0.5 }}
          >
            <span
              className="inline-block rounded-full"
              style={{ backgroundColor: region.fill, width: 12, height: 12 }}
            />
            <span className="text-sm md:text-base text-gray-700 font-medium">{region.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center w-full">
        <svg
          viewBox="-20 -25 1800 900"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
        <defs>
          <filter id="text-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>
        {provinces.map((province, index) => (
          <path
            key={index}
            d={province.d}
            fill={province.fill ?? list.find((r) => r.id === province.region)?.fill}
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            className="cursor-pointer transition-all duration-300 ease-out"
            style={{
              opacity: active === null || active === province.region ? 1 : 0.6,
              filter: active === province.region ? "brightness(1.05)" : "brightness(1)",
            }}
            onMouseEnter={() => setActive(province.region)}
            onMouseLeave={() => setActive(null)}
            onClick={() => navigateToRegion(province.region)}
          />
        ))}
        {provinces.map((province, index) => (
          <g key={`label-${index}`} style={{ display: province.hideLabel ? 'none' : undefined }}>
            <circle
              cx={province.cx}
              cy={province.cy}
              r="3.5"
              fill="#2c3e50"
              stroke="#ffffff"
              strokeWidth="1.2"
              className="pointer-events-none"
            />
            <text
              x={province.labelX ?? province.cx}
              y={province.labelY ?? province.cy + 14}
              textAnchor="middle"
              fontSize="13"
              fontFamily="Inter, sans-serif"
              fontWeight="600"
              fill="#ffffff"
              filter="url(#text-shadow)"
              className="pointer-events-none"
            >
              {province.name}
            </text>
          </g>
        ))}
      </svg>
      </div>
    </div>
  );
}
