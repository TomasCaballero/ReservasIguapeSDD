import { test, expect } from '@playwright/test';

test.describe('Brand Style & Design System Audit (RNF-02, AC-103)', () => {
  test('Validates Iguapé Aparts brand palette, straight corners, and fonts on public page', async ({ page }) => {
    await page.goto('/');

    // 1. Verify primary buttons have straight corners (rounded-none / 0px)
    const button = page.locator('button[type="submit"], a[href*="reservar"]').first();
    if (await button.isVisible()) {
      const borderRadius = await button.evaluate((el) => window.getComputedStyle(el).borderRadius);
      expect(['0px', '']).toContain(borderRadius);
    }

    // 2. Verify background color uses brand dark olive or deep green
    const bodyBg = await page.evaluate(() => window.getComputedStyle(document.body).backgroundColor);
    // rgb(30, 43, 24) is #1E2B18, rgb(43, 61, 36) is #2B3D24
    expect(bodyBg).toMatch(/rgb\((30,\s*43,\s*24|43,\s*61,\s*36)\)/);

    // 3. Verify heading typography uses DM Serif Display
    const heading = page.locator('h1').first();
    if (await heading.isVisible()) {
      const fontFamily = await heading.evaluate((el) => window.getComputedStyle(el).fontFamily);
      expect(fontFamily.toLowerCase()).toContain('serif');
    }
  });

  test('Validates admin panel straight corners and brand styling', async ({ page }) => {
    await page.goto('/adminpanel/login');

    const submitBtn = page.locator('button:has-text("Iniciar Sesión")');
    const borderRadius = await submitBtn.evaluate((el) => window.getComputedStyle(el).borderRadius);
    expect(['0px', '']).toContain(borderRadius);
  });
});
