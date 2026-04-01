import Link from "next/link"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Zap, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Paint Correction | Max's Mobile Detailing",
  description: "Professional paint correction services to remove scratches, swirl marks, and oxidation. Restore your vehicle's paint to showroom condition.",
}

const correctionLevels = [
  {
    name: "One-Step Polish",
    price: "Starting at $250",
    duration: "3-4 hours",
    correction: "50-60%",
    description: "Light correction perfect for vehicles with minor swirls and light scratches. Ideal for newer vehicles or those with well-maintained paint.",
    features: [
      "Full exterior wash and decontamination",
      "Clay bar treatment",
      "Single-stage machine polish",
      "Light swirl removal",
      "Enhanced gloss and clarity",
      "Sealant or wax application",
    ],
    level: 1,
  },
  {
    name: "Two-Step Correction",
    price: "Starting at $450",
    duration: "6-8 hours",
    correction: "75-85%",
    description: "Moderate correction for vehicles with noticeable swirls, light scratches, and minor oxidation. The most popular choice for significant improvement.",
    features: [
      "Everything in One-Step Polish",
      "Compound stage for defect removal",
      "Polish stage for refinement",
      "Moderate scratch removal",
      "Water spot removal",
      "Paint depth measurement",
      "Extended protection application",
    ],
    level: 2,
  },
  {
    name: "Multi-Stage Correction",
    price: "Starting at $750",
    duration: "1-2 days",
    correction: "90-99%",
    description: "Complete restoration for heavily damaged paint with deep scratches, heavy oxidation, and severe swirl marks. Brings paint back to showroom condition.",
    features: [
      "Everything in Two-Step Correction",
      "Multiple compound stages",
      "Multiple polish stages",
      "Heavy defect removal",
      "Deep scratch correction",
      "Oxidation removal",
      "Complete paint restoration",
      "Ceramic coating ready",
    ],
    level: 3,
  },
]

const defects = [
  { name: "Swirl Marks", description: "Circular scratches caused by improper washing" },
  { name: "Light Scratches", description: "Surface-level marks that catch light" },
  { name: "Water Spots", description: "Mineral deposits etched into paint" },
  { name: "Oxidation", description: "Faded, chalky paint from UV damage" },
  { name: "Bird Droppings", description: "Etching from acidic droppings" },
  { name: "Holograms", description: "Buffer marks from poor polishing" },
]

export default function PaintCorrectionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-6">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Paint Correction</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Restore Your Paint to <span className="text-accent">Perfection</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Remove years of scratches, swirl marks, and oxidation. Our paint correction services reveal the true depth and clarity of your vehicle&apos;s finish.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Visual */}
      <section className="py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="aspect-video rounded-2xl overflow-hidden border border-border/50 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-muted to-card" />
              <div className="absolute inset-0 flex">
                {/* Before side */}
                <div className="flex-1 flex flex-col items-center justify-center border-r border-border/50 p-8">
                  <div className="w-32 h-32 rounded-full bg-muted-foreground/20 flex items-center justify-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-muted-foreground/30 flex items-center justify-center relative overflow-hidden">
                      {/* Swirl pattern */}
                      <div className="absolute inset-0 opacity-50">
                        {[...Array(8)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute inset-0 border border-muted-foreground/40 rounded-full"
                            style={{ transform: `scale(${0.3 + i * 0.1})` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-muted-foreground">Before</span>
                  <span className="text-sm text-muted-foreground mt-1">Swirls, Scratches, Oxidation</span>
                </div>
                {/* After side */}
                <div className="flex-1 flex flex-col items-center justify-center p-8">
                  <div className="w-32 h-32 rounded-full bg-accent/20 flex items-center justify-center mb-6 neon-glow-purple">
                    <div className="w-24 h-24 rounded-full bg-accent/40 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-accent" />
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-accent">After</span>
                  <span className="text-sm text-muted-foreground mt-1">Mirror-Like Finish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Defects We Fix */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8 text-center">
            Defects We <span className="text-accent">Correct</span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {defects.map((defect) => (
              <div key={defect.name} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border/50">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-foreground">{defect.name}</h3>
                  <p className="text-sm text-muted-foreground">{defect.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Correction Levels */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Correction <span className="text-accent">Levels</span>
            </h2>
            <p className="text-muted-foreground">
              We assess your paint condition and recommend the appropriate level of correction.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {correctionLevels.map((level) => (
              <Card key={level.name} className="bg-secondary/30 border-border/50 overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-3 h-8 rounded-full ${
                              i < level.level ? 'bg-accent' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                      <Badge variant="outline" className="border-accent/50 text-accent">
                        {level.correction} Correction
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{level.name}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                      <span className="text-2xl font-bold text-accent">{level.price}</span>
                      <span>{level.duration}</span>
                    </div>
                    <CardDescription className="text-base">
                      {level.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 bg-background/50">
                    <h4 className="font-semibold text-foreground mb-4">What&apos;s Included:</h4>
                    <ul className="space-y-3">
                      {level.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Ready to Restore Your Paint?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us for a free paint assessment. We&apos;ll evaluate your vehicle and recommend the best correction level.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="neon-glow-purple bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/booking" className="flex items-center gap-2">
                  Book Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get Free Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
