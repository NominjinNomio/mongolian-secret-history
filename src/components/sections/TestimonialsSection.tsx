"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Star, Mail, Globe, Award, Shield, Compass } from "lucide-react";

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
            <div className="flex h-10 items-center justify-center gap-2 bg-[#1a1a1a]">
              <div className="h-5 w-20 rounded-full bg-black" />
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
                  <span className="inline-flex items-center justify-center rounded-full bg-[#1a1a1a] px-4 py-2 text-sm font-medium text-white">
                    Book Now
                  </span>
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
            <Link
              href={`/${locale}/contact`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-white underline underline-offset-4"
            >
              Start Planning
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
