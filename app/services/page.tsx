import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Max's Mobile Detailing",
  description: "Professional auto detailing services including interior detail, exterior detail, full detail, and ceramic coating in Longmont, Colorado.",
}

const services = [
  {
    id: "interior",
    name: "Interior Detail",
    price: "Starting at $150",
    duration: "2-3 hours",
    bestFor: "Vehicles needing a thorough interior refresh",
    description: "Complete interior rejuvenation that addresses every surface inside your vehicle. We deep clean and condition all materials to restore that new-car feeling.",
    image: "/images/interior-detail.jpg",
    features: [
      "Full vacuum of carpets, seats, and trunk",
      "Steam cleaning of all fabric surfaces",
      "Leather cleaning and conditioning",
      "Dashboard and console deep clean",
      "Door panel and trim detailing",
      "Window cleaning (interior)",
      "Air vent cleaning",
      "Odor elimination treatment",
    ],
  },
  {
    id: "exterior",
    name: "Exterior Detail",
    price: "Starting at $175",
    duration: "2-4 hours",
    bestFor: "Vehicles needing paint restoration and protection",
    description: "Comprehensive exterior care that goes far beyond a simple wash. We meticulously clean, decontaminate, and protect every exterior surface.",
    image: "/images/exterior-detail.jpg",
    features: [
      "Hand wash with pH-neutral soap",
      "Clay bar decontamination",
      "Paint polish and enhancement",
      "Tire and wheel deep clean",
      "Tire dressing application",
      "Trim restoration",
      "Window cleaning (exterior)",
      "Sealant or wax protection",
    ],
  },
  {
    id: "full",
    name: "Full Detail",
    price: "Starting at $300",
    duration: "4-6 hours",
    bestFor: "Complete vehicle transformation",
    description: "Our most comprehensive package combining both interior and exterior detailing. This is the ultimate treatment for vehicles that need complete restoration.",
    image: "/images/hero-car.jpg",
    features: [
      "Everything in Interior Detail",
      "Everything in Exterior Detail",
      "Engine bay cleaning",
      "Door jamb detailing",
      "Headlight restoration",
      "Extended paint protection",
      "Premium tire coating",
      "Complimentary air freshener",
    ],
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    price: "Starting at $500",
    duration: "1-2 days",
    bestFor: "Long-term paint protection and easy maintenance",
    description: "Professional-grade ceramic coating application that provides years of protection. This creates a permanent bond with your paint for unmatched durability.",
    image: "/images/ceramic-coating.jpg",
    features: [
      "Full paint decontamination",
      "Paint correction (as needed)",
      "Surface preparation",
      "Professional ceramic application",
      "24-hour cure time",
      "Hydrophobic water beading",
      "UV protection",
      "5-year protection warranty",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Our <span className="text-primary neon-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From quick refreshes to complete transformations, we offer professional detailing services tailored to your vehicle&apos;s needs. Every service includes our meticulous attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12">
            {services.map((service) => (
              <Card key={service.id} id={service.id} className="bg-secondary/30 border-border/50 overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  {/* Service Image */}
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent lg:bg-gradient-to-r" />
                  </div>
                  <div className="flex flex-col">
                  <CardHeader className="p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge variant="outline" className="border-primary/50 text-primary">
                        {service.bestFor}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl sm:text-3xl mb-2">{service.name}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                      <span className="text-2xl font-bold text-primary">{service.price}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {service.duration}
                      </span>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 lg:p-10 bg-background/50">
                    <h4 className="font-semibold text-foreground mb-4">What&apos;s Included:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-8 w-full sm:w-auto neon-glow">
                      <Link href="/booking" className="flex items-center gap-2">
                        Book {service.name}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                  </div>
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
              Not Sure Which Service You Need?
            </h2>
            <p className="text-muted-foreground mb-8">
              Contact us for a free consultation. We&apos;ll assess your vehicle and recommend the best service for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:1-720-745-9926">Call (720) 745-9926</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
