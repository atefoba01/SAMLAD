# SAMLAD Fashion Homes - Database Documentation

## Database Overview

Your SAMLAD Fashion Homes application uses **Neon PostgreSQL** as its database. Neon is a serverless PostgreSQL platform that provides a scalable, reliable database solution for modern web applications.

---

## Database Type & Provider

- **Database Type**: PostgreSQL (Relational Database)
- **Provider**: Neon (Serverless PostgreSQL)
- **Status**: Connected ✅
- **ORM Used**: Drizzle ORM (with TypeScript support)
- **Authentication Framework**: Better Auth 1.6.12 (Currently Disabled - Frontend-Only Mode)

---

## Database Tables & Schema

Your database has **16 tables** organized in two schemas:

### 1. Authentication Schema (neon_auth)

These tables are created by Better Auth for user authentication and authorization:

#### `user` Table
Stores user account information.
- **Columns**: id, email, name, emailVerified, image, role, banned, banReason, banExpires, createdAt, updatedAt
- **Purpose**: User profiles and authentication
- **RLS**: Disabled

#### `account` Table
Stores OAuth and provider account information.
- **Columns**: id, userId, accountId, providerId, accessToken, refreshToken, idToken, accessTokenExpiresAt, refreshTokenExpiresAt, scope, password, createdAt, updatedAt
- **Purpose**: Third-party account integration
- **RLS**: Disabled

#### `session` Table
Manages user sessions.
- **Columns**: id, userId, token, expiresAt, ipAddress, userAgent, activeOrganizationId, impersonatedBy, createdAt, updatedAt
- **Purpose**: Session management and tracking
- **RLS**: Disabled

#### `verification` Table
Stores verification tokens for emails, passwords, etc.
- **Columns**: id, identifier, value, expiresAt, createdAt, updatedAt
- **Purpose**: Email verification, password resets
- **RLS**: Disabled

#### `organization` Table
Stores organization/team information.
- **Columns**: id, name, slug, logo, metadata, createdAt
- **Purpose**: Multi-organization support
- **RLS**: Disabled

#### `member` Table
Links users to organizations with roles.
- **Columns**: id, userId, organizationId, role, createdAt
- **Purpose**: Organization membership management
- **RLS**: Disabled

#### `invitation` Table
Stores invitations to organizations.
- **Columns**: id, email, inviterId, organizationId, role, status, expiresAt, createdAt
- **Purpose**: Team invitations
- **RLS**: Disabled

#### `jwks` Table
Stores JWT key sets for secure token signing.
- **Columns**: id, publicKey, privateKey, expiresAt, createdAt
- **Purpose**: JWT token management
- **RLS**: Disabled

#### `project_config` Table
Stores project configuration settings.
- **Columns**: id, name, endpoint_id, email_and_password, email_provider, social_providers, plugin_configs, webhook_config, trusted_origins, allow_localhost, created_at, updated_at
- **Purpose**: Application configuration
- **RLS**: Disabled

---

### 2. Public Schema (public)

These tables store your application data:

#### `palettes` Table
Stores color palette designs.
- **Columns**: id, name, colors, description, image_url, ceremony_type_id, theme_name, likes_count, views_count, created_at, updated_at
- **Purpose**: Store color palette designs for different ceremonies
- **RLS**: Disabled

#### `ceremony_types` Table
Categories of ceremonies (weddings, engagements, etc.).
- **Columns**: id, name, description, icon_url, created_at
- **Purpose**: Categorize designs by ceremony type
- **RLS**: Disabled

#### `saved_palettes` Table
User's saved color palettes (favorites).
- **Columns**: id, userid, palette_id, created_at
- **Purpose**: Track user's favorite palettes
- **RLS**: Disabled

#### `boards` Table
Custom collections/boards created by users.
- **Columns**: id, userid, name, description, thumbnail_url, created_at, updated_at
- **Purpose**: Organize palettes into custom boards
- **RLS**: Disabled

#### `portfolio_items` Table
Gallery/portfolio items showing design work.
- **Columns**: id, userid, title, description, media_url, media_type, thumbnail_url, order_index, created_at
- **Purpose**: Display clothing designs in portfolio
- **RLS**: Disabled

#### `media_files` Table
User-uploaded media files.
- **Columns**: id, userid, file_name, file_url, file_type, file_size, created_at
- **Purpose**: Store uploaded fashion design images
- **RLS**: Disabled

#### `reviews` Table
Customer reviews and ratings.
- **Columns**: id, userid, rating, comment, created_at, updated_at
- **Purpose**: Customer testimonials and feedback
- **RLS**: Disabled

---

## Database Credentials & Connection

### Environment Variables Required

