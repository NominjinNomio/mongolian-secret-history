"use client";

import { motion } from "framer-motion";

interface WelcomeIntroProps {
  text: string;
}

export default function WelcomeIntro({ text }: WelcomeIntroProps) {
  return (
    <section className="flex min-h-[50vh] items-center justify-center bg-white py-20 md:py-28 lg:py-36">
      <div className="container-custom max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-elegant text-2xl md:text-3xl lg:text-4xl font-light leading-[1.45] text-center text-foreground"
        >
          {text}
        </motion.p>
      </div>
    </section>
  );
}
