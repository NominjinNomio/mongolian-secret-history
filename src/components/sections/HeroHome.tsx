"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";

export default function HeroHome() {
  return (
    <section className="relative bg-[#FAFAF8]">
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-[40%_1fr]">
        {/* Pattern panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex aspect-square items-center justify-center overflow-hidden bg-[#FAFAF8] p-6 lg:aspect-auto lg:min-h-[520px]"
        >
          <MongolianPattern className="h-full w-full max-w-[420px] text-[#C9C3B8]" />
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative min-h-[320px] w-full overflow-hidden lg:min-h-[520px]"
        >
          <Image
            src="hero-steppe.jpg"
            alt="Mongolian Secret History dining"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pb-8 pt-4 text-right lg:pb-12 lg:pt-6"
        >
          <span className="font-elegant text-2xl md:text-3xl font-light italic text-[#0A2C7A]">
            Welcome to Mongolia
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function MongolianPattern({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width="420" height="420" fill="currentColor" fillOpacity="0.06" />

      {/* Outer frame */}
      <rect x="10" y="10" width="400" height="400" stroke="currentColor" strokeWidth="6" fill="none" />

      {/* Three vertical panels separated by gaps */}
      <g stroke="currentColor" strokeWidth="4" fill="none">
        {/* Left panel */}
        <rect x="30" y="30" width="110" height="360" />
        <path d="M50 50h70v70h-70zM70 70h30v30h-30z" />
        <path d="M50 290h70v70h-70zM70 310h30v30h-30z" />
        <path d="M50 170h70v70h-70zM70 190h30v30h-30z" />

        {/* Middle panel */}
        <rect x="155" y="30" width="110" height="360" />
        <path d="M175 50h70v70h-70zM195 70h30v30h-30z" />
        <path d="M175 290h70v70h-70zM195 310h30v30h-30z" />
        <path d="M175 170h70v70h-70zM195 190h30v30h-30z" />
        <path d="M175 110h70M245 110v40M245 150h-70M175 150v-40M175 230h70M245 230v40M245 270h-70M175 270v-40" />

        {/* Right panel */}
        <rect x="280" y="30" width="110" height="360" />
        <path d="M300 50h70v70h-70zM320 70h30v30h-30z" />
        <path d="M300 290h70v70h-70zM320 310h30v30h-30z" />
        <path d="M300 170h70v70h-70zM320 190h30v30h-30z" />
      </g>

      {/* Connecting horizontal lines between panels */}
      <g stroke="currentColor" strokeWidth="3" fill="none">
        <path d="M140 85h15M140 205h15M140 325h15" />
        <path d="M265 85h15M265 205h15M265 325h15" />
      </g>

      {/* Decorative small squares */}
      <g fill="currentColor" fillOpacity="0.25">
        <rect x="42" y="42" width="14" height="14" />
        <rect x="42" y="162" width="14" height="14" />
        <rect x="42" y="282" width="14" height="14" />
        <rect x="167" y="42" width="14" height="14" />
        <rect x="167" y="162" width="14" height="14" />
        <rect x="167" y="282" width="14" height="14" />
        <rect x="292" y="42" width="14" height="14" />
        <rect x="292" y="162" width="14" height="14" />
        <rect x="292" y="282" width="14" height="14" />
        <rect x="114" y="42" width="14" height="14" />
        <rect x="114" y="162" width="14" height="14" />
        <rect x="114" y="282" width="14" height="14" />
        <rect x="239" y="42" width="14" height="14" />
        <rect x="239" y="162" width="14" height="14" />
        <rect x="239" y="282" width="14" height="14" />
        <rect x="364" y="42" width="14" height="14" />
        <rect x="364" y="162" width="14" height="14" />
        <rect x="364" y="282" width="14" height="14" />
      </g>
    </svg>
  );
}
