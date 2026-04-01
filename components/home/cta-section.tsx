import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-card relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Have Questions or <span className="text-primary">Special Requests</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Whether you need a quick detail or a complete restoration, we&apos;re here to help. Contact us to discuss your needs or book your appointment today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="h-14 px-8 text-lg neon-glow">
              <Link href="/booking" className="flex items-center gap-2">
                Book Your Appointment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-lg">
              <Link href="/contact" className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>

          <div className="mt-10">
            <a 
              href="tel:1-720-745-9926" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="text-lg">Or call us: (720) 745-9926</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
