"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const tours = [
  { title: "Gobi Desert Adventure", duration: "8 days", price: "$1,100", slug: "gobi-desert-adventure" },
  { title: "Central Mongolia Heritage Tour", duration: "6 days", price: "$950", slug: "central-mongolia-heritage" },
  { title: "Khustai & Terelj National Parks", duration: "4 days", price: "$700", slug: "khustai-terelj" },
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

export default function PortfolioSection() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="bg-[#F8F5F0] py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <SectionHeader
          label={t("toursLabel")}
          title={t("toursTitle")}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tours.map((tour) => (
            <motion.div
              key={tour.title}
              variants={item}
              whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
              className="rounded-[20px] bg-white border border-border overflow-hidden transition-shadow"
            >
              <div className="relative h-[280px] w-full">
                <Image
                  src="tour-placeholder.jpg"
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <span className="text-sm text-muted-foreground">{tour.duration}</span>
                <h3 className="font-display text-xl text-foreground">{tour.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-primary-dark font-display text-lg">{tour.price}</span>
                  <Link
                    href={`/${locale}/portfolio`}
                    className="flex items-center gap-1 text-sm text-accent hover:text-accent-dark transition-colors"
                  >
                    {t("toursButton")} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
