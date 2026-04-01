import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, CheckCircle2, Sun, Droplets, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Paint Protection | Max's Mobile Detailing",
  description: "Professional paint protection services including ceramic coatings and sealants. Protect your vehicle from UV rays, contaminants, and environmental damage.",
}

const protectionPackages = [
  {
    name: "1-Year Sealant",
    price: "$199",
    duration: "1 Year Protection",
    description: "Entry-level protection perfect for those who want enhanced shine and basic environmental protection.",
    features: [
      "Full exterior wash and decontamination",
      "Paint surface preparation",
      "Premium polymer sealant application",
      "Enhanced gloss and shine",
      "Water beading properties",
      "UV protection",
    ],
    popular: false,
  },
  {
    name: "3-Year Ceramic",
    price: "$599",
    duration: "3 Year Protection",
    description: "Professional-grade ceramic coating offering superior protection and maintenance ease.",
    features: [
      "Everything in 1-Year Sealant",
      "Light paint correction",
      "Professional ceramic coating",
      "Superior hydrophobic properties",
      "Enhanced scratch resistance",
      "Chemical resistance",
      "Easier cleaning and maintenance",
    ],
    popular: true,
  },
  {
    name: "5-Year Ceramic Pro",
    price: "$999",
    duration: "5 Year Protection",
    description: "Our ultimate protection package with multi-layer ceramic coating for maximum durability.",
    features: [
      "Everything in 3-Year Ceramic",
      "Full paint correction",
      "Multi-layer ceramic application",
      "Maximum hardness (9H)",
      "Lifetime-like protection",
      "Annual inspection included",
      "Touch-up service included",
      "Premium warranty",
    ],
    popular: false,
  },
]

const benefits = [
  {
    icon: Sun,
    title: "UV Protection",
    description: "Prevents paint fading and oxidation caused by harmful UV rays.",
  },
  {
    icon: Droplets,
    title: "Hydrophobic",
    description: "Water beads and rolls off, taking dirt and contaminants with it.",
  },
  {
    icon: Shield,
    title: "Scratch Resistance",
    description: "Added layer of protection against minor scratches and swirls.",
  },
  {
    icon: Sparkles,
    title: "Enhanced Gloss",
    description: "Deep, mirror-like shine that makes your paint look incredible.",
  },
]

export default function PaintProtectionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Paint Protection</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Protect Your <span className="text-primary neon-text">Investment</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shield your vehicle from UV rays, road grime, bird droppings, tree sap, and environmental contaminants. Our paint protection services offer lasting defense and stunning shine.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex flex-col items-center text-center p-6 rounded-xl bg-secondary/50 border border-border/50">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Protection <span className="text-primary">Packages</span>
            </h2>
            <p className="text-muted-foreground">
              Choose the level of protection that fits your needs and budget.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {protectionPackages.map((pkg) => (
              <Card 
                key={pkg.name} 
                className={`bg-card border-border/50 relative ${pkg.popular ? 'border-primary neon-border' : ''}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  </div>
                  <Badge variant="outline" className="mt-2">{pkg.duration}</Badge>
                  <CardDescription className="mt-4">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full ${pkg.popular ? 'neon-glow' : ''}`}
                    variant={pkg.popular ? 'default' : 'outline'}
                  >
                    <Link href="/booking" className="flex items-center justify-center gap-2">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">How long does ceramic coating last?</h3>
                <p className="text-muted-foreground">Our ceramic coatings last between 1-5 years depending on the package you choose. With proper care and maintenance, you can maximize the longevity of your coating.</p>
              </div>
              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">Do I need paint correction before coating?</h3>
                <p className="text-muted-foreground">Paint correction is recommended to remove existing swirls and scratches before coating. The ceramic coating will lock in the current state of your paint, so starting with a clean slate gives the best results.</p>
              </div>
              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">How do I maintain my ceramic coating?</h3>
                <p className="text-muted-foreground">Regular washing with pH-neutral soap is recommended. Avoid automatic car washes with harsh brushes. We provide detailed care instructions with every coating application.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Ready to Protect Your Vehicle?
            </h2>
            <p className="text-muted-foreground mb-8">
              Book a consultation to discuss the best protection package for your vehicle.
            </p>
            <Button size="lg" asChild className="neon-glow">
              <Link href="/booking" className="flex items-center gap-2">
                Book Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
