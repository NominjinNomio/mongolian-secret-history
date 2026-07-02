"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";

interface PostData {
  title: string;
  subtitle: string;
  image: string;
  intro: string;
  sections: { title: string; desc: string }[];
}

const posts: Record<string, PostData> = {
  "reasons-to-visit-mongolia-summer": {
    title: "10 Reasons to Visit Mongolia This Summer",
    subtitle: "June 15, 2026 · Travel Tips",
    image: "blog-placeholder.jpg",
    intro:
      "Summer in Mongolia is a magical time when the vast steppes turn emerald green, wildflowers carpet the valleys, and nomadic families move to their summer pastures. Here are ten compelling reasons why this season should be at the top of your travel list.",
    sections: [
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
    ],
  },
  "mongolian-nomadic-culture": {
    title: "A Guide to Mongolian Nomadic Culture",
    subtitle: "May 28, 2026 · Culture",
    image: "about-nomads.jpg",
    intro:
      "Mongolia is one of the last places on Earth where a nomadic way of life remains strong. For centuries, herder families have moved across the steppe with their animals, living in portable gers and preserving traditions that shape the nation's identity.",
    sections: [
      {
        title: "The Ger: Heart of the Home",
        desc: "The traditional round tent, known as a ger or yurt, is designed to be assembled and disassembled in under an hour. Its circular shape and central stove provide warmth during harsh winters and ventilation during summer.",
      },
      {
        title: "Livestock as Livelihood",
        desc: "Horses, sheep, goats, cows, and camels are the five types of livestock that sustain Mongolian herders. Animals provide milk, meat, wool, leather, and transportation, forming the foundation of daily life.",
      },
      {
        title: "Hospitality is Sacred",
        desc: "Visitors to a ger are traditionally offered salty milk tea, homemade dairy products, and sometimes airag, fermented mare's milk. It is considered rude to refuse a host's offerings, even a small taste.",
      },
      {
        title: "Seasonal Migration",
        desc: "Nomadic families move camp several times a year to find fresh pasture and water. This sustainable lifestyle has allowed Mongolia's grasslands to remain productive for generations.",
      },
      {
        title: "Traditions Passed Down",
        desc: "From throat singing and eagle hunting to the rituals of Naadam, Mongolian culture is kept alive through oral tradition, family teaching, and community celebration.",
      },
    ],
  },
  "what-to-pack-mongolia": {
    title: "What to Pack for a Mongolia Tour",
    subtitle: "May 10, 2026 · Practical Guide",
    image: "tour-placeholder.jpg",
    intro:
      "Packing for Mongolia requires preparation for variable weather, remote areas, and outdoor adventure. This guide covers the essentials to keep you comfortable from the Gobi Desert to the northern lakes.",
    sections: [
      {
        title: "Layered Clothing",
        desc: "Temperatures can shift dramatically between day and night. Bring moisture-wicking base layers, a warm fleece or down jacket, and a waterproof outer shell.",
      },
      {
        title: "Sturdy Footwear",
        desc: "A pair of broken-in hiking boots is essential for trekking, horse riding, and walking on uneven terrain. Pack sandals for relaxing around ger camps.",
      },
      {
        title: "Sun and Dust Protection",
        desc: "The Mongolian sun is intense and the steppe can be windy. Pack sunglasses, a wide-brim hat, sunscreen, lip balm, and a buff or scarf to protect against dust.",
      },
      {
        title: "Personal Supplies",
        desc: "Remote areas have limited shops. Bring any medications, toiletries, wet wipes, hand sanitizer, and a small first-aid kit.",
      },
      {
        title: "Camera and Power",
        desc: "The landscapes are stunning, so a camera with spare batteries and memory cards is worth the weight. Portable power banks are useful when electricity is limited.",
      },
    ],
  },
  "naadam-festival": {
    title: "Highlights of the Naadam Festival",
    subtitle: "April 22, 2026 · Culture",
    image: "culture-nomads.jpg",
    intro:
      "Naadam is Mongolia's most beloved festival, celebrated each July with the 'Three Manly Games' of wrestling, horse racing, and archery. It is a vibrant expression of national pride and nomadic heritage.",
    sections: [
      {
        title: "The Opening Ceremony",
        desc: "The festival begins with parades, music, dance, and athletes in traditional costumes. The atmosphere is festive as competitors prepare for the games.",
      },
      {
        title: "Mongolian Wrestling",
        desc: "Hundreds of wrestlers compete in an open-air tournament. There are no weight classes or time limits, and matches continue until one opponent touches the ground.",
      },
      {
        title: "Long-Distance Horse Racing",
        desc: "Children as young as five ride horses across distances of 15 to 30 kilometers. The races test endurance and horsemanship in a way found nowhere else.",
      },
      {
        title: "Archery on the Steppe",
        desc: "Both men and women compete in traditional archery using curved bows. Targets are small leather cylinders placed 75 meters away.",
      },
      {
        title: "Local Naadam Experiences",
        desc: "Beyond the capital, rural Naadam festivals offer a more intimate experience. Visitors can watch the games, share meals, and camp nearby with local families.",
      },
    ],
  },
  "orkhon-valley-trekking": {
    title: "Horse Trekking in Orkhon Valley",
    subtitle: "April 5, 2026 · Adventure",
    image: "gallery-1.jpg",
    intro:
      "The Orkhon Valley is a UNESCO World Heritage Site rich in history and natural beauty. Trekking on horseback is one of the best ways to explore waterfalls, ancient ruins, and nomadic camps.",
    sections: [
      {
        title: "Ulaan Tsutgalan Waterfall",
        desc: "A spectacular 24-meter waterfall carved into volcanic rock. It is most powerful in late summer after rains and remains beautiful when frozen in winter.",
      },
      {
        title: "Erdene Zuu Monastery",
        desc: "Located nearby in Kharkhorin, this was Mongolia's first Buddhist monastery. Its walls are built from the ruins of the ancient Mongol capital.",
      },
      {
        title: "Nomadic Encounters",
        desc: "The valley is home to many herder families. A horse trek lets you stop at gers, share meals, and learn about traditional pasture management.",
      },
      {
        title: "Open Grasslands and Rivers",
        desc: "Riders cross wide grasslands, follow the Orkhon River, and camp in wildflower meadows. The scenery changes with every turn.",
      },
      {
        title: "Planning Your Trek",
        desc: "Trek lengths range from two days to two weeks. A local guide, well-trained horses, and camping gear are recommended for a safe journey.",
      },
    ],
  },
  "wild-horses-khustai": {
    title: "Best Time to See Wild Horses in Khustai",
    subtitle: "March 18, 2026 · Wildlife",
    image: "gallery-2.jpg",
    intro:
      "Khustai National Park is famous for its population of Przewalski's horses, the world's last truly wild horse species. Reintroduced to Mongolia in the 1990s, they now roam freely across the park's hills and steppe.",
    sections: [
      {
        title: "Who Are the Takhi?",
        desc: "Przewalski's horses, known locally as takhi, are smaller and stockier than domestic horses. They have never been successfully domesticated and live in family herds.",
      },
      {
        title: "Spring and Summer Viewing",
        desc: "From May to September, the park is green and horses gather near water sources. Early morning and late afternoon offer the best chances for sightings.",
      },
      {
        title: "Autumn Colors",
        desc: "September and October bring golden grasses and crisp air. Foals are older and more active, and the light is excellent for photography.",
      },
      {
        title: "Winter Wildlife",
        desc: "Even in cold months, takhi can be seen on sheltered hillsides. Their thick winter coats make them well adapted to Mongolia's extreme temperatures.",
      },
      {
        title: "How to Visit",
        desc: "Khustai is about a two-hour drive from Ulaanbaatar. The park has a visitor center, guided tours, and ger camps for overnight stays.",
      },
    ],
  },
};

