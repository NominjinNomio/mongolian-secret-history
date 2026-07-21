import BlogPageClient from "@/components/blog/BlogPageClient";
import UsefulLinks from "@/components/blog/UsefulLinks";
import type { Post } from "@/graphql/cms/queries/post";

const staticPosts: Post[] = [
  {
    _id: "1",
    clientPortalId: "",
    title: "The Nomadic Way: A Journey Through Mongolian Culture",
    slug: "nomadic-way-journey",
    excerpt: "Discover the traditions, hospitality, and timeless lifestyle that have shaped Mongolia's nomadic heritage for thousands of years.",
    publishedDate: "2024-09-15",
    thumbnail: { name: "", url: "/images/about-nomads.jpg", type: "image", size: 0 },
    categories: [{ _id: "cat1", name: "Culture", slug: "culture" }],
  },
  {
    _id: "2",
    clientPortalId: "",
    title: "Tasting the Steppe: Iconic Mongolian Dishes",
    slug: "tasting-steppe-dishes",
    excerpt: "From buuz to khorkhog, explore the rich flavors and ancient cooking techniques behind Mongolia's most beloved culinary traditions.",
    publishedDate: "2024-08-22",
    thumbnail: { name: "", url: "/images/culture-nomads.jpg", type: "image", size: 0 },
    categories: [{ _id: "cat2", name: "Cuisine", slug: "cuisine" }],
  },
  {
    _id: "3",
    clientPortalId: "",
    title: "Ger Living: Architecture of the Mongolian Steppe",
    slug: "ger-living-architecture",
    excerpt: "Learn how the traditional Mongolian ger is designed to withstand extreme climates while offering a warm, circular family living space.",
    publishedDate: "2024-07-10",
    thumbnail: { name: "", url: "/images/hero-steppe.jpg", type: "image", size: 0 },
    categories: [{ _id: "cat3", name: "Accommodation", slug: "accommodation" }],
  },
  {
    _id: "4",
    clientPortalId: "",
    title: "Horseback Across Mongolia: An Unforgettable Adventure",
    slug: "horseback-adventure",
    excerpt: "Experience the freedom of exploring Mongolia's vast open landscapes on horseback, just as nomads have done for centuries.",
    publishedDate: "2024-06-05",
    thumbnail: { name: "", url: "/images/mongolia-destinations-bg.jpg", type: "image", size: 0 },
    categories: [{ _id: "cat4", name: "Adventure", slug: "adventure" }],
  },
  {
    _id: "5",
    clientPortalId: "",
    title: "Naadam Festival: The Three Games of Men",
    slug: "naadam-festival",
    excerpt: "A celebration of wrestling, horse racing, and archery — Naadam is Mongolia's most colorful and exciting national festival.",
    publishedDate: "2024-05-18",
    thumbnail: { name: "", url: "/images/tour-2.jpg", type: "image", size: 0 },
    categories: [{ _id: "cat1", name: "Culture", slug: "culture" }],
  },
  {
    _id: "6",
    clientPortalId: "",
    title: "Sustainable Travel in Mongolia",
    slug: "sustainable-travel-mongolia",
    excerpt: "How to explore Mongolia responsibly while supporting local communities, preserving nature, and honoring nomadic traditions.",
    publishedDate: "2024-04-30",
    thumbnail: { name: "", url: "/images/tour-2.jpg", type: "image", size: 0 },
    categories: [{ _id: "cat5", name: "Travel", slug: "travel" }],
  },
];

export default function BlogPage() {
  return (
    <>
      <BlogPageClient posts={staticPosts} />
      <UsefulLinks />
    </>
  );
}
