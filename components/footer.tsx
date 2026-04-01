import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const navigation = {
  services: [
    { name: "Interior Detail", href: "/services#interior" },
    { name: "Exterior Detail", href: "/services#exterior" },
    { name: "Full Detail", href: "/services#full" },
    { name: "Ceramic Coating", href: "/services#ceramic" },
  ],
  company: [
    { name: "About", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
    { name: "Book Now", href: "/booking" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary neon-text">MAX&apos;S</span>
                <span className="text-foreground"> DETAILING</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium mobile auto detailing services in Longmont, Colorado. Professional results at your home or in our fully equipped garage.
            </p>
            <div className="space-y-2">
              <a
                href="tel:1-720-745-9926"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                (720) 745-9926
              </a>
              <a
                href="mailto:maxsmobiledetailllc@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                maxsmobiledetailllc@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                Longmont, Colorado
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Max&apos;s Mobile Detailing LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
