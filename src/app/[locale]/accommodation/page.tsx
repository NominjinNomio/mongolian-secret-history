import { getTranslations } from "next-intl/server";
import Link from "next/link";
import AccommodationShowcase from "@/components/sections/accommodation/AccommodationShowcase";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AccommodationPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("accommodation");

  return (
    <main className="bg-[#F8F5F0] text-[#1a1a1a]">
      <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
        <div className="mx-auto max-w-[1100px]">
          <span className="mb-6 inline-block text-sm tracking-[4px] text-[#1a1a1a]/50 uppercase">
            {t("heroLabel")}
          </span>
          <h1 className="font-display text-5xl leading-[1.05] text-[#1a1a1a] md:text-7xl lg:text-8xl">
            {t("heroTitle")}
          </h1>
          <p className="mx-auto mt-8 max-w-[620px] text-lg leading-relaxed text-[#1a1a1a]/70">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>

      <AccommodationShowcase locale={locale} />

      <section className="border-t border-[#1a1a1a]/10 px-6 py-24 lg:py-32">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display max-w-[800px] text-4xl leading-[1.1] md:text-5xl lg:text-6xl">
              Ready to book your stay?
            </h2>
            <p className="mt-5 max-w-[520px] text-[17px] leading-[1.8] text-[#1a1a1a]/60">
              Contact us to check availability and reserve your room or ger at our camp.
            </p>
          </div>
          <Link
            href={`/${locale}/book-online`}
            className="inline-flex items-center justify-center rounded-full bg-[#1A2B4A] px-10 py-5 text-base font-semibold text-white transition-transform hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}
