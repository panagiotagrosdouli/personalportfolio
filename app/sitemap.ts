import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://panagiotagrosdouli.github.io/personalportfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/research", "/projects", "/publications", "/blog", "/timeline", "/demos", "/cv", "/contact"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date() })),
    ...projects.map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, lastModified: new Date() })),
  ];
}
