import crypto from 'crypto';
import { cookies } from 'next/headers';

export const SESSION_COOKIE_NAME = 'iguape_admin_session';
const SESSION_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

export interface SessionPayload {
  userId: string;
  email: string;
  issuedAt: number;
  expiresAt: number;
}

function getSecretKey(): string {
  return process.env.SESSION_SECRET || 'default-session-secret-min-32-chars-long!!';
}

function sign(data: string, secret: string): string {
  return crypto.createHmac('sha256', secret).update(data).digest('base64url');
}

/**
 * Creates a signed session token
 */
export function createSessionToken(userId: string, email: string): string {
  const now = Date.now();
  const payload: SessionPayload = {
    userId,
    email,
    issuedAt: now,
    expiresAt: now + SESSION_DURATION_MS,
  };

  const payloadString = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = sign(payloadString, getSecretKey());
  return `${payloadString}.${signature}`;
}

/**
 * Verifies and decodes a session token
 */
export function verifySessionToken(token: string): SessionPayload | null {
  try {
    const [payloadString, signature] = token.split('.');
    if (!payloadString || !signature) return null;

    const expectedSignature = sign(payloadString, getSecretKey());
    if (signature !== expectedSignature) return null;

    const decoded = Buffer.from(payloadString, 'base64url').toString('utf-8');
    const payload: SessionPayload = JSON.parse(decoded);

    if (Date.now() > payload.expiresAt) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

/**
 * Helper to get current session from Next.js request cookies
 */
export async function getSession(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

/**
 * Helper to set session cookie
 */
export async function setSessionCookie(userId: string, email: string): Promise<string> {
  const token = createSessionToken(userId, email);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_DURATION_MS / 1000,
  });
  return token;
}

/**
 * Helper to clear session cookie
 */
export async function clearSessionCookie(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}
