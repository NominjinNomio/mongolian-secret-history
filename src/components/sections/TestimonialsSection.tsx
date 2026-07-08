"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";

const testimonials = [
  {
    quote: "Of all the awesome new friends we made on our trip, the guides were the best. We plan to return in a few years and head East.",
    author: "Sarah & Tom, USA",
  },
  {
    quote: "The high level of service that the team at Mongolian Secret History provided made this a happy memory to take on my next adventure.",
    author: "Marie, France",
  },
  {
    quote: "An unforgettable journey through the Gobi. Every day brought something new and authentic.",
    author: "David, UK",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TestimonialsSection() {
  const t = useTranslations("home");
  const locale = useLocale();

  return (
    <section className="bg-[#F8F5F0] py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <SectionHeader
          label={t("testimonialsLabel")}
          title={t("testimonialsTitle")}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={item}
              whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
              className="rounded-[20px] bg-white border border-border p-9 flex flex-col gap-5 transition-shadow"
            >
              <blockquote className="font-display text-lg lg:text-xl leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <span className="text-sm text-muted-foreground">{testimonial.author}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link
            href={`/${locale}/testimonials`}
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-colors bg-[#1A2B4A] text-white hover:bg-[#1A2B4A]/90"
          >
            {t("viewAllTestimonials")}
          </Link>
        </div>
      </div>
    </section>
  );
}
