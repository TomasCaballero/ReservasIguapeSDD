import { test, expect } from '@playwright/test';
import { cleanDb, endPool } from './db';

test.describe('Admin Authentication & Reservation Lifecycle (US2)', () => {
  test.beforeEach(async () => {
    await cleanDb();
  });

  test.afterAll(async () => {
    await endPool();
  });

  test('Admin logs in, views calendar and accesses reservations management', async ({ page }) => {
    // 1. Go to admin login
    await page.goto('/adminpanel/login');
    await expect(page.locator('h1')).toContainText('Panel de Administración');

    // 2. Submit login form
    await page.locator('input[type="email"]').fill('admin@iguapeaparts.com');
    await page.locator('input[type="password"]').fill('AdminPassword123!');
    await page.getByRole('button', { name: /iniciar sesión/i }).click();

    // 3. Verify redirected to adminpanel dashboard
    await page.waitForURL(/\/adminpanel/);
    await expect(page.locator('h1')).toContainText('Panel de Control PMS');

    // 4. Navigate to calendar
    await page.goto('/adminpanel/calendar');
    await expect(page.locator('h1')).toContainText('Mapa de Ocupación');
    await expect(page.locator('text=Dpto 1 - Classic PB')).toBeVisible();

    // 5. Navigate to reservations
    await page.goto('/adminpanel/reservations');
    await expect(page.locator('h1')).toContainText('Gestión de Reservas');
  });
});
