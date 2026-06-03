'use client'

import { Header } from '@/components/header'
import { BottomNav } from '@/components/bottom-nav'
import { Button } from '@/components/ui/button'
import { BookmarkIcon, Plus } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

// Mock boards data
const mockBoards = [
  {
    id: 1,
    name: 'Wedding Ideas',
    description: 'Color palettes for my wedding',
    paletteCount: 8,
    colors: ['#3d1047', '#c4a85c', '#e8bba8', '#d9cfc0'],
  },
  {
    id: 2,
    name: 'Engagement Party',
    description: 'Beautiful engagement celebration colors',
    paletteCount: 5,
    colors: ['#2d4a3c', '#c9a961', '#d4a574', '#c2b5a0'],
  },
  {
    id: 3,
    name: 'Anniversary Plans',
    description: 'Colors for our anniversary celebration',
    paletteCount: 3,
    colors: ['#5c1f38', '#8b3a57', '#d4857f', '#d9a89d'],
  },
]

export default function BoardsPage() {
  const [showNewBoardForm, setShowNewBoardForm] = useState(false)
  const [newBoardName, setNewBoardName] = useState('')

  const handleCreateBoard = () => {
    if (newBoardName.trim()) {
      // TODO: Create board via API
      setNewBoardName('')
      setShowNewBoardForm(false)
    }
  }

  return (
    <div className="pb-20 md:pb-0">
      <Header />

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2 flex items-center gap-3">
              <BookmarkIcon className="text-secondary" size={40} />
              My Boards
            </h1>
            <p className="text-muted-foreground text-lg">
              Organize your favorite palettes in custom boards
            </p>
          </div>
          <Button onClick={() => setShowNewBoardForm(true)} size="lg">
            <Plus className="mr-2" size={20} />
            New Board
          </Button>
        </div>

        {/* New Board Form */}
        {showNewBoardForm && (
          <div className="bg-card rounded-lg p-6 border border-border mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">Create a New Board</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Board Name
                </label>
                <input
                  type="text"
                  value={newBoardName}
                  onChange={(e) => setNewBoardName(e.target.value)}
                  placeholder="e.g., Wedding Ideas"
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-primary"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleCreateBoard} disabled={!newBoardName.trim()}>
                  Create
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowNewBoardForm(false)
                    setNewBoardName('')
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Boards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockBoards.map((board) => (
            <Link key={board.id} href={`/board/${board.id}`}>
              <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary hover:shadow-md transition-all cursor-pointer group">
                {/* Color Preview */}
                <div className="flex h-24">
                  {board.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className="flex-1 group-hover:opacity-80 transition-opacity"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                {/* Board Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{board.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{board.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">
                      {board.paletteCount} palettes
                    </span>
                    <span className="text-muted-foreground text-sm">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {mockBoards.length === 0 && (
          <div className="text-center py-12">
            <BookmarkIcon className="mx-auto mb-4 text-muted-foreground" size={48} />
            <h2 className="text-2xl font-semibold text-foreground mb-2">
              No boards yet
            </h2>
            <p className="text-muted-foreground mb-6">
              Create a board to organize your favorite color palettes
            </p>
            <Button onClick={() => setShowNewBoardForm(true)}>Create Your First Board</Button>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  )
}
