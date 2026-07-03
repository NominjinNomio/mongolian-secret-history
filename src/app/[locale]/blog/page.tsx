import { getCmsPosts } from "@/lib/cms/posts";
import BlogPageClient from "@/components/blog/BlogPageClient";

interface PageProps {
  params: Promise<{ locale: string } >;
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  const posts = await getCmsPosts(locale);
  return <BlogPageClient posts={posts} />;
}
