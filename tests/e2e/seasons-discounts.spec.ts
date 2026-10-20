import { test, expect } from '@playwright/test';
import { cleanDb, endPool } from './db';

test.describe('Seasons & Discounts Management (US3)', () => {
  test.beforeEach(async () => {
    await cleanDb();
  });

  test.afterAll(async () => {
    await endPool();
  });

  test('Admin navigates to seasons-rates and views rules', async ({ page }) => {
    // 1. Login
    await page.goto('/adminpanel/login');
    await page.locator('input[type="email"]').fill('admin@iguapeaparts.com');
    await page.locator('input[type="password"]').fill('AdminPassword123!');
    await page.getByRole('button', { name: /iniciar sesión/i }).click();
    await page.waitForURL(/\/adminpanel/);
    await expect(page.locator('h1')).toContainText('Panel de Control PMS');

    // 2. Go to seasons-rates
    await page.goto('/adminpanel/seasons-rates');
    await expect(page.locator('h1')).toContainText('Tarifas, Temporadas y Descuentos');

    // 3. Switch to discounts tab
    await page.getByRole('button', { name: /reglas de descuento/i }).click();
    await expect(page.locator('text=Nueva Regla de Descuento por Noches')).toBeVisible();
  });
});
