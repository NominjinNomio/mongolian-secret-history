"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import Image from "@/components/common/Image";

const footerLinks = [
  { label: "About Us", url: "/about" },
  { label: "Testimonials", url: "/testimonials" },
  { label: "Contact", url: "/contact" },
  { label: "Book Online", url: "/book-online" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/mongoliansecrethistory/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://twitter.com/MSHTravel",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/user/Monsecrethistory",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://gb.pinterest.com/travelmongolia/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.466-6.227 7.466-1.216 0-2.361-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const locale = useLocale();
  const tf = useTranslations("footer");

  return (
    <footer className="bg-[#1C1A17] text-white">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-5">
            <Link href={`/${locale}`} className="flex items-center">
              <span className="font-elegant text-2xl md:text-3xl font-medium text-white">
                Mongolian Secret History
              </span>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Authentic Mongolian heritage, timeless cuisine, and warm hospitality in an elegant setting.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-lg text-white">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((item) => (
                <Link
                  key={item.url}
                  href={`/${locale}${item.url}`}
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-lg text-white">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <span>Akuma center and Workers street, Ulaanbaatar</span>
              <span>+976 70000450</span>
              <span>info@mongoliansecrethistory.mn</span>
              <span>Mon–Fri, 9:00 AM – 6:00 PM (GMT+8)</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-display text-lg text-white">Follow Us</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white/70 hover:text-gold transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-white/50 text-center md:text-left">
            {tf("copyright")}
          </p>

          <div className="flex items-center gap-4">
            <Link href={`/${locale}/privacy`} className="text-xs text-white/50 hover:text-white transition-colors">
              {tf("privacy")}
            </Link>
            <Link href={`/${locale}/terms`} className="text-xs text-white/50 hover:text-white transition-colors">
              {tf("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
