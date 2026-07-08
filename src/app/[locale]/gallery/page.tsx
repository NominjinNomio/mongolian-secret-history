"use client";

import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";

const row1 = ["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg"];
const row2 = ["gallery-4.jpg", "gallery-5.jpg"];
const row3 = ["gallery-2.jpg", "gallery-3.jpg", "gallery-1.jpg"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function GalleryPage() {
  const t = useTranslations("gallery");

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <p className="text-lg leading-[1.7] text-muted-foreground">
              A glimpse into the landscapes, people, and experiences that make Mongolia one of the world's most extraordinary travel destinations.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {row1.map((src) => (
                <motion.div
                  key={src}
                  variants={item}
                  className="relative h-[260px] rounded-xl overflow-hidden"
                >
                  <Image src={src} alt={t("heroTitle")} fill className="object-cover" />
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {row2.map((src) => (
                <motion.div
                  key={src}
                  variants={item}
                  className="relative h-[320px] rounded-xl overflow-hidden"
                >
                  <Image src={src} alt={t("heroTitle")} fill className="object-cover" />
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {row3.map((src) => (
                <motion.div
                  key={src}
                  variants={item}
                  className="relative h-[260px] rounded-xl overflow-hidden"
                >
                  <Image src={src} alt={t("heroTitle")} fill className="object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
