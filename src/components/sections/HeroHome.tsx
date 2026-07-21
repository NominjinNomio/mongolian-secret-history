"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";

export default function HeroHome() {
  return (
    <section className="relative bg-[#F5F2EC]">
      <div className="grid grid-cols-1 items-stretch lg:grid-cols-[40%_1fr]">
        {/* Pattern panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex aspect-square items-center justify-center overflow-hidden bg-[#F5F2EC] p-6 lg:aspect-auto lg:min-h-[520px]"
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
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width="400" height="400" fill="currentColor" fillOpacity="0.08" />

      {/* Outer frame */}
      <rect x="20" y="20" width="360" height="360" stroke="currentColor" strokeWidth="8" fill="none" />
      <rect x="52" y="52" width="296" height="296" stroke="currentColor" strokeWidth="6" fill="none" />

      {/* Corner motifs */}
      <g stroke="currentColor" strokeWidth="6" fill="none">
        <path d="M52 116V52h64M52 284v64h64M348 116V52h-64M348 284v64h-64" />
        <rect x="84" y="84" width="48" height="48" />
        <rect x="268" y="84" width="48" height="48" />
        <rect x="84" y="268" width="48" height="48" />
        <rect x="268" y="268" width="48" height="48" />
      </g>

      {/* Central interlocking pattern */}
      <g stroke="currentColor" strokeWidth="5" fill="none">
        <path d="M132 132h136v136H132V132z" />
        <path d="M168 132v-36M232 132v-36M132 168h-36M132 232h-36M268 168h36M268 232h36M168 268v36M232 268v36" />
        <path d="M168 168h64v64h-64V168z" />
        <rect x="184" y="184" width="32" height="32" />
        <path d="M148 168c0-11 9-20 20-20M252 168c0 11-9 20-20 20M148 232c0 11 9 20 20 20M252 232c0-11-9-20-20-20" />
      </g>

      {/* Inner connecting lines */}
      <g stroke="currentColor" strokeWidth="4" fill="none">
        <path d="M100 100h48v48h-48zM252 100h48v48h-48zM100 252h48v48h-48zM252 252h48v48h-48z" />
        <path d="M124 148v48M276 148v48M148 124h48M148 276h48" />
      </g>

      {/* Decorative small squares */}
      <g fill="currentColor" fillOpacity="0.25">
        <rect x="70" y="70" width="16" height="16" />
        <rect x="314" y="70" width="16" height="16" />
        <rect x="70" y="314" width="16" height="16" />
        <rect x="314" y="314" width="16" height="16" />
        <rect x="192" y="70" width="16" height="16" />
        <rect x="70" y="192" width="16" height="16" />
        <rect x="314" y="192" width="16" height="16" />
        <rect x="192" y="314" width="16" height="16" />
      </g>
    </svg>
  );
}
