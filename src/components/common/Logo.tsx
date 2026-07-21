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
      <circle cx="100" cy="100" r="90" fill="none" stroke="#FFFFFF" strokeWidth="3" />

      {/* Trident flame (soyombo) */}
      <g fill="#FFFFFF">
        <ellipse cx="100" cy="38" rx="6" ry="9" />
        <rect x="96.5" y="42" width="7" height="26" rx="2" />
        <path d="M93 66 q-14 -4 -14 -20 q10 4 14 20 z" />
        <path d="M107 66 q14 -4 14 -20 q-10 4 -14 20 z" />
      </g>

      {/* Ger roof */}
      <path
        d="M42 92 q14 -14 34 -18 q8 -2 14 2 q4 3 10 3 q6 0 10 -3 q6 -4 14 -2 q20 4 34 18 l-6 8 q-26 -16 -42 -16 q-16 0 -42 16 z"
        fill="#FFFFFF"
      />
      <ellipse cx="100" cy="86" rx="26" ry="7" fill="#FFFFFF" />

      {/* Ger body */}
      <path
        d="M52 104 h96 l-8 34 q-2 8 -10 8 h-60 q-8 0 -10 -8 z"
        fill="#FFFFFF"
      />

      {/* Door opening in ger body */}
      <path
        d="M78 112 h44 v34 h-44 z"
        fill="#123FAE"
      />
      <path
        d="M78 112 q22 -10 44 0 l-22 14 z"
        fill="#123FAE"
      />

      {/* SH letters */}
      <text
        x="100"
        y="182"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="34"
        fontWeight="800"
        letterSpacing="4"
        fontFamily="Arial, sans-serif"
      >
        SH
      </text>
    </svg>
  );
}
