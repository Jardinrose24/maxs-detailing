"use client"

import { Card } from "@/components/ui/card"
import { Car, Truck } from "lucide-react"
import { cn } from "@/lib/utils"

const vehicles = [
  {
    id: "sedan",
    name: "Sedan / Coupe",
    icon: Car,
    description: "2-4 door compact to full-size cars",
  },
  {
    id: "suv",
    name: "SUV / Crossover",
    icon: Car,
    description: "Small to large sport utility vehicles",
  },
  {
    id: "truck",
    name: "Truck",
    icon: Truck,
    description: "Pickup trucks of all sizes",
  },
  {
    id: "other",
    name: "Other / Large Vehicle",
    icon: Truck,
    description: "Vans, RVs, boats, or specialty vehicles",
  },
]

interface VehicleStepProps {
  selected: string
  onSelect: (vehicle: string) => void
}

export function VehicleStep({ selected, onSelect }: VehicleStepProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {vehicles.map((vehicle) => (
        <Card
          key={vehicle.id}
          className={cn(
            "cursor-pointer p-6 transition-all hover:border-primary/50",
            selected === vehicle.name
              ? "border-primary bg-primary/5 neon-border"
              : "bg-background/50 border-border/50"
          )}
          onClick={() => onSelect(vehicle.name)}
        >
          <div className="flex items-start gap-4">
            <div
              className={cn(
                "h-12 w-12 rounded-lg flex items-center justify-center shrink-0",
                selected === vehicle.name ? "bg-primary/20" : "bg-muted"
              )}
            >
              <vehicle.icon
                className={cn(
                  "h-6 w-6",
                  selected === vehicle.name ? "text-primary" : "text-muted-foreground"
                )}
              />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{vehicle.name}</h3>
              <p className="text-sm text-muted-foreground">{vehicle.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
