import InnerPageLayout from "@/components/layout/InnerPageLayout";
import PageHero from "@/components/sections/PageHero";
import CmsContent from "@/components/cms/CmsContent";
import { stripHtml } from "@/lib/cms/html";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import type { Page } from "@/graphql/cms/queries/page";

interface CmsPageShellProps {
  page: Page | null;
  namespace: string;
}

export default async function CmsPageShell({ page, namespace }: CmsPageShellProps) {
  if (!page) notFound();

  const t = await getTranslations(namespace);

  return (
    <InnerPageLayout>
      <PageHero
        label={t("heroLabel")}
        title={page.name || t("heroTitle")}
        subtitle={stripHtml(page.description || "") || t("heroSubtitle")}
      />
      <section className="bg-white py-20 lg:py-[120px]">
        <div className="mx-auto max-w-[900px] px-6 lg:px-0">
          <CmsContent html={page.content || ""} />
        </div>
      </section>
    </InnerPageLayout>
  );
}
