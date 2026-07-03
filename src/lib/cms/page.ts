import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGE } from "@/graphql/cms/queries/page";
import type { CpPageData, CpPageVariables } from "@/graphql/cms/queries/page";

const CMS_ID = process.env.ERXES_CMS_ID;

export async function getCmsPage(locale: string, slug: string) {
  const client = await getServerApolloClient();
  const { data } = await client.query<CpPageData, CpPageVariables>({
    query: CP_PAGE,
    variables: { clientPortalId: CMS_ID, slug, language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });
  return data?.cpCmsPageDetail ?? null;
}
