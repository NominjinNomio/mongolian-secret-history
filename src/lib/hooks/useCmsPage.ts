"use client";

import { useQuery } from "@apollo/client/react";
import { useLocale } from "next-intl";
import {
  CP_PAGE,
  type CpPageData,
  type CpPageVariables,
  type Page,
} from "@/graphql/cms/queries/page";

export function useCmsPage(slug: string): Page | null {
  const locale = useLocale();
  const { data } = useQuery<CpPageData, CpPageVariables>(CP_PAGE, {
    variables: { slug, language: locale },
    fetchPolicy: "cache-first",
  });
  return data?.cpCmsPageDetail ?? null;
}
