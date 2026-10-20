import { Pool } from 'pg';

if (!process.env.DATABASE_URL) {
  process.loadEnvFile?.('.env');
}

let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool || (pool as any).ending || (pool as any).ended) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
    });
  }
  return pool;
}

export async function query<T = any>(text: string, params?: unknown[]): Promise<T[]> {
  const currentPool = getPool();
  const result = await currentPool.query(text, params);
  return result.rows as T[];
}

export async function cleanDb(): Promise<void> {
  const currentPool = getPool();
  await currentPool.query(`
    TRUNCATE TABLE 
      "Payment",
      "Companion",
      "UnitOccupancy",
      "Reservation",
      "AnonymizationRequest",
      "Guest"
    CASCADE;
  `);
}

export async function endPool(): Promise<void> {
  if (pool && !(pool as any).ended && !(pool as any).ending) {
    await pool.end();
    pool = null;
  }
}

export { pool };
