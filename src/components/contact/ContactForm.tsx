"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Phone } from "lucide-react";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", formData);
  };

  return (
    <div className="bg-white rounded-3xl p-8 lg:p-10">
      <h2 className="font-display text-2xl text-foreground mb-6">{t("formTitle")}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-xs text-muted-foreground mb-2">{t("nameLabel")}</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] text-foreground outline-none focus:border-primary-dark transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-xs text-muted-foreground mb-2">{t("emailLabel")}</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] text-foreground outline-none focus:border-primary-dark transition-colors"
            required
          />
        </div>
        <div>
          <label className="block text-xs text-muted-foreground mb-2">{t("messageLabel")}</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className="w-full rounded-xl border border-border bg-white px-4 py-3 text-[15px] text-foreground outline-none focus:border-primary-dark transition-colors resize-none"
            required
          />
        </div>
        <button
          type="submit"
          className="self-start rounded-full bg-[#2D5A4A] px-7 py-3 text-sm font-medium text-white hover:bg-[#244A3D] transition-colors"
        >
          {t("sendInquiry")}
        </button>
      </form>
    </div>
  );
}
