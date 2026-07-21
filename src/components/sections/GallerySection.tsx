"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import GalleryMarquee from "@/components/sections/GalleryMarquee";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";

const rows = [
  {
    images: ["/images/tour-1.jpg", "/images/tour-2.jpg", "/images/tour-3.jpg"],
    cardWidth: "w-[260px] md:w-[390px]",
    cardHeight: "h-[200px] md:h-[260px]",
  },
  {
    images: ["/images/tour-4.jpg", "/images/tour-5.jpg"],
    cardWidth: "w-[340px] md:w-[590px]",
    cardHeight: "h-[240px] md:h-[320px]",
  },
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
          className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-colors bg-primary text-white hover:bg-primary-dark"
        >
          View All Photos
        </Link>
      </div>
    </section>
  );
}
