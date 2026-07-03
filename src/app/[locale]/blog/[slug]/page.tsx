import { notFound } from "next/navigation";
import { getCmsPost, getCmsPosts } from "@/lib/cms/posts";
import BlogDetailClient from "@/components/blog/BlogDetailClient";

interface PageProps {
  params: Promise<{ locale: string; slug: string } >;
}

export async function generateStaticParams() {
  const posts = await getCmsPosts("en");
  return posts.map((post) => ({ locale: "en", slug: post.slug || "" }));
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const post = await getCmsPost(locale, slug);
  if (!post) notFound();

  const allPosts = await getCmsPosts(locale);
  const relatedPosts = allPosts.filter((p) => p._id !== post._id).slice(0, 3);

  return <BlogDetailClient post={post} relatedPosts={relatedPosts} />;
}
