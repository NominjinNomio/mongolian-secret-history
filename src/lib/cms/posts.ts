import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_POSTS } from "@/graphql/cms/queries/post";
import type { CpPostsData, CpPostsVariables, Post } from "@/graphql/cms/queries/post";

const fallbackPosts: Post[] = [
  {
    _id: "1",
    title: "10 Reasons to Visit Mongolia This Summer",
    slug: "10-reasons-to-visit-mongolia-this-summer",
    excerpt: "Discover why summer is the perfect season to explore Mongolia's endless steppe, ancient culture, and outdoor adventures.",
    content: "",
    publishedDate: "2026-06-15",
    clientPortalId: "",
  },
  {
    _id: "2",
    title: "A Guide to Mongolian Nomadic Culture",
    slug: "guide-to-mongolian-nomadic-culture",
    excerpt: "Learn about ger life, traditional hospitality, herding customs, and festivals that define Mongolian identity.",
    content: "",
    publishedDate: "2026-05-22",
    clientPortalId: "",
  },
  {
    _id: "3",
    title: "What to Pack for a Mongolia Tour",
    slug: "what-to-pack-for-a-mongolia-tour",
    excerpt: "Essential packing tips for Mongolia's variable weather, remote regions, and outdoor activities.",
    content: "",
    publishedDate: "2026-04-10",
    clientPortalId: "",
  },
];

export async function getCmsPosts(locale: string, limit = 100) {
  try {
    const client = await getServerApolloClient();
    const { data } = await client.query<CpPostsData, CpPostsVariables>({
      query: CP_POSTS,
      variables: { language: locale, limit },
      context: { fetchOptions: { next: { revalidate: 60 } } },
    });
    const posts = data?.cpPosts ?? [];
    return posts.length ? posts : fallbackPosts;
  } catch (error) {
    console.error("Failed to fetch CMS posts:", error);
    return fallbackPosts;
  }
}

export async function getCmsPost(locale: string, slug: string) {
  try {
    const posts = await getCmsPosts(locale);
    return posts.find((post) => post.slug === slug) || fallbackPosts[0];
  } catch (error) {
    console.error("Failed to fetch CMS post:", error);
    return fallbackPosts[0];
  }
}
