"use client";

import { motion } from "framer-motion";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Of all the awesome new friends we made on our trip, the guides were the best. We plan to return in a few years and head East.",
    author: "Sarah & Tom, USA",
    featured: true,
  },
  {
    quote: "The high level of service that the team at Mongolian Secret History provided made this a happy memory to take on my next adventure.",
    author: "Marie, France",
  },
  {
    quote: "An unforgettable journey through the Gobi. Every day brought something new and authentic.",
    author: "David, UK",
  },
  {
    quote: "From the horses to the ger camps, every detail was perfectly arranged. We felt safe, welcomed, and inspired.",
    author: "Linda & Peter, Australia",
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
        <div className="text-center mb-14">
          <span className="text-sm tracking-[4px] text-primary-dark uppercase">
            {t("testimonialsLabel")}
          </span>
          <h2 className="font-display mt-4 text-4xl md:text-5xl lg:text-6xl">
            {t("testimonialsTitle")}
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, i) => {
            const isFeatured = i === 0;
            return (
              <motion.div
                key={testimonial.author}
                variants={item}
                whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.08)" }}
                className={`rounded-[24px] bg-white border border-border p-8 flex flex-col gap-5 transition-shadow ${
                  isFeatured ? "md:col-span-2 lg:col-span-2 lg:row-span-2 lg:p-10" : ""
                }`}
              >
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-[#F39C12] text-[#F39C12]" />
                  ))}
                </div>

                <blockquote className={`font-display leading-relaxed text-foreground ${
                  isFeatured ? "text-xl lg:text-2xl" : "text-lg"
                }`}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="mt-auto flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#E8E4DC]">
                    <Image src="team-placeholder.jpg" alt={testimonial.author} fill className="object-cover" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{testimonial.author}</span>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            variants={item}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.08)" }}
            className="rounded-[24px] bg-[#1A2B4A] text-white p-8 flex flex-col justify-between gap-6 transition-shadow"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium">
                <Star className="h-3.5 w-3.5 fill-white" />
                5 Stars
              </span>
              <p className="mt-5 font-display text-xl leading-relaxed">
                Trusted by travelers worldwide for authentic Mongolia experiences.
              </p>
            </div>
            <Link
              href={`/${locale}/testimonials`}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A2B4A] transition-transform hover:scale-105"
            >
              View All Testimonials
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
