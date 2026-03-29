import { getAllPosts } from "./api";

export interface SearchEntry {
  slug: string;
  href: string;
  title: string;
  description: string;
  excerpt: string;
  type: string;
  area: string | null;
  tags: string[];
}

export function getSearchIndex(): SearchEntry[] {
  return getAllPosts().map((post) => ({
    slug: post.slug,
    href: post.type === "neighborhood-guide" ? `/${post.slug}` : `/blog/${post.slug}`,
    title: post.title,
    description: post.description,
    excerpt: post.excerpt || "",
    type: post.type,
    area: post.area || null,
    tags: post.tags || [],
  }));
}
