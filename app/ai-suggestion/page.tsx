'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { BottomNav } from '@/components/bottom-nav'
import { Sparkles, Upload } from 'lucide-react'
import { PaletteCard } from '@/components/palette-card'

// Mock suggested palettes
const mockSuggestedPalettes = [
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
  {
    id: 3,
    name: 'Burgundy Luxe',
    theme: 'Burgundy Luxe',
    colors: JSON.stringify(['#5c1f38', '#8b3a57', '#d4857f', '#d9a89d', '#6c3f52']),
    likes: 94,
  },
]

export default function AISuggestionPage() {
  const [ceremonyType, setCeremonyType] = useState('')
  const [mood, setMood] = useState('')
  const [suggestedPalettes, setSuggestedPalettes] = useState<typeof mockSuggestedPalettes>([])
  const [isLoading, setIsLoading] = useState(false)
  const [fabricImage, setFabricImage] = useState<File | null>(null)

  const ceremonyTypes = [
    'Wedding',
    'Engagement',
    'Traditional Wedding',
    'Birthday',
    'Baby Naming',
    'Other Event',
  ]

  const moods = [
    'Romantic',
    'Elegant',
    'Playful',
    'Luxurious',
    'Rustic',
    'Modern',
    'Traditional',
    'Boho',
  ]

  const handleGetSuggestions = async () => {
    if (!ceremonyType) {
      alert('Please select a ceremony type')
      return
    }

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setSuggestedPalettes(mockSuggestedPalettes)
      setIsLoading(false)
    }, 1000)
  }

  const handleFabricUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFabricImage(e.target.files[0])
    }
  }

  return (
    <div className="pb-20 md:pb-0">
      <Header />

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-8">
        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2 flex items-center gap-3">
            <Sparkles className="text-secondary" size={40} />
            Get Color Suggestions
          </h1>
          <p className="text-muted-foreground text-lg">
            Let our AI find the perfect palette for your ceremony
          </p>
        </div>

        {/* Two Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Option 1: Tell us about your ceremony */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Tell us about your ceremony</h2>

              {/* Ceremony Type */}
              <div className="space-y-4 mb-6">
                <label className="block text-sm font-medium text-foreground">
                  What type of ceremony?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {ceremonyTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setCeremonyType(type)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all border ${
                        ceremonyType === type
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background border-border hover:border-primary text-foreground'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mood */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-foreground">
                  What mood are you going for?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {moods.map((m) => (
                    <button
                      key={m}
                      onClick={() => setMood(m)}
                      className={`p-3 rounded-lg text-sm font-medium transition-all border ${
                        mood === m
                          ? 'bg-secondary text-foreground border-secondary'
                          : 'bg-background border-border hover:border-secondary text-foreground'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                onClick={handleGetSuggestions}
                disabled={isLoading}
                className="w-full mt-8"
              >
                {isLoading ? 'Finding palettes...' : 'Get Suggestions'}
              </Button>
            </div>
          </div>

          {/* Option 2: Upload fabric image */}
          <div className="space-y-6">
            <div className="bg-card rounded-lg p-8 border border-border h-full flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Or upload a fabric image
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Upload a photo of your wedding fabric or dress and we&apos;ll match it with color palettes
                </p>

                {/* Upload Area */}
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="mx-auto mb-3 text-muted-foreground" size={32} />
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFabricUpload}
                      className="hidden"
                    />
                    <div className="text-sm">
                      <span className="font-medium text-primary hover:text-primary/80">
                        Click to upload
                      </span>
                      <span className="text-muted-foreground"> or drag and drop</span>
                    </div>
                  </label>
                  <p className="text-xs text-muted-foreground mt-2">
                    PNG, JPG or GIF (max. 10MB)
                  </p>
                </div>

                {fabricImage && (
                  <div className="mt-4 p-3 bg-background rounded-lg">
                    <p className="text-sm text-foreground">
                      ✓ {fabricImage.name}
                    </p>
                  </div>
                )}
              </div>

              <Button className="w-full mt-8" disabled={!fabricImage || isLoading}>
                {isLoading ? 'Analyzing...' : 'Analyze Fabric'}
              </Button>
            </div>
          </div>
        </div>

        {/* Suggested Palettes */}
        {suggestedPalettes.length > 0 && (
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Suggested Palettes for You
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {suggestedPalettes.map((palette) => (
                <PaletteCard
                  key={palette.id}
                  id={palette.id}
                  name={palette.name}
                  theme={palette.theme}
                  colors={palette.colors}
                  likes={palette.likes}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  )
}
