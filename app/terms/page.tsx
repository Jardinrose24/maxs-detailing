import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms & Conditions | Max's Mobile Detailing",
  description: "Terms and conditions for Max's Mobile Detailing services in Longmont, Colorado.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Terms & <span className="text-primary">Conditions</span>
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
            
            <div className="space-y-8">
              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Service Conditions</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All services provided by Max&apos;s Mobile Detailing LLC are dependent on the current condition of the vehicle. The final results may vary based on the existing state of your vehicle&apos;s interior, exterior, and paint condition. We will always communicate any concerns before beginning work.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Pricing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Prices quoted are estimates based on standard vehicle conditions. Final pricing may vary depending on vehicle size, condition, and any additional services requested. We will always confirm the final price before beginning any work.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-4">3. Access Requirements</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For mobile services, you must provide adequate access to your vehicle including parking space, access to water and electricity if required, and clear space for our equipment. Failure to provide adequate access may result in rescheduling or additional fees.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Cancellation Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We require at least 24 hours notice for cancellations or rescheduling. Cancellations with less than 24 hours notice may be subject to a cancellation fee of up to 50% of the quoted service price.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Max&apos;s Mobile Detailing LLC is not liable for any pre-existing damage, wear, or defects on your vehicle. This includes but is not limited to: existing scratches, chips, dents, faded paint, worn interiors, mechanical issues, or any damage not caused by our services. We recommend documenting your vehicle&apos;s condition before service.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Weather Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mobile detailing services may be rescheduled due to inclement weather conditions including rain, snow, extreme heat, or high winds. We will contact you as soon as possible to reschedule if weather conditions prevent us from completing the service.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment is due upon completion of services unless otherwise arranged. We accept cash, credit cards, and digital payment methods. For ceramic coating and paint correction services, a deposit may be required to secure your appointment.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-4">8. Right to Refuse Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Max&apos;s Mobile Detailing LLC reserves the right to refuse service at our discretion. This may include vehicles with excessive contamination, biohazards, illegal modifications, or situations where we cannot safely or effectively perform our services.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Have questions about our terms? Contact us.
              </p>
              <Link 
                href="/contact" 
                className="text-primary hover:underline font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
