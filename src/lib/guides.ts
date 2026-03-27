import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export interface GuideFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  image?: string;
  tags: string[];
  published: boolean;
}

export interface GuideMetadata extends GuideFrontmatter {
  slug: string;
}

export interface Guide extends GuideMetadata {
  contentHtml: string;
}

export function getAllGuides(): GuideMetadata[] {
  const fileNames = fs.readdirSync(contentDirectory);

  const guides = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as GuideFrontmatter),
      };
    })
    .filter((guide) => guide.published)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return guides;
}

export async function getGuideBySlug(slug: string): Promise<Guide | null> {
  const fullPath = path.join(contentDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    contentHtml,
    ...(data as GuideFrontmatter),
  };
}

export function getAllGuideSlugs(): string[] {
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}
