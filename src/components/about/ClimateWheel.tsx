"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "@/components/common/Image";

export interface ClimateSeason {
  season: string;
  months: string;
  desc: string;
  image: string;
}

interface ClimateWheelProps {
  label: string;
  title: string;
  seasons: ClimateSeason[];
}

export default function ClimateWheel({ label, seasons }: ClimateWheelProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % seasons.length);
    }, 8000);
    return () => clearInterval(id);
  }, [paused, seasons.length]);

  const current = seasons[active];

  return (
    <section
      className="relative min-h-[90vh] overflow-hidden flex items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background image */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={active}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={current.image}
            alt={current.season}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Season names on the left */}
        <div className="flex flex-col justify-center gap-8 lg:gap-12">
          {seasons.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.season}
                onClick={() => setActive(i)}
                className="text-left uppercase tracking-[0.15em] transition-all duration-500"
                style={{
                  fontSize: isActive ? "clamp(20px, 2.4vw, 30px)" : "clamp(13px, 1.4vw, 16px)",
                  fontWeight: isActive ? 800 : 500,
                  color: isActive ? "#FFFFFF" : "rgba(255,255,255,0.45)",
                  transform: isActive ? "translateX(8px)" : "translateX(0)",
                }}
              >
                {s.season}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col gap-4 max-w-[480px]"
            >
              <span className="section-label text-gold">{label}</span>
              <span className="gold-line" />
              <h3 className="font-display text-4xl md:text-5xl text-white">
                {current.season}
              </h3>
              <p className="text-gold text-base md:text-lg tracking-wide">
                {current.months}
              </p>
              <p className="text-white/85 leading-[1.8] text-base md:text-lg">
                {current.desc}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
