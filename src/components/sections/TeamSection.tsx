"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import TeamCarousel from "@/components/sections/TeamCarousel";
import { useTranslations } from "next-intl";

export default function TeamSection() {
  const t = useTranslations("home");

  return (
    <section className="bg-[#F8F5F0] py-20 lg:py-[140px] overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <SectionHeader
          label={t("teamLabel")}
          title={t("teamTitle")}
        />
      </div>

      <div className="mt-14">
        <TeamCarousel />
      </div>
    </section>
  );
}
