"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { Search } from "lucide-react";

const searchableItems = [
  { title: "Home", type: "Page", url: "/", excerpt: "Welcome to Mongolian Secret History." },
  { title: "About Mongolia", type: "Page", url: "/about", excerpt: "Discover Mongolia's history, culture, and vast landscapes." },
  { title: "Tours", type: "Page", url: "/portfolio", excerpt: "Explore our featured Mongolia tours and custom itineraries." },
  { title: "Accommodation", type: "Page", url: "/accommodation", excerpt: "Hotel rooms and traditional ger camps across Mongolia." },
  { title: "Blog & News", type: "Page", url: "/blog", excerpt: "Travel stories, tips, and news from Mongolia." },
  { title: "Contact", type: "Page", url: "/contact", excerpt: "Get in touch with our team to plan your trip." },
  { title: "Book Online", type: "Page", url: "/book-online", excerpt: "Reserve your tour or accommodation online." },
  { title: "Testimonials", type: "Page", url: "/testimonials", excerpt: "Read reviews from our travelers." },
  { title: "10 Reasons to Visit Mongolia This Summer", type: "Blog", url: "/blog/10-reasons-to-visit-mongolia-this-summer", excerpt: "Discover why summer is the perfect season to explore Mongolia." },
  { title: "A Guide to Mongolian Nomadic Culture", type: "Blog", url: "/blog/guide-to-mongolian-nomadic-culture", excerpt: "Learn about ger life, traditional hospitality, and festivals." },
  { title: "What to Pack for a Mongolia Tour", type: "Blog", url: "/blog/what-to-pack-for-a-mongolia-tour", excerpt: "Essential packing tips for Mongolia's variable weather." },
  { title: "Gobi Desert Adventure", type: "Tour", url: "/portfolio/gobi-desert-adventure", excerpt: "8-day adventure through the Gobi Desert." },
  { title: "Central Mongolia Heritage Tour", type: "Tour", url: "/portfolio/central-mongolia-heritage-tour", excerpt: "6-day heritage and cultural tour." },
];

export default function SearchPage() {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const results = query.trim()
    ? searchableItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.excerpt.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <InnerPageLayout>
      <PageHero label="Search" title="Search" subtitle="Find tours, blog posts, and pages across our site." />

      <section className="bg-background py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[800px] px-6 lg:px-0">
          <div className="relative mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tours, blog posts, pages..."
              className="w-full rounded-[12px] border border-border bg-white pl-12 pr-4 py-4 text-base text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              autoFocus
            />
          </div>

          {query.trim() && (
            <div className="flex flex-col gap-4">
              {results.length === 0 ? (
                <p className="text-center text-muted-foreground">No results found for "{query}".</p>
              ) : (
                results.map((item) => (
                  <Link
                    key={item.url}
                    href={`/${locale}${item.url}`}
                    className="bg-white rounded-[16px] border border-border p-5 transition-all hover:shadow-[0_10px_15px_-3px_rgba(18,63,174,0.08)]"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-muted text-primary">
                        {item.type}
                      </span>
                    </div>
                    <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                  </Link>
                ))
              )}
            </div>
          )}
        </div>
      </section>
    </InnerPageLayout>
  );
}
