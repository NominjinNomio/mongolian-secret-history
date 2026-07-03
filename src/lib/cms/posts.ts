import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_POSTS, CP_POST } from "@/graphql/cms/queries/post";
import type { CpPostsData, CpPostsVariables, CpPostData, CpPostVariables } from "@/graphql/cms/queries/post";

export async function getCmsPosts(locale: string, limit = 100) {
  const client = await getServerApolloClient();
  const { data } = await client.query<CpPostsData, CpPostsVariables>({
    query: CP_POSTS,
    variables: { language: locale, status: "published", limit },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });
  return data?.cpPosts ?? [];
}

export async function getCmsPost(locale: string, slug: string) {
  const client = await getServerApolloClient();
  const { data } = await client.query<CpPostData, CpPostVariables>({
    query: CP_POST,
    variables: { slug, language: locale },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });
  return data?.cpPost ?? null;
}
