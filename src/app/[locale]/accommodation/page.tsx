import { getTranslations } from "next-intl/server";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const accommodations = [
  {
    index: "01",
    province: "Төв аймаг",
    name: "Silk road resort",
    description:
      "Торгоны замын өвөрмөц сунсийг мэдрүүлэх, тансаг зэрэглэлийн 45 гэрээс бүрдсэн амралтын газар.",
    price: "₮250,000",
    unit: "шөнө",
    image: "gallery-1.jpg",
  },
  {
    index: "02",
    province: "Хэнтий аймаг",
    name: "Mongolian secret history camp",
    description:
      "Намрын алтан ойн дунд байрлах уламжлалт гэр бааз, түүхэн газруудад ойрхон.",
    price: "₮180,000",
    unit: "шөнө",
    image: "gallery-2.jpg",
  },
  {
    index: "03",
    province: "Өвөрхангай аймаг",
    name: "Secret of Ongi tourist camp",
    description:
      "Од харах шөнөийн тэнгэрийн дор амрах, тайван бүх орчингтой гэрийн бааз.",
    price: "₮160,000",
    unit: "шөнө",
    image: "gallery-3.jpg",
  },
  {
    index: "04",
    province: "Ресторан",
    name: "MSH restaurant",
    description:
      "Уламжлалт болон орчин үеийн Монгол хоолыг тансаг орчинд амталж үзээрэй.",
    price: "Ширээ захиалгаар",
    unit: "",
    image: "gallery-4.jpg",
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

      <section className="bg-[#F8F5F0] py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="flex flex-col gap-16 lg:gap-20">
            {accommodations.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={item.name}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-10 lg:gap-16 pb-16 lg:pb-20 border-b border-border last:border-b-0 last:pb-0`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#E8E4DC]">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <span className="text-sm tracking-[2px] text-muted-foreground uppercase">
                      {item.index} · {item.province}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-[15px] md:text-[17px] text-muted-foreground leading-[1.7]">
                      {item.description}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-2">
                      <div className="text-foreground">
                        <span className="font-display text-2xl md:text-3xl">{item.price}</span>
                        {item.unit && (
                          <span className="text-muted-foreground text-base ml-1">/ {item.unit}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-3">
                        <Link
                          href={`/${locale}/book-online`}
                          className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium transition-colors border border-[#1A2B4A] text-[#1A2B4A] hover:bg-[#1A2B4A]/5"
                        >
                          More
                        </Link>
                        <Link
                          href={`/${locale}/book-online`}
                          className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium transition-colors bg-[#1A2B4A] text-white hover:bg-[#1A2B4A]/90"
                        >
                          Захиалах
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
