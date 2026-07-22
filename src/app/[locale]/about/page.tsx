import { getTranslations } from "next-intl/server";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import MongoliaMap from "@/components/about/MongoliaMap";
import AboutSections from "@/components/about/AboutSections";
import ClimateWheel from "@/components/about/ClimateWheel";

interface PageProps {
  params: Promise<{ locale: string } >;
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("about");

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={t("heroTitle")}
        subtitle={t("heroSubtitle")}
      />

      <AboutSections
        country={{
          label: t("countryLabel"),
          title: t("countryTitle"),
          desc1: t("countryDesc1"),
          desc2: t("countryDesc2"),
        }}
        culture={{
          label: t("cultureLabel"),
          title: t("cultureTitle"),
          desc1: t("cultureDesc1"),
          desc2: t("cultureDesc2"),
        }}
      />

      <section id="regions" className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-14">
            <span className="section-label">{t("destinationsLabel")}</span>
            <span className="gold-line mx-auto mt-3" />
            <h2 className="font-display text-3xl md:text-[44px] leading-[1.15] mt-3">{t("destinationsTitle")}</h2>
          </div>

          <MongoliaMap />
        </div>
      </section>

      <ClimateWheel
        label={t("climateLabel")}
        title={t("climateTitle")}
        seasons={[
          { season: t("spring"), months: t("springMonths"), desc: t("springDesc"), image: "/images/season-spring.jpg" },
          { season: t("summer"), months: t("summerMonths"), desc: t("summerDesc"), image: "/images/season-summer.jpg" },
          { season: t("autumn"), months: t("autumnMonths"), desc: t("autumnDesc"), image: "/images/season-autumn.jpg" },
          { season: t("winter"), months: t("winterMonths"), desc: t("winterDesc"), image: "/images/season-winter.jpg" },
        ]}
      />
    </InnerPageLayout>
  );
}
