"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";
import CmsContent from "@/components/cms/CmsContent";
import { useTranslations, useLocale } from "next-intl";
import type { Post } from "@/graphql/cms/queries/post";

interface BlogDetailProps {
  post: Post;
  relatedPosts: Post[];
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

export default function BlogDetailPageClient({ post, relatedPosts }: BlogDetailProps) {
  const locale = useLocale();
  const t = useTranslations("blog");
  const tc = useTranslations("common");

  return (
    <InnerPageLayout>
      <PageHero label="Travel Journal" title={post.title || ""} subtitle={formatDate(post.publishedDate, locale)} />

      <section className="bg-background py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20">
            <article className="w-full max-w-[800px]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[16/9] rounded-[20px] overflow-hidden border border-border mb-8"
              >
                <Image
                  src={post.thumbnail?.url || "blog-placeholder.jpg"}
                  alt={post.title || ""}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {post.excerpt && (
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg leading-[1.7] text-muted-foreground mb-8"
                >
                  {post.excerpt}
                </motion.p>
              )}

              <CmsContent html={post.content || ""} />
            </article>

            <aside className="w-full max-w-[320px] flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-muted p-7 flex flex-col items-center text-center border border-border"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-3 border border-border">
                  <Image src="team-placeholder.jpg" alt="Author" fill className="object-cover" />
                </div>
                <h3 className="font-display text-xl text-foreground">{t("authorName")}</h3>
                <span className="text-sm text-primary">{t("authorRole")}</span>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {t("authorBio")}
                </p>
              </motion.div>

              {relatedPosts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="rounded-2xl bg-muted p-7 flex flex-col gap-4 border border-border"
                >
                  <h3 className="font-display text-[22px] text-foreground">{tc("relatedStories")}</h3>
                  {relatedPosts.map((postItem) => (
                    <Link
                      key={postItem._id}
                      href={`/${locale}/blog/${postItem.slug}`}
                      className="text-[15px] text-primary hover:text-primary-dark leading-relaxed transition-colors"
                    >
                      {postItem.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
