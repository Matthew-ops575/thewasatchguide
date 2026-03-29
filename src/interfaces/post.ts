import { type Author } from "./author";

export type PostType = "neighborhood-guide" | "vertical" | "blog";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author?: Author;
  coverImage?: string;
  excerpt: string;
  ogImage?: {
    url: string;
  };
  content: string;
  type: PostType;
  area?: string;
  tags: string[];
  published: boolean;
  // Neighborhood guide fields
  parentGuide?: string;
  category?: string;
};
