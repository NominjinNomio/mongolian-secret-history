"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";

const relatedPosts = [
  { title: "A Guide to Mongolian Nomadic Culture", slug: "mongolian-nomadic-culture" },
  { title: "What to Pack for a Mongolia Tour", slug: "what-to-pack-mongolia" },
  { title: "Highlights of the Naadam Festival", slug: "naadam-festival" },
];

const reasons = [
  {
    title: "Emerald Steppes Under Endless Skies",
    desc: "Summer transforms Mongolia into a vast green paradise. The grasslands stretch to the horizon, dotted with white ger camps and grazing horses. It is one of the most photogenic landscapes on Earth.",
  },
  {
    title: "Experience the Naadam Festival",
    desc: "July brings Mongolia's biggest traditional festival, featuring the three manly sports of wrestling, horse racing, and archery. Join locals in colorful celebration across the country.",
  },
  {
    title: "Meet Nomadic Families",
    desc: "Summer is when herders move to open pastures and welcome visitors. Share traditional dairy foods, learn about daily life, and sleep in a ger under a sky full of stars.",
  },
  {
    title: "Perfect Weather for Adventure",
    desc: "With warm days, cool nights, and little rainfall, summer is ideal for horseback riding, trekking, camel trekking, and exploring the Gobi Desert.",
  },
  {
    title: "Wildlife Watching",
    desc: "Spot wild horses in Khustai, migratory birds at pristine lakes, and even snow leopards in the mountainous west. Summer offers the best chance to see Mongolia's diverse animals.",
  },
];

export default function BlogDetailPage() {
  return (
    <InnerPageLayout>
      <PageHero
        label="Travel Journal"
        title="10 Reasons to Visit Mongolia This Summer"
        subtitle="June 15, 2026 · Travel Tips"
      />

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20">
            <article className="w-full max-w-[800px]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[16/9] rounded-[20px] overflow-hidden mb-8"
              >
                <Image src="blog-placeholder.jpg" alt="Summer in Mongolia" fill className="object-cover" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg leading-[1.7] text-muted-foreground mb-8"
              >
                Summer in Mongolia is a magical time when the vast steppes turn emerald green, wildflowers carpet the valleys, and nomadic families move to their summer pastures. Here are ten compelling reasons why this season should be at the top of your travel list.
              </motion.p>

              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="mb-8"
                >
                  <h2 className="font-display text-[28px] text-foreground mb-3">{index + 1}. {reason.title}</h2>
                  <p className="text-base leading-[1.7] text-muted-foreground">{reason.desc}</p>
                </motion.div>
              ))}
            </article>

            <aside className="w-full max-w-[320px] flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl bg-[#F8F6F1] p-7 flex flex-col items-center text-center"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-3">
                  <Image src="team-placeholder.jpg" alt="Author" fill className="object-cover" />
                </div>
                <h3 className="font-display text-xl text-foreground">Oyungerel</h3>
                <span className="text-sm text-primary-dark">Cultural Guide</span>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">Historian and storyteller who brings ancient Mongolia to life through words and journeys.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl bg-[#F8F6F1] p-7 flex flex-col gap-4"
              >
                <h3 className="font-display text-[22px] text-foreground">Related Stories</h3>
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="text-[15px] text-primary-dark hover:text-accent leading-relaxed transition-colors"
                  >
                    {post.title}
                  </Link>
                ))}
              </motion.div>
            </aside>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
