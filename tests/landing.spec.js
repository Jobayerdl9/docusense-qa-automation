import { test, expect } from "@playwright/test";

test("TC-01: Landing page loads successfully", async ({ page }) => {
  await page.goto("https://jobayerdl9.github.io/DocuSense/");
  await expect(page).toHaveTitle(/DocuSense/);
});
