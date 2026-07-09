import { getTranslations } from "next-intl/server";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

const campData = {
  title: "MONGOLIAN SECRET HISTORY CAMP",
  intro:
    "The Mongolian Secret History tourist complex has been operating since November 2005. Open year-round, the complex welcomes travelers and vacationers in a comfortable natural environment while offering high-quality and unique services inspired by Mongolian heritage and tradition.",
  sections: [
    {
      title: "Location",
      content: [
        "The complex is located in Jargalant soum, Tuv province, at longitude 106° and latitude 48°, approximately 114 km from Ulaanbaatar on the road to Darkhan.",
        "The area is known as Noyon Mountain, rising about 1500 meters above sea level. It is home to abundant wildlife including deer, elk, wild boar, lynx, corsac fox, hare, red fox, pika, polecat, wolf, marmot, and various bird species.",
        "The mountain also hosts a wide variety of wildflowers and medicinal plants such as peony, pasqueflower, edelweiss, dandelion, jammynmyadag, rosehip, sedge, cinquefoil, egushin, and wild mushrooms.",
      ],
    },
    {
      title: "Capacity",
      content: [
        "Hotel with luxury and standard rooms: 16 beds",
        "13th-century style traditional pointed-top gers: 53 beds",
        "Total capacity per session: 69 guests",
      ],
    },
    {
      title: "Restaurant",
      content: [
        "“Michid” restaurant with 60 seats",
        "Private VIP room for 12 guests",
        "Outdoor dining area available",
      ],
    },
    {
      title: "Services & Facilities",
      content: [
        "“Yellow Ger Library” – a cultural library featuring books, scriptures, and artifacts related to The Secret History of the Mongols",
        "Conference hall for 60 people with modern audio-visual equipment",
        "Horse and camel riding, visiting herder families",
        "Archery activities",
        "Winter sports – skiing, sledding",
        "Traditional costume photography",
        "20-seat karaoke bar for families, friends, and groups",
        "Snooker, billiards, table tennis, and outdoor sports & playground areas",
        "Sauna and shower facilities",
        "Laundry and ironing services",
        "Heated garage for vehicles",
      ],
    },
    {
      title: "Distinctive Features & Advantages",
      content: [
        "Promotes and showcases 12th–13th century Mongolian history, culture, and traditional script through the Yellow Ger Library",
        "Fully equipped conference hall suitable for combining work and leisure in a beautiful natural setting",
        "Conveniently located near Ulaanbaatar, Darkhan, and Erdenet",
        "Well-developed infrastructure with Unitel and Mobicom network coverage",
        "Comfortable, cozy environment for relaxation",
        "Professional and skilled staff",
        "Serves fresh organic vegetables, meat, and dairy from the complex’s own farm",
        "Clean purified water sourced from a 120-meter deep well",
        "Open all year round",
      ],
    },
  ],
};

export async function generateStaticParams() {
  return [{ locale: "en", slug: "mongolian-secret-history-camp" }, { locale: "mn", slug: "mongolian-secret-history-camp" }];
}

export default async function CampDetailPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("accommodation");

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={campData.title}
        subtitle="A year-round tourist complex inspired by Mongolian heritage and tradition"
      />

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-0">
          <div className="relative h-[320px] md:h-[420px] rounded-2xl overflow-hidden mb-12">
            <Image
              src="gallery-2.jpg"
              alt={campData.title}
              fill
              className="object-cover"
            />
          </div>

          <p className="text-[17px] md:text-[19px] leading-[1.8] text-muted-foreground">
            {campData.intro}
          </p>

          <div className="mt-16 flex flex-col gap-14">
            {campData.sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-5">
                  {section.title}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-[15px] md:text-[17px] text-muted-foreground leading-[1.8]">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/book-online`}
              className="inline-flex items-center justify-center rounded-full px-10 py-3.5 text-sm font-medium transition-colors bg-[#1A2B4A] text-white hover:bg-[#1A2B4A]/90"
            >
              Book Now
            </Link>
            <Link
              href={`/${locale}/accommodation`}
              className="inline-flex items-center justify-center rounded-full px-10 py-3.5 text-sm font-medium transition-colors border border-[#1A2B4A] text-[#1A2B4A] hover:bg-[#1A2B4A]/5"
            >
              Back to Stays
            </Link>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
