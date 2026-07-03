import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import CmsContent from "@/components/cms/CmsContent";
import { getCmsPage } from "@/lib/cms/page";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function PricingPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("pricing");
  const page = await getCmsPage(locale, "pricing");
  if (!page) notFound();

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={page.name || t("heroTitle")}
        subtitle={page.description || t("heroSubtitle")}
      />
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[900px] px-6 lg:px-0">
          <CmsContent html={page.content || ""} />
        </div>
      </section>
    </InnerPageLayout>
  );
}
