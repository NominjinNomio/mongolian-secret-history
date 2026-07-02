"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";

const tours = [
  { title: "Gobi Desert Adventure", slug: "gobi-desert-adventure", duration: "8 days", price: "$1,100" },
  { title: "Central Mongolia Heritage Tour", slug: "central-mongolia-heritage", duration: "6 days", price: "$950" },
  { title: "Khustai & Terelj National Parks", slug: "khustai-terelj", duration: "4 days", price: "$700" },
  { title: "Nomadic Lifestyle Experience", slug: "nomadic-lifestyle", duration: "5 days", price: "$850" },
  { title: "10-Day Highlights of Mongolia", slug: "highlights-of-mongolia", duration: "10 days", price: "$1,500" },
];

export default function PortfolioPage() {
  const params = useParams();
  const locale = (params.locale as string) || "mn";

  return (
    <InnerPageLayout>
      <PageHero
        label="Featured Journeys"
        title="Our Tours"
        subtitle="Handcrafted itineraries for every kind of traveler"
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <p className="text-lg leading-[1.7] text-muted-foreground">
              Choose from our most popular Mongolia tours, or ask us to customize any itinerary to match your interests, dates, and travel style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
                className="rounded-[20px] bg-white border border-border overflow-hidden transition-shadow"
              >
                <div className="relative h-[240px] w-full">
                  <Image src="tour-placeholder.jpg" alt={tour.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <span className="text-sm text-muted-foreground">{tour.duration}</span>
                  <h3 className="font-display text-xl text-foreground">{tour.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-primary-dark font-display text-lg">{tour.price}</span>
                    <Link href={`/${locale}/portfolio/${tour.slug}`} className="flex items-center gap-1 text-sm text-accent hover:text-accent-dark transition-colors">
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
