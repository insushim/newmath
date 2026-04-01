const ITERATIONS = 100000;
const KEY_LENGTH = 64;
const ALGORITHM = 'SHA-256';

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: ALGORITHM },
    keyMaterial,
    KEY_LENGTH * 8,
  );
  const hashArray = new Uint8Array(bits);
  const saltHex = Array.from(salt)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  const hashHex = Array.from(hashArray)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return `${saltHex}:${hashHex}`;
}

export async function verifyPassword(
  password: string,
  stored: string,
): Promise<boolean> {
  const [saltHex, storedHashHex] = stored.split(':');
  if (!saltHex || !storedHashHex) return false;
  const salt = new Uint8Array(
    saltHex.match(/.{2}/g)!.map((b) => parseInt(b, 16)),
  );
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  );

  // Try both iteration counts (100k for manual signups, 10k for bulk-created students)
  for (const iters of [ITERATIONS, 10000]) {
    const bits = await crypto.subtle.deriveBits(
      { name: 'PBKDF2', salt, iterations: iters, hash: ALGORITHM },
      keyMaterial,
      KEY_LENGTH * 8,
    );
    const hashHex = Array.from(new Uint8Array(bits))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    if (hashHex === storedHashHex) return true;
  }
  return false;
}
