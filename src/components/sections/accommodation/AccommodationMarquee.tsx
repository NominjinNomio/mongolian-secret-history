"use client";

import { motion } from "framer-motion";

const features = [
  "Traditional Gers",
  "Hotel Rooms",
  "Michid Restaurant",
  "Yellow Ger Library",
  "Conference Hall",
  "Horse & Camel Riding",
  "Archery & Activities",
  "Sauna & Showers",
  "Karaoke Bar",
  "Sports Ground",
  "24h Reception",
  "Free Wi-Fi",
];

export default function AccommodationMarquee() {
  const items = [...features, ...features, ...features, ...features];

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0a0a0a] py-6">
      <motion.div
        className="flex w-max gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {items.map((feature, i) => (
          <div key={i} className="flex items-center gap-12 whitespace-nowrap">
            <span className="font-display text-xl text-white/80 md:text-2xl">
              {feature}
            </span>
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
