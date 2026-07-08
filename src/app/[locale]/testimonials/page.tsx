"use client";

import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    quote: "Of all the awesome new friends we made on our trip, the guides were the best. We plan to return in a few years and head East.",
    author: "Sarah & Tom, USA",
    tour: "10-Day Highlights of Mongolia",
  },
  {
    quote: "The high level of service that the team at Mongolian Secret History provided made this a happy memory to take on my next adventure.",
    author: "Marie, France",
    tour: "Gobi Desert Adventure",
  },
  {
    quote: "An unforgettable journey through the Gobi. Every day brought something new and authentic.",
    author: "David, UK",
    tour: "Gobi Desert Adventure",
  },
  {
    quote: "The nomadic homestay was the highlight of our trip. We felt truly welcomed by the herder family.",
    author: "Elena, Germany",
    tour: "Nomadic Lifestyle Experience",
  },
  {
    quote: "Horse trekking in the Altai was the adventure of a lifetime. The landscapes are beyond words.",
    author: "James & Laura, Australia",
    tour: "Horse Trekking in the Altai",
  },
  {
    quote: "Naadam festival tour exceeded all expectations. The energy, colors, and traditions were mesmerizing.",
    author: "Yuki, Japan",
    tour: "Naadam Festival Tour",
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

export default function TestimonialsPage() {
  const t = useTranslations("testimonials");

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[900px] px-6 lg:px-0">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <p className="text-lg leading-[1.7] text-muted-foreground">
              We are proud to have shared Mongolia with travelers from around the world. Here's what some of them had to say about their journey with us.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col gap-6"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.author}
                variants={item}
                className="rounded-[20px] bg-white border border-border p-8 flex flex-col gap-4 transition-shadow hover:shadow-lg"
              >
                <blockquote className="font-display text-lg lg:text-xl leading-relaxed text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1A2B4A] flex items-center justify-center text-white text-sm font-medium">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">{testimonial.author}</span>
                    <span className="text-xs text-muted-foreground">{testimonial.tour}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
