import { db } from "./index"
import { ceremonyTypes, palettes, comments, likes } from "./schema"

async function seed() {
  console.log("Seeding database...")

  // -------------------------
  // Ceremony Types
  // -------------------------
 await db
  .insert(ceremonyTypes)
  .values([
    { name: "Wedding", description: "Elegant wedding styles", iconUrl: "🎊" },
    { name: "Engagement", description: "Romantic themes", iconUrl: "💍" },
    { name: "Birthday", description: "Colorful celebrations", iconUrl: "🎂" },
    { name: "Traditional", description: "Cultural ceremonies", iconUrl: "🏺" },
    { name: "Baby Naming", description: "Family celebrations", iconUrl: "👶" },
  ])
  .onConflictDoNothing()

  // -------------------------
  // Palettes
  // -------------------------
  await db
    .insert(palettes)
    .values([
  {
    name: "Royal Gold",
    description: "Luxury wedding palette",
    colors: JSON.stringify([
  "#FFD700",
  "#FFFFFF",
  "#000000"
]),
    ceremonyTypeId: 1,
    themeName: "Elegant",
    likesCount: 120,
    viewsCount: 500,
    imageUrl: "",
  },

      {
        name: "Soft Pink",
        description: "Romantic engagement palette",
        colors: JSON.stringify(["#FFC0CB", "#FFFFFF", "#F8F8F8"]),
        ceremonyTypeId: 2,
        themeName: "Romantic",
        likesCount: 90,
        viewsCount: 300,
        imageUrl: "",
      },
    ])
    .onConflictDoNothing()

  // -------------------------
  // Comments (NEW TABLE)
  // -------------------------
  await db
    .insert(comments)
    .values([
      {
        userId: "user_1",
        paletteId: 1,
        comment: "This is beautiful!",
      },
      {
        userId: "user_2",
        paletteId: 2,
        comment: "Love this color combo!",
      },
    ])
    .onConflictDoNothing()

  // -------------------------
  // Likes (NEW TABLE)
  // -------------------------
  await db
    .insert(likes)
    .values([
      {
        userId: "user_1",
        paletteId: 1,
      },
    ])
    .onConflictDoNothing()

  console.log("Seed complete")
  process.exit(0)
}

seed()