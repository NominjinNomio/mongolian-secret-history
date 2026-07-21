"use client";

import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import GalleryMarquee from "@/components/sections/GalleryMarquee";
import { useTranslations } from "next-intl";

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
  {
    images: ["/images/tour-2.jpg", "/images/tour-3.jpg", "/images/tour-1.jpg"],
    cardWidth: "w-[260px] md:w-[390px]",
    cardHeight: "h-[200px] md:h-[260px]",
  },
];

export default function GalleryPage() {
  const t = useTranslations("gallery");

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />

      <section className="bg-background py-20 lg:py-[120px] overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <p className="text-lg leading-[1.7] text-muted-foreground">
              A glimpse into the landscapes, people, and experiences that make Mongolia one of the world's most extraordinary travel destinations.
            </p>
          </div>
        </div>

        <GalleryMarquee rows={rows} />
      </section>
    </InnerPageLayout>
  );
}
