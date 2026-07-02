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
        src="page-hero-bg.jpg"
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0f1e32]/70" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex max-w-[640px] flex-col items-center gap-4 px-6 text-center"
      >
        <span className="text-sm tracking-[4px] text-accent uppercase">{label}</span>
        <h1 className="font-display text-4xl md:text-[56px] leading-tight text-white">
          {title}
        </h1>
        <p className="text-lg text-white/85">{subtitle}</p>
      </motion.div>
    </section>
  );
}
