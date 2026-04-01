import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Michael R.",
    text: "Max did an incredible job on my truck. The interior looks brand new and the exterior has never been this shiny. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah L.",
    text: "Professional service from start to finish. Max was on time, thorough, and my car looks better than when I bought it. Will definitely use again!",
    rating: 5,
  },
  {
    name: "David K.",
    text: "Had the ceramic coating done and I couldn&apos;t be happier. Water just beads right off and cleaning is so much easier now. Worth every penny.",
    rating: 5,
  },
  {
    name: "Jennifer M.",
    text: "Max brought my old SUV back to life. The paint correction removed years of swirl marks and scratches. It looks like a completely different vehicle!",
    rating: 5,
  },
  {
    name: "Robert T.",
    text: "Best detailing service in Longmont, hands down. Attention to detail is incredible and the prices are very fair. My go-to for all my vehicles.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our detailing services.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-medium text-foreground">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/50 border border-border/50">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">5.0 Average Rating on Google</span>
          </div>
        </div>
      </div>
    </section>
  )
}
