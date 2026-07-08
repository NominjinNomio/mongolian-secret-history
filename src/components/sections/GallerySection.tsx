"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";

const row1 = ["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg"];
const row2 = ["gallery-4.jpg", "gallery-5.jpg"];

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

export default function GallerySection() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="bg-white py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <SectionHeader
          label={t("galleryLabel")}
          title={t("galleryTitle")}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {row1.map((src) => (
              <motion.div
                key={src}
                variants={item}
                className="relative h-[260px] rounded-xl overflow-hidden"
              >
                <Link href={`/${locale}/gallery`} className="block w-full h-full">
                  <Image src={src} alt={t("galleryTitle")} fill className="object-cover" />
                </Link>
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
                <Link href={`/${locale}/gallery`} className="block w-full h-full">
                  <Image src={src} alt={t("galleryTitle")} fill className="object-cover" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href={`/${locale}/gallery`}
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-colors bg-[#1A2B4A] text-white hover:bg-[#1A2B4A]/90"
            >
              View All Photos
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
