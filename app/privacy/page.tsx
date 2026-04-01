import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Max's Mobile Detailing",
  description: "Privacy policy for Max's Mobile Detailing services in Longmont, Colorado.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
              Privacy <span className="text-primary">Policy</span>
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
          <div className="mx-auto max-w-3xl">
            
            <div className="space-y-8">
              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you book a service or contact us, we collect the following information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Name</li>
                  <li>Phone number</li>
                  <li>Email address (optional)</li>
                  <li>Service address (for mobile services)</li>
                  <li>Vehicle information</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use your information solely for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Scheduling and confirming appointments</li>
                  <li>Communicating about your services</li>
                  <li>Providing quotes and estimates</li>
                  <li>Following up on completed services</li>
                  <li>Sending appointment reminders</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-4">Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. Your information is used exclusively for providing and improving our detailing services.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information. Your data is stored securely and access is limited to authorized personnel who need the information to provide our services.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-4">Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and maintain records for business purposes. You may request deletion of your data at any time by contacting us.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Request access to your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-secondary/50 border border-border/50">
                <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions or concerns about our privacy practices, please contact us:
                </p>
                <ul className="text-muted-foreground space-y-2">
                  <li>
                    <span className="text-foreground">Email:</span>{" "}
                    <a href="mailto:maxsmobiledetailllc@gmail.com" className="text-primary hover:underline">
                      maxsmobiledetailllc@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="text-foreground">Phone:</span>{" "}
                    <a href="tel:1-720-745-9926" className="text-primary hover:underline">
                      (720) 745-9926
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/contact" 
                className="text-primary hover:underline font-medium"
              >
                Contact Us With Questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
