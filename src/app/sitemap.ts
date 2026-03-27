import { MetadataRoute } from "next";
import { getAllGuides } from "@/lib/guides";

const BASE_URL = "https://thewasatchguide.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const guides = getAllGuides();

  const guideEntries: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${BASE_URL}/guides/${guide.slug}`,
    lastModified: new Date(guide.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...guideEntries,
  ];
}
