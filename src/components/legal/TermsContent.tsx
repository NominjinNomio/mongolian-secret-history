"use client";

import { useTranslations } from "next-intl";

export default function TermsContent() {
  const t = useTranslations("terms");

  const sections = [
    { title: t("bookingTitle"), desc: t("bookingDesc") },
    { title: t("cancellationTitle"), desc: t("cancellationDesc") },
    { title: t("insuranceTitle"), desc: t("insuranceDesc") },
    { title: t("changesTitle"), desc: t("changesDesc") },
    { title: t("healthTitle"), desc: t("healthDesc") },
    { title: t("liabilityTitle"), desc: t("liabilityDesc") },
  ];

  return (
    <div className="flex flex-col gap-8">
      {sections.map((section, index) => (
        <div key={section.title}>
          <h2 className="font-display text-xl text-foreground">
            {index + 1}. {section.title}
          </h2>
          <p className="text-[15px] text-muted-foreground mt-2 leading-relaxed">{section.desc}</p>
        </div>
      ))}
    </div>
  );
}
