"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import type { MenuItem } from "@/graphql/cms/queries/menu";

interface FooterProps {
  navItems: MenuItem[];
}

export default function Footer({ navItems }: FooterProps) {
  const tf = useTranslations("footer");

  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0 py-[72px]">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10 border-b border-white/10">
          <Link href="/" className="font-display text-[26px]">
            Mongolian Secret History
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item._id}
                href={item.url || "/"}
                className="text-[15px] text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-10">
          <p className="text-sm text-white/50 text-center md:text-left">
            {tf("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
