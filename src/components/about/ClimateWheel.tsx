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
  seasons: ClimateSeason[];
}

const STEP = 30;

export default function ClimateWheel({ seasons }: ClimateWheelProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % seasons.length);
    }, 3500);
    return () => clearInterval(id);
  }, [paused, seasons.length]);

  const current = seasons[active];

  return (
    <section
      className="relative overflow-hidden bg-[#FAFAF8] py-20 lg:py-[100px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          {/* Rotating wheel */}
          <div className="relative h-[420px] md:h-[520px]">
            {seasons.map((s, i) => {
              const angle = (i - active) * STEP;
              const isActive = i === active;
              return (
                <button
                  key={s.season}
                  onClick={() => setActive(i)}
                  className="absolute left-1/2 top-1/2 whitespace-nowrap uppercase tracking-[0.15em] transition-all duration-700 ease-out"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(-min(24vw, 240px))`,
                    opacity: Math.abs(angle) > 90 ? 0 : isActive ? 1 : 0.35,
                    fontSize: isActive ? "clamp(18px, 2.2vw, 26px)" : "clamp(13px, 1.5vw, 17px)",
                    fontWeight: isActive ? 800 : 500,
                    color: isActive ? "#C8A24A" : "#0A2C7A",
                    pointerEvents: Math.abs(angle) > 90 ? "none" : "auto",
                    zIndex: isActive ? 10 : 1,
                  }}
                >
                  {s.season}
                </button>
              );
            })}
          </div>

          {/* Changing content */}
          <div className="relative min-h-[420px] md:min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex h-full flex-col gap-5"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={current.image}
                    alt={current.season}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-foreground">
                  {current.season}
                </h3>
                <p className="text-sm text-gold uppercase tracking-[0.2em]">
                  {current.months}
                </p>
                <p className="text-muted-foreground leading-[1.8] max-w-lg">
                  {current.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
