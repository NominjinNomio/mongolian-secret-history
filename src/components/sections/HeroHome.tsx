"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";

export default function HeroHome() {
  return (
    <section className="relative bg-[#F7F5F0] pt-4">
      <div className="container-custom">
        <div className="grid items-stretch gap-4 lg:grid-cols-2">
          {/* Decorative pattern panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex aspect-square items-center justify-center overflow-hidden bg-[#EDE8DD] lg:aspect-auto"
          >
            <PatternSvg className="h-4/5 w-4/5 text-[#D8CFC0]" />
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto"
          >
            <Image
              src="hero-steppe.jpg"
              alt="Mongolian camp interior"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-right"
        >
          <span className="font-display text-sm uppercase tracking-[0.2em] text-[#123FAE]">
            Welcome to Mongolia
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function PatternSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="200" height="200" fill="currentColor" fillOpacity="0.15" />
      <path
        d="M20 20h60v60H20V20zm20 20h20v20H40V40zm100-20h60v60h-60V20zm20 20h20v20h-20V40zM20 120h60v60H20v-60zm20 20h20v20H40v-20zm100 0h20v20h-20v-20zm-20-20h60v60h-60v-60z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M100 40l20 20-20 20-20-20 20-20zm0 80l20 20-20 20-20-20 20-20z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
