"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuery } from "@apollo/client/react";
import { useTranslations } from "next-intl";
import { CP_MENUS } from "@/graphql/cms/queries/menu";
import type { CpMenusData, CpMenusVariables } from "@/graphql/cms/queries/menu";

export default function Footer() {
  const t = useTranslations("nav");
  const tf = useTranslations("footer");
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  const { data: footerData } = useQuery<CpMenusData, CpMenusVariables>(CP_MENUS, {
    variables: { language: locale, kind: "footer" },
  });

  const footerNav =
    footerData?.cpMenus
      ?.filter((item) => !item.parentId)
      ?.sort((a, b) => (a.order ?? 0) - (b.order ?? 0)) || [];

  return (
    <footer className="bg-footer text-white">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0 py-[72px]">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10 border-b border-white/10">
          <Link href={`/${locale}`} className="font-display text-[26px]">
            Mongolian Secret History
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {footerNav.map((item) => (
              <Link
                key={item._id}
                href={`/${locale}${item.url || "/"}`}
                className="text-[15px] text-white/70 hover:text-white transition-colors"
              >
                {item.label || t(item.url?.replace("/", "") || "home")}
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
