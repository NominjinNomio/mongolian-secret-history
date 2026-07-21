"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";

import { useLocale } from "next-intl";
import Link from "next/link";

const regionKeys = [
  { name: "westernMongolia", desc: "westernMongoliaDesc" },
  { name: "northernMongolia", desc: "northernMongoliaDesc" },
  { name: "centralMongolia", desc: "centralMongoliaDesc" },
  { name: "easternMongolia", desc: "easternMongoliaDesc" },
  { name: "gobiDesert", desc: "gobiDesertDesc" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function DestinationsSection() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="relative py-20 lg:py-[80px]">
      <Image
        src="/images/mongolia-destinations-bg.jpg"
        alt={t("destinationsTitle")}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary-dark/85" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-0">
        <SectionHeader
          label={t("destinationsLabel")}
          title={t("destinationsTitle")}
          subtitle={t("destinationsSubtitle")}
          light
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {regionKeys.map((region) => (
            <motion.div
              key={region.name}
              variants={item}
              whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.15)" }}
              className="rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm transition-all"
            >
              <h3 className="font-display text-xl text-white mb-2">{t(region.name)}</h3>
              <span className="gold-line mb-3" />
              <p className="text-sm text-white/80 leading-relaxed">{t(region.desc)}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link
            href={`/${locale}/about#regions`}
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-colors bg-gold text-white hover:bg-gold-dark"
          >
            {t("destinationsButton")}
          </Link>
        </div>
      </div>
    </section>
  );
}
