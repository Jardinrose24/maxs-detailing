"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ServiceStep } from "./steps/service-step"
import { VehicleStep } from "./steps/vehicle-step"
import { DateTimeStep } from "./steps/date-time-step"
import { ContactStep } from "./steps/contact-step"
import { ConfirmStep } from "./steps/confirm-step"
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react"

export type BookingData = {
  service: string
  vehicle: string
  date: Date | null
  time: string
  name: string
  phone: string
  email: string
  address: string
}

const steps = [
  { id: 1, name: "Service", description: "Choose your service" },
  { id: 2, name: "Vehicle", description: "Select vehicle type" },
  { id: 3, name: "Schedule", description: "Pick date & time" },
  { id: 4, name: "Contact", description: "Your information" },
  { id: 5, name: "Confirm", description: "Review & submit" },
]

export function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [bookingData, setBookingData] = useState<BookingData>({
    service: "",
    vehicle: "",
    date: null,
    time: "",
    name: "",
    phone: "",
    email: "",
    address: "",
  })

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }))
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!bookingData.service
      case 2:
        return !!bookingData.vehicle
      case 3:
        return !!bookingData.date && !!bookingData.time
      case 4:
        return !!bookingData.name && !!bookingData.phone
      case 5:
        return true
      default:
        return false
    }
  }

  const handleNext = () => {
    if (currentStep < 5 && canProceed()) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError(null)
    
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...bookingData,
          date: bookingData.date?.toISOString(),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit booking")
      }

      setIsComplete(true)
    } catch {
      setError("There was an error submitting your booking. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isComplete) {
    return (
      <Card className="mx-auto max-w-2xl bg-secondary/30 border-border/50">
        <CardContent className="p-8 text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">Booking Submitted!</h2>
          <p className="text-muted-foreground mb-6">
            Thank you for your booking request. We&apos;ll confirm your appointment within 24 hours via phone or email.
          </p>
          <div className="p-4 rounded-lg bg-background/50 border border-border/50 text-left space-y-2">
            <p><span className="text-muted-foreground">Service:</span> <span className="text-foreground font-medium">{bookingData.service}</span></p>
            <p><span className="text-muted-foreground">Vehicle:</span> <span className="text-foreground font-medium">{bookingData.vehicle}</span></p>
            <p><span className="text-muted-foreground">Date:</span> <span className="text-foreground font-medium">{bookingData.date?.toLocaleDateString()}</span></p>
            <p><span className="text-muted-foreground">Time:</span> <span className="text-foreground font-medium">{bookingData.time}</span></p>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Questions? Call us at <a href="tel:1-720-745-9926" className="text-primary hover:underline">(720) 745-9926</a>
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress */}
      <div className="mb-8">
        <Progress value={(currentStep / 5) * 100} className="h-2 mb-4" />
        <div className="flex justify-between">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex flex-col items-center ${
                step.id === currentStep
                  ? "text-primary"
                  : step.id < currentStep
                  ? "text-primary/60"
                  : "text-muted-foreground"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-1 ${
                  step.id === currentStep
                    ? "bg-primary text-primary-foreground"
                    : step.id < currentStep
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step.id < currentStep ? <Check className="h-4 w-4" /> : step.id}
              </div>
              <span className="text-xs hidden sm:block">{step.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <Card className="bg-secondary/30 border-border/50">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            Step {currentStep}: {steps[currentStep - 1].description}
          </CardTitle>
          <CardDescription>
            {currentStep === 1 && "Select the detailing service you need"}
            {currentStep === 2 && "Tell us about your vehicle"}
            {currentStep === 3 && "Choose your preferred date and time"}
            {currentStep === 4 && "Enter your contact information"}
            {currentStep === 5 && "Review your booking details"}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          {currentStep === 1 && (
            <ServiceStep
              selected={bookingData.service}
              onSelect={(service) => updateBookingData({ service })}
            />
          )}
          {currentStep === 2 && (
            <VehicleStep
              selected={bookingData.vehicle}
              onSelect={(vehicle) => updateBookingData({ vehicle })}
            />
          )}
          {currentStep === 3 && (
            <DateTimeStep
              selectedDate={bookingData.date}
              selectedTime={bookingData.time}
              onDateSelect={(date) => updateBookingData({ date })}
              onTimeSelect={(time) => updateBookingData({ time })}
            />
          )}
          {currentStep === 4 && (
            <ContactStep
              data={bookingData}
              onUpdate={updateBookingData}
            />
          )}
          {currentStep === 5 && (
            <ConfirmStep data={bookingData} />
          )}

          {error && (
            <div className="mt-4 p-4 rounded-lg bg-destructive/10 border border-destructive/50 text-destructive text-sm">
              {error}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 1}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        
        {currentStep < 5 ? (
          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="flex items-center gap-2 neon-glow"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2 neon-glow"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Check className="h-4 w-4" />
                Submit Booking
              </>
            )}
          </Button>
        )}
      </div>
    </div>
  )
}
