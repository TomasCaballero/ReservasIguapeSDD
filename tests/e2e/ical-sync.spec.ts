import { test, expect } from '@playwright/test';
import { cleanDb, endPool } from './db';
import prisma from '../../lib/db/client';

test.describe('US5: iCal Multi-Channel Sync and Privacy', () => {
  let unitId: string;
  let validToken: string;

  test.beforeEach(async () => {
    await cleanDb();
    const unit = await prisma.unit.findFirst();
    expect(unit).not.toBeNull();
    unitId = unit!.id;
    validToken = unit!.icalExportToken;
  });

  test.afterAll(async () => {
    await prisma.$disconnect();
    await endPool();
  });

  test('iCal export feed returns 404 without valid token and 200 text/calendar with token', async ({ request }) => {
    // 1. Missing token -> 404
    const resNoToken = await request.get(`/api/ical/${unitId}/feed.ics`);
    expect(resNoToken.status()).toBe(404);

    // 2. Invalid token -> 404 (RNF-06, AC-108)
    const resBadToken = await request.get(`/api/ical/${unitId}/feed.ics?token=WRONG_TOKEN`);
    expect(resBadToken.status()).toBe(404);

    // 3. Valid token -> 200 text/calendar
    const resValid = await request.get(`/api/ical/${unitId}/feed.ics?token=${validToken}`);
    expect(resValid.status()).toBe(200);
    const contentType = resValid.headers()['content-type'] || '';
    expect(contentType).toContain('text/calendar');

    const body = await resValid.text();
    expect(body).toContain('BEGIN:VCALENDAR');
    expect(body).toContain('END:VCALENDAR');
    // Ensure no sensitive terms
    expect(body).not.toContain('email');
    expect(body).not.toContain('dni');
  });

  test('Admin categories-units page displays iCal modal and triggers manual sync', async ({ page }) => {
    // Login as admin
    await page.goto('/adminpanel/login');
    await page.fill('input[type="email"]', 'admin@iguapeaparts.com');
    await page.fill('input[type="password"]', 'Admin1234!');
    await page.click('button[type="submit"]');
    await page.waitForURL('/adminpanel');

    // Go to categories & units
    await page.goto('/adminpanel/categories-units');
    await expect(page.locator('h1')).toContainText('Inventario: Categorías y Unidades');

    // Click iCal button on first unit
    const icalButton = page.locator('button:has-text("iCal")').first();
    await expect(icalButton).toBeVisible();
    await icalButton.click();

    // Verify modal is visible
    await expect(page.locator('h3:has-text("Sincronización iCal")')).toBeVisible();
    await expect(page.locator('text=URL de Exportación')).toBeVisible();

    // Click "Sincronizar ahora"
    const syncButton = page.locator('button:has-text("Sincronizar ahora")');
    await expect(syncButton).toBeVisible();
    await syncButton.click();

    // Verify sync result feedback
    await expect(page.locator('text=Sincronización completada')).toBeVisible();
  });
});
