import { expect, test } from "@playwright/test";
import { stabilizePage, visualRoutes } from "../helpers";

for (const viewport of [
  { width: 390, height: 844, label: "mobile" },
  { width: 1440, height: 900, label: "desktop" },
]) {
  for (const [id, pathname] of visualRoutes) {
    test(`${id} ${viewport.label} visual`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await stabilizePage(page, pathname);
      await expect(page).toHaveScreenshot(`${id}-${viewport.label}.png`, {
        fullPage: true,
        animations: "disabled",
        caret: "hide",
      });
    });
  }
}

test("open mobile navigation visual", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await stabilizePage(page, "/research.html");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page).toHaveScreenshot("mobile-menu-open.png", { animations: "disabled", caret: "hide" });
});
