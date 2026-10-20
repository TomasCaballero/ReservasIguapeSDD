import 'dotenv/config';
import crypto from 'crypto';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../app/generated/prisma';
import { hashPassword } from '../lib/auth/password';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding initial database data...');

  // 1. Initial Admin User
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@iguapeaparts.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'AdminPassword123!';
  const passwordHash = await hashPassword(adminPassword);

  const admin = await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: { passwordHash },
    create: {
      email: adminEmail,
      name: 'Administrador Iguapé',
      passwordHash,
    },
  });
  console.log(`Admin user seeded: ${admin.email}`);

  // 2. Categories
  const categoriesData = [
    {
      slug: 'classic',
      name: 'Departamento Classic',
      description: 'Amplio departamento de 2 ambientes con vista al jardín y equipamiento completo.',
      capacityAdults: 2,
      capacityChildren: 2,
      maxOccupancy: 4,
      basePriceArs: 85000,
      basePriceUsd: 85,
      displayOrder: 1,
      images: ['/assets/images/aparts/aparts/classic/portada.webp', '/assets/images/aparts/aparts/classic/dormitorio.webp'],
    },
    {
      slug: 'superior',
      name: 'Departamento Superior',
      description: 'Comodidad superior con balcón privado, parrilla individual y espacios amplios.',
      capacityAdults: 4,
      capacityChildren: 2,
      maxOccupancy: 6,
      basePriceArs: 120000,
      basePriceUsd: 120,
      displayOrder: 2,
      images: ['/assets/images/aparts/aparts/superior/portada.webp', '/assets/images/aparts/aparts/superior/living_comedor.webp'],
    },
    {
      slug: 'de-luxe',
      name: 'Departamento De Luxe',
      description: 'Nuestra suite más exclusiva con hidromasaje, terraza panorámica y servicios premium.',
      capacityAdults: 2,
      capacityChildren: 1,
      maxOccupancy: 3,
      basePriceArs: 160000,
      basePriceUsd: 160,
      displayOrder: 3,
      images: ['/assets/images/aparts/aparts/de-luxe/portada.webp', '/assets/images/aparts/aparts/de-luxe/habitacion_01.webp'],
    },
  ];

  const categories = [];
  for (const catData of categoriesData) {
    const cat = await prisma.category.upsert({
      where: { slug: catData.slug },
      update: catData,
      create: catData,
    });
    categories.push(cat);
  }
  console.log(`Seeded ${categories.length} categories`);

  // 3. Units
  const unitsData = [
    { name: 'Dpto 1 - Classic PB', categoryId: categories[0].id },
    { name: 'Dpto 2 - Classic PA', categoryId: categories[0].id },
    { name: 'Dpto 3 - Superior PB', categoryId: categories[1].id },
    { name: 'Dpto 4 - Superior PA', categoryId: categories[1].id },
    { name: 'Dpto 5 - De Luxe PA', categoryId: categories[2].id },
  ];

  for (const unitData of unitsData) {
    const existing = await prisma.unit.findFirst({
      where: { name: unitData.name },
    });

    if (!existing) {
      await prisma.unit.create({
        data: {
          name: unitData.name,
          categoryId: unitData.categoryId,
          icalExportToken: crypto.randomBytes(32).toString('hex'),
          isActive: true,
        },
      });
    }
  }
  console.log('Seeded physical units');

  // 4. Default Discount Rules
  const discountRules = [
    { minNights: 3, discountPercent: 10 },
    { minNights: 5, discountPercent: 15 },
    { minNights: 7, discountPercent: 20 },
  ];

  for (const rule of discountRules) {
    const existing = await prisma.discountRule.findFirst({
      where: { minNights: rule.minNights },
    });
    if (!existing) {
      await prisma.discountRule.create({
        data: {
          minNights: rule.minNights,
          discountPercent: rule.discountPercent,
          isActive: true,
        },
      });
    }
  }
  console.log('Seeded discount rules');

  // 5. System Settings
  const defaultSettings = [
    { key: 'contact_alert_hours', value: '24', description: 'Horas antes de mostrar alerta de contacto pendiente' },
    { key: 'payment_expiration_days', value: '5', description: 'Días tras el envío de datos de pago antes de cancelar' },
    { key: 'receipt_retention_months', value: '3', description: 'Meses de retención de comprobantes bancarios' },
    { key: 'soft_lock_minutes', value: '15', description: 'Minutos de retención de unidad en proceso de reserva' },
    { key: 'whatsapp_number', value: '+5491123456789', description: 'Número de WhatsApp para contacto asistido' },
  ];

  for (const setting of defaultSettings) {
    await prisma.systemSetting.upsert({
      where: { key: setting.key },
      update: { value: setting.value, description: setting.description },
      create: setting,
    });
  }
  console.log('Seeded system settings');
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
