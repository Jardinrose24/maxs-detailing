"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import type { BookingData } from "../booking-form"

interface ContactStepProps {
  data: BookingData
  onUpdate: (data: Partial<BookingData>) => void
}

export function ContactStep({ data, onUpdate }: ContactStepProps) {
  return (
    <FieldGroup className="space-y-6">
      <Field>
        <FieldLabel>
          Name <span className="text-destructive">*</span>
        </FieldLabel>
        <Input
          type="text"
          placeholder="Your full name"
          value={data.name}
          onChange={(e) => onUpdate({ name: e.target.value })}
          className="h-12 bg-background/50 border-border/50"
        />
      </Field>

      <Field>
        <FieldLabel>
          Phone <span className="text-destructive">*</span>
        </FieldLabel>
        <Input
          type="tel"
          placeholder="(720) 555-0123"
          value={data.phone}
          onChange={(e) => onUpdate({ phone: e.target.value })}
          className="h-12 bg-background/50 border-border/50"
        />
      </Field>

      <Field>
        <FieldLabel>Email (optional)</FieldLabel>
        <Input
          type="email"
          placeholder="your@email.com"
          value={data.email}
          onChange={(e) => onUpdate({ email: e.target.value })}
          className="h-12 bg-background/50 border-border/50"
        />
      </Field>

      <Field>
        <FieldLabel>Service Address</FieldLabel>
        <Textarea
          placeholder="Where should we come for mobile service? Or leave blank for garage service."
          value={data.address}
          onChange={(e) => onUpdate({ address: e.target.value })}
          className="min-h-[100px] bg-background/50 border-border/50"
        />
      </Field>

      <p className="text-sm text-muted-foreground">
        <span className="text-destructive">*</span> Required fields
      </p>
    </FieldGroup>
  )
}
