"use client"

import { Calendar, Car, Clock, MapPin, Phone, User, Mail } from "lucide-react"
import type { BookingData } from "../booking-form"

interface ConfirmStepProps {
  data: BookingData
}

export function ConfirmStep({ data }: ConfirmStepProps) {
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-lg bg-background/50 border border-border/50">
        <h3 className="font-semibold text-foreground mb-4">Booking Summary</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Service</p>
              <p className="font-medium text-foreground">{data.service}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Car className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Vehicle Type</p>
              <p className="font-medium text-foreground">{data.vehicle}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date & Time</p>
              <p className="font-medium text-foreground">
                {data.date?.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                at {data.time}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 rounded-lg bg-background/50 border border-border/50">
        <h3 className="font-semibold text-foreground mb-4">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="font-medium text-foreground">{data.name}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium text-foreground">{data.phone}</p>
            </div>
          </div>

          {data.email && (
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium text-foreground">{data.email}</p>
              </div>
            </div>
          )}

          {data.address && (
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Service Address</p>
                <p className="font-medium text-foreground">{data.address}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="text-sm text-muted-foreground text-center">
        By submitting, you agree to our{" "}
        <a href="/terms" className="text-primary hover:underline">
          Terms & Conditions
        </a>
        .
      </p>
    </div>
  )
}
