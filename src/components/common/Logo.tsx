interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-[56px] w-[56px]" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Mongolian Secret History"
    >
      {/* Outer circle + ring */}
      <circle cx="100" cy="100" r="98" fill="#123FAE" />
      <circle cx="100" cy="100" r="92" fill="none" stroke="#FFFFFF" strokeWidth="3.5" />

      {/* Soyombo flame (trident) */}
      <g fill="#FFFFFF">
        <ellipse cx="100" cy="34" rx="7" ry="10" />
        <rect x="96" y="40" width="8" height="30" rx="3" />
        <path d="M92 68 q-16 -6 -14 -24 q12 8 14 24 z" />
        <path d="M108 68 q16 -6 14 -24 q-12 8 -14 24 z" />
      </g>

      {/* Ger roof band */}
      <path
        d="M40 88 Q100 62 160 88 L154 98 Q100 76 46 98 Z"
        fill="#FFFFFF"
      />

      {/* Ger body */}
      <path
        d="M48 102 H152 V138 Q152 148 142 148 H58 Q48 148 48 138 Z"
        fill="#FFFFFF"
      />

      {/* Peaked doorway cutout */}
      <path
        d="M72 112 L100 98 L128 112 V148 H72 Z"
        fill="#123FAE"
      />

      {/* SH letters */}
      <text
        x="100"
        y="184"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="36"
        fontWeight="800"
        letterSpacing="6"
        fontFamily="Arial, sans-serif"
      >
        SH
      </text>
    </svg>
  );
}
