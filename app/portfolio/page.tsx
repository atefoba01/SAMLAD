'use client'

import { Header } from '@/components/header'
import { BottomNav } from '@/components/bottom-nav'
import { Button } from '@/components/ui/button'
import { Upload, X, Play, Image as ImageIcon } from 'lucide-react'
import { useState } from 'react'

// Mock portfolio data
const mockPortfolioItems = [
  {
    id: 1,
    title: 'Royal Wedding Ceremony',
    description: 'An elegant wedding with deep purple and gold accents',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
  },
  {
    id: 2,
    title: 'Engagement Party Setup',
    description: 'Beautiful engagement celebration with sage green palette',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1530143557887-a26b764b1f12?w=400&h=300&fit=crop',
    url: 'https://images.unsplash.com/photo-1530143557887-a26b764b1f12?w=800',
  },
  {
    id: 3,
    title: 'Traditional Wedding Highlights',
    description: 'Traditional ceremony in burgundy and gold tones',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    id: 4,
    title: 'Birthday Party Colors',
    description: 'Vibrant birthday celebration with warm terracotta tones',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&h=300&fit=crop',
    url: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800',
  },
  {
    id: 5,
    title: 'Baby Naming Ceremony',
    description: 'Soft pastels and gentle colors for a baby celebration',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=300&fit=crop',
    url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800',
  },
  {
    id: 6,
    title: 'Anniversary Celebration',
    description: 'Romantic anniversary with gold and blush colors',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1519995183386-439db59c7e28?w=400&h=300&fit=crop',
    url: 'https://images.unsplash.com/photo-1519995183386-439db59c7e28?w=800',
  },
]

export default function PortfolioPage() {
  const [items, setItems] = useState(mockPortfolioItems)
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [selectedItem, setSelectedItem] = useState<typeof mockPortfolioItems[0] | null>(null)

  const handleUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setShowUploadForm(false)
  }

  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 px-4 md:px-8 py-8 max-w-6xl mx-auto w-full">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
              Portfolio Gallery
            </h1>
            <p className="text-muted-foreground">
              Showcase your ceremony designs and color palettes in action
            </p>
          </div>
          <Button
            onClick={() => setShowUploadForm(true)}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            <Upload size={20} className="mr-2" />
            Upload Media
          </Button>
        </div>

        {/* Upload Form Modal */}
        {showUploadForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-serif font-bold text-foreground">Upload Media</h2>
                <button
                  onClick={() => setShowUploadForm(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X size={24} className="text-foreground" />
                </button>
              </div>

              <form onSubmit={handleUpload} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Royal Wedding Ceremony"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Description
                  </label>
                  <textarea
                    placeholder="Describe your ceremony design and color choices"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-20 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Media Type
                  </label>
                  <select className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Image</option>
                    <option>Video</option>
                  </select>
                </div>

                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:bg-muted/50 transition-colors">
                  <Upload size={32} className="mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm font-semibold text-foreground">Click to upload</p>
                  <p className="text-xs text-muted-foreground">or drag and drop</p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  >
                    Upload
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowUploadForm(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden bg-white border border-border hover:shadow-xl transition-all cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden h-48 bg-muted">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Play size={48} className="text-white fill-white" />
                  </div>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {item.description}
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDelete(item.id)
                  }}
                  className="text-xs text-red-500 hover:text-red-700 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {selectedItem.type === 'video' ? (
                  <div className="w-full bg-black h-96">
                    <iframe
                      width="100%"
                      height="384"
                      src={selectedItem.url}
                      title={selectedItem.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    className="w-full h-auto"
                  />
                )}

                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                  {selectedItem.title}
                </h2>
                <p className="text-muted-foreground mb-4">{selectedItem.description}</p>
                <div className="flex gap-3">
                  <Button
                    onClick={() => setSelectedItem(null)}
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  )
}
