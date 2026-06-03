import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw new Error('DATABASE_URL is missing')
}

export const pool = new Pool({
  connectionString,
  ssl: process.env.NODE_ENV === 'production'
    ? { rejectUnauthorized: false }
    : false,
})

export const db = drizzle(pool, { schema })