'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { BottomNav } from '@/components/bottom-nav'
import { Button } from '@/components/ui/button'
import { Upload, Heart, MessageCircle } from 'lucide-react'
import Link from 'next/link'

// Mock gallery items for clothing work
const mockGalleryItems = [
  {
    id: 1,
    title: 'Traditional Ankara Dress',
    description: 'Beautiful custom Ankara dress with intricate beadwork and embroidery. Perfect for traditional ceremonies and special occasions.',
    image: '/gallery/traditional-ankara-1.png',
    category: 'Traditional',
    likes: 234,
    price: '₦15,000 - ₦25,000',
  },
  {
    id: 2,
    title: 'Modern Evening Gown',
    description: 'Elegant evening gown with flowing fabric and perfect draping. Ideal for evening events and celebrations.',
    image: '/gallery/modern-dress-1.png',
    category: 'Modern',
    likes: 456,
    price: '₦18,000 - ₦30,000',
  },
  {
    id: 3,
    title: 'Wedding Attire',
    description: 'Exquisite wedding outfit with gold accents and premium fabrics. Custom tailored for your special day.',
    image: '/gallery/wedding-attire-1.png',
    category: 'Wedding',
    likes: 789,
    price: '₦35,000 - ₦60,000',
  },
  {
    id: 4,
    title: 'Casual Wear Collection',
    description: 'Contemporary casual outfits for everyday style. Comfortable yet fashionable designs.',
    image: '/gallery/casual-wear-1.png',
    category: 'Casual',
    likes: 345,
    price: '₦8,000 - ₦12,000',
  },
  {
    id: 5,
    title: 'Formal Business Suit',
    description: 'Professional tailored business suit with perfect fit. Ideal for corporate events and meetings.',
    image: '/gallery/formal-suit-1.png',
    category: 'Business',
    likes: 567,
    price: '₦22,000 - ₦40,000',
  },
  {
    id: 6,
    title: 'Designer Children Wear',
    description: 'Adorable custom designs for children with playful patterns and quality materials.',
    image: '/gallery/casual-wear-1.png',
    category: 'Children',
    likes: 423,
    price: '₦5,000 - ₦10,000',
  },
]

// WhatsApp chat function
const sendWhatsAppMessage = (item: typeof mockGalleryItems[0]) => {
  const whatsappNumber = '2347059204489'
  const message = `Hi SAMLAD Fashion Homes! I'm interested in: *${item.title}*%0A%0ADescription: ${item.description}%0APrice Range: ${item.price}%0A%0ACould you provide more details and a quote for this design?`
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
  window.open(whatsappUrl, '_blank')
}

export default function GalleryPage() {
  const [liked, setLiked] = useState<{ [key: number]: boolean }>({})
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Traditional', 'Modern', 'Wedding', 'Business', 'Casual', 'Children']
  
  const filteredItems = selectedCategory === 'All' 
    ? mockGalleryItems 
    : mockGalleryItems.filter(item => item.category === selectedCategory)

  const toggleLike = (id: number) => {
    setLiked(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Our Fashion Gallery
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our stunning collection of custom-designed clothing and tailoring work. Each piece represents our commitment to excellence and craftsmanship.
            </p>
            
            {/* Upload and Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0">
                <Upload className="mr-2" size={20} />
                Upload Your Design
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/5">
                  <MessageCircle className="mr-2" size={20} />
                  Contact on WhatsApp
                </Button>
              </Link>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                      : 'bg-white border-2 border-border text-foreground hover:border-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-xl overflow-hidden bg-white border border-border hover:shadow-xl transition-all group"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-200 aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-bold bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Like Button */}
                  <button
                    onClick={() => toggleLike(item.id)}
                    className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
                  >
                    <Heart
                      size={20}
                      className={`${liked[item.id] ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  
                  {/* Price and Stats */}
                  <div className="mb-3 pt-2">
                    <p className="text-sm font-bold text-secondary">{item.price}</p>
                  </div>
                  
                  {/* Stats and Chat Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Heart size={16} className="fill-red-500 text-red-500" />
                      <span className="text-sm font-semibold">{item.likes}</span>
                    </div>
                    <button
                      onClick={() => sendWhatsAppMessage(item)}
                      className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all text-sm font-semibold flex items-center gap-2"
                    >
                      <MessageCircle size={16} />
                      Chat Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
              Have a Custom Design in Mind?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get in touch with our team directly on WhatsApp to discuss your fashion ideas and get a custom quote.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0">
                <MessageCircle className="mr-2" size={20} />
                Chat on WhatsApp
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
