import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

const corrections = [
  {
    name: "One-Step Polish",
    description: "Light correction for minor imperfections",
    level: 1,
  },
  {
    name: "Two-Step Correction",
    description: "Moderate correction for swirls and light scratches",
    level: 2,
  },
  {
    name: "Multi-Stage Correction",
    description: "Complete restoration for heavy oxidation and deep scratches",
    level: 3,
  },
]

export function PaintCorrectionSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Visual - Before/After images */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {/* Before image */}
              <div className="relative aspect-square rounded-xl overflow-hidden border border-border/50">
                <Image
                  src="/images/correction-before.jpg"
                  alt="Paint before correction - visible swirl marks"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
                  <span className="text-sm font-medium text-muted-foreground">Before</span>
                  <p className="text-xs text-muted-foreground">Swirls & Scratches</p>
                </div>
              </div>
              {/* After image */}
              <div className="relative aspect-square rounded-xl overflow-hidden border border-accent/30 neon-glow-purple">
                <Image
                  src="/images/correction-after.jpg"
                  alt="Paint after correction - mirror finish"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
                  <span className="text-sm font-medium text-accent">After</span>
                  <p className="text-xs text-muted-foreground">Mirror Finish</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 mb-6">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Paint Correction</span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Restore Clarity and <span className="text-accent">Depth</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Remove scratches, swirl marks, and oxidation to reveal the true beauty of your paint. Our paint correction services range from one-step polishing to multi-stage corrections for heavily damaged finishes.
            </p>

            <div className="space-y-4 mb-8">
              {corrections.map((correction) => (
                <div key={correction.name} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 border border-border/50">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-6 rounded-full ${
                          i < correction.level ? 'bg-accent' : 'bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{correction.name}</h3>
                    <p className="text-sm text-muted-foreground">{correction.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" variant="outline" asChild className="h-12 px-8 border-accent/50 hover:bg-accent/10 hover:text-accent">
              <Link href="/paint-correction" className="flex items-center gap-2">
                View Paint Correction
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
