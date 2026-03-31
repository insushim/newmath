// D1 database client utility
// In Cloudflare Workers runtime, this uses D1 bindings
// In development/build, returns a mock DB

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
  // Try to get D1 binding from Cloudflare runtime
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const env = (globalThis as any).__env__ ?? (process as any).env;
  const db = env?.DB;

  if (db) return db as D1Database;

  // Return mock for build/dev without Cloudflare runtime
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
