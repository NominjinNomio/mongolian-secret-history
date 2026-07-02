"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";

const categories = [
  "All",
  "Adventure Tours",
  "Best Sellers",
  "Festival tours",
  "Tailored Tours",
  "Winter tours",
  "classic tours",
];

const tours = [
  {
    title: "Gobi Desert Adventure",
    slug: "gobi-desert-adventure",
    category: "Adventure Tours",
    duration: "8 days",
    price: "$1,100",
    image: "tour-placeholder.jpg",
  },
  {
    title: "Central Mongolia Heritage Tour",
    slug: "central-mongolia-heritage",
    category: "classic tours",
    duration: "6 days",
    price: "$950",
    image: "about-nomads.jpg",
  },
  {
    title: "Khustai & Terelj National Parks",
    slug: "khustai-terelj",
    category: "Best Sellers",
    duration: "4 days",
    price: "$700",
    image: "culture-nomads.jpg",
  },
  {
    title: "Nomadic Lifestyle Experience",
    slug: "nomadic-lifestyle",
    category: "Tailored Tours",
    duration: "5 days",
    price: "$850",
    image: "about-nomads.jpg",
  },
  {
    title: "10-Day Highlights of Mongolia",
    slug: "highlights-of-mongolia",
    category: "Best Sellers",
    duration: "10 days",
    price: "$1,500",
    image: "tour-placeholder.jpg",
  },
  {
    title: "Naadam Festival Tour",
    slug: "naadam-festival-tour",
    category: "Festival tours",
    duration: "7 days",
    price: "$1,250",
    image: "culture-nomads.jpg",
  },
  {
    title: "Winter Mongolia Expedition",
    slug: "winter-mongolia-expedition",
    category: "Winter tours",
    duration: "9 days",
    price: "$1,350",
    image: "tour-placeholder.jpg",
  },
  {
    title: "Horse Trekking in the Altai",
    slug: "altai-horse-trek",
    category: "Adventure Tours",
    duration: "12 days",
    price: "$1,800",
    image: "gallery-1.jpg",
  },
  {
    title: "Golden Eagle Festival Journey",
    slug: "golden-eagle-festival",
    category: "Festival tours",
    duration: "10 days",
    price: "$1,650",
    image: "gallery-2.jpg",
  },
  {
    title: "Khuvsgul Lake Winter Adventure",
    slug: "khuvsgul-winter",
    category: "Winter tours",
    duration: "6 days",
    price: "$980",
    image: "gallery-3.jpg",
  },
  {
    title: "Custom Private Mongolia Tour",
    slug: "custom-private-tour",
    category: "Tailored Tours",
    duration: "Flexible",
    price: "On request",
    image: "gallery-4.jpg",
  },
  {
    title: "Classic Mongolia Discovery",
    slug: "classic-mongolia-discovery",
    category: "classic tours",
    duration: "8 days",
    price: "$1,150",
    image: "gallery-5.jpg",
  },
];

export default function PortfolioPage() {
  const params = useParams();
  const locale = (params.locale as string) || "mn";
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTours =
    activeCategory === "All"
      ? tours
      : tours.filter((tour) => tour.category === activeCategory);

  return (
    <InnerPageLayout>
      <PageHero
        label="Featured Journeys"
        title="Our Tours"
        subtitle="Handcrafted itineraries for every kind of traveler"
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center max-w-[800px] mx-auto mb-10">
            <p className="text-lg leading-[1.7] text-muted-foreground">
              Choose from our most popular Mongolia tours, or ask us to customize any itinerary to match your interests, dates, and travel style.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-sm text-sm font-medium border transition-colors ${
                  activeCategory === category
                    ? "bg-primary-dark text-white border-primary-dark"
                    : "bg-white text-primary-dark border-primary-dark hover:bg-primary-dark/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredTours.map((tour) => (
                <motion.div
                  key={tour.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
                  className="rounded-[20px] bg-white border border-border overflow-hidden transition-shadow"
                >
                  <div className="relative h-[240px] w-full">
                    <Image src={tour.image} alt={tour.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{tour.duration}</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#F8F6F1] text-primary-dark">{tour.category}</span>
                    </div>
                    <h3 className="font-display text-xl text-foreground">{tour.title}</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-primary-dark font-display text-lg">{tour.price}</span>
                      <Link
                        href={`/${locale}/portfolio/${tour.slug}`}
                        className="flex items-center gap-1 text-sm text-accent hover:text-accent-dark transition-colors"
                      >
                        View Details <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </InnerPageLayout>
  );
}
