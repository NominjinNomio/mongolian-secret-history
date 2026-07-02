"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");

  const infoItems = [
    { label: t("address"), value: t("addressValue") },
    { label: t("phoneLabel"), value: t("phoneValue") },
    { label: t("emailLabel"), value: t("emailValue") },
    { label: t("workingHours"), value: t("workingHoursValue") },
  ];

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            <motion.form
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[20px] bg-white p-8 lg:p-10 flex flex-col gap-6 w-full max-w-[520px]"
            >
              <h3 className="font-display text-[28px]">{t("formTitle")}</h3>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">{t("name")}</label>
                <input
                  type="text"
                  className="h-[52px] rounded-xl border border-border bg-[#F8F5F0] px-4 text-foreground outline-none focus:border-primary-dark"
                  placeholder={t("namePlaceholder")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">{t("email")}</label>
                <input
                  type="email"
                  className="h-[52px] rounded-xl border border-border bg-[#F8F5F0] px-4 text-foreground outline-none focus:border-primary-dark"
                  placeholder={t("emailPlaceholder")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">{t("message")}</label>
                <textarea
                  rows={5}
                  className="rounded-xl border border-border bg-[#F8F5F0] p-4 text-foreground outline-none focus:border-primary-dark resize-none"
                  placeholder={t("messagePlaceholder")}
                />
              </div>

              <Button type="submit" variant="dark" className="self-start">
                {t("send")}
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-7 w-full max-w-[460px]"
            >
              <h3 className="font-display text-4xl">{t("contactInfoTitle")}</h3>

              {infoItems.map((info) => (
                <div key={info.label} className="flex flex-col gap-1">
                  <span className="text-sm text-muted-foreground">{info.label}</span>
                  <span className="text-lg text-foreground">{info.value}</span>
                </div>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <Button href={`tel:${t("phoneValue")}`} variant="primary" className="gap-2">
                  <Phone size={16} />
                  {t("callUs")}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
