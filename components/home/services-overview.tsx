import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Sparkles, Car, Shield, Clock } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Interior Detail",
    description: "Deep cleaning of carpets, upholstery, dashboard, and all interior surfaces. We restore your cabin to showroom condition.",
    image: "/images/interior-detail.jpg",
  },
  {
    icon: Car,
    title: "Exterior Detail",
    description: "Thorough wash, clay bar treatment, polish, and protection. Your paint will shine like never before.",
    image: "/images/exterior-detail.jpg",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description: "Long-lasting protection that shields your paint from UV rays, contaminants, and environmental damage.",
    image: "/images/ceramic-coating.jpg",
  },
  {
    icon: Clock,
    title: "Maintenance Plans",
    description: "Regular scheduled detailing to keep your vehicle looking its best year-round with convenient booking.",
    image: "/images/gallery/gallery-4.jpg",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Professional Detailing <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From meticulous interior cleaning to paint correction and ceramic coatings, we offer comprehensive care for your vehicle with precision and attention to every detail.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="bg-secondary/50 border-border/50 hover:border-primary/50 transition-colors group overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <CardHeader className="pt-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" asChild className="h-12 px-8">
            <Link href="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
