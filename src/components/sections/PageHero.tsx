"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden">
      <Image
        src="/images/tour-3.jpg"
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/70 to-primary-dark/80" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex max-w-[640px] flex-col items-center gap-4 px-6 text-center"
      >
        <span className="section-label text-white/90">{label}</span>
        <span className="gold-line" />
        <h1 className="font-display text-4xl md:text-[56px] leading-tight text-white">
          {title}
        </h1>
        <p className="text-lg text-white/85">{subtitle}</p>
      </motion.div>
    </section>
  );
}
