import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Heart, Users, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { AnimatedHeadingWithSequence } from '@/components/animated-heading'

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-4 md:px-8 py-6 bg-white/50 backdrop-blur-sm sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-primary-foreground font-bold text-lg">S</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-serif text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SAMLAD</p>
            <p className="text-xs font-semibold text-muted-foreground">Fashion Homes</p>
          </div>
        </Link>
        <div>
          <Link href="/explore">
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0">
              Explore Now
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-16 md:py-20 relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/fashion-hero-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/40 z-10" />
          
          <div className="max-w-6xl mx-auto w-full relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6 md:space-y-8">
                <div className="space-y-3">
                  <div className="inline-block">
                    <span className="text-sm md:text-base font-semibold text-white bg-secondary/80 px-4 py-2 rounded-full drop-shadow-md">
                      ✨ Showcase Your Fashion Art
                    </span>
                  </div>
                  <AnimatedHeadingWithSequence
                    mainText="Exquisite Fashion & Tailoring"
                    accentText="Made to Perfection"
                    mainClassName="text-5xl md:text-7xl font-serif font-bold text-white leading-tight drop-shadow-lg"
                    accentClassName="text-5xl md:text-7xl font-serif font-bold bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg leading-tight"
                  />
                </div>
                
                <p className="text-lg md:text-xl text-white/95 max-w-xl drop-shadow-md">
                  Welcome to SAMLAD Fashion Homes - where your dreams become exquisite fashion reality. Browse our stunning collection of custom clothing designs, tailoring services, and fashion inspiration.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Link href="/gallery" className="group">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0 shadow-lg hover:shadow-xl transition-all">
                      Get Started
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                  </Link>
                  <Link href="/gallery">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/5">
                      View Gallery
                      <ChevronRight className="ml-2" size={20} />
                    </Button>
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-8 pt-8 border-t border-white/20">
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">500+</p>
                    <p className="text-sm text-white/80">Designs</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">2K+</p>
                    <p className="text-sm text-white/80">Satisfied Clients</p>
                  </div>
                  <div>
                    <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">100%</p>
                    <p className="text-sm text-white/80">Custom Quality</p>
                  </div>
                </div>
              </div>

              {/* Right - Visual Showcase */}
              <div className="hidden lg:block">
                <div className="relative">
                  
                  {/* Color Palette Showcase Cards */}
                  <div className="relative space-y-4">
                    {/* Card 1 - Royal Elegance */}
                    <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 bg-white p-6 border border-border">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="font-serif font-semibold text-lg text-foreground">Royal Elegance</h3>
                        <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">Wedding</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-16 h-16 rounded-lg bg-[#3d1047] shadow-md"></div>
                        <div className="w-16 h-16 rounded-lg bg-[#c4a85c] shadow-md"></div>
                        <div className="w-16 h-16 rounded-lg bg-[#e8bba8] shadow-md"></div>
                        <div className="w-16 h-16 rounded-lg bg-[#d9cfc0] shadow-md"></div>
                        <div className="w-16 h-16 rounded-lg bg-[#2d5c3f] shadow-md"></div>
                      </div>
                    </div>

                    {/* Card 2 - Sage & Gold */}
                    <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 bg-white p-6 border border-border">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="font-serif font-semibold text-lg text-foreground">Sage & Gold</h3>
                        <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">Modern</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-16 h-16 rounded-lg bg-[#2d4a3c] shadow-md"></div>
                        <div className="w-16 h-16 rounded-lg bg-[#c9a961] shadow-md"></div>
                        <div className="w-16 h-16 rounded-lg bg-[#d4a574] shadow-md"></div>
                        <div className="w-16 h-16 rounded-lg bg-[#c2b5a0] shadow-md"></div>
                        <div className="w-16 h-16 rounded-lg bg-[#3d5a4c] shadow-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="bg-gradient-to-b from-transparent to-primary/5 py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Why Choose SAMLAD Fashion Homes?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Experience premium tailoring, custom designs, and exceptional quality in every piece we create</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-xl p-8 bg-white border border-border hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Expert Craftsmanship</h3>
                <p className="text-muted-foreground">
                  Every design is created with meticulous attention to detail and premium quality fabrics
                </p>
              </div>

              <div className="rounded-xl p-8 bg-white border border-border hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="text-secondary" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Custom Design</h3>
                <p className="text-muted-foreground">
                  Personalized designs tailored to your unique style and preferences
                </p>
              </div>

              <div className="rounded-xl p-8 bg-white border border-border hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-accent" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">Direct Communication</h3>
                <p className="text-muted-foreground">
                  Get in touch directly via WhatsApp to discuss your fashion needs and ideas
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-4 md:px-8 py-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">&copy; 2026 SAMLAD Fashion Homes. Exquisite fashion made to perfection.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link>
            <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link>
            <Link href="/profile" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
