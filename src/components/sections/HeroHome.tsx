"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay, ease: "easeOut" as const },
  }),
};

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5EF]">
      {/* Parchment texture */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 10%, rgba(212,178,122,0.12) 0%, transparent 50%), radial-gradient(ellipse at 85% 90%, rgba(155,106,47,0.08) 0%, transparent 50%)",
        }}
      />

      {/* Decorative corner ornaments */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-8 top-8 opacity-30"
      >
        <CornerOrnament className="h-24 w-24 text-[#9B6A2F]" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-8 rotate-180 opacity-30"
      >
        <CornerOrnament className="h-24 w-24 text-[#9B6A2F]" />
      </motion.div>

      <div className="relative mx-auto max-w-[1280px] px-6 py-20 lg:py-28">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-[12px] font-medium uppercase tracking-[0.35em] text-[#9B6A2F]"
          >
            Welcome to Mongolia
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            className="font-elegant mt-6 text-[42px] leading-[1.15] text-[#2C2117] md:text-[56px] lg:text-[68px]"
          >
            Монголын Нууц Түүх
          </motion.h1>

          {/* Ornamental divider */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            className="mt-8 flex items-center gap-4"
          >
            <span className="h-px w-16 bg-[#D4B27A]" />
            <Ornament className="h-5 w-5 text-[#9B6A2F]" />
            <span className="h-px w-16 bg-[#D4B27A]" />
          </motion.div>

          {/* Subtitles */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            className="mt-8 max-w-[640px] text-lg leading-[1.8] text-[#2C2117]/85"
          >
            Монголд хийх аялал, соёл, адал явдал болон уламжлалт өвийг танин
            мэдэх онцгой туршлага.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="mt-4 max-w-[560px] font-elegant text-base italic leading-[1.7] text-[#9B6A2F]"
          >
            Discover Mongolia through authentic culture, unforgettable journeys,
            and timeless traditions.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function Ornament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2l2.4 4.8L19 8l-3.4 3.2L16.4 16 12 13.6 7.6 16l.8-4.8L5 8l4.6-1.2L12 2z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function CornerOrnament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" fill="none" className={className}>
      <path d="M4 92V40Q4 4 40 4h52" stroke="currentColor" strokeWidth="2" />
      <path d="M16 92V48Q16 16 48 16h44" stroke="currentColor" strokeWidth="1.5" />
      <rect x="28" y="28" width="12" height="12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M52 28h16v16H52z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
