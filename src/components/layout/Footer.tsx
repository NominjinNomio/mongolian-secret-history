"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const footerNav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Tours", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const legalNav = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "mn";

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
                key={item.href}
                href={`/${locale}${item.href}`}
                className="text-[15px] text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-10">
          <p className="text-sm text-white/50 text-center md:text-left">
            Copyright © 2026. All rights reserved. Mongolian Secret History
          </p>
          <nav className="flex items-center gap-6">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
