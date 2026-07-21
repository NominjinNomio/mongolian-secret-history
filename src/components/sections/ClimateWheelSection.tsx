"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "@/components/common/Image";

const DURATION = 24; // seconds per full rotation

const seasons = [
  {
    name: "Spring",
    months: "March – May",
    desc: "The steppe awakens with wildflowers and newborn livestock. A season of renewal, ideal for witnessing nomadic life in motion.",
    image: "/images/tour-1.jpg",
  },
  {
    name: "Summer",
    months: "June – August",
    desc: "Long warm days, lush green pastures, and the famous Naadam festival. The most popular season for tours and outdoor adventures.",
    image: "/images/hero-steppe.jpg",
  },
  {
    name: "Autumn",
    months: "September – November",
    desc: "Golden forests, crisp air, and the Golden Eagle Festival in the Altai. Photographers' favorite season with stunning colors.",
    image: "/images/tour-4.jpg",
  },
  {
    name: "Winter",
    months: "December – February",
    desc: "A serene white wilderness. Experience frozen lakes, winter gers, and the quiet beauty of Mongolia under snow.",
    image: "/images/tour-5.jpg",
  },
];

export default function ClimateWheelSection() {
  const [active, setActive] = useState(3);

  useEffect(() => {
    const stepMs = (DURATION / seasons.length) * 1000;
    const id = setInterval(() => {
      setActive((a) => (a - 1 + seasons.length) % seasons.length);
    }, stepMs);
    return () => clearInterval(id);
  }, []);

  const current = seasons[active];

  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-[#0A2C7A]">
      {/* Background image crossfade */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current.image}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image src={current.image} alt={current.name} fill className="object-cover" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/55" />

      {/* Rotating wheel */}
      <div className="absolute left-[-12%] md:left-[-6%] top-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[560px] md:h-[560px]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          {seasons.map((season, i) => (
            <div
              key={season.name}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `translate(-50%, -50%) rotate(${i * 90}deg) translateY(-230px)` }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
              >
                <div style={{ transform: `rotate(${-i * 90}deg)` }}>
                  <span
                    className={`whitespace-nowrap font-display uppercase tracking-[0.25em] transition-all duration-700 ${
                      active === i
                        ? "text-white text-xl md:text-2xl font-bold"
                        : "text-white/50 text-sm md:text-base"
                    }`}
                  >
                    {season.name}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Active season content */}
      <div className="relative z-10 h-full flex items-center justify-end">
        <div className="w-full md:w-1/2 px-8 md:pr-24">
          <span className="section-label text-gold">Climate</span>
          <span className="gold-line mt-3" />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5 }}
              className="mt-5"
            >
              <h2 className="font-display text-4xl md:text-5xl text-white">{current.name}</h2>
              <p className="text-gold mt-2 text-lg">{current.months}</p>
              <p className="text-white/85 mt-4 leading-relaxed max-w-md">{current.desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
