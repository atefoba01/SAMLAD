'use client'

import { Header } from '@/components/header'
import { BottomNav } from '@/components/bottom-nav'
import { Button } from '@/components/ui/button'
import { Check, Star, Zap, Crown } from 'lucide-react'
import Link from 'next/link'

export default function PremiumPage() {
  const features = [
    {
      icon: Star,
      title: 'Unlimited Palettes',
      description: 'Access our complete library of 500+ color palettes',
    },
    {
      icon: Zap,
      title: 'AI Color Suggestions',
      description: 'Get personalized color recommendations for your ceremony',
    },
    {
      icon: Crown,
      title: 'Premium Boards',
      description: 'Create unlimited custom boards and collections',
    },
  ]

  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for exploring',
      features: [
        'Browse 100+ palettes',
        'Save up to 5 palettes',
        '1 custom board',
        'Basic portfolio gallery',
      ],
      cta: 'Current Plan',
      highlighted: false,
    },
    {
      name: 'Creator',
      price: '$9.99',
      period: '/month',
      description: 'For active planners',
      features: [
        'Access all 500+ palettes',
        'Unlimited saves',
        '10 custom boards',
        'Advanced portfolio gallery',
        'Palette export (PNG)',
        'Ad-free experience',
      ],
      cta: 'Upgrade Now',
      highlighted: true,
    },
    {
      name: 'Professional',
      price: '$29.99',
      period: '/month',
      description: 'For wedding designers',
      features: [
        'Everything in Creator',
        'Unlimited boards',
        'Client sharing',
        'Premium support',
        'Export (PDF, PNG, SVG)',
        'Brand kit creation',
        'Analytics dashboard',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 px-4 md:px-8 py-16">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-secondary bg-secondary/10 px-4 py-2 rounded-full">
                Premium Plans
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Unlock Your Creative Potential
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upgrade to unlock advanced features and take your ceremony color planning to the next level
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div key={idx} className="rounded-xl p-6 bg-white border border-border hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
            Choose Your Plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl overflow-hidden transition-all ${
                  plan.highlighted
                    ? 'ring-2 ring-primary shadow-2xl scale-105 md:scale-110'
                    : 'border border-border hover:shadow-lg'
                } bg-white`}
              >
                {plan.highlighted && (
                  <div className="bg-gradient-to-r from-primary to-secondary px-6 py-3 text-center">
                    <span className="text-white font-semibold text-sm">Most Popular</span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground ml-2">{plan.period}</span>
                    )}
                  </div>

                  <Button
                    asChild
                    className={`w-full mb-8 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white'
                        : 'bg-muted text-foreground hover:bg-muted/80'
                    }`}
                  >
                    <button>{plan.cta}</button>
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Can I cancel my subscription anytime?',
                a: 'Yes, you can cancel at any time with no penalties. Your premium features will be available until the end of your billing period.',
              },
              {
                q: 'Do you offer discounts for annual plans?',
                a: 'Yes! Annual plans include 20% savings compared to monthly billing. Contact our support team for more details.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and Apple Pay for seamless transactions.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Absolutely! All premium plans come with a 7-day free trial. No credit card required to get started.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="rounded-lg p-6 bg-white border border-border">
                <h3 className="font-semibold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center py-12">
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 p-12">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Ready to upgrade?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of wedding planners and designers using Ceremo Colors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white">
                Start Free Trial
              </Button>
              <Link href="/explore">
                <Button variant="outline">
                  Continue Exploring
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
