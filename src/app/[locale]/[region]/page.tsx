import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Link from "next/link";
import RegionMap from "@/components/about/RegionMap";
import ProvinceCard from "@/components/about/ProvinceCard";
import { regionBySlug, regions } from "@/lib/regions";
import { provinces } from "@/lib/provinces";

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
  const regionProvinces = provinces.filter((p) => p.region === regionData.id);

  return (
    <InnerPageLayout>
      <PageHero
        label={t("regionLabel")}
        title={t(regionData.nameKey)}
        subtitle={t(descKey as any)}
      />

      <section className="bg-[#F8F5F0] py-16 lg:py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl text-foreground">{t("regionMapTitle")}</h2>
          </div>
          <RegionMap regionId={regionData.id} />
        </div>
      </section>

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-14">
            <span className="text-sm tracking-[3px] text-primary-dark uppercase">{t("provincesLabel")}</span>
            <h2 className="font-display text-3xl md:text-[44px] leading-[1.15] mt-3">{t("provincesInRegion")}</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {regionProvinces.map((province) => (
              <ProvinceCard key={province.name} province={province} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href={`/${locale}/about#regions`}
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-colors bg-accent text-foreground hover:bg-accent-dark"
            >
              {t("regionBackToAbout")}
            </Link>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
