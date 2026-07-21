"use client";

import { motion } from "framer-motion";

interface WelcomeSectionProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function WelcomeSection({ eyebrow, title, description }: WelcomeSectionProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          <span className="section-label text-primary">{eyebrow}</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
            {title}
          </h2>
          <div className="gold-line" />
          <p className="text-muted-foreground leading-relaxed text-lg">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
