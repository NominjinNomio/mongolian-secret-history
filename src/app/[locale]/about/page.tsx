import { getTranslations } from "next-intl/server";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import Image from "@/components/common/Image";
import MongoliaMap from "@/components/about/MongoliaMap";

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

      <section className="bg-background py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted border border-border shadow-lg">
              <Image
                src="about-nomads.jpg"
                alt={t("countryTitle")}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-5">
              <span className="section-label text-gold">{t("countryLabel")}</span>
              <span className="gold-line" />
              <h2 className="font-display text-3xl md:text-[44px] leading-[1.15]">{t("countryTitle")}</h2>
              <p className="text-[17px] leading-[1.7] text-muted-foreground">{t("countryDesc1")}</p>
              <p className="text-[17px] leading-[1.7] text-muted-foreground">{t("countryDesc2")}</p>
            </div>
          </div>
        </div>
      </section>

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

      <section className="bg-background py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-5 order-2 lg:order-1">
              <span className="section-label text-gold">{t("cultureLabel")}</span>
              <span className="gold-line" />
              <h2 className="font-display text-3xl md:text-[44px] leading-[1.15]">{t("cultureTitle")}</h2>
              <p className="text-[17px] leading-[1.7] text-muted-foreground">{t("cultureDesc1")}</p>
              <p className="text-[17px] leading-[1.7] text-muted-foreground">{t("cultureDesc2")}</p>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-muted border border-border shadow-lg order-1 lg:order-2">
              <Image
                src="culture-nomads.jpg"
                alt={t("cultureTitle")}
                fill
                className="object-cover"
              />
            </div>
          </div>
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
