import { Post, PostType } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));
}

export function getPostBySlug(slug: string): Post {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export async function getPostBySlugWithHtml(
  slug: string
): Promise<Post & { contentHtml: string }> {
  const post = getPostBySlug(slug);
  const processed = await remark().use(html).process(post.content);
  return { ...post, contentHtml: processed.toString() };
}

// All published posts (including future-dated) — used for static generation
export function getAllPublishedPosts(): Post[] {
  const slugs = getPostSlugs();

  return slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

// Only posts with past/current dates — used for listings, sitemap, navigation
export function getAllPosts(): Post[] {
  const now = new Date();
  return getAllPublishedPosts().filter((post) => new Date(post.date) <= now);
}

export function getPostsByType(type: PostType): Post[] {
  return getAllPosts().filter((post) => post.type === type);
}

export function getPostsByArea(area: string): Post[] {
  return getAllPosts().filter((post) => post.area === area);
}

// All published guide slugs (including future) — for generateStaticParams
export function getGuideSlugs(): string[] {
  return getAllPublishedPosts()
    .filter((post) => post.type === "neighborhood-guide")
    .map((post) => post.slug);
}

// All published post slugs (including future) — for generateStaticParams
export function getAllPostSlugsForBuild(): string[] {
  return getAllPublishedPosts().map((post) => post.slug);
}
