"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    quote: "Of all the awesome new friends we made on our trip, the guides were the best. We plan to return in a few years and head East.",
    author: "Sarah \u0026 Tom, USA",
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
  return (
    <section className="bg-[#F8F5F0] py-20 lg:py-[140px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        <SectionHeader
          label="Testimonials"
          title="What Our Travelers Say"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={item}
              whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
              className="rounded-[20px] bg-white border border-border p-9 flex flex-col gap-5 transition-shadow"
            >
              <blockquote className="font-display text-lg lg:text-xl leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <span className="text-sm text-muted-foreground">{t.author}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
