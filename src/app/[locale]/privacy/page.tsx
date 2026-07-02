"use client";

import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";

const sectionKeys = [
  "collect",
  "use",
  "share",
  "security",
  "cookies",
  "rights",
  "changes",
];

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[900px] px-6 lg:px-0">
          <div className="flex flex-col gap-10">
            {sectionKeys.map((section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h2 className="font-display text-[28px] text-foreground mb-3">{t(`${section}Title`)}</h2>
                <p className="text-base leading-[1.7] text-muted-foreground">{t(`${section}Desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-dark py-12 lg:py-14">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-[700px] text-center md:text-left">
              <h2 className="font-display text-[28px] text-white">{t("questionsTitle")}</h2>
              <p className="text-white/80 mt-2">{t("questionsDesc")}</p>
            </div>
            <Button href="/contact" variant="primary">
              {t("contact")}
            </Button>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
