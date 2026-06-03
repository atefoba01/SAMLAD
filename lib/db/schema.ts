import { pgTable, text, timestamp, boolean, integer, varchar } from 'drizzle-orm/pg-core'

// --- Better Auth required tables -------------------------------------------
// Column names are camelCase to match Better Auth's defaults. Do not rename.

export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('emailVerified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  expiresAt: timestamp('expiresAt').notNull(),
  token: text('token').notNull().unique(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  ipAddress: text('ipAddress'),
  userAgent: text('userAgent'),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
})

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  accountId: text('accountId').notNull(),
  providerId: text('providerId').notNull(),
  userId: text('userId')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text('accessToken'),
  refreshToken: text('refreshToken'),
  idToken: text('idToken'),
  accessTokenExpiresAt: timestamp('accessTokenExpiresAt'),
  refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt'),
  scope: text('scope'),
  password: text('password'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresAt').notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt').defaultNow(),
})

// --- App tables ------------------------------------------------------------
// Add your app tables below. Always include a plain `userId` column so queries
// can be scoped per user — the security model depends on this column existing,
// not on a foreign key. Do NOT add a foreign key constraint
// (`.references(() => user.id, ...)`) unless the user explicitly asks for
// foreign keys or referential integrity; FK constraints make iterating on the
// schema harder.
//
// Example:
//
// import { serial } from "drizzle-orm/pg-core"
//
// export const todos = pgTable("todos", {
//   id: serial("id").primaryKey(),
//   userId: text("userId").notNull(),
//   title: text("title").notNull(),
//   completed: boolean("completed").notNull().default(false),
//   createdAt: timestamp("createdAt").notNull().defaultNow(),
// })
//
// If the user asks for foreign keys, add the reference back in:
//   userId: text("userId")
//     .notNull()
//     .references(() => user.id, { onDelete: "cascade" }),

// Ceremo Colors app tables
export const ceremonyTypes = pgTable('ceremony_types', {
  id: integer('id').primaryKey().notNull(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  description: text('description'),
  iconUrl: varchar('icon_url', { length: 255 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const palettes = pgTable('palettes', {
  id: integer('id').primaryKey().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  ceremonyTypeId: integer('ceremony_type_id'),
  colors: text('colors').notNull(), // JSON array stored as text
  themeName: varchar('theme_name', { length: 100 }),
  likesCount: integer('likes_count').default(0),
  viewsCount: integer('views_count').default(0),
  imageUrl: varchar('image_url', { length: 255 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})

export const savedPalettes = pgTable('saved_palettes', {
  id: integer('id').primaryKey().notNull(),
  userId: text('userId').notNull(),
  paletteId: integer('palette_id').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const likedPalettes = pgTable('liked_palettes', {
  id: integer('id').primaryKey().notNull(),
  userId: text('userId').notNull(),
  paletteId: integer('palette_id').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const boards = pgTable('boards', {
  id: integer('id').primaryKey().notNull(),
  userId: text('userId').notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  thumbnailUrl: varchar('thumbnail_url', { length: 255 }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})

export const boardContent = pgTable('board_content', {
  id: integer('id').primaryKey().notNull(),
  boardId: integer('board_id').notNull(),
  paletteId: integer('palette_id').notNull(),
  addedAt: timestamp('added_at').notNull().defaultNow(),
})

export const portfolioItems = pgTable('portfolio_items', {
  id: integer('id').primaryKey().notNull(),
  userId: text('userId'),
  title: varchar('title', { length: 255 }),
  description: text('description'),
  mediaType: varchar('media_type', { length: 50 }),
  mediaUrl: varchar('media_url', { length: 255 }).notNull(),
  thumbnailUrl: varchar('thumbnail_url', { length: 255 }),
  orderIndex: integer('order_index'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})

export const reviews = pgTable('reviews', {
  id: integer('id').primaryKey().notNull(),
  userId: text('userId').notNull(),
  rating: integer('rating'),
  comment: text('comment'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
})

export const mediaFiles = pgTable('media_files', {
  id: integer('id').primaryKey().notNull(),
  userId: text('userId').notNull(),
  fileName: varchar('file_name', { length: 255 }).notNull(),
  fileUrl: varchar('file_url', { length: 255 }).notNull(),
  fileType: varchar('file_type', { length: 50 }),
  fileSize: integer('file_size'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
})
