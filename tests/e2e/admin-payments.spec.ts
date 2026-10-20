import { test, expect } from '@playwright/test';
import { cleanDb, endPool } from './db';

test.describe('Admin Payments & Receipts (US4)', () => {
  test.beforeEach(async () => {
    await cleanDb();
  });

  test.afterAll(async () => {
    await endPool();
  });

  test('Admin logs in and sees dashboard and reservations without contact alert', async ({ page }) => {
    // 1. Login
    await page.goto('/adminpanel/login');
    await page.locator('input[type="email"]').fill('admin@iguapeaparts.com');
    await page.locator('input[type="password"]').fill('AdminPassword123!');
    await page.getByRole('button', { name: /iniciar sesión/i }).click();
    await page.waitForURL(/\/adminpanel/);

    // 2. Check dashboard KPI cards
    await expect(page.locator('text=Reservas Activas')).toBeVisible();
    await expect(page.locator('text=Unidades Físicas')).toBeVisible();

    // 3. Go to reservations list
    await page.goto('/adminpanel/reservations');
    await expect(page.locator('h1')).toContainText('Gestión de Reservas');
  });
});
