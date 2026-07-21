"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/Button";

export default function RegisterPage() {
  const [agreed, setAgreed] = useState(false);
  const t = useTranslations("register");

  return (
    <InnerPageLayout>
      <section className="min-h-[calc(100vh-88px)] flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-full flex items-center justify-center overflow-hidden">
          <Image src="/images/hero-steppe.jpg" alt={t("welcomeTitle")} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark/70" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-[520px] px-8 text-center"
          >
            <span className="gold-line mx-auto mb-4" />
            <h1 className="font-display text-4xl md:text-5xl text-white">{t("welcomeTitle")}</h1>
            <p className="text-white/80 mt-4 leading-relaxed">{t("welcomeSubtitle")}</p>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 bg-background flex items-center justify-center px-6 py-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-[480px] rounded-[20px] bg-white p-10 lg:p-12 border border-border shadow-sm"
          >
            <div className="text-center mb-8">
              <h2 className="font-display text-[32px] text-foreground">{t("title")}</h2>
              <p className="text-sm text-muted-foreground mt-2">{t("subtitle")}</p>
            </div>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">{t("fullName")}</label>
                <input
                  type="text"
                  className="w-full h-[48px] rounded-xl bg-white border border-border px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder={t("fullName")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">{t("email")}</label>
                <input
                  type="email"
                  className="w-full h-[48px] rounded-xl bg-white border border-border px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder={t("email")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">{t("phone")}</label>
                <input
                  type="tel"
                  className="w-full h-[48px] rounded-xl bg-white border border-border px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder={t("phone")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">{t("password")}</label>
                <input
                  type="password"
                  className="w-full h-[48px] rounded-xl bg-white border border-border px-4 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="••••••••"
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-border"
                />
                <span>
                  {t("agree")}
                </span>
              </label>

              <Button type="submit" variant="primary"
              >
                {t("createAccount")}
              </Button>
            </form>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground">{t("or")}</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-white border border-border text-foreground px-8 py-3.5 text-sm font-medium hover:bg-muted transition-colors"
            >
              <span className="text-lg">G</span>
              {t("google")}
            </button>

            <p className="text-center text-sm text-muted-foreground mt-6">
              {t("hasAccount")}{" "}
              <Link href="/login" className="text-primary hover:text-primary-dark transition-colors">
                {t("signIn")}
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
