"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import { useTranslations } from "next-intl";

type TabKey = "tours" | "accommodation" | "travelServices";

const tabs: TabKey[] = ["tours", "accommodation", "travelServices"];

const tabConfig: Record<TabKey, { title: string; label: string; placeholder: string }> = {
  tours: { title: "bookYourTours", label: "preferredTour", placeholder: "preferredTourPlaceholder" },
  accommodation: { title: "bookYourAccommodation", label: "preferredRoom", placeholder: "preferredRoomPlaceholder" },
  travelServices: { title: "bookYourTravelServices", label: "preferredService", placeholder: "preferredServicePlaceholder" },
};

const stepKeys = ["step1", "step2", "step3"];

export default function BookOnlinePage() {
  const [activeTab, setActiveTab] = useState<TabKey>("tours");
  const t = useTranslations("bookOnline");

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />

      <section className="bg-[#F8F5F0] pt-20 pb-10 lg:pt-[80px] lg:pb-[40px]">
        <div className="mx-auto max-w-[800px] px-6 lg:px-0 text-center">
          <p className="text-lg leading-[1.7] text-muted-foreground">{t("intro")}</p>
        </div>
      </section>

      <section className="bg-[#F8F5F0] pb-10">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3.5 rounded-full text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? "bg-primary-dark text-white"
                    : "bg-white text-foreground hover:bg-white/80"
                }`}
              >
                {t(tab)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0] pb-20 lg:pb-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-[520px] rounded-[20px] bg-white p-10"
            >
              <h2 className="font-display text-[28px] text-foreground mb-6">{t(tabConfig[activeTab].title)}</h2>

              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">{t("fullName")}</label>
                  <input
                    type="text"
                    className="w-full h-[52px] rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] px-4 text-sm outline-none focus:border-primary-dark"
                    placeholder={t("fullName")}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">{t("email")}</label>
                  <input
                    type="email"
                    className="w-full h-[52px] rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] px-4 text-sm outline-none focus:border-primary-dark"
                    placeholder={t("email")}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">{t("phone")}</label>
                  <input
                    type="tel"
                    className="w-full h-[52px] rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] px-4 text-sm outline-none focus:border-primary-dark"
                    placeholder={t("phone")}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">{t(tabConfig[activeTab].label)}</label>
                  <input
                    type="text"
                    className="w-full h-[52px] rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] px-4 text-sm outline-none focus:border-primary-dark"
                    placeholder={t(tabConfig[activeTab].placeholder)}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">{t("travelDates")}</label>
                  <input
                    type="text"
                    className="w-full h-[52px] rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] px-4 text-sm outline-none focus:border-primary-dark"
                    placeholder={t("travelDatesPlaceholder")}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-muted-foreground">{t("requests")}</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] p-4 text-sm outline-none focus:border-primary-dark resize-none"
                    placeholder={t("requestsPlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-accent text-foreground px-8 py-4 text-sm font-medium hover:bg-accent-dark transition-colors"
                >
                  {t("submit")}
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-full max-w-[460px] flex flex-col gap-7"
            >
              <h2 className="font-display text-[30px] text-foreground">{t("whatHappensNext")}</h2>
              {stepKeys.map((step) => (
                <div key={step} className="flex flex-col gap-1">
                  <h3 className="font-display text-xl text-primary-dark">{t(`${step}Title`)}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{t(`${step}Desc`)}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
