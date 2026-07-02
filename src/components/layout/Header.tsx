"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Accommodation", href: "/accommodation" },
  { label: "Tours", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const languages = [
  { code: "en", label: "EN" },
  { code: "mn", label: "MN" },
  { code: "zh", label: "中文" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en";

  const pathWithoutLocale = pathname.replace(new RegExp(`^/${locale}`), "") || "/";
  const currentLang = languages.find((l) => l.code === locale) || languages[0];

  return (
    <header className="sticky top-0 z-50 bg-[#F8F5F0]">
      <div className="mx-auto flex h-[88px] max-w-[1440px] items-center justify-between px-6 lg:px-20">
        <Link href={`/${locale}`} className="font-display text-2xl text-foreground">
          Mongolian Secret History
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const itemHref = `/${locale}${item.href}`;
            const isActive = pathWithoutLocale === item.href;
            return (
              <Link
                key={item.href}
                href={itemHref}
                className={cn(
                  "text-[15px] transition-colors duration-150",
                  isActive ? "text-primary-dark" : "text-[#5C5C5C] hover:text-primary-dark"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-sm text-[#5C5C5C] hover:text-foreground"
              aria-label="Select language"
            >
              <Globe size={16} />
              {currentLang.label} ▾
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-2 w-28 rounded-xl bg-white border border-border shadow-lg py-2">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}${pathWithoutLocale}`}
                    className={cn(
                      "block px-4 py-2 text-sm hover:bg-[#F8F6F1] transition-colors",
                      locale === lang.code ? "text-primary-dark font-medium" : "text-[#5C5C5C]"
                    )}
                    onClick={() => setLangOpen(false)}
                  >
                    {lang.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Button href={`/${locale}/login`} variant="primary">
            Login
          </Button>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F8F5F0] border-t border-border"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={`/${locale}${item.href}`}
                  className="text-lg text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-4">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}${pathWithoutLocale}`}
                    className={cn(
                      "text-sm px-3 py-1 rounded-full border",
                      locale === lang.code
                        ? "bg-primary-dark text-white border-primary-dark"
                        : "text-[#5C5C5C] border-border hover:border-primary-dark"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {lang.label}
                  </Link>
                ))}
              </div>
              <Button href={`/${locale}/login`} variant="primary">
                Login
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
