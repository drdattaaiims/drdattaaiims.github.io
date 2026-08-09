import routesJson from "@/content/routes.json";
import archive from "@/content/pages/archive.json";
import awards from "@/content/pages/awards.json";
import clinical from "@/content/pages/clinical.json";
import cv from "@/content/pages/cv.json";
import disclosures from "@/content/pages/disclosures.json";
import grants from "@/content/pages/grants.json";
import journey from "@/content/pages/journey.json";
import lab from "@/content/pages/lab.json";
import media from "@/content/pages/media.json";
import notFound from "@/content/pages/not-found.json";
import publications from "@/content/pages/publications.json";
import research from "@/content/pages/research.json";
import talks from "@/content/pages/talks.json";

export type IndexingPolicy = "index" | "noindex" | "redirect" | "error";
export type RouteKind = "home" | "standard" | "journey" | "notfound" | "redirect";

export interface PageContent {
  id: string;
  kind: RouteKind;
  pageHeadHtml: string;
  pageBodyHtml: string;
  pageMetaHtml: string;
}

export interface RouteDefinition {
  id: string;
  paths: string[];
  outputPath: string;
  kind: RouteKind;
  contentId?: string;
  navKey?: string;
  parentNavKey?: string;
  title: string;
  description: string;
  canonical: string;
  indexingPolicy: IndexingPolicy;
  priority?: number;
  lastmod?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: string;
    image?: string;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  jsonLd?: Record<string, unknown>[];
  redirectTo?: string;
}

export const routes = routesJson as RouteDefinition[];

export const pageContentById: Record<string, PageContent> = {
  archive: archive as PageContent,
  awards: awards as PageContent,
  clinical: clinical as PageContent,
  cv: cv as PageContent,
  disclosures: disclosures as PageContent,
  grants: grants as PageContent,
  journey: journey as PageContent,
  lab: lab as PageContent,
  media: media as PageContent,
  "not-found": notFound as PageContent,
  publications: publications as PageContent,
  research: research as PageContent,
  talks: talks as PageContent,
};

export function normalizePathname(pathname: string) {
  const pathOnly = pathname.split(/[?#]/, 1)[0] || "/";
  if (pathOnly === "/cv") return "/cv/";
  return pathOnly;
}

export function routeForPath(pathname: string) {
  const normalized = normalizePathname(pathname);
  return routes.find((route) => route.paths.includes(normalized)) ?? routes.find((route) => route.id === "not-found")!;
}

export function routeById(id: string) {
  const route = routes.find((candidate) => candidate.id === id);
  if (!route) throw new Error(`Unknown route id: ${id}`);
  return route;
}

export function contentForRoute(route: RouteDefinition) {
  if (!route.contentId) return undefined;
  const content = pageContentById[route.contentId];
  if (!content) throw new Error(`Missing content for route ${route.id}`);
  return content;
}
