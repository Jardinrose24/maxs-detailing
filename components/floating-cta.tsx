"use client"

import Link from "next/link"
import { Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingCTA() {
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center gap-3 lg:hidden">
      <Button
        variant="outline"
        size="lg"
        asChild
        className="flex-1 max-w-[160px] h-14 bg-background/95 backdrop-blur"
      >
        <a href="tel:1-720-745-9926" className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          <span>Call Now</span>
        </a>
      </Button>
      <Button
        size="lg"
        asChild
        className="flex-1 max-w-[160px] h-14 neon-glow"
      >
        <Link href="/booking" className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          <span>Book Now</span>
        </Link>
      </Button>
    </div>
  )
}
