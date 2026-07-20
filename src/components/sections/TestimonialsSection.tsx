"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Star, Mail, Award, Compass } from "lucide-react";

const float = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function TestimonialsSection() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="bg-[#F8F5F0] py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <div className="text-center mb-14">
          <span className="text-sm tracking-[4px] text-primary-dark uppercase">
            {t("testimonialsLabel")}
          </span>
          <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl">
            {t("testimonialsTitle")}
          </h2>
        </div>

        <div className="relative mx-auto min-h-[900px] max-w-[1100px] lg:min-h-[700px]">
          {/* 5 Stars badge */}
          <motion.div
            {...float}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0 }}
            className="left-0 top-0 z-10 flex items-center gap-3 rounded-full bg-[#1a1a1a] px-4 py-2 text-white lg:absolute"
          >
            <span className="flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-[#1a1a1a]">
              <Star className="h-3 w-3 fill-[#1a1a1a]" />
              5 Stars
            </span>
            <span className="text-sm">Trusted by travelers worldwide</span>
          </motion.div>

          {/* Top-right reviewer card */}
          <motion.div
            {...float}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="right-0 top-0 z-10 max-w-[340px] rounded-[24px] bg-white p-6 shadow-lg lg:absolute"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-[#E8E4DC]">
                <Image src="team-placeholder.jpg" alt="Marie" fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-display text-lg">Marie Dupont</h3>
                <span className="text-sm text-muted-foreground">Cultural Traveler, France</span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The high level of service that the team provided made this a happy memory to take on my next adventure.
            </p>
          </motion.div>

          {/* Left feature card */}
          <motion.div
            {...float}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="left-0 top-[220px] z-10 max-w-[280px] rounded-[24px] bg-white p-6 shadow-lg lg:absolute"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F5F0]">
              <Compass className="h-5 w-5 text-[#1a1a1a]" />
            </div>
            <h3 className="font-display mt-4 text-xl">Authentic Journeys</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Every trip is crafted to connect you with Mongolia’s landscapes, culture, and nomadic traditions.
            </p>
          </motion.div>

          {/* Center phone mockup */}
          <motion.div
            {...float}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="relative z-20 mx-auto my-12 flex h-[520px] w-[280px] flex-col overflow-hidden rounded-[40px] border-[8px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl lg:my-0 lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:absolute"
          >
            <div className="relative flex h-10 items-center justify-between bg-[#1a1a1a] px-5 text-white">
              <span className="text-sm font-medium">9:41</span>
              <div className="absolute left-1/2 top-1/2 h-5 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
              <div className="flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm0 2c1.654 0 3 1.346 3 3v3H9V7c0-1.654 1.346-3 3-3z" />
                </svg>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.95 7.08 2.95 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
                </svg>
                <svg className="h-4 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="6" width="18" height="12" rx="2" ry="2" />
                  <rect x="4" y="8" width="14" height="8" fill="#1a1a1a" />
                </svg>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-5">
              <div className="rounded-[20px] bg-[#2a2a2a] p-4">
                <div className="relative aspect-square w-full overflow-hidden rounded-[16px]">
                  <Image src="team-placeholder.jpg" alt="Featured guide" fill className="object-cover" />
                </div>
                <div className="mt-4 text-white">
                  <h3 className="font-display text-lg">Boldbaatar</h3>
                  <span className="text-xs uppercase tracking-wider text-white/60">Founder & Lead Guide</span>
                </div>
              </div>

              <div className="rounded-[20px] bg-white p-5">
                <h3 className="font-display text-lg text-[#1a1a1a]">Dr. James McKelvie</h3>
                <p className="mt-1 text-sm text-[#1a1a1a]/70">Specialist in Advanced Mongolia Expeditions</p>
                <div className="mt-4 flex items-center gap-2">
                  <Link
                    href={`/${locale}/book-online`}
                    className="inline-flex items-center justify-center rounded-full bg-[#1a1a1a] px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
                  >
                    Book Now
                  </Link>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#1a1a1a]/20">
                    <span className="h-2 w-2 rounded-full bg-[#1a1a1a]" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right info card */}
          <motion.div
            {...float}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="right-0 top-[220px] z-10 max-w-[280px] rounded-[24px] bg-white p-6 shadow-lg lg:absolute"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F5F0]">
              <Award className="h-5 w-5 text-[#1a1a1a]" />
            </div>
            <h3 className="font-display mt-4 text-xl">Why Travelers Choose Us</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1a1a1a]" />
                20+ years of experience
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1a1a1a]" />
                Local expert guides
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1a1a1a]" />
                Sustainable tourism
              </li>
            </ul>
          </motion.div>

          {/* Bottom-left quote card */}
          <motion.div
            {...float}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            className="left-0 bottom-0 z-10 max-w-[340px] rounded-[24px] bg-white p-6 shadow-lg lg:absolute"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F5F0]">
              <Mail className="h-5 w-5 text-[#1a1a1a]" />
            </div>
            <blockquote className="font-display mt-4 text-lg leading-relaxed text-foreground">
              &ldquo;Of all the awesome new friends we made, the guides were the best. We plan to return and head East.&rdquo;
            </blockquote>
            <span className="mt-4 block text-sm text-muted-foreground">Sarah & Tom, USA</span>
          </motion.div>

          {/* Bottom-right offer card */}
          <motion.div
            {...float}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="right-0 bottom-0 z-10 max-w-[340px] rounded-[24px] bg-[#1a1a1a] p-6 text-white shadow-lg lg:absolute"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">FREE</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium">Zero Cost Guarantee</span>
            </div>
            <h3 className="font-display mt-4 text-xl">Custom Itinerary Planning</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Get a personalized trip plan with no upfront fees. We design it around your dates and interests.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3"
>
              <Link
                href={`/${locale}/testimonials`}
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1a1a1a] transition-transform hover:scale-105"
              >
                View All Testimonials
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 text-sm font-medium text-white underline underline-offset-4"
              >
                Start Planning
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
