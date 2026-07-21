import { notFound } from "next/navigation";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const posts = [
  {
    slug: "10-reasons-to-visit-mongolia-this-summer",
    title: "10 Reasons to Visit Mongolia This Summer",
    date: "June 15, 2026",
    image: "/images/tour-1.jpg",
    content: [
      { type: "p", text: "Summer in Mongolia is unlike anywhere else on Earth. From endless steppe under a deep blue sky to ancient nomadic culture, here are ten reasons why this season is the perfect time to visit." },
      { type: "h3", text: "1. Endless Blue Sky" },
      { type: "p", text: "Mongolia is known as the Land of the Eternal Blue Sky, and summer proves why. With over 250 sunny days a year, clear skies stretch endlessly across the vast open plains." },
      { type: "h3", text: "2. Naadam Festival" },
      { type: "p", text: "July brings Mongolia's biggest celebration — Naadam. Watch traditional wrestling, horse racing, and archery in a festival that has continued for centuries." },
      { type: "h3", text: "3. Nomadic Hospitality" },
      { type: "p", text: "Stay in a traditional ger, share meals with nomadic families, and experience warm hospitality that makes every visitor feel welcome." },
      { type: "h3", text: "4. Wild Horses" },
      { type: "p", text: "Visit Hustai National Park to see the takhi, the world's only truly wild horse, roaming freely across the landscape." },
      { type: "h3", text: "5. Gobi Desert Adventures" },
      { type: "p", text: "Summer nights in the Gobi are cool and the stars are unforgettable. Explore towering dunes, flaming cliffs, and hidden canyons." },
    ],
  },
  {
    slug: "guide-to-mongolian-nomadic-culture",
    title: "A Guide to Mongolian Nomadic Culture",
    date: "May 22, 2026",
    image: "/images/tour-2.jpg",
    content: [
      { type: "p", text: "Nomadic culture is the heart of Mongolia. For thousands of years, families have moved with the seasons, raising livestock and living in portable gers." },
      { type: "h3", text: "1. Ger Life" },
      { type: "p", text: "The ger is a circular felt dwelling designed to be set up and taken down quickly. Its door traditionally faces south to avoid the northern wind." },
      { type: "h3", text: "2. Livestock" },
      { type: "p", text: "Horses, sheep, goats, cattle, and camels are the five kinds of livestock central to nomadic life. Each animal provides food, transport, wool, or trade goods." },
      { type: "h3", text: "3. Hospitality" },
      { type: "p", text: "Guests are honored in Mongolian tradition. Expect milk tea, homemade dairy products, and lively conversation around the stove." },
    ],
  },
  {
    slug: "what-to-pack-for-a-mongolia-tour",
    title: "What to Pack for a Mongolia Tour",
    date: "April 10, 2026",
    image: "/images/tour-3.jpg",
    content: [
      { type: "p", text: "Packing right can make your Mongolia trip far more comfortable. The weather can change quickly, so layers are essential." },
      { type: "h3", text: "1. Layers" },
      { type: "p", text: "Mornings can be chilly even in summer, while afternoons warm up quickly. Pack base layers, fleece, and a light waterproof jacket." },
      { type: "h3", text: "2. Sun Protection" },
      { type: "p", text: "The sun is intense on the open steppe. Bring sunscreen, sunglasses, and a wide-brimmed hat." },
      { type: "h3", text: "3. Sturdy Footwear" },
      { type: "p", text: "Waterproof hiking boots or sturdy walking shoes are ideal for varied terrain from rocky hills to sandy dunes." },
    ],
  },
  {
    slug: "highlights-of-the-mongolian-festivals",
    title: "Highlights of the Mongolian Festivals",
    date: "March 5, 2026",
    image: "/images/tour-4.jpg",
    content: [
      { type: "p", text: "Mongolia's festivals offer a vivid window into the country's traditions, sports, and spiritual life." },
      { type: "h3", text: "1. Naadam" },
      { type: "p", text: "The 'Three Manly Games' of wrestling, horse racing, and archery take center stage during this national festival." },
      { type: "h3", text: "2. Golden Eagle Festival" },
      { type: "p", text: "In western Mongolia, Kazakh hunters celebrate their ancient partnership with golden eagles in a spectacular competition." },
    ],
  },
  {
    slug: "horse-trekking-in-orkhon-valley",
    title: "Horse Trekking in Orkhon Valley",
    date: "February 18, 2026",
    image: "/images/tour-5.jpg",
    content: [
      { type: "p", text: "The Orkhon Valley is one of Mongolia's most beautiful trekking regions, rich with history, waterfalls, and nomadic camps." },
      { type: "h3", text: "1. Orkhon Waterfall" },
      { type: "p", text: "Also known as Ulaan Tsutgalan, this dramatic waterfall is a highlight of the valley, especially in summer." },
      { type: "h3", text: "2. Ancient History" },
      { type: "p", text: "The valley is a UNESCO World Heritage site and was the heartland of several empires, including the Mongol Empire." },
    ],
  },
  {
    slug: "best-time-to-see-wild-horses-in-khustai",
    title: "Best Time to See Wild Horses in Khustai",
    date: "January 12, 2026",
    image: "/images/about-nomads.jpg",
    content: [
      { type: "p", text: "Khustai National Park is home to the takhi, or Przewalski's horse, the only truly wild horse species in the world." },
      { type: "h3", text: "1. Early Morning" },
      { type: "p", text: "Takhi are most active in the early morning and late afternoon. Plan your visit around dawn or dusk for the best sightings." },
      { type: "h3", text: "2. Spring and Autumn" },
      { type: "p", text: "These seasons offer comfortable temperatures and active wildlife, making them ideal for visiting the park." },
    ],
  },
];

const related = [
  { slug: "guide-to-mongolian-nomadic-culture", title: "A Guide to Mongolian Nomadic Culture", date: "May 22, 2026" },
  { slug: "what-to-pack-for-a-mongolia-tour", title: "What to Pack for a Mongolia Tour", date: "April 10, 2026" },
];

export default async function BlogDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <InnerPageLayout>
      <PageHero label="Travel Stories" title={post.title} subtitle={post.date} />

      <section className="bg-background py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
            <article className="bg-white rounded-[20px] border border-border p-8 lg:p-10">
              <div className="relative w-full h-[320px] lg:h-[420px] rounded-[16px] overflow-hidden mb-10 border border-border">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>

              <div className="flex flex-col gap-6">
                {post.content.map((block, idx) => {
                  if (block.type === "h3") {
                    return <h3 key={idx} className="font-display text-xl text-foreground mt-2">{block.text}</h3>;
                  }
                  return <p key={idx} className="text-base leading-[1.8] text-muted-foreground">{block.text}</p>;
                })}
              </div>
            </article>

            <aside className="flex flex-col gap-6">
              <div className="bg-white rounded-[20px] border border-border p-6">
                <h4 className="font-display text-lg text-foreground mb-4">About the Author</h4>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
                    <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.314 0-10 1.657-10 5v2h20v-2c0-3.343-6.686-5-10-5z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Written by the travel team at Mongolian Secret History, sharing local insights and practical tips from years of exploring the steppe.
                </p>
              </div>

              <div className="bg-white rounded-[20px] border border-border p-6">
                <h4 className="font-display text-lg text-foreground mb-4">Related Articles</h4>
                <ul className="flex flex-col gap-4">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link href={`/${locale}/blog/${item.slug}`} className="group">
                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug, locale: "en" }));
}
