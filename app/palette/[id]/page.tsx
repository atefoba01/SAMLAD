'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { BottomNav } from '@/components/bottom-nav'
import { Heart, Download, Share2, Plus } from 'lucide-react'

// Mock palette data - in production, fetch from API
const mockPalettes: Record<number, any> = {
  1: {
    id: 1,
    name: 'Royal Elegance',
    description: 'A rich and luxurious color combination for royal celebrations',
    theme: 'Royal Elegance',
    colors: ['#3d1047', '#c4a85c', '#e8bba8', '#d9cfc0', '#2d5c3f'],
    likes: 156,
    views: 1240,
  },
}

export default function PaletteDetailPage() {
  const params = useParams()
  const router = useRouter()
  const paletteId = Number(params.id)
  const palette = mockPalettes[paletteId]
  const [isSaved, setIsSaved] = useState(false)

  if (!palette) {
    return (
      <div className="pb-20 md:pb-0">
        <Header />
        <main className="max-w-4xl mx-auto px-4 md:px-8 py-8">
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-foreground mb-2">Palette not found</h2>
            <Button onClick={() => router.push('/explore')}>Back to Explore</Button>
          </div>
        </main>
        <BottomNav />
      </div>
    )
  }

  const handleSave = () => {
    setIsSaved(!isSaved)
  }

  const handleDownload = () => {
    const colorsCsv = palette.colors.map((color: string) => color).join(',')
    const element = document.createElement('a')
    element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(colorsCsv)}`)
    element.setAttribute('download', `${palette.name}-palette.txt`)
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="pb-20 md:pb-0">
      <Header />

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="text-primary hover:text-primary/80 font-medium mb-6 flex items-center gap-2"
        >
          ← Back
        </button>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Color Display */}
          <div className="space-y-6">
            {/* Large Color Swatches */}
            <div className="grid grid-cols-5 gap-2 h-32">
              {palette.colors.map((color: string, idx: number) => (
                <div
                  key={idx}
                  className="rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer group relative"
                  style={{ backgroundColor: color }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center">
                    <span className="text-white font-mono text-xs opacity-0 group-hover:opacity-100">
                      {color}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Color Codes Table */}
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-4">Color Codes</h3>
              <div className="space-y-3">
                {palette.colors.map((color: string, idx: number) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-background rounded">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded border border-border"
                        style={{ backgroundColor: color }}
                      />
                      <span className="font-mono text-sm text-foreground">{color}</span>
                    </div>
                    <button
                      onClick={() => navigator.clipboard.writeText(color)}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Palette Info */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
                {palette.name}
              </h1>
              <p className="text-lg text-muted-foreground">{palette.description}</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary">{palette.likes}</div>
                <div className="text-sm text-muted-foreground">Likes</div>
              </div>
              <div className="p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-secondary">{palette.views}</div>
                <div className="text-sm text-muted-foreground">Views</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleSave}
                className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  isSaved
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground hover:bg-primary/10'
                }`}
              >
                <Heart size={20} fill={isSaved ? 'currentColor' : 'none'} />
                {isSaved ? 'Saved' : 'Save Palette'}
              </button>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="w-full" onClick={handleDownload}>
                  <Download size={20} className="mr-2" />
                  Download
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 size={20} className="mr-2" />
                  Share
                </Button>
              </div>

              <Button variant="outline" className="w-full">
                <Plus size={20} className="mr-2" />
                Add to Board
              </Button>
              </div>

            {/* Premium CTA */}
            <div className="p-6 bg-gradient-to-br from-secondary/20 to-muted/20 rounded-lg border border-secondary/30">
              <h3 className="font-semibold text-foreground mb-2">Unlock Premium</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Get access to exclusive palettes, AI fabric matching, and portfolio uploads
              </p>
              <Button className="w-full" size="sm">
                Upgrade to Premium
              </Button>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
