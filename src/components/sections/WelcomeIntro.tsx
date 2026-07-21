"use client";

import { motion } from "framer-motion";

interface WelcomeIntroProps {
  title: string;
  description: string;
}

export default function WelcomeIntro({ title, description }: WelcomeIntroProps) {
  return (
    <section className="bg-[#F7F5F0] py-16 md:py-24">
      <div className="container-custom max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl text-[#0A2C7A]">
            {title}
          </h2>
          <p className="text-[#4B4B4B] leading-relaxed text-base md:text-lg">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
