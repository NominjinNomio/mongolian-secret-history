"use client";

import { regionById, regions } from "@/lib/regions";
import { provinces } from "@/lib/provinces";

interface RegionMapProps {
  regionId: string;
}

export default function RegionMap({ regionId }: RegionMapProps) {
  const region = regionById(regionId);
  if (!region) return null;

  const regionProvinces = provinces.filter((p) => p.region === regionId);

  return (
    <div className="flex justify-center items-center w-full">
      <svg
        viewBox={region.viewBox}
        className="w-[50%] h-auto max-w-2xl"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="text-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000000" floodOpacity="0.4" />
          </filter>
        </defs>
        {regionProvinces.map((province, index) => (
          <path
            key={index}
            d={province.d}
            fill={province.fill ?? region.fill}
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}
        {regionProvinces.map((province, index) => (
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
  );
}
