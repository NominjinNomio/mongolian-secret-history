"use client";

import { motion } from "framer-motion";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";

const testimonials = [
  { quote: "Of all the awesome new friends we made on our trip, the guides were the best. We plan to return in a few years and head East.", author: "Sarah \u0026 Tom, USA" },
  { quote: "The high level of service that the team at Mongolian Secret History provided made this a happy memory to take on my next adventure.", author: "Marie, France" },
  { quote: "An unforgettable journey through the Gobi. Every day brought something new and authentic.", author: "David, UK" },
  { quote: "The nomadic homestay was the highlight of our trip. We felt truly welcomed by the herder family.", author: "Elena, Germany" },
];

export default function TestimonialsPage() {
  return (
    <InnerPageLayout>
      <PageHero
        label="Traveler Stories"
        title="What Our Guests Say"
        subtitle="Real experiences from real travelers"
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <p className="text-lg leading-[1.7] text-muted-foreground">
              We are proud to have shared Mongolia with travelers from around the world. Here&apos;s what some of them had to say about their journeys with us.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {testimonials.map((t) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-[20px] bg-white border border-border p-8 lg:p-10 flex flex-col gap-4"
              >
                <blockquote className="font-display text-xl lg:text-2xl leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-primary-dark" />
                  <span className="text-sm text-muted-foreground">{t.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
