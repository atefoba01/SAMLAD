'use client'

import Link from 'next/link'
import { Bell, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="hidden md:block bg-white border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-primary">SAMLAD</p>
              <p className="text-xs font-semibold text-muted-foreground -mt-1">Fashion</p>
            </div>
          </Link>

          <nav className="hidden lg:flex gap-8 items-center">
            <Link href="/gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/profile" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Bell size={20} className="text-foreground" />
            </button>
            <Link href="/profile" className="p-2 hover:bg-muted rounded-lg transition-colors">
              <User size={20} className="text-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