```env
# PostgreSQL Connection String
DATABASE_URL=postgresql://[user]:[password]@[host]:[port]/[database]

# Better Auth (if re-enabling authentication)
BETTER_AUTH_SECRET=[your-secret-key]
BETTER_AUTH_URL=http://localhost:3000  # or your production URL
```

### Finding Your Credentials

1. Go to **Neon Console** (https://console.neon.tech)
2. Select your project
3. Click "Connection Details"
4. Copy the **Connection String**
5. Add to `.env.local` file

---

## Current Setup Status

### Active Features
✅ Neon PostgreSQL Database
✅ 16 Database Tables
✅ Better Auth Tables (Pre-configured)
✅ Portfolio/Gallery Tables
✅ Saved Palettes Tables

### Disabled Features (Frontend-Only Mode)
❌ Authentication (Better Auth is commented out)
❌ User Sessions
❌ Database Queries (not needed for current frontend-only version)

### How to Re-Enable Database Authentication

If you want to enable the backend authentication later:

1. Uncomment the Better Auth code in `/lib/auth.ts`
2. Create `/lib/db.ts` with PostgreSQL connection:

```typescript
import { Pool } from 'pg'

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})
```

3. Set environment variables in your `.env.local`:
```env
DATABASE_URL=your-neon-connection-string
BETTER_AUTH_SECRET=your-secret-key
```

4. Restart the dev server

---

## API & Query Examples (When Backend is Enabled)

### Example 1: Query User Data
```typescript
const user = await db
  .selectFrom('user')
  .where('id', '=', userId)
  .selectAll()
  .executeTakeFirst()
```

### Example 2: Save a Palette
```typescript
const savedPalette = await db
  .insertInto('saved_palettes')
  .values({
    userid: userId,
    palette_id: paletteId,
    created_at: new Date(),
  })
  .executeTakeFirst()
```

### Example 3: Get User's Boards
```typescript
const boards = await db
  .selectFrom('boards')
  .where('userid', '=', userId)
  .selectAll()
  .execute()
```

---

## Database Performance & Optimization

### Current Configuration
- **Connection Type**: Serverless
- **Auto-scaling**: Enabled (Neon's built-in feature)
- **Backups**: Automatic (Neon manages this)
- **Row Level Security**: Disabled

### Recommendations When Backend is Enabled

1. **Enable RLS (Row Level Security)** for data privacy:
   - Each user should only see their own data
   - Implement policies in Neon console

2. **Add Indexes** for frequently queried columns:
   ```sql
   CREATE INDEX idx_saved_palettes_userid ON saved_palettes(userid);
   CREATE INDEX idx_boards_userid ON boards(userid);
   ```

3. **Use Connection Pooling**: Neon handles this automatically with PgBouncer

---

## Database Limits & Quotas (Neon Free Plan)

- **Storage**: 3 GB included
- **Project Branches**: 1 free branch
- **Compute Hours**: Pay-as-you-go
- **Auto-suspend**: After 5 minutes of inactivity (saves compute time)

---

## Backing Up Your Data

### Automatic Backups
Neon automatically backs up your database. No action needed.

### Manual Export
1. Go to Neon Console
2. Select your database
3. Use SQL dump tools to export data:

```bash
pg_dump --conn-limit=1 $DATABASE_URL > backup.sql
```

---

## Migrating or Resetting Database

### To Reset All Tables
```bash
# Delete all data (careful with this!)
psql $DATABASE_URL -c "DROP SCHEMA public CASCADE; CREATE SCHEMA public;"
```

### To Add New Tables
Use Drizzle ORM migrations or raw SQL commands in Neon console.

---

## Support & Resources

- **Neon Documentation**: https://neon.tech/docs
- **PostgreSQL Docs**: https://www.postgresql.org/docs/
- **Drizzle ORM Docs**: https://orm.drizzle.team
- **Better Auth Docs**: https://www.better-auth.com

---

## Current Implementation Notes

1. **Frontend-Only Mode**: The application currently runs without a backend database connection. All features are mock data based.

2. **When Ready to Enable**: Uncomment the Better Auth code and create proper database connection in `/lib/db.ts`

3. **WhatsApp Integration**: All contact features redirect to WhatsApp (no database needed for current version)

4. **Gallery Images**: Currently using generated/local images from `/public/gallery/` directory

---

## Next Steps to Fully Enable Database

1. ✅ Database is already set up (Neon)
2. ⏳ Create `/lib/db.ts` file with PostgreSQL connection
3. ⏳ Uncomment Better Auth in `/lib/auth.ts`
4. ⏳ Create API routes for database operations
5. ⏳ Connect frontend forms to backend APIs
6. ⏳ Implement authentication flows
7. ⏳ Add data validation and security

Would you like help enabling any of these features?
