"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";
import { useTranslations } from "next-intl";

const posts = [
  { title: "10 Reasons to Visit Mongolia This Summer", slug: "reasons-to-visit-mongolia-summer", date: "June 15, 2026", excerpt: "Discover why summer is the perfect season to explore Mongolia." },
  { title: "A Guide to Mongolian Nomadic Culture", slug: "mongolian-nomadic-culture", date: "May 28, 2026", excerpt: "Learn about ger life, hospitality, and timeless traditions." },
  { title: "What to Pack for a Mongolia Tour", slug: "what-to-pack-mongolia", date: "May 10, 2026", excerpt: "Essential items for a comfortable journey across the steppe." },
  { title: "Highlights of the Naadam Festival", slug: "naadam-festival", date: "April 22, 2026", excerpt: "Mongolia's biggest festival explained." },
  { title: "Horse Trekking in Orkhon Valley", slug: "orkhon-valley-trekking", date: "April 5, 2026", excerpt: "A guide to one of Mongolia's most beautiful valleys." },
  { title: "Best Time to See Wild Horses in Khustai", slug: "wild-horses-khustai", date: "March 18, 2026", excerpt: "Planning your visit to Khustai National Park." },
];

export default function BlogPage() {
  const params = useParams();
  const locale = (params.locale as string) || "en";
  const t = useTranslations("blog");

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <p className="text-lg leading-[1.7] text-muted-foreground">{t("intro")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" }}
                className="rounded-[20px] bg-white border border-border overflow-hidden transition-shadow"
              >
                <div className="relative h-[220px] w-full">
                  <Image src="blog-placeholder.jpg" alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <Link href={`/${locale}/blog/${post.slug}`} className="group">
                    <h3 className="font-display text-xl text-foreground group-hover:text-primary-dark transition-colors">{post.title}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
