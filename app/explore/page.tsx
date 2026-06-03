import { db } from '@/lib/db'
import { palettes, ceremonyTypes } from '@/lib/db/schema'
import { PaletteCard } from '@/components/palette-card'
import { Header } from '@/components/header'
import { BottomNav } from '@/components/bottom-nav'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Explore Palettes - Ceremo Colors',
  description: 'Discover stunning color palettes for your ceremony',
}

async function getCeremonyTypes() {
  return await db.select().from(ceremonyTypes).limit(6)
}

async function getPalettes() {
  return await db.select().from(palettes).limit(12)
}

export default async function ExplorePage() {
  const types = await getCeremonyTypes()
  const paletteList = await getPalettes()

  return (
    <div className="pb-20 md:pb-0">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
              Explore Palettes
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover color combinations for your perfect moment
            </p>
          </div>
          <Link href="/ai-suggestion">
            <Button size="lg" className="w-full md:w-auto">
              <Sparkles className="mr-2" size={20} />
              Get AI Suggestions
            </Button>
          </Link>
        </div>

        {/* Ceremony Type Filters */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Browse by Ceremony Type</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {types.map((type) => (
              <button
                key={type.id}
                className="p-4 rounded-lg bg-card hover:bg-muted border border-border hover:border-primary transition-all text-center"
              >
                <div className="text-2xl mb-2">{type.iconUrl ? '🎊' : '💍'}</div>
                <p className="text-sm font-medium text-foreground line-clamp-2">{type.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Palettes Grid */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-6">Trending Palettes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paletteList.map((palette) => (
              <PaletteCard
                key={palette.id}
                id={palette.id}
                name={palette.name}
                theme={palette.themeName || 'Elegant'}
                colors={palette.colors}
                likes={palette.likesCount || 0}
                image={palette.imageUrl}
              />
            ))}
          </div>

          {paletteList.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No palettes available yet</p>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
