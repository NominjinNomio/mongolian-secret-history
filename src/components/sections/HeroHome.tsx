"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "@/components/common/Image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

export interface HeroHomeProps {
  kicker?: string;
  heading?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryUrl?: string;
  secondaryLabel?: string;
  secondaryUrl?: string;
  backgroundImage?: string;
  heroImage?: string;
}

export default function HeroHome({
  kicker = "Discover Mongolia",
  heading = "Journey Through Mongolia's Secret History",
  subtitle = "Group tours, private adventures, and tailor-made itineraries across the steppe, desert, and nomadic heartland.",
  primaryLabel = "Explore Tours",
  primaryUrl = "/portfolio",
  secondaryLabel = "Request Custom Trip",
  secondaryUrl = "/plan-your-trip",
  backgroundImage = "/images/mongolia-destinations-bg.jpg",
  heroImage = "/images/hero-steppe.jpg",
}: HeroHomeProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Layer speeds: background slow, image medium, text fast + fade
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-45%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.75]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100vh] items-center overflow-hidden bg-[#10151C]"
    >
      {/* Background layer — slowest */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Mongolian steppe landscape"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-[#10151C]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text layer — fastest, fades out */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="flex flex-col items-start"
        >
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-[12px] font-medium uppercase tracking-[0.35em] text-[#D4B27A]"
          >
            {kicker}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="font-elegant mt-6 text-4xl leading-[1.12] text-white md:text-6xl lg:text-[68px]"
          >
            {heading}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="mt-6 max-w-[520px] text-base leading-[1.8] text-white/75 md:text-lg"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href={primaryUrl}
              className="inline-flex items-center justify-center rounded-full bg-[#E8B62D] px-8 py-3.5 text-sm font-semibold text-[#2C2117] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5C845] hover:shadow-lg"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryUrl}
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#2C2117] hover:shadow-lg"
            >
              {secondaryLabel}
            </Link>
          </motion.div>
        </motion.div>

        {/* Image layer — medium speed, like the book in the reference */}
        <motion.div
          style={{ y: imageY, rotate: imageRotate }}
          className="relative hidden lg:block"
        >
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative aspect-[3/4] w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50"
          >
            <Image
              src={heroImage}
              alt="Mongolian ger at sunset"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#10151C]/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity: textOpacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white/70"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
