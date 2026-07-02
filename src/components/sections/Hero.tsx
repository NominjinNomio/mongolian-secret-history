"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "@/components/common/Image";

export default function Hero() {
  return (
    <section className="relative flex min-h-[800px] items-center justify-center overflow-hidden">
      <Image
        src="hero-steppe.jpg"
        alt="Mongolian steppe landscape"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/45" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 flex max-w-[900px] flex-col items-center gap-6 px-6 text-center"
      >
        <span className="text-sm tracking-[4px] text-white uppercase">
          Discover Mongolia
        </span>
        <h1 className="font-display text-4xl md:text-6xl lg:text-[72px] leading-[1.1] text-white">
          Journey Through
          <br />
          Mongolia&apos;s Secret History
        </h1>
        <p className="max-w-[640px] text-lg text-white/90">
          Group tours, private adventures, and tailor-made itineraries across the steppe, desert, and nomadic heartland.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <Button href="/portfolio" variant="primary">
            Explore Tours
          </Button>
          <Button href="/contact" variant="secondary">
            Request Custom Trip
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
