import { getTranslations } from "next-intl/server";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_POSTS, type CpPostsData, type CpPostsVariables, type Post } from "@/graphql/cms/queries/post";
import BlogPageClient from "@/components/blog/BlogPageClient";
import UsefulLinks from "@/components/blog/UsefulLinks";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations("blog");
  const client = await getServerApolloClient();

  let posts: Post[] = [];
  try {
    const { data } = await client.query<CpPostsData, CpPostsVariables>({
      query: CP_POSTS,
      variables: {
        language: locale,
        webId: "6a4794b1d4a990261f448fe6",
        status: "published",
        limit: 100,
        sortField: "publishedDate",
        sortDirection: "desc",
      },
    });
    posts = data?.cpPosts ?? [];
  } catch (error) {
    console.error("Failed to fetch CMS posts:", error);
  }

  return (
    <>
      <BlogPageClient posts={posts} />
      <UsefulLinks />
    </>
  );
}
