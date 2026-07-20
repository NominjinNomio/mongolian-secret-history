"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import GalleryMarquee from "@/components/sections/GalleryMarquee";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";

const rows = [
  ["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg"],
  ["gallery-4.jpg", "gallery-5.jpg", "gallery-1.jpg"],
];

export default function GallerySection() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="bg-white py-20 lg:py-[140px] overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <SectionHeader
          label={t("galleryLabel")}
          title={t("galleryTitle")}
        />
      </div>

      <div className="mt-14">
        <GalleryMarquee
          rows={rows}
          linkWrapper={(card) => (
            <Link href={`/${locale}/gallery`} className="block">
              {card}
            </Link>
          )}
        />
      </div>

      <div className="mt-10 flex justify-center">
        <Link
          href={`/${locale}/gallery`}
          className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-colors bg-[#1A2B4A] text-white hover:bg-[#1A2B4A]/90"
        >
          View All Photos
        </Link>
      </div>
    </section>
  );
}
