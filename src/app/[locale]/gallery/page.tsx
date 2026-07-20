"use client";

import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import GalleryMarquee from "@/components/sections/GalleryMarquee";
import { useTranslations } from "next-intl";

const rows = [
  ["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg"],
  ["gallery-4.jpg", "gallery-5.jpg", "gallery-1.jpg"],
  ["gallery-2.jpg", "gallery-3.jpg", "gallery-4.jpg"],
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

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px] overflow-hidden">
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
