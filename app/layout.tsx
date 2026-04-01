import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingCTA } from '@/components/floating-cta'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Max's Mobile Detailing | Professional Auto Detailing in Longmont, CO",
  description: "Premium mobile auto detailing services in Longmont, Colorado. Interior, exterior, ceramic coating, paint correction. Professional results at your home or our garage.",
  keywords: "auto detailing, car detailing, mobile detailing, Longmont, Colorado, ceramic coating, paint correction, interior detail, exterior detail",
  authors: [{ name: "Max's Mobile Detailing LLC" }],
  openGraph: {
    title: "Max's Mobile Detailing | Longmont, CO",
    description: "The pinnacle of automotive care: professional results at your home or in our fully equipped garage.",
    type: "website",
    locale: "en_US",
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        <Analytics />
      </body>
    </html>
  )
}
