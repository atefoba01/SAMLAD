'use client'

import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState } from 'react'

interface Color {
  hex: string
  name?: string
}

interface PaletteCardProps {
  id: number
  name: string
  theme: string
  colors: string[] // Array of hex codes
  likes: number
  image?: string
  onLike?: () => void
  isLiked?: boolean
}

export function PaletteCard({
  id,
  name,
  theme,
  colors,
  likes,
  image,
  onLike,
  isLiked = false,
}: PaletteCardProps) {
  const [liked, setLiked] = useState(isLiked)

  const handleLike = () => {
    setLiked(!liked)
    onLike?.()
  }

  const colorArray = typeof colors === 'string' ? JSON.parse(colors) : colors

  return (
    <Link href={`/palette/${id}`}>
      <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        {/* Color Swatches */}
        <div className="flex h-24">
          {colorArray.slice(0, 5).map((color: string, idx: number) => (
            <div
              key={idx}
              className="flex-1"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>

        {/* Palette Info */}
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-semibold text-foreground text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{theme}</p>
          </div>

          {/* Color Codes */}
          <div className="grid grid-cols-5 gap-2">
            {colorArray.slice(0, 5).map((color: string, idx: number) => (
              <div
                key={idx}
                className="w-6 h-6 rounded border border-border"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 justify-between items-center pt-2 border-t border-border" onClick={(e) => e.preventDefault()}>
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 transition-colors ${
                liked ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
              <span className="text-sm font-medium">{likes + (liked ? 1 : 0)}</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
