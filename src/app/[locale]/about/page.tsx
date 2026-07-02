"use client";

import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";

const regionKeys = [
  { name: "Ulaanbaatar", provinces: "UlaanbaatarProvinces" },
  { name: "Central Mongolia", provinces: "CentralMongoliaProvinces" },
  { name: "Eastern Mongolia", provinces: "EasternMongoliaProvinces" },
  { name: "Northern Mongolia", provinces: "NorthernMongoliaProvinces" },
  { name: "Southern Mongolia", provinces: "SouthernMongoliaProvinces" },
  { name: "Western Mongolia", provinces: "WesternMongoliaProvinces" },
];

const seasons = [
  { key: "spring", months: "springMonths" },
  { key: "summer", months: "summerMonths" },
  { key: "autumn", months: "autumnMonths" },
  { key: "winter", months: "winterMonths" },
];

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[560px] aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <Image src="about-nomads.jpg" alt={t("heroTitle")} fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-5 max-w-[520px]"
            >
              <span className="text-sm tracking-[3px] text-primary-dark uppercase">{t("countryLabel")}</span>
              <h2 className="font-display text-3xl md:text-[40px] leading-[1.15]">{t("countryTitle")}</h2>
              <p className="text-base leading-[1.7] text-muted-foreground">{t("countryDesc1")}</p>
              <p className="text-base leading-[1.7] text-muted-foreground">{t("countryDesc2")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-[120px] overflow-hidden">
        <Image
          src="/images/mongolia-destinations-bg.jpg"
          alt={t("destinationsTitle")}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1e32]/65" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-12">
            <span className="text-sm tracking-[3px] text-accent uppercase">{t("destinationsLabel")}</span>
            <h2 className="font-display text-3xl md:text-[44px] mt-4 text-white">{t("destinationsTitle")}</h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full lg:w-[620px] aspect-[4/3] shrink-0"
            >
              <Image
                src="/images/mongolia-map.svg"
                alt={t("destinationsTitle")}
                width={620}
                height={465}
                className="w-full h-full object-contain drop-shadow-lg"
                unoptimized
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-5 w-full lg:w-[420px]"
            >
              {regionKeys.map((region) => (
                <div key={region.name} className="flex items-start gap-3">
                  <span className="text-white text-lg mt-0.5">★</span>
                  <div>
                    <h3 className="font-display text-xl text-white">{t(region.name)}</h3>
                    <p className="text-sm text-white/75">{t(region.provinces)}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative w-full max-w-[560px] aspect-[4/3] rounded-3xl overflow-hidden"
            >
              <Image src="culture-nomads.jpg" alt={t("cultureTitle")} fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-5 max-w-[520px]"
            >
              <span className="text-sm tracking-[3px] text-primary-dark uppercase">{t("cultureLabel")}</span>
              <h2 className="font-display text-3xl md:text-[40px] leading-[1.15]">{t("cultureTitle")}</h2>
              <p className="text-base leading-[1.7] text-muted-foreground">{t("cultureDesc1")}</p>
              <p className="text-base leading-[1.7] text-muted-foreground">{t("cultureDesc2")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-12">
            <span className="text-sm tracking-[3px] text-primary-dark uppercase">{t("climateLabel")}</span>
            <h2 className="font-display text-3xl md:text-[44px] mt-4">{t("climateTitle")}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasons.map((c) => (
              <motion.div
                key={c.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl bg-[#F8F6F1] p-7"
              >
                <h3 className="font-display text-2xl text-primary-dark">{t(c.key)}</h3>
                <span className="text-sm text-accent">{t(c.months)}</span>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{t(`${c.key}Desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
