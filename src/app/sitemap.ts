import type { MetadataRoute } from "next";

const base = "https://example.com"; // replace with your deployed URL

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: base, priority: 1 }];
}
