"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = ["All", "Interior", "Exterior", "Paint Correction"]

// Gallery items with real images
const galleryItems = [
  { id: 1, category: "Interior", title: "Full Interior Detail - Tesla Model 3", description: "Deep cleaned and conditioned all surfaces", image: "/images/interior-detail.jpg" },
  { id: 2, category: "Exterior", title: "Ceramic Coating - BMW M4", description: "5-year ceramic protection applied", image: "/images/gallery/gallery-1.jpg" },
  { id: 3, category: "Paint Correction", title: "Multi-Stage Correction - Porsche 911", description: "Removed years of swirl marks", image: "/images/correction-after.jpg" },
  { id: 4, category: "Interior", title: "Leather Restoration - Mercedes S-Class", description: "Cleaned and conditioned aged leather", image: "/images/gallery/gallery-2.jpg" },
  { id: 5, category: "Exterior", title: "Full Detail - Ford F-150", description: "Complete wash, clay, polish, and seal", image: "/images/exterior-detail.jpg" },
  { id: 6, category: "Paint Correction", title: "One-Step Polish - Honda Accord", description: "Enhanced gloss and removed light swirls", image: "/images/gallery/gallery-5.jpg" },
  { id: 7, category: "Exterior", title: "Ceramic Coating - Red Sports Car", description: "Water beading protection", image: "/images/gallery/gallery-3.jpg" },
  { id: 8, category: "Exterior", title: "Paint Protection - Mercedes Sedan", description: "3-year ceramic coating application", image: "/images/gallery/gallery-4.jpg" },
  { id: 9, category: "Exterior", title: "Full Detail - Porsche 911", description: "Complete exterior transformation", image: "/images/gallery/gallery-6.jpg" },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  )

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-6">
              <Camera className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Our Work</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              <span className="text-primary neon-text">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Browse our portfolio of completed detailing projects. From interior refreshes to complete paint corrections, see the quality of our work.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-card border-b border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  activeCategory === category && "neon-glow"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-border/50 bg-secondary/50"
              >
                {/* Real image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs text-primary font-medium">{item.category}</span>
                  <h3 className="font-semibold text-foreground text-sm mt-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                </div>

                {/* Category badge (always visible) */}
                <div className="absolute top-3 left-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-background/80 backdrop-blur text-foreground">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">
              Ready for Your Transformation?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let us add your vehicle to our gallery of satisfied customers.
            </p>
            <Button size="lg" asChild className="neon-glow">
              <a href="/booking">Book Your Detail</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
