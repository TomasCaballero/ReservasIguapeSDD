import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

export const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
];

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export function isReceiptAllowed(mimeType: string, fileSize: number): boolean {
  if (fileSize > MAX_FILE_SIZE) return false;
  return ALLOWED_MIME_TYPES.includes(mimeType.toLowerCase());
}

export function sanitizeReceiptFilename(filename: string): string {
  // Strip paths, keep only extension and safe alphanumeric base
  const ext = path.extname(filename).toLowerCase();
  const basename = path.basename(filename, ext).replace(/[^a-zA-Z0-9_-]/g, '_');
  return `${basename}${ext}`;
}

export function getReceiptsDir(): string {
  return process.env.RECEIPTS_DIR || 'storage/receipts';
}

export async function saveReceiptFile(
  buffer: Buffer,
  originalFilename: string,
): Promise<{ relativePath: string; filename: string }> {
  const receiptsDir = getReceiptsDir();
  await fs.mkdir(receiptsDir, { recursive: true });

  const ext = path.extname(originalFilename).toLowerCase();
  const sanitizedOriginal = sanitizeReceiptFilename(originalFilename);
  const uniqueName = `${Date.now()}-${crypto.randomBytes(8).toString('hex')}${ext}`;
  const absolutePath = path.join(receiptsDir, uniqueName);

  await fs.writeFile(absolutePath, buffer);

  return {
    relativePath: uniqueName,
    filename: sanitizedOriginal,
  };
}

export async function readReceiptFile(relativePath: string): Promise<Buffer | null> {
  const receiptsDir = getReceiptsDir();
  // Prevent path traversal
  const safePath = path.join(receiptsDir, path.basename(relativePath));
  try {
    return await fs.readFile(/*turbopackIgnore: true*/ safePath);
  } catch {
    return null;
  }
}

export async function deleteReceiptFile(relativePath: string): Promise<boolean> {
  const receiptsDir = getReceiptsDir();
  const safePath = path.join(receiptsDir, path.basename(relativePath));
  try {
    await fs.unlink(safePath);
    return true;
  } catch {
    return false;
  }
}
