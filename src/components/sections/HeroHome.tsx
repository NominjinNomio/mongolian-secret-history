"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

export default function HeroHome() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/mongolia-destinations-bg.jpg"
          alt="Mongolian steppe landscape"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[900px] flex-col items-center px-6 text-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-[12px] font-medium uppercase tracking-[0.35em] text-white/85"
        >
          Discover Mongolia
        </motion.span>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="font-elegant mt-6 text-4xl leading-[1.15] text-white md:text-6xl lg:text-[68px]"
        >
          Journey Through Mongolia&apos;s Secret History
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="mt-6 max-w-[560px] text-base leading-[1.8] text-white/85 md:text-lg"
        >
          Group tours, private adventures, and tailor-made itineraries across
          the steppe, desert, and nomadic heartland.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full bg-[#E8B62D] px-8 py-3.5 text-sm font-semibold text-[#2C2117] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F5C845] hover:shadow-lg"
          >
            Explore Tours
          </Link>
          <Link
            href="/plan-your-trip"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#2C2117] hover:shadow-lg"
          >
            Request Custom Trip
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
