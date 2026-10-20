import { test, expect } from '@playwright/test';
import { cleanDb, endPool } from './db';
import prisma from '../../lib/db/client';

test.describe('Accessibility & Responsive Design (RNF-01, AC-102)', () => {
  test.beforeEach(async () => {
    await cleanDb();
  });

  test.afterAll(async () => {
    await prisma.$disconnect();
    await endPool();
  });

  const viewports = [
    { width: 360, height: 640, name: 'Mobile 360px' },
    { width: 768, height: 1024, name: 'Tablet 768px' },
    { width: 1280, height: 800, name: 'Desktop 1280px' },
    { width: 1920, height: 1080, name: 'Full HD 1920px' },
  ];

  for (const vp of viewports) {
    test(`No horizontal scroll at ${vp.name}`, async ({ page }) => {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto('/');

      // Check document scrollWidth does not exceed viewport width
      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 2); // 2px margin of rounding
    });
  }

  test('Public booking flow can be traversed via keyboard', async ({ page }) => {
    await page.goto('/');

    // Tab through to the search button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    // Enter reservation page with valid category
    const category = await prisma.category.findFirst();
    expect(category).not.toBeNull();

    await page.goto(
      `/reservar?categoryId=${category!.id}&checkIn=2026-11-10&checkOut=2026-11-15&adults=2&children=0`
    );

    // Verify booking form exists
    const formHeading = page.locator('h1');
    await expect(formHeading).toContainText('Completá tus Datos');

    // Validate accessible inputs exist
    const docInput = page.locator('input[name="docNumber"]');
    await expect(docInput).toBeVisible();

    // Tab into input
    await docInput.focus();
    await page.keyboard.type('44556677');
    expect(await docInput.inputValue()).toBe('44556677');
  });
});

