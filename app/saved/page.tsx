'use client'

import { Header } from '@/components/header'
import { BottomNav } from '@/components/bottom-nav'
import { PaletteCard } from '@/components/palette-card'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import Link from 'next/link'

// Mock saved palettes
const mockSavedPalettes = [
  {
    id: 1,
    name: 'Royal Elegance',
    theme: 'Royal Elegance',
    colors: JSON.stringify(['#3d1047', '#c4a85c', '#e8bba8', '#d9cfc0', '#2d5c3f']),
    likes: 156,
  },
  {
    id: 2,
    name: 'Sage & Gold',
    theme: 'Sage & Gold',
    colors: JSON.stringify(['#2d4a3c', '#c9a961', '#d4a574', '#c2b5a0', '#3d5a4c']),
    likes: 82,
  },
]

export default function SavedPage() {

  return (
    <div className="pb-20 md:pb-0">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2 flex items-center gap-3">
              <Heart className="text-primary" size={40} fill="currentColor" />
              Saved Palettes
            </h1>
            <p className="text-muted-foreground text-lg">
              Your collection of favorite color combinations
            </p>
          </div>
        </div>

        {/* Palettes Grid */}
        {mockSavedPalettes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockSavedPalettes.map((palette) => (
              <PaletteCard
                key={palette.id}
                id={palette.id}
                name={palette.name}
                theme={palette.theme}
                colors={palette.colors}
                likes={palette.likes}
                isLiked={true}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="mx-auto mb-4 text-muted-foreground" size={48} />
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              No saved palettes yet
            </h2>
            <p className="text-muted-foreground mb-6">
              Start exploring and save your favorite color combinations
            </p>
            <Link href="/explore">
              <Button>Explore Palettes</Button>
            </Link>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  )
}
