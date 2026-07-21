"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("home");

  return (
    <section className="bg-background py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 max-w-[520px]"
          >
            <span className="section-label text-gold">
              {t("aboutLabel")}
            </span>
            <h2 className="font-display text-3xl md:text-[44px] leading-[1.15]">
              {t("aboutTitle")}
            </h2>
            <p className="text-[17px] leading-[1.7] text-muted-foreground">
              {t("aboutDesc")}
            </p>
            <div className="pt-2">
              <Button href="/about" variant="primary">
                {t("aboutButton")}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full max-w-[600px] aspect-[5/4] rounded-3xl overflow-hidden border border-border shadow-lg"
          >
            <Image
              src="/images/about-nomads.jpg"
              alt={t("aboutTitle")}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
