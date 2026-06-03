'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { BottomNav } from '@/components/bottom-nav'
import { Button } from '@/components/ui/button'
import { MessageCircle, Phone, MapPin, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  // WhatsApp contact number (replace with actual number)
  const whatsappNumber = '+234803456789' // Replace with your actual WhatsApp number
  const whatsappMessage = encodeURIComponent(
    `Hello! I'm interested in your fashion services and would like to discuss custom design options.`
  )
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${whatsappMessage}`

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open WhatsApp with the message
    const message = encodeURIComponent(
      `Hello SAMLAD Fashion Homes!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage: ${formData.message}`
    )
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Get In Touch With Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our designs or ready to place an order? We're here to help! Contact us directly via WhatsApp for the fastest response.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-8">
                  Contact Information
                </h2>

                {/* WhatsApp CTA - Most Prominent */}
                <div className="mb-8 p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border-2 border-green-500">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500 rounded-lg">
                      <MessageCircle className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-green-900 mb-2">WhatsApp</h3>
                      <p className="text-green-800 mb-4">
                        Chat with us on WhatsApp for quick responses and detailed discussions about your custom fashion needs.
                      </p>
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0">
                          <MessageCircle className="mr-2" size={20} />
                          Open WhatsApp Chat
                        </Button>
                      </a>
                      <p className="text-xs text-green-700 mt-3">+234 803 456 789</p>
                    </div>
                  </div>
                </div>

                {/* Other Contact Methods */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">+234 803 456 789</p>
                      <p className="text-sm text-muted-foreground mt-1">Mon - Fri, 9 AM - 6 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Mail className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">contact@samladfashion.com</p>
                      <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Visit Us</h3>
                      <p className="text-muted-foreground">
                        123 Fashion Street<br />
                        Lagos, Nigeria
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">By appointment</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Clock className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl border border-border p-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                      placeholder="+234 803 456 789"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Service Type *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="Custom Design">Custom Design</option>
                      <option value="Tailoring">Tailoring</option>
                      <option value="Alterations">Alterations</option>
                      <option value="Wedding Outfit">Wedding Outfit</option>
                      <option value="Traditional Wear">Traditional Wear</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your fashion needs, ideas, and preferences..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0"
                  >
                    <MessageCircle className="mr-2" size={20} />
                    Send via WhatsApp
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, your message will be sent directly to our WhatsApp for faster response
                  </p>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gradient-to-b from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold text-foreground text-center mb-8">
              Frequently Asked Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-foreground mb-3">How long does custom tailoring take?</h3>
                <p className="text-muted-foreground">
                  Most custom designs take 2-4 weeks depending on complexity. Rush orders available upon request.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-foreground mb-3">Do you offer consultation?</h3>
                <p className="text-muted-foreground">
                  Absolutely! Contact us on WhatsApp to discuss your vision and get personalized recommendations.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-foreground mb-3">What fabrics do you use?</h3>
                <p className="text-muted-foreground">
                  We use premium quality fabrics including cotton, silk, linen, and traditional African prints.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-foreground mb-3">Can I see samples before ordering?</h3>
                <p className="text-muted-foreground">
                  Yes! We can send fabric samples and design sketches. Discuss this with us on WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
