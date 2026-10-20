import crypto from 'crypto';
import prisma from '@/lib/db/client';
import { pgPool } from '@/lib/db/client';
import { formatDateISO } from '@/lib/utils/date';

export interface SoftLockInput {
  categoryId: string;
  checkIn: Date | string;
  checkOut: Date | string;
}

export interface SoftLockResult {
  lockToken: string;
  unitId: string;
  expiresAt: string;
  expiresInSeconds: number;
}

/**
 * Clean up expired soft locks by setting status = 'RELEASED'
 */
export async function cleanupExpiredSoftLocks(): Promise<number> {
  const result = await pgPool.query(`
    UPDATE "UnitOccupancy"
    SET status = 'RELEASED'
    WHERE type = 'SOFT_LOCK'
      AND status = 'ACTIVE'
      AND expires_at IS NOT NULL
      AND expires_at <= CURRENT_TIMESTAMP
  `);
  return result.rowCount ?? 0;
}

/**
 * Gets the number of available units for a category in a date range
 */
export async function getCategoryAvailableUnitsCount(
  categoryId: string,
  checkIn: Date | string,
  checkOut: Date | string,
): Promise<{ totalUnits: number; availableUnits: number; availableUnitIds: string[] }> {
  await cleanupExpiredSoftLocks();

  const checkInStr = typeof checkIn === 'string' ? checkIn : formatDateISO(checkIn);
  const checkOutStr = typeof checkOut === 'string' ? checkOut : formatDateISO(checkOut);

  // Units in this category that do not have active overlapping occupancy
  const result = await pgPool.query(
    `
    SELECT u.id
    FROM "Unit" u
    WHERE u.category_id = $1
      AND u.is_active = true
      AND NOT EXISTS (
        SELECT 1
        FROM "UnitOccupancy" o
        WHERE o.unit_id = u.id
          AND o.status = 'ACTIVE'
          AND (o.expires_at IS NULL OR o.expires_at > CURRENT_TIMESTAMP)
          AND daterange(o.check_in, o.check_out, '[)') && daterange($2::date, $3::date, '[)')
      )
    ORDER BY u.name ASC
  `,
    [categoryId, checkInStr, checkOutStr],
  );

  const totalUnitsRes = await pgPool.query(
    `SELECT COUNT(*)::int as count FROM "Unit" WHERE category_id = $1 AND is_active = true`,
    [categoryId],
  );

  const availableUnitIds = result.rows.map((r: { id: string }) => r.id);
  const totalUnits = totalUnitsRes.rows[0]?.count ?? 0;

  return {
    totalUnits,
    availableUnits: availableUnitIds.length,
    availableUnitIds,
  };
}

/**
 * Acquires a 15-minute soft lock on an available physical unit in the requested category.
 * Protected by PostgreSQL exclusion constraint against concurrent overbooking.
 */
export async function acquireSoftLock(input: SoftLockInput): Promise<SoftLockResult> {
  const { categoryId, checkIn, checkOut } = input;
  const checkInStr = typeof checkIn === 'string' ? checkIn : formatDateISO(checkIn);
  const checkOutStr = typeof checkOut === 'string' ? checkOut : formatDateISO(checkOut);

  // Clean expired locks first
  await cleanupExpiredSoftLocks();

  const { availableUnitIds } = await getCategoryAvailableUnitsCount(categoryId, checkInStr, checkOutStr);

  if (availableUnitIds.length === 0) {
    throw new Error('No units available for the selected category and dates');
  }

  const lockToken = crypto.randomBytes(32).toString('hex');

  // Try each available unit until one successfully locks or fails on exclusion constraint
  for (const unitId of availableUnitIds) {
    try {
      const res = await pgPool.query(
        `
        INSERT INTO "UnitOccupancy" (
          id, unit_id, type, check_in, check_out, lock_token, expires_at, status
        ) VALUES (
          gen_random_uuid(), $1, 'SOFT_LOCK', $2::date, $3::date, $4, CURRENT_TIMESTAMP + interval '15 minutes', 'ACTIVE'
        )
        RETURNING expires_at
      `,
        [unitId, checkInStr, checkOutStr, lockToken],
      );

      const expiresAt = res.rows[0].expires_at.toISOString();
      return {
        lockToken,
        unitId,
        expiresAt,
        expiresInSeconds: 900,
      };
    } catch (err: any) {
      // Postgres exclusion violation code is 23P01
      if (err.code === '23P01') {
        // Race condition: another worker took this unit, try next available unit
        continue;
      }
      throw err;
    }
  }

  throw new Error('No units available for the selected category and dates');
}

/**
 * Releases a soft lock manually or converts it
 */
export async function releaseSoftLock(lockToken: string): Promise<boolean> {
  const res = await pgPool.query(
    `
    UPDATE "UnitOccupancy"
    SET status = 'RELEASED'
    WHERE lock_token = $1 AND status = 'ACTIVE'
  `,
    [lockToken],
  );
  return (res.rowCount ?? 0) > 0;
}

/**
 * Validates whether a soft lock token is active and valid
 */
export async function validateSoftLock(lockToken: string): Promise<{
  isValid: boolean;
  unitId?: string;
  checkIn?: Date;
  checkOut?: Date;
  occupancyId?: string;
}> {
  await cleanupExpiredSoftLocks();

  const res = await pgPool.query(
    `
    SELECT id, unit_id, check_in, check_out
    FROM "UnitOccupancy"
    WHERE lock_token = $1
      AND status = 'ACTIVE'
      AND type = 'SOFT_LOCK'
      AND expires_at > CURRENT_TIMESTAMP
  `,
    [lockToken],
  );

  if (res.rows.length === 0) {
    return { isValid: false };
  }

  const row = res.rows[0];
  return {
    isValid: true,
    occupancyId: row.id,
    unitId: row.unit_id,
    checkIn: new Date(row.check_in),
    checkOut: new Date(row.check_out),
  };
}

export const getUnitAvailability = getCategoryAvailableUnitsCount;
