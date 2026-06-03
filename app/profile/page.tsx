'use client'

import { Header } from '@/components/header'
import { BottomNav } from '@/components/bottom-nav'
import { Button } from '@/components/ui/button'
import { MessageCircle, Award, Users, Clock, Scissors, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

// SAMLAD Fashion Homes portfolio data
const portfolioData = {
  name: 'SAMLAD Fashion Homes',
  tagline: 'Premium Tailoring & Custom Fashion Design',
  phone: '+234 7059204489',
  whatsapp: '2347059204489',
  email: 'contact@samladfashion.com',
  bio: 'Welcome to SAMLAD Fashion Homes - your premier destination for exquisite custom clothing and premium tailoring services. With over 10 years of experience in the fashion industry, we specialize in creating bespoke designs that perfectly match your style and personality.',
  services: [
    { icon: Scissors, title: 'Custom Tailoring', desc: 'Perfectly fitted custom designs for any occasion' },
    { icon: Award, title: 'Premium Quality', desc: 'Using only the finest fabrics and materials' },
    { icon: Sparkles, title: 'Unique Designs', desc: 'One-of-a-kind creations tailored to you' },
    { icon: Clock, title: 'Quick Turnaround', desc: 'Fast delivery without compromising quality' },
  ],
  stats: [
    { label: 'Happy Clients', value: '2000+' },
    { label: 'Designs Created', value: '500+' },
    { label: 'Years Experience', value: '10+' },
  ],
}

export default function ProfilePage() {
  const handleWhatsAppClick = () => {
    const message = 'Hi SAMLAD Fashion Homes! I would like to know more about your services.'
    const whatsappUrl = `https://wa.me/${portfolioData.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="pb-20 md:pb-0">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Background */}
        <div className="relative bg-gradient-to-br from-primary/20 to-secondary/20 py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                  <img
                    src="/samlad-profile.png"
                    alt="SAMLAD Fashion Homes"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
                  {portfolioData.name}
                </h1>
                <p className="text-lg text-secondary font-semibold mb-4">
                  {portfolioData.tagline}
                </p>
                <p className="text-muted-foreground mb-6 max-w-2xl">
                  {portfolioData.bio}
                </p>
                
                {/* Contact Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleWhatsAppClick}
                    className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all font-semibold flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </button>
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all font-semibold"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-12">
          <div className="grid grid-cols-3 gap-4 mb-12">
            {portfolioData.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-lg transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.services.map((service) => (
                <div
                  key={service.title}
                  className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex-shrink-0">
                      <service.icon className="text-primary" size={28} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <p className="text-muted-foreground mb-2">WhatsApp / Phone</p>
                <a
                  href={`https://wa.me/${portfolioData.whatsapp}`}
                  className="text-2xl font-bold text-primary hover:text-secondary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {portfolioData.phone}
                </a>
              </div>
              <div className="text-center">
                <p className="text-muted-foreground mb-2">Email</p>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="text-lg font-semibold text-primary hover:text-secondary transition-colors break-all"
                >
                  {portfolioData.email}
                </a>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={handleWhatsAppClick}
                className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all font-semibold text-lg flex items-center gap-2"
              >
                <MessageCircle size={24} />
                Start a Conversation
              </button>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
