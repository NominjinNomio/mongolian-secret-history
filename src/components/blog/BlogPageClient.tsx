"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useMemo } from "react";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";
import { useTranslations, useLocale } from "next-intl";
import type { Post } from "@/graphql/cms/queries/post";

interface BlogPageProps {
  posts: Post[];
}

function formatDate(dateString?: string, locale = "en") {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === "mn" ? "mn-MN" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage({ posts }: BlogPageProps) {
  const locale = useLocale();
  const t = useTranslations("blog");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const names = posts
      .flatMap((post) => post.categories ?? [])
      .map((c) => c.name)
      .filter((name): name is string => Boolean(name));
    return ["All", ...Array.from(new Set(names))];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((post) =>
      post.categories?.some((category) => category.name === activeCategory)
    );
  }, [posts, activeCategory]);

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />

      <section className="bg-background py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center max-w-[800px] mx-auto mb-10">
            <p className="text-lg leading-[1.7] text-muted-foreground">{t("intro")}</p>
          </div>

          {categories.length > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                    activeCategory === category
                      ? "bg-primary text-white border-primary"
                      : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(18,63,174,0.08)" }}
                className="rounded-[20px] bg-white border border-border overflow-hidden transition-all"
              >
                <div className="relative h-[220px] w-full overflow-hidden"
                >
                  <Image
                    src={post.thumbnail?.url || "/images/tour-2.jpg"}
                    alt={post.title || ""}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {formatDate(post.publishedDate, locale)}
                    </span>
                    {post.categories?.[0]?.name && (
                      <span className="text-xs text-primary font-medium">
                        {post.categories[0].name}
                      </span>
                    )}
                  </div>
                  <Link href={`/${locale}/blog/${post.slug}`} className="group">
                    <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
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
