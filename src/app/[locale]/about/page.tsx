import { getTranslations } from "next-intl/server";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import MongoliaMap from "@/components/about/MongoliaMap";
import AboutSections from "@/components/about/AboutSections";

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

      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="text-center mb-14">
            <span className="section-label">{t("climateLabel")}</span>
            <span className="gold-line mx-auto mt-3" />
            <h2 className="font-display text-3xl md:text-[44px] leading-[1.15] mt-3">{t("climateTitle")}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { season: t("spring"), months: t("springMonths"), desc: t("springDesc") },
              { season: t("summer"), months: t("summerMonths"), desc: t("summerDesc") },
              { season: t("autumn"), months: t("autumnMonths"), desc: t("autumnDesc") },
              { season: t("winter"), months: t("winterMonths"), desc: t("winterDesc") },
            ].map((item) => (
              <div key={item.season} className="bg-white rounded-2xl border border-border p-8 transition-shadow hover:shadow-[0_10px_15px_-3px_rgba(18,63,174,0.08)]">
                <h3 className="font-display text-2xl text-foreground">{item.season}</h3>
                <p className="text-sm text-gold mt-1">{item.months}</p>
                <p className="text-[15px] text-muted-foreground mt-4 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
