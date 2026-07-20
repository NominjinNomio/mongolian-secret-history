import { getTranslations } from "next-intl/server";
import Image from "@/components/common/Image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ locale: string }>;
}

const accommodations = [
  {
    index: "01",
    province: "Tuv Province",
    name: "Silk Road resort",
    slug: "secret-of-the-silk-road",
    description:
      "A luxurious resort of 45 gers that lets you feel the unique spirit of the Silk Road. Experience the endless steppe, traditional hospitality, and modern comfort in one unforgettable stay.",
    price: "₮250,000",
    unit: "night",
    image: "gallery-1.jpg",
  },
  {
    index: "02",
    province: "Khentii Province",
    name: "Mongolian secret history camp",
    slug: "mongolian-secret-history-camp",
    description:
      "A traditional ger camp located among the golden autumn forests, close to historic sites. Wake up to the sound of horses and explore the land where Genghis Khan once roamed.",
    price: "₮180,000",
    unit: "night",
    image: "gallery-2.jpg",
  },
  {
    index: "03",
    province: "Ovorkhangai Province",
    name: "Secret of Ongi tourist camp",
    slug: "secret-of-ongi",
    description:
      "A peaceful ger camp where you can rest under a star-filled night sky. Nestled by the Ongi River, this camp offers serenity, history, and authentic Mongolian moments.",
    price: "₮160,000",
    unit: "night",
    image: "gallery-3.jpg",
  },
  {
    index: "04",
    province: "Restaurant",
    name: "MSH restaurant",
    description:
      "Enjoy traditional and modern Mongolian cuisine in an elegant setting. From family recipes to contemporary dishes, every meal is a journey through Mongolian flavor.",
    price: "By reservation",
    unit: "",
    image: "gallery-4.jpg",
  },
];

export default async function AccommodationPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("accommodation");

  return (
    <main className="bg-[#F8F5F0] text-[#1a1a1a]">
      <section className="px-6 pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-[1400px]">
          <span className="text-sm tracking-[4px] text-[#1a1a1a]/50 uppercase">
            {t("heroLabel")}
          </span>
          <h1 className="font-display mt-5 max-w-[900px] text-5xl leading-[1.05] md:text-7xl lg:text-[92px]">
            {t("heroTitle")}
          </h1>
          <p className="mt-8 max-w-[560px] text-lg leading-relaxed text-[#1a1a1a]/65">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      <section className="px-6 pb-24 lg:pb-40">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-24 lg:gap-40">
            {accommodations.map((item) => (
              <article
                key={item.name}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
              >
                <div className="relative">
                  <Link
                    href={
                      item.slug
                        ? `/${locale}/accommodation/${item.slug}`
                        : `/${locale}/book-online`
                    }
                    className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#e8e4dc]"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 right-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-sm font-medium text-[#1a1a1a] shadow-lg transition-transform duration-300 group-hover:scale-110">
                      View
                    </div>
                  </Link>
                </div>

                <div className="flex flex-col">
                  <span className="text-sm tracking-[3px] text-[#1a1a1a]/40 uppercase">
                    {item.index} · {item.province}
                  </span>
                  <h2 className="font-display mt-5 text-4xl leading-[1.1] md:text-5xl lg:text-[56px]">
                    {item.name}
                  </h2>
                  <p className="mt-6 max-w-[520px] text-[17px] leading-[1.8] text-[#1a1a1a]/65">
                    {item.description}
                  </p>
                  <div className="mt-8 flex items-center gap-6">
                    <Link
                      href={
                        item.slug
                          ? `/${locale}/accommodation/${item.slug}`
                          : `/${locale}/book-online`
                      }
                      className="group inline-flex items-center gap-2 text-base font-semibold text-[#1a1a1a] underline decoration-[#1a1a1a]/30 underline-offset-8 transition-colors hover:decoration-[#1a1a1a]"
                    >
                      View Stay
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 8H13M13 8L9 4M13 8L9 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                    <Link
                      href={`/${locale}/book-online`}
                      className="inline-flex items-center justify-center rounded-full border border-[#1a1a1a]/20 px-6 py-3 text-sm font-medium text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a]/5"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
