import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../app/generated/prisma';
import { hashPassword } from '../lib/auth/password';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const emailArg = process.argv[2] || process.env.ADMIN_EMAIL || 'admin@iguapeaparts.com';
  const newPasswordArg = process.argv[3] || process.env.ADMIN_PASSWORD;

  if (!newPasswordArg) {
    console.error('Error: Debes proveer una nueva contraseña por argumento o en ADMIN_PASSWORD.');
    process.exit(1);
  }

  const user = await prisma.adminUser.findUnique({
    where: { email: emailArg },
  });

  if (!user) {
    console.error(`Error: No se encontró ningún usuario administrador con email: ${emailArg}`);
    process.exit(1);
  }

  const passwordHash = await hashPassword(newPasswordArg);
  await prisma.adminUser.update({
    where: { id: user.id },
    data: { passwordHash },
  });

  console.log(`Contraseña actualizada con éxito para el usuario administrador: ${emailArg}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (err) => {
    console.error('Error reseteando contraseña:', err.message);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
