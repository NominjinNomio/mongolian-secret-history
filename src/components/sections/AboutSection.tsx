"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("home");

  return (
    <section className="bg-[#F8F5F0] py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 max-w-[520px]"
          >
            <span className="text-sm tracking-[3px] text-primary-dark uppercase">
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
            className="w-full max-w-[420px]"
          >
            <div className="overflow-hidden rounded-[32px] bg-white p-4 shadow-lg">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px]">
                <Image
                  src="about-nomads.jpg"
                  alt={t("aboutTitle")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center px-2 pb-2 pt-6 text-center">
                <h3 className="font-display text-2xl text-foreground">
                  {t("aboutCardName")}
                </h3>
                <span className="mt-1 text-sm text-muted-foreground">
                  {t("aboutCardRole")}
                </span>
                <Button href="/team" variant="primary" className="mt-5">
                  {t("aboutCardButton")}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
