import type { MetadataRoute } from "next";
import { projects } from "./data";
import { siteUrl } from "./site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = ["", "/work", "/about", "/experience", "/resume", "/contact"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...baseRoutes, ...projectRoutes];
}