const relatedPosts = [
  { title: "A Guide to Mongolian Nomadic Culture", slug: "mongolian-nomadic-culture" },
  { title: "What to Pack for a Mongolia Tour", slug: "what-to-pack-mongolia" },
  { title: "Highlights of the Naadam Festival", slug: "naadam-festival" },
  { title: "Horse Trekking in Orkhon Valley", slug: "orkhon-valley-trekking" },
  { title: "Best Time to See Wild Horses in Khustai", slug: "wild-horses-khustai" },
  { title: "10 Reasons to Visit Mongolia This Summer", slug: "reasons-to-visit-mongolia-summer" },
];

export default function BlogDetailPage() {
  const params = useParams();
  const locale = (params.locale as string) || "mn";
  const slug = (params.slug as string) || "reasons-to-visit-mongolia-summer";
  const post = posts[slug] || posts["reasons-to-visit-mongolia-summer"];

  const sidebarPosts = relatedPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <InnerPageLayout>
      <PageHero label="Travel Journal" title={post.title} subtitle={post.subtitle} />

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
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg leading-[1.7] text-muted-foreground mb-8"
              >
                {post.intro}
              </motion.p>

              {post.sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="mb-8"
                >
                  <h2 className="font-display text-[28px] text-foreground mb-3">
                    {index + 1}. {section.title}
                  </h2>
                  <p className="text-base leading-[1.7] text-muted-foreground">{section.desc}</p>
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
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Historian and storyteller who brings ancient Mongolia to life through words and journeys.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl bg-[#F8F6F1] p-7 flex flex-col gap-4"
              >
                <h3 className="font-display text-[22px] text-foreground">Related Stories</h3>
                {sidebarPosts.map((postItem) => (
                  <Link
                    key={postItem.slug}
                    href={`/${locale}/blog/${postItem.slug}`}
                    className="text-[15px] text-primary-dark hover:text-accent leading-relaxed transition-colors"
                  >
                    {postItem.title}
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
