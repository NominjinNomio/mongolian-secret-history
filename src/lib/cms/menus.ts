import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_MENUS } from "@/graphql/cms/queries/menu";
import type { MenuItem, CpMenusData } from "@/graphql/cms/queries/menu";

export async function getCmsMenus(locale: string) {
  const client = await getServerApolloClient();

  const [{ data: headerData }, { data: footerData }] = await Promise.all([
    client.query<CpMenusData>({
      query: CP_MENUS,
      variables: { language: locale, kind: "header" },
      context: { revalidate: 60 },
    }),
    client.query<CpMenusData>({
      query: CP_MENUS,
      variables: { language: locale, kind: "footer" },
      context: { revalidate: 60 },
    }),
  ]);

  const sort = (items: MenuItem[] = []) =>
    items
      .filter((item) => !item.parentId)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return {
    header: sort(headerData?.cpMenus || []),
    footer: sort(footerData?.cpMenus || []),
  };
}
