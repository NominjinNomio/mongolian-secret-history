import { getTranslations } from "next-intl/server";
import Image from "@/components/common/Image";
import Link from "next/link";
import AccommodationMarquee from "@/components/sections/accommodation/AccommodationMarquee";
import AccommodationShowcase from "@/components/sections/accommodation/AccommodationShowcase";
import AccommodationTestimonials from "@/components/sections/accommodation/AccommodationTestimonials";
import AccommodationCTA from "@/components/sections/accommodation/AccommodationCTA";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function AccommodationPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("accommodation");

  return (
    <main className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-end justify-start overflow-hidden pb-20 lg:pb-28">
        <Image
          src="hero-steppe.jpg"
          alt={t("heroTitle")}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-12">
          <span className="mb-6 inline-block text-sm tracking-[4px] text-white/60 uppercase">
            {t("heroLabel")}
          </span>
          <h1 className="font-display max-w-[1000px] text-5xl leading-[1.05] text-white md:text-7xl lg:text-[92px]">
            {t("heroTitle")}
          </h1>
          <p className="mt-8 max-w-[600px] text-lg leading-relaxed text-white/70 md:text-xl">
            {t("heroSubtitle")}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href={`/${locale}/book-online`}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#0a0a0a] transition-transform hover:scale-105"
            >
              Book Your Stay
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <AccommodationMarquee />

      {/* Showcase */}
      <AccommodationShowcase locale={locale} />

      {/* Testimonials */}
      <AccommodationTestimonials />

      {/* CTA */}
      <AccommodationCTA locale={locale} />
    </main>
  );
}
