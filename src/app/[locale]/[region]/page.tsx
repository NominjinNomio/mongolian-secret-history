import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Link from "next/link";
import { regionBySlug, regions } from "@/lib/regions";

interface PageProps {
  params: Promise<{ locale: string; region: string }>;
}

export async function generateStaticParams() {
  const locales = ["en", "mn"];
  return locales.flatMap((locale) =>
    regions.map((r) => ({ locale, region: r.slug }))
  );
}

export default async function RegionPage({ params }: PageProps) {
  const { locale, region } = await params;
  const regionData = regionBySlug(region);
  if (!regionData) return notFound();

  const t = await getTranslations("about");
  const descKey = `${regionData.nameKey}Desc` as const;

  return (
    <InnerPageLayout>
      <PageHero
        label={t("regionLabel")}
        title={t(regionData.nameKey)}
        subtitle={t(descKey as any)}
      />

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <Link
            href={`/${locale}/about#regions`}
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-colors bg-accent text-foreground hover:bg-accent-dark"
          >
            {t("regionBackToAbout")}
          </Link>
        </div>
      </section>
    </InnerPageLayout>
  );
}
