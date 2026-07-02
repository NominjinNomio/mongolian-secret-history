"use client";

import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import { useTranslations } from "next-intl";

const serviceKeys = [
  { title: "groupTours", subtitle: "groupToursSubtitle", desc: "groupToursDesc" },
  { title: "privateTours", subtitle: "privateToursSubtitle", desc: "privateToursDesc" },
  { title: "cultural", subtitle: "culturalSubtitle", desc: "culturalDesc" },
  { title: "adventure", subtitle: "adventureSubtitle", desc: "adventureDesc" },
  { title: "transport", subtitle: "transportSubtitle", desc: "transportDesc" },
  { title: "accommodation", subtitle: "accommodationSubtitle", desc: "accommodationDesc" },
];

export default function ServicesPage() {
  const t = useTranslations("services");

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <p className="text-lg leading-[1.7] text-muted-foreground">{t("intro")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceKeys.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
                className="rounded-2xl bg-white border border-border p-8 transition-shadow"
              >
                <span className="text-2xl text-accent">◆</span>
                <h3 className="font-display text-[22px] text-foreground mt-3">{t(service.title)}</h3>
                <p className="text-sm text-primary-dark mt-1">{t(service.subtitle)}</p>
                <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed">{t(service.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
