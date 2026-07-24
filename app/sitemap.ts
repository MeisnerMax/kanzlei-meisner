import type { MetadataRoute } from "next";

const routes = [
  "",
  "/mediation",
  "/konfliktfelder",
  "/ablauf-kosten",
  "/stephanie-meisner",
  "/wissen",
  "/kontakt",
  "/impressum",
  "/datenschutz"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.stephaniemeisner.de";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7
  }));
}
