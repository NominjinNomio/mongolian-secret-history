"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";

export default function RegisterPage() {
  const [agreed, setAgreed] = useState(false);
  const t = useTranslations("register");

  return (
    <InnerPageLayout>
      <section className="min-h-[calc(100vh-88px)] flex flex-col lg:flex-row">
        <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-full flex items-center justify-center overflow-hidden">
          <Image src="hero-steppe.jpg" alt={t("welcomeTitle")} fill className="object-cover" />
          <div className="absolute inset-0 bg-[#0f1e32]/60" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-[520px] px-8 text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl text-white">{t("welcomeTitle")}</h1>
            <p className="text-white/80 mt-4 leading-relaxed">{t("welcomeSubtitle")}</p>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2 bg-[#F8F5F0] flex items-center justify-center px-6 py-12 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-[480px] rounded-[20px] bg-white p-10 lg:p-12"
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
                  className="w-full h-[48px] rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] px-4 text-sm outline-none focus:border-primary-dark"
                  placeholder={t("fullName")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">{t("email")}</label>
                <input
                  type="email"
                  className="w-full h-[48px] rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] px-4 text-sm outline-none focus:border-primary-dark"
                  placeholder={t("email")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">{t("phone")}</label>
                <input
                  type="tel"
                  className="w-full h-[48px] rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] px-4 text-sm outline-none focus:border-primary-dark"
                  placeholder={t("phone")}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm text-muted-foreground">{t("password")}</label>
                <input
                  type="password"
                  className="w-full h-[48px] rounded-xl bg-[#F8F5F0] border border-[#E5E2DC] px-4 text-sm outline-none focus:border-primary-dark"
                  placeholder="••••••••"
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
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

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-full bg-accent text-foreground px-8 py-4 text-sm font-medium hover:bg-accent-dark transition-colors"
              >
                {t("createAccount")}
              </button>
            </form>

            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-[#E5E2DC]" />
              <span className="text-sm text-muted-foreground">{t("or")}</span>
              <div className="flex-1 h-px bg-[#E5E2DC]" />
            </div>

            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#F8F6F1] border border-[#E5E2DC] text-foreground px-8 py-3.5 text-sm font-medium hover:bg-[#F0EDE8] transition-colors"
            >
              <span className="text-lg">G</span>
              {t("google")}
            </button>

            <p className="text-center text-sm text-muted-foreground mt-6">
              {t("hasAccount")}{" "}
              <Link href="/login" className="text-primary-dark hover:text-accent transition-colors">
                {t("signIn")}
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
