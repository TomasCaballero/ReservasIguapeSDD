import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function query<T = any>(text: string, params?: unknown[]): Promise<T[]> {
  const result = await pool.query(text, params);
  return result.rows as T[];
}

export async function cleanDb(): Promise<void> {
  // Truncate non-master data tables to leave database clean between tests
  await pool.query(`
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
  await pool.end();
}

export { pool };
