import type { Page } from "@playwright/test";

export const coreRoutes = [
  ["home", "/"],
  ["research", "/research.html"],
  ["clinical", "/clinical-global-health.html"],
  ["publications", "/publications.html"],
  ["talks", "/talks.html"],
  ["awards", "/awards.html"],
  ["journey", "/journey.html"],
  ["cv", "/cv/"],
  ["lab", "/lab.html"],
  ["grants", "/grants.html"],
  ["disclosures", "/disclosures.html"],
  ["media", "/media.html"],
  ["radiology-guide", "/AI-Radiology-Residency-2025.html"],
  ["gemini-article", "/Gemini-3.0-Radiology-2025.html"],
] as const;

export const standardRoutes = coreRoutes.filter(([id]) => id !== "home");
export const visualRoutes = coreRoutes.filter(([id]) => id !== "radiology-guide" && id !== "gemini-article");

export async function stabilizePage(page: Page, pathname: string) {
  await page.emulateMedia({ reducedMotion: "reduce", colorScheme: "light" });
  await page.goto(pathname, { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      Array.from(document.images).map((image) => image.loading === "lazy" && !image.complete ? Promise.resolve() : image.complete ? image.decode().catch(() => undefined) : new Promise<void>((resolve) => {
        image.addEventListener("load", () => resolve(), { once: true });
        image.addEventListener("error", () => resolve(), { once: true });
      })),
    );
  });
}
