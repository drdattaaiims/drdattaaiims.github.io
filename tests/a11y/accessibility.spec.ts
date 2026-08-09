import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { coreRoutes, stabilizePage } from "../helpers";

for (const [id, pathname] of coreRoutes) {
  test(`${id} has no serious or critical accessibility violations`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await stabilizePage(page, pathname);
    const results = await new AxeBuilder({ page }).analyze();
    const blocking = results.violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical");
    expect(blocking, JSON.stringify(blocking, null, 2)).toEqual([]);
  });
}
