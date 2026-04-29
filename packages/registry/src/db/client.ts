import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL ?? "postgres://postgres:dev@localhost:5432/lance";

const pool = new Pool({ connectionString });

export const db = drizzle(pool);
