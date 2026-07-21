"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { useTranslations } from "next-intl";
import { Utensils, Map, Users, Compass, Bus, Home } from "lucide-react";

const serviceKeys = [
  { title: "homeGroupTours", subtitle: "homeGroupToursSubtitle", desc: "homeGroupToursDesc", icon: Users },
  { title: "homePrivateTours", subtitle: "homePrivateToursSubtitle", desc: "homePrivateToursDesc", icon: Map },
  { title: "homeCultural", subtitle: "homeCulturalSubtitle", desc: "homeCulturalDesc", icon: Utensils },
  { title: "homeAdventure", subtitle: "homeAdventureSubtitle", desc: "homeAdventureDesc", icon: Compass },
  { title: "homeTransport", subtitle: "homeTransportSubtitle", desc: "homeTransportDesc", icon: Bus },
  { title: "homeAccommodation", subtitle: "homeAccommodationSubtitle", desc: "homeAccommodationDesc", icon: Home },
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

export default function ServicesSection() {
  const t = useTranslations("home");

  return (
    <section className="bg-white py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <SectionHeader
          label={t("servicesLabel")}
          title={t("servicesTitle")}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {serviceKeys.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(18,63,174,0.08)" }}
                className="rounded-2xl bg-white border border-border p-8 transition-all"
              >
                <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary"
                >
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-[22px] text-foreground mt-4">{t(service.title)}</h3>
                <p className="text-sm text-primary mt-1">{t(service.subtitle)}</p>
                <p className="text-[15px] text-muted-foreground mt-3 leading-relaxed">{t(service.desc)}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
