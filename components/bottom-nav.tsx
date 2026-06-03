'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Compass, MessageCircle, Image, User } from 'lucide-react'
import { cn } from '@/lib/utils'

export function BottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', icon: Home, label: 'Home' },
    { href: '/gallery', icon: Image, label: 'Gallery' },
    { href: '/contact', icon: MessageCircle, label: 'Contact' },
    { href: '/profile', icon: User, label: 'About' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border px-4 py-2 md:hidden flex justify-around items-center h-16 z-40">
      {navItems.map(({ href, icon: Icon, label }) => (
        <Link
          key={href}
          href={href}
          className={cn(
            'flex flex-col items-center justify-center gap-1 p-2 rounded-lg transition-colors',
            pathname === href
              ? 'text-primary'
              : 'text-muted-foreground hover:text-foreground'
          )}
        >
          <Icon size={24} />
          <span className="text-xs font-medium">{label}</span>
        </Link>
      ))}
    </nav>
  )
}
