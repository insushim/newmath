// D1 database client utility using OpenNext Cloudflare context
import { getCloudflareContext } from '@opennextjs/cloudflare';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface CloudflareEnv {
    DB: unknown;
  }
}

export interface D1Database {
  prepare(query: string): D1PreparedStatement;
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
  exec(query: string): Promise<D1ExecResult>;
}

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(colName?: string): Promise<T | null>;
  run<T = unknown>(): Promise<D1Result<T>>;
  all<T = unknown>(): Promise<D1Result<T>>;
}

export interface D1Result<T = unknown> {
  results: T[];
  success: boolean;
  meta: { duration: number; changes: number; last_row_id: number };
}

export interface D1ExecResult {
  count: number;
  duration: number;
}

export function getDB(): D1Database {
  try {
    const { env } = getCloudflareContext();
    if (env?.DB) return env.DB as unknown as D1Database;
  } catch {
    // Cloudflare context not available (build/dev without wrangler)
  }

  return createMockDB();
}

function createMockDB(): D1Database {
  const mockStmt: D1PreparedStatement = {
    bind: () => mockStmt,
    first: async () => null,
    run: async () => ({
      results: [],
      success: true,
      meta: { duration: 0, changes: 0, last_row_id: 0 },
    }),
    all: async () => ({
      results: [],
      success: true,
      meta: { duration: 0, changes: 0, last_row_id: 0 },
    }),
  };
  return {
    prepare: () => mockStmt,
    batch: async () => [],
    exec: async () => ({ count: 0, duration: 0 }),
  };
}
