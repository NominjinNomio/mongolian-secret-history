import { getTranslations } from "next-intl/server";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import AccommodationSticky from "@/components/sections/AccommodationSticky";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const accommodations = [
  {
    index: "01",
    province: "Tuv Province",
    name: "Silk road resort",
    description:
      "A luxurious resort of 45 gers that lets you feel the unique spirit of the Silk Road.",
    price: "₮250,000",
    unit: "night",
    image: "/images/tour-1.jpg",
  },
  {
    index: "02",
    province: "Khentii Province",
    name: "Mongolian secret history camp",
    slug: "mongolian-secret-history-camp",
    description:
      "A traditional ger camp located among the golden autumn forests, close to historic sites.",
    price: "₮180,000",
    unit: "night",
    image: "/images/tour-2.jpg",
  },
  {
    index: "03",
    province: "Ovorkhangai Province",
    name: "Secret of Ongi tourist camp",
    description:
      "A peaceful ger camp where you can rest under a star-filled night sky.",
    price: "₮160,000",
    unit: "night",
    image: "/images/tour-3.jpg",
  },
  {
    index: "04",
    province: "Restaurant",
    name: "MSH restaurant",
    description:
      "Enjoy traditional and modern Mongolian cuisine in an elegant setting.",
    price: "By reservation",
    unit: "",
    image: "/images/tour-4.jpg",
  },
];

export default async function AccommodationPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("accommodation");

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />

      <AccommodationSticky items={accommodations} locale={locale} />
    </InnerPageLayout>
  );
}
