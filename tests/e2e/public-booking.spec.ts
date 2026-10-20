import { test, expect } from '@playwright/test';
import { cleanDb, endPool } from './db';

test.describe('Public Booking Journey (US1)', () => {
  test.beforeEach(async () => {
    await cleanDb();
  });

  test.afterAll(async () => {
    await endPool();
  });

  test('Guest can search availability, enter step 2, see 15-min timer, and confirm booking', async ({ page }) => {
    await page.goto('/');

    // 1. Check title and brand
    await expect(page).toHaveTitle(/Iguapé Aparts/i);
    await expect(page.locator('h1')).toContainText('Viví la Experiencia Iguapé');

    // 2. Submit Search
    const searchButton = page.getByRole('button', { name: /buscar aparts/i });
    await searchButton.click();

    // 3. Verify category catalog appears
    await expect(page.locator('text=Opciones Disponibles')).toBeVisible({ timeout: 10000 });
    const reserveButton = page.getByRole('button', { name: /reservar ahora/i }).first();
    await expect(reserveButton).toBeVisible();

    // 4. Click reserve to enter Step 2
    await reserveButton.click();
    await page.waitForURL(/\/reservar/);

    // 5. Verify 15-minute countdown timer banner is present
    await expect(page.locator('text=Unidad retenida temporalmente')).toBeVisible({ timeout: 10000 });

    // 6. Complete titular form
    await page.locator('input[type="text"]').nth(0).fill('Juan Carlos');
    await page.locator('input[type="text"]').nth(1).fill('Pérez');
    await page.locator('input[type="text"]').nth(2).fill('35123456');
    await page.locator('input[type="email"]').fill('juan.perez@example.com');
    await page.locator('input[type="tel"]').fill('+5491145678901');
    await page.locator('input[type="date"]').nth(0).fill('1990-05-15');

    // 7. Confirm booking
    const confirmButton = page.getByRole('button', { name: /confirmar solicitud de reserva/i });
    await confirmButton.click();

    // 8. Verify confirmation screen with booking code and WhatsApp button
    await expect(page.locator('text=¡Solicitud de Reserva Recibida!')).toBeVisible({ timeout: 10000 });
    await expect(page.locator('text=IG-')).toBeVisible();
    await expect(page.getByRole('link', { name: /continuar por whatsapp/i })).toBeVisible();
  });
});
