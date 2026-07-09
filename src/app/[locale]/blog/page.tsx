"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import UsefulLinks from "@/components/blog/UsefulLinks";

const categories = [
  { id: "all", label: "All" },
  { id: "travel", label: "Travel" },
  { id: "culture", label: "Culture" },
  { id: "nature", label: "Nature" },
  { id: "tips", label: "Tips" },
];

const posts = [
  {
    _id: "1",
    title: "10 Reasons to Visit Mongolia This Summer",
    slug: "10-reasons-to-visit-mongolia-this-summer",
    excerpt: "Discover why summer is the perfect season to explore Mongolia's endless steppe, ancient culture, and outdoor adventures.",
    image: "gallery-1.jpg",
    publishedDate: "2026-06-15",
    category: "travel",
  },
  {
    _id: "2",
    title: "A Guide to Mongolian Nomadic Culture",
    slug: "guide-to-mongolian-nomadic-culture",
    excerpt: "Learn about ger life, traditional hospitality, herding customs, and festivals that define Mongolian identity.",
    image: "gallery-2.jpg",
    publishedDate: "2026-05-22",
    category: "culture",
  },
  {
    _id: "3",
    title: "What to Pack for a Mongolia Tour",
    slug: "what-to-pack-for-a-mongolia-tour",
    excerpt: "Essential packing tips for Mongolia's variable weather, remote regions, and outdoor activities.",
    image: "gallery-3.jpg",
    publishedDate: "2026-04-10",
    category: "tips",
  },
  {
    _id: "4",
    title: "Highlights of the Mongolian Festivals",
    slug: "highlights-of-the-mongolian-festivals",
    excerpt: "From Naadam to eagle festivals, discover the celebrations that bring Mongolian culture to life.",
    image: "gallery-4.jpg",
    publishedDate: "2026-03-05",
    category: "culture",
  },
  {
    _id: "5",
    title: "Horse Trekking in Orkhon Valley",
    slug: "horse-trekking-in-orkhon-valley",
    excerpt: "Everything you need to know about one of Mongolia's most beautiful trekking regions.",
    image: "gallery-5.jpg",
    publishedDate: "2026-02-18",
    category: "travel",
  },
  {
    _id: "6",
    title: "Best Time to See Wild Horses in Khustai",
    slug: "best-time-to-see-wild-horses-in-khustai",
    excerpt: "Plan your visit to see takhi horses roam free in their natural habitat.",
    image: "about-nomads.jpg",
    publishedDate: "2026-01-12",
    category: "nature",
  },
  {
    _id: "7",
    title: "Exploring the Gobi Desert in Spring",
    slug: "exploring-the-gobi-desert-in-spring",
    excerpt: "Spring brings mild weather and blooming desert flowers to one of the world's most iconic arid regions.",
    image: "gallery-6.jpg",
    publishedDate: "2025-12-05",
    category: "nature",
  },
  {
    _id: "8",
    title: "Traditional Mongolian Cuisine You Must Try",
    slug: "traditional-mongolian-cuisine-you-must-try",
    excerpt: "From buuz to khuushuur, explore the hearty dishes that fuel nomadic life on the steppe.",
    image: "gallery-7.jpg",
    publishedDate: "2025-11-20",
    category: "culture",
  },
  {
    _id: "9",
    title: "A Journey Through Khuvsgul Lake",
    slug: "a-journey-through-khuvsgul-lake",
    excerpt: "Known as the Blue Pearl of Mongolia, Khuvsgul Lake offers pristine nature and unforgettable scenery.",
    image: "gallery-8.jpg",
    publishedDate: "2025-10-14",
    category: "nature",
  },
  {
    _id: "10",
    title: "Eagle Hunting in Western Mongolia",
    slug: "eagle-hunting-in-western-mongolia",
    excerpt: "Meet the Kazakh eagle hunters and learn about their ancient bond with golden eagles.",
    image: "gallery-9.jpg",
    publishedDate: "2025-09-30",
    category: "culture",
  },
  {
    _id: "11",
    title: "The Reindeer Herders of Northern Mongolia",
    slug: "the-reindeer-herders-of-northern-mongolia",
    excerpt: "Visit the Tsaatan people and their reindeer in the remote forests of the Taiga.",
    image: "gallery-10.jpg",
    publishedDate: "2025-08-18",
    category: "culture",
  },
  {
    _id: "12",
    title: "Mongolia's Ancient Capital: Karakorum",
    slug: "mongolias-ancient-capital-karakorum",
    excerpt: "Step back in time and explore the ruins and Erdene Zuu monastery of the Mongol Empire's capital.",
    image: "gallery-11.jpg",
    publishedDate: "2025-07-10",
    category: "travel",
  },
  {
    _id: "13",
    title: "Stargazing in the Mongolian Countryside",
    slug: "stargazing-in-the-mongolian-countryside",
    excerpt: "With little light pollution, Mongolia offers some of the most spectacular night skies in the world.",
    image: "gallery-12.jpg",
    publishedDate: "2025-06-02",
    category: "nature",
  },
  {
    _id: "14",
    title: "Family Adventures in Mongolia",
    slug: "family-adventures-in-mongolia",
    excerpt: "Why Mongolia is a safe, educational, and exciting destination for travelers with children.",
    image: "gallery-13.jpg",
    publishedDate: "2025-05-15",
    category: "tips",
  },
  {
    _id: "15",
    title: "Sustainable Travel in Mongolia",
    slug: "sustainable-travel-in-mongolia",
    excerpt: "How to support local communities and protect fragile ecosystems while exploring Mongolia.",
    image: "gallery-14.jpg",
    publishedDate: "2025-04-08",
    category: "tips",
  },
];

function formatDate(dateString: string, locale: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === "mn" ? "mn-MN" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const locale = useLocale();
  const t = useTranslations("blog");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPosts =
    activeCategory === "all"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <InnerPageLayout>
      <PageHero
        label="Travel Stories"
        title="Blog & News"
        subtitle="Tales, inspiration, and tips from the heart of Mongolia."
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center max-w-[800px] mx-auto mb-10">
            <p className="text-lg leading-[1.7] text-muted-foreground">
              Explore our collection of articles about Mongolia's destinations, culture, wildlife, and travel tips to help you plan your perfect journey.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                  activeCategory === category.id
                    ? "bg-[#1A2B4A] text-white"
                    : "bg-white text-[#5C5C5C] border border-border hover:border-[#1A2B4A] hover:text-[#1A2B4A]"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post._id}
                href={`/${locale}/blog/${post.slug}`}
                className="rounded-[20px] bg-white border border-border overflow-hidden transition-shadow hover:shadow-lg"
              >
                <div className="relative h-[220px] w-full">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-muted-foreground">{formatDate(post.publishedDate, locale)}</span>
                    <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full bg-[#F8F5F0] text-[#2D5A4A]">
                      {categories.find((c) => c.id === post.category)?.label}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-foreground">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <UsefulLinks />
    </InnerPageLayout>
  );
}
