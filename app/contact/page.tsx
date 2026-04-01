"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Loader2 } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(720) 745-9926",
    href: "tel:1-720-745-9926",
    description: "Call or text anytime",
  },
  {
    icon: Mail,
    label: "Email",
    value: "maxsmobiledetailllc@gmail.com",
    href: "mailto:maxsmobiledetailllc@gmail.com",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Longmont, Colorado",
    href: null,
    description: "And surrounding areas",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat: 8AM - 6PM",
    href: null,
    description: "Sunday by appointment",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    console.log("[v0] Contact form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Get in <span className="text-primary neon-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about our services? Need a custom quote? We&apos;re here to help. Reach out and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="neon-glow">
                  <a href="tel:1-720-745-9926" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/booking">Book Online</a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-secondary/30 border-border/50">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We&apos;ll be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <FieldGroup className="space-y-4">
                      <Field>
                        <FieldLabel>Name</FieldLabel>
                        <Input
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-12 bg-background/50 border-border/50"
                        />
                      </Field>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field>
                          <FieldLabel>Email</FieldLabel>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="h-12 bg-background/50 border-border/50"
                          />
                        </Field>
                        <Field>
                          <FieldLabel>Phone</FieldLabel>
                          <Input
                            type="tel"
                            placeholder="(720) 555-0123"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="h-12 bg-background/50 border-border/50"
                          />
                        </Field>
                      </div>

                      <Field>
                        <FieldLabel>Message</FieldLabel>
                        <Textarea
                          placeholder="How can we help you?"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          className="min-h-[150px] bg-background/50 border-border/50"
                        />
                      </Field>

                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full neon-glow">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </FieldGroup>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
