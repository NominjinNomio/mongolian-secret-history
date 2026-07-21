"use client";

import { motion } from "framer-motion";

interface WelcomeIntroProps {
  text: string;
}

export default function WelcomeIntro({ text }: WelcomeIntroProps) {
  const words = text.split(" ");

  return (
    <section className="flex min-h-[50vh] items-center justify-center bg-white py-20 md:py-28 lg:py-36">
      <div className="container-custom max-w-6xl text-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.03 }}
          className="font-elegant text-2xl md:text-3xl lg:text-4xl font-light leading-[1.45] text-center text-[#0A2C7A]"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.45, ease: "easeOut" },
                },
              }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
