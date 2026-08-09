import { expect, test } from "@playwright/test";
import { coreRoutes, stabilizePage, standardRoutes } from "../helpers";

const viewports = [
  { width: 320, height: 800 },
  { width: 390, height: 844 },
  { width: 768, height: 1024 },
  { width: 899, height: 900 },
  { width: 900, height: 900 },
  { width: 1024, height: 768 },
  { width: 1440, height: 900 },
  { width: 1920, height: 1080 },
];

for (const viewport of viewports) {
  test(`shared geometry and no overflow at ${viewport.width}px`, async ({ page }) => {
    await page.setViewportSize(viewport);
    const standardTitleBoxes = [];

    for (const [id, pathname] of coreRoutes) {
      await stabilizePage(page, pathname);
      const geometry = await page.evaluate(() => {
        const header = document.querySelector<HTMLElement>('[data-ui="site-header"]')!;
        const shell = document.querySelector<HTMLElement>('[data-ui="page-shell"]')!;
        const footer = document.querySelector<HTMLElement>('[data-ui="site-footer"]')!;
        const title = document.querySelector<HTMLElement>('[data-ui="page-title"] h1, h1[data-ui="page-title"]')!;
        return {
          header: header.getBoundingClientRect().toJSON(),
          shell: shell.getBoundingClientRect().toJSON(),
          footer: footer.getBoundingClientRect().toJSON(),
          title: title.getBoundingClientRect().toJSON(),
          overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
          bodyBottom: document.body.getBoundingClientRect().bottom,
          viewportHeight: window.innerHeight,
        };
      });
      expect(geometry.header.height, `${id} header`).toBeGreaterThanOrEqual(55);
      expect(geometry.header.height, `${id} header`).toBeLessThanOrEqual(57);
      expect(geometry.overflow, `${id} horizontal overflow`).toBeLessThanOrEqual(0);
      expect(geometry.footer.bottom, `${id} footer/body alignment`).toBeLessThanOrEqual(geometry.bodyBottom + 1);
      if (id !== "home") standardTitleBoxes.push({ id, box: geometry.title });
    }

    const first = standardTitleBoxes[0].box;
    for (const candidate of standardTitleBoxes.slice(1)) {
      expect(Math.abs(candidate.box.x - first.x), `${candidate.id} H1 x`).toBeLessThanOrEqual(2);
      expect(Math.abs(candidate.box.y - first.y), `${candidate.id} H1 y`).toBeLessThanOrEqual(2);
    }
  });
}

test("mobile menu is opaque, accessible, closable, and locks the page", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await stabilizePage(page, "/research.html");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await toggle.click();
  await expect(page.getByRole("button", { name: "Close menu" }).first()).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator(".mobile-nav")).toHaveCSS("background-color", "rgb(250, 250, 248)");
  await expect(page.locator('[data-ui="page-shell"]')).toHaveJSProperty("inert", true);
  await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("button", { name: "Open menu" })).toHaveAttribute("aria-expanded", "false");
});

test("mobile and desktop navigation change at the same 900px breakpoint", async ({ page }) => {
  await page.setViewportSize({ width: 899, height: 900 });
  await stabilizePage(page, "/research.html");
  await expect(page.locator(".menu-toggle")).toBeVisible();
  await expect(page.locator(".desktop-nav")).toBeHidden();
  await page.setViewportSize({ width: 900, height: 900 });
  await expect(page.locator(".menu-toggle")).toBeHidden();
  await expect(page.locator(".desktop-nav")).toBeVisible();
});

test("contact fragment remains visible below the fixed header", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await stabilizePage(page, "/#contact");
  const position = await page.locator("#contact").evaluate((element) => element.getBoundingClientRect().top);
  const targetHeights = await page.locator('[data-testid^="button-contact-"]').evaluateAll((elements) => elements.map((element) => element.getBoundingClientRect().height));
  expect(position).toBeGreaterThanOrEqual(56);
  expect(position).toBeLessThan(844);
  expect(Math.min(...targetHeights)).toBeGreaterThanOrEqual(44);
});

for (const [id, pathname] of standardRoutes) {
  test(`${id} uses the constrained reading measure`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await stabilizePage(page, pathname);
    const widths = await page.locator(".page-body > p, .page-body > ul, .page-body > ol").evaluateAll((elements) => elements.map((element) => element.getBoundingClientRect().width));
    expect(Math.max(0, ...widths), `${id} reading measure`).toBeLessThanOrEqual(700);
  });
}
