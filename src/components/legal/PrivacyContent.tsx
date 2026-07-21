"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function PrivacyContent() {
  const t = useTranslations("privacy");
  const locale = useLocale();

  const sections = [
    { title: t("collectTitle"), desc: t("collectDesc") },
    { title: t("useTitle"), desc: t("useDesc") },
    { title: t("shareTitle"), desc: t("shareDesc") },
    { title: t("securityTitle"), desc: t("securityDesc") },
    { title: t("cookiesTitle"), desc: t("cookiesDesc") },
    { title: t("rightsTitle"), desc: t("rightsDesc") },
    { title: t("changesTitle"), desc: t("changesDesc") },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8 pb-16">
        {sections.map((section, index) => (
          <div key={section.title}>
            <h2 className="font-display text-xl text-foreground">
              {index + 1}. {section.title}
            </h2>
            <p className="text-[15px] text-muted-foreground mt-2 leading-relaxed">{section.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-primary-dark rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-display text-2xl text-white">{t("questionsTitle")}</h3>
          <p className="text-sm text-white/70 mt-1">{t("questionsDesc")}</p>
        </div>
        <Link
          href={`/${locale}/contact`}
          className="rounded-full bg-gold px-7 py-3 text-sm font-medium text-white hover:bg-gold-dark transition-colors"
        >
          {t("contact")}
        </Link>
      </div>
    </div>
  );
}
