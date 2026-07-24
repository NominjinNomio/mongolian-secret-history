import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";
import { Compass, Tent, UtensilsCrossed, PartyPopper, Award } from "lucide-react";
import { getCmsPage } from "@/lib/cms/page";
import { stripHtml } from "@/lib/cms/html";
import type { Metadata } from "next";
import { getCmsMetadata } from "@/lib/cms/seo";

const sections = [
  {
    icon: Compass,
    title: "Tour Operator",
    content: [
      "Our team is constantly seeking out new ways to make sure that your holiday in Mongolia is planned with the utmost care and attention. With our intimate knowledge of Mongolia we can plan every step of your journey to inspire your imagination and exceed your expectations.",
    ],
    bullets: ["Private bespoke tours", "Group tours"],
  },
  {
    icon: Tent,
    title: "Ger Camps",
    content: [
      "We run two ger camps in Mongolia. Secret of Ongi camp, located in the Gobi desert, is right on the way to some of the most popular attractions (Kharkhorin, Khongor sand dunes etc) in Mongolia.",
      "The Mongolian Secret History complex, in Central Province, is located 114km from Ulaanbaatar city, on the way to Khovsgol lake.",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurant",
    content: [
      "The MSH Restaurant is located 18 min from Chinggis Khaan International Airport and 11 min from Chinggis Khaan square (Sukhbaatar square). Our highly skilled chefs offer mouth-watering European and Mongolian dishes and our friendly staff will serve you in our beautifully decorated halls.",
    ],
  },
  {
    icon: PartyPopper,
    title: "Events",
    content: [
      "At the Mongolian Secret History camp we also organise a number of events that showcase Mongolian culture and tradition for our visitors.",
    ],
    bullets: [
      "Mongolian Lunar New Year Celebration (Feb)",
      "Horse herders show (June–July)",
      "Mini Naadam (July)",
    ],
  },
];

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutUsPage({ params }: PageProps) {
  const { locale } = await params;
  const cms = await getCmsPage(locale, "about-us");
  return (
    <InnerPageLayout>
      <PageHero
        label="Who we are"
        title={cms?.name || "About Us"}
        subtitle={(cms?.description ? stripHtml(cms.description) : "") || "Award-winning local tour agency since 2005"}
      />

      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-[1000px] px-6">
          {/* Team photo */}
          <div className="relative w-full aspect-[16/9] rounded-[20px] overflow-hidden border border-border mb-12">
            <Image
              src="/images/culture-naadam.jpg"
              alt="Mongolian Secret History team"
              fill
              className="object-cover"
            />
          </div>

          {/* Intro */}
          <div className="flex items-start gap-5 rounded-[20px] bg-white border border-border p-8 lg:p-10 mb-12">
            <span className="w-14 h-14 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
              <Award size={26} className="text-gold-dark" />
            </span>
            <p className="text-base leading-[1.9] text-muted-foreground">
              We are an award-winning local tour agency with an experienced team who
              are passionate about travel and Mongolia. We started the Mongolian
              Secret History company in 2005, naming ourselves after Mongolia&apos;s most
              famous historical literary work,{" "}
              <span className="text-foreground font-medium">
                &quot;The Secret History of the Mongols&quot;
              </span>{" "}
              — a registered UNESCO protected item of cultural heritage that details
              Mongolian history, tradition and culture through the story of Chinggis
              Khaan, his ancestors and descendants. With this in mind we aim to help
              you build your very own travel story in Mongolia.
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section) => (
              <div
                key={section.title}
                className="rounded-[20px] bg-white border border-border p-8 flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                    <section.icon size={22} className="text-primary" />
                  </span>
                  <h3 className="font-display text-xl text-foreground">
                    {section.title}
                  </h3>
                </div>
                {section.content.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-[1.8] text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="flex flex-col gap-2 mt-1">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-2.5 text-sm text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return getCmsMetadata({
    slug: "about-us",
    locale,
    fallbackTitle: "About Us",
    fallbackDescription: "Award-winning local tour agency since 2005.",
  });
}
