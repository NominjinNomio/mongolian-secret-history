"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export default function ContactSection() {
  const t = useTranslations("home");
  const tc = useTranslations("contact");

  return (
    <section className="bg-[#F8F5F0] py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 w-full max-w-[520px]"
          >
            <span className="text-sm tracking-[3px] text-primary-dark uppercase">{t("contactLabel")}</span>
            <h2 className="font-display text-3xl md:text-[44px] leading-[1.15]">
              {t("contactTitle")}
            </h2>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-muted-foreground">{tc("name")}</label>
              <input
                type="text"
                className="h-[52px] rounded-xl border border-border bg-white px-4 text-foreground outline-none focus:border-primary-dark"
                placeholder={tc("namePlaceholder")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-muted-foreground">{tc("email")}</label>
              <input
                type="email"
                className="h-[52px] rounded-xl border border-border bg-white px-4 text-foreground outline-none focus:border-primary-dark"
                placeholder={tc("emailPlaceholder")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-muted-foreground">{tc("message")}</label>
              <textarea
                rows={5}
                className="rounded-xl border border-border bg-white p-4 text-foreground outline-none focus:border-primary-dark resize-none"
                placeholder={tc("messagePlaceholder")}
              />
            </div>

            <Button type="submit" variant="primary" className="self-start">
              {t("contactButton")}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-7 w-full max-w-[460px]"
          >
            <h3 className="font-display text-[30px]">{t("contactInfoTitle")}</h3>

            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">{tc("address")}</span>
              <span className="text-[17px] text-foreground">{tc("addressValue")}</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">{tc("phoneLabel")}</span>
              <span className="text-[17px] text-foreground">{tc("phoneValue")}</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">{tc("emailLabel")}</span>
              <span className="text-[17px] text-foreground">{tc("emailValue")}</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">{tc("workingHours")}</span>
              <span className="text-[17px] text-foreground">{tc("workingHoursValue")}</span>
            </div>

            <div className="pt-6 flex flex-col gap-3">
              <Button href={`tel:${tc("phoneValue")}`} variant="primary" className="gap-2">
                <Phone size={16} />
                {tc("callUs")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
