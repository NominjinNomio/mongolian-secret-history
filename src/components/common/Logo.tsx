interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-[60px] w-[60px]" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Mongolian Secret History Restaurant"
    >
      <defs>
        <path id="logoTopArc" d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0" />
        <path id="logoBottomArc" d="M 100,100 m -60,0 a 60,60 0 1,0 120,0 a 60,60 0 1,0 -120,0" />
      </defs>

      {/* Outer circle */}
      <circle cx="100" cy="100" r="98" fill="#123FAE" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="#FFFFFF" strokeWidth="2" />

      {/* Top circular text */}
      <text
        fill="#FFFFFF"
        fontSize="15.5"
        fontWeight="700"
        letterSpacing="3"
        fontFamily="Arial, sans-serif"
      >
        <textPath href="#logoTopArc" startOffset="50%" textAnchor="middle" dominantBaseline="text-before-edge">
          MONGOLIAN SECRET HISTORY
        </textPath>
      </text>

      {/* Bottom circular text */}
      <text
        fill="#FFFFFF"
        fontSize="17"
        fontWeight="700"
        letterSpacing="6"
        fontFamily="Arial, sans-serif"
      >
        <textPath href="#logoBottomArc" startOffset="50%" textAnchor="middle" dominantBaseline="text-after-edge">
          RESTAURANT
        </textPath>
      </text>

      {/* Side dots */}
      <circle cx="14" cy="100" r="5" fill="#FFFFFF" />
      <circle cx="186" cy="100" r="5" fill="#FFFFFF" />

      {/* Ger + trident icon */}
      <g fill="#FFFFFF">
        {/* Trident (soyombo flame) */}
        <path d="M100 52 q-4 -10 0 -16 q4 6 0 16 z" />
        <path d="M100 58 q-14 -6 -12 -20 q8 6 12 20 z" />
        <path d="M100 58 q14 -6 12 -20 q-8 6 -12 20 z" />
        <rect x="97.5" y="54" width="5" height="8" rx="1" />
        {/* Ger roof */}
        <path d="M62 88 q38 -26 76 0 l-4 6 q-34 -22 -68 0 z" />
        {/* Ger body */}
        <path d="M70 96 h60 v34 q0 4 -4 4 h-52 q-4 0 -4 -4 z" />
      </g>

      {/* SH letters cut out of ger body */}
      <g fill="#123FAE">
        <path d="M84 106 q-5 0 -5 4 q0 3 4 4 l4 1 q3 1 3 3 q0 2 -3 2 q-4 0 -6 -3 l-3 2 q3 4 9 4 q7 0 7 -6 q0 -4 -5 -5 l-4 -1 q-2 -1 -2 -2 q0 -1 2 -1 q3 0 5 2 l3 -2 q-3 -4 -9 -4 z" />
        <rect x="104" y="104" width="5" height="20" />
        <rect x="117" y="104" width="5" height="20" />
        <rect x="104" y="111" width="18" height="5" />
      </g>
    </svg>
  );
}
