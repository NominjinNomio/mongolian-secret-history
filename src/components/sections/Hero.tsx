"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("home");

  return (
    <section className="relative flex min-h-[800px] items-center justify-center overflow-hidden">
      <Image
        src="/images/hero-steppe.jpg"
        alt={t("heroTitle")}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/60 to-primary-dark/80" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 flex max-w-[900px] flex-col items-center gap-6 px-6 text-center"
      >
        <span className="section-label text-white/90">
          {t("heroLabel")}
        </span>
        <span className="gold-line" />
        <h1 className="font-display text-4xl md:text-6xl lg:text-[72px] leading-[1.1] text-white">
          {t("heroTitle")
            .split(" ")
            .map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.08,
                  ease: "easeOut",
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <p className="max-w-[640px] text-lg text-white/90">
          {t("heroSubtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <Button href="/portfolio" variant="primary">
            {t("exploreTours")}
          </Button>
          <Button href="/contact" variant="secondary">
            {t("customTrip")}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
