"use client"

import { Card } from "@/components/ui/card"
import { Sparkles, Car, Shield, Layers } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    id: "interior",
    name: "Interior Detail",
    price: "Starting at $150",
    icon: Sparkles,
    description: "Deep clean carpets, upholstery, dashboard, and all interior surfaces",
  },
  {
    id: "exterior",
    name: "Exterior Detail",
    price: "Starting at $175",
    icon: Car,
    description: "Wash, clay bar, polish, and protect your vehicle's exterior",
  },
  {
    id: "full",
    name: "Full Detail",
    price: "Starting at $300",
    icon: Layers,
    description: "Complete interior and exterior detailing for total transformation",
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    price: "Starting at $500",
    icon: Shield,
    description: "Long-lasting paint protection with professional ceramic coating",
  },
]

interface ServiceStepProps {
  selected: string
  onSelect: (service: string) => void
}

export function ServiceStep({ selected, onSelect }: ServiceStepProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {services.map((service) => (
        <Card
          key={service.id}
          className={cn(
            "cursor-pointer p-6 transition-all hover:border-primary/50",
            selected === service.name
              ? "border-primary bg-primary/5 neon-border"
              : "bg-background/50 border-border/50"
          )}
          onClick={() => onSelect(service.name)}
        >
          <div className="flex items-start gap-4">
            <div
              className={cn(
                "h-12 w-12 rounded-lg flex items-center justify-center shrink-0",
                selected === service.name ? "bg-primary/20" : "bg-muted"
              )}
            >
              <service.icon
                className={cn(
                  "h-6 w-6",
                  selected === service.name ? "text-primary" : "text-muted-foreground"
                )}
              />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{service.name}</h3>
              <p className="text-sm text-primary font-medium mb-1">{service.price}</p>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
