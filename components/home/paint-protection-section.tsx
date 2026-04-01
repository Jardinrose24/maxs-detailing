import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Sun, Droplets, CheckCircle2 } from "lucide-react"

const benefits = [
  "UV ray protection",
  "Hydrophobic properties",
  "Easy maintenance",
  "Enhanced gloss",
  "Scratch resistance",
  "Chemical resistance",
]

export function PaintProtectionSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Paint Protection</span>
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Shield Your Investment from the <span className="text-primary">Elements</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Protect your vehicle&apos;s finish from UV rays, road grime, bird droppings, and environmental contaminants. Our paint protection services offer multiple options to suit your needs and budget, from 1-year sealants to 5-year ceramic coatings.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button size="lg" asChild className="h-12 px-8">
              <Link href="/paint-protection" className="flex items-center gap-2">
                View Paint Protection
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl border border-border/50 overflow-hidden relative">
              <Image
                src="/images/ceramic-coating.jpg"
                alt="Ceramic coating application with water beading"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Overlay icons */}
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="grid grid-cols-4 gap-3">
                  <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-background/80 backdrop-blur border border-border/50">
                    <Sun className="h-6 w-6 text-primary mb-1" />
                    <span className="text-[10px] font-medium text-foreground text-center">UV</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-background/80 backdrop-blur border border-border/50">
                    <Droplets className="h-6 w-6 text-primary mb-1" />
                    <span className="text-[10px] font-medium text-foreground text-center">Hydro</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-background/80 backdrop-blur border border-border/50">
                    <Shield className="h-6 w-6 text-primary mb-1" />
                    <span className="text-[10px] font-medium text-foreground text-center">Shield</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-3 rounded-lg bg-background/80 backdrop-blur border border-primary/50 neon-border">
                    <span className="text-lg font-bold text-primary">5yr</span>
                    <span className="text-[10px] font-medium text-foreground text-center">Protect</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
