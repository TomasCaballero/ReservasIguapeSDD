/**
 * Environment variables loader and validator
 * Respects Ponytail Principle (minimal, robust, zero extra dependencies)
 */

export interface EnvConfig {
  DATABASE_URL: string;
  DIRECT_URL: string;
  SESSION_SECRET: string;
  CRON_SECRET: string;
  ADMIN_EMAIL: string;
  ADMIN_PASSWORD?: string;
  RECEIPTS_DIR: string;
}

export function getEnv(): EnvConfig {
  const DATABASE_URL = process.env.DATABASE_URL;
  if (!DATABASE_URL) {
    throw new Error('Missing required environment variable: DATABASE_URL');
  }

  const DIRECT_URL = process.env.DIRECT_URL || DATABASE_URL;
  const SESSION_SECRET = process.env.SESSION_SECRET || 'default-session-secret-min-32-chars-long!!';
  const CRON_SECRET = process.env.CRON_SECRET || 'default-cron-secret-change-in-prod';
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@iguapeaparts.com';
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
  const RECEIPTS_DIR = process.env.RECEIPTS_DIR || 'storage/receipts';

  return {
    DATABASE_URL,
    DIRECT_URL,
    SESSION_SECRET,
    CRON_SECRET,
    ADMIN_EMAIL,
    ADMIN_PASSWORD,
    RECEIPTS_DIR,
  };
}

export const env = getEnv();
