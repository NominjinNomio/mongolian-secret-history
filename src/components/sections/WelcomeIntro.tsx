"use client";

import { motion } from "framer-motion";

interface WelcomeIntroProps {
  text: string;
}

export default function WelcomeIntro({ text }: WelcomeIntroProps) {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-36">
      <div className="container-custom max-w-xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-elegant text-2xl md:text-3xl font-light leading-[1.55] tracking-wide text-[#0A2C7A]"
        >
          {text}
        </motion.p>
      </div>
    </section>
  );
}
