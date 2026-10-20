import { test, expect } from '@playwright/test';
import { cleanDb, endPool } from './db';
import prisma from '../../lib/db/client';

test.describe('US6: Guest CRM, Birthdays and Anonymization', () => {
  let guestId: string;

  test.beforeEach(async () => {
    await cleanDb();

    // Setup guest with upcoming birthday in 5 days
    const next5Days = new Date();
    next5Days.setDate(next5Days.getDate() + 5);

    const bday = new Date(1992, next5Days.getMonth(), next5Days.getDate());

    const guest = await prisma.guest.create({
      data: {
        docType: 'DNI',
        docNumber: '33445566',
        firstName: 'Mariana',
        lastName: 'Rios',
        email: 'mariana@example.com',
        phone: '+5491144332211',
        birthDate: bday,
      },
    });
    guestId = guest.id;

    // Create a past reservation for this guest
    const category = await prisma.category.findFirst();
    await prisma.reservation.create({
      data: {
        code: 'IG-CRM-001',
        categoryId: category!.id,
        guestId: guest.id,
        checkIn: new Date('2026-08-01T00:00:00Z'),
        checkOut: new Date('2026-08-05T00:00:00Z'),
        adults: 2,
        children: 0,
        currency: 'ARS',
        subtotal: 100000,
        totalPrice: 100000,
        status: 'FINISHED',
      },
    });
  });

  test.afterAll(async () => {
    await prisma.$disconnect();
    await endPool();
  });

  test('Dashboard displays upcoming birthdays and CRM manages stay history and anonymization', async ({ page }) => {
    // 1. Login
    await page.goto('/adminpanel/login');
    await page.locator('input[type="email"]').fill('admin@iguapeaparts.com');
    await page.locator('input[type="password"]').fill('AdminPassword123!');
    await page.getByRole('button', { name: /iniciar sesión/i }).click();
    await page.waitForURL(/\/adminpanel/);
    await expect(page.locator('h1')).toContainText('Panel de Control PMS');

    // 2. Verify Upcoming Birthdays Widget
    await expect(page.locator('text=Próximos Cumpleañeros (30 días)')).toBeVisible();
    await expect(page.locator('text=Rios, Mariana')).toBeVisible();

    // 3. Go to CRM page
    await page.goto('/adminpanel/guests');
    await expect(page.locator('h1')).toContainText('CRM de Huéspedes');

    // 4. Verify guest is listed
    await expect(page.locator('text=33445566')).toBeVisible();
    await expect(page.locator('text=Rios, Mariana')).toBeVisible();

    // 5. Open Stay History
    await page.click('button:has-text("Historial")');
    await expect(page.locator('text=Historial de Estadías — Mariana Rios')).toBeVisible();
    await expect(page.locator('text=ARS')).toBeVisible();
    await page.click('.fixed button:has-text("Cerrar")');

    // 6. Anonymize Guest
    page.on('dialog', (dialog) => dialog.accept());
    await page.click('button:has-text("Anonimizar")');

    await expect(page.locator('text=Huésped anonimizado exitosamente')).toBeVisible();
    await expect(page.locator('text=ANONIMIZADO, ANONIMIZADO')).toBeVisible();

    // 7. Verify in database that personal fields are masked but financial stays remain
    const updated = await prisma.guest.findUnique({
      where: { id: guestId },
      include: { reservations: true },
    });
    expect(updated?.firstName).toBe('ANONIMIZADO');
    expect(updated?.phone).toBe('0000000000');
    expect(updated?.reservations).toHaveLength(1);
    expect(Number(updated?.reservations[0].totalPrice)).toBe(100000);
  });
});
