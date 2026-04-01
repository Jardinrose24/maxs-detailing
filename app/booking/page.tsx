import { Metadata } from "next"
import { BookingForm } from "@/components/booking/booking-form"
import { Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Book Appointment | Max's Mobile Detailing",
  description: "Book your auto detailing appointment online. Choose your service, vehicle type, and preferred date and time.",
}

export default function BookingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-12 lg:py-16 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Online Booking</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Book Your <span className="text-primary neon-text">Appointment</span>
            </h1>
            <p className="text-muted-foreground">
              Schedule your detailing service in just a few simple steps. We&apos;ll confirm your appointment within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-12 lg:py-16 bg-card pb-32 lg:pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <BookingForm />
        </div>
      </section>
    </div>
  )
}
