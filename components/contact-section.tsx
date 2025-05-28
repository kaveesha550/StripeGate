"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Phone, Mail, Clock, MapPin, CheckCircle, MessageCircle, Shield, Award, Star } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        // Reset form
        setFormData({ name: "", email: "", message: "" })
        // Show success message
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        alert("Failed to send message. Please try again later.")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Have questions about our services? Our friendly support team is here to help you 24/7.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            {/* Response time indicator */}
            <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Lightning-Fast Response</h3>
                  <p className="text-gray-600">We typically reply within 1 hour, 24/7</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full w-[95%]"></div>
                </div>
                <span className="text-sm font-medium">95%</span>
              </div>
              <p className="text-sm text-gray-500">of inquiries answered within 60 minutes</p>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mb-2">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                </div>
                <h4 className="font-bold text-sm mb-1">Friendly Support</h4>
                <p className="text-xs text-gray-600">Our team is known for being helpful and courteous</p>
              </div>
              <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <h4 className="font-bold text-sm mb-1">Secure Communication</h4>
                <p className="text-xs text-gray-600">Your information is always protected</p>
              </div>
              <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mb-2">
                  <Award className="h-5 w-5 text-yellow-600" />
                </div>
                <h4 className="font-bold text-sm mb-1">Expert Team</h4>
                <p className="text-xs text-gray-600">Knowledgeable specialists at your service</p>
              </div>
              <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-4 flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                  <Star className="h-5 w-5 text-purple-600" />
                </div>
                <h4 className="font-bold text-sm mb-1">Satisfaction Guaranteed</h4>
                <p className="text-xs text-gray-600">We ensure your issues are fully resolved</p>
              </div>
            </div>

            {/* Customer satisfaction widget */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
              <h3 className="font-bold mb-4 flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" fill="currentColor" /> Customer Satisfaction
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Response Time</span>
                    <span className="font-medium">Excellent</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full w-[98%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Friendliness</span>
                    <span className="font-medium">Excellent</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full w-[96%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Issue Resolution</span>
                    <span className="font-medium">Very Good</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-green-500 h-1.5 rounded-full w-[92%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="w-full min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                className={cn(
                  "w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity text-white py-6",
                  isSubmitting && "opacity-70 cursor-not-allowed",
                )}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">
                      <Clock className="h-4 w-4" />
                    </span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </>
                )}
              </Button>

              {isSubmitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">We'll get back to you within 1 hour.</p>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl mb-8 relative">
              <Image
                src="https://placehold.co/500x300/685fff/FFFFFF?text=Our+Support+Team"
                alt="Support team ready to help"
                width={500}
                height={300}
                className="w-full h-auto"
              />
              {/* Live support indicator */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Support Agent</p>
                    <p className="text-xs text-green-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span> Online now
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-8">
              <h3 className="font-bold mb-4">Direct Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Email Us</h3>
                    <p className="text-gray-600">support@stripegate.com</p>
                    <p className="text-sm text-gray-500 mt-1">We respond to every message within 1 hour</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Call or WhatsApp</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600 mt-1">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                        WhatsApp
                      </span>{" "}
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">24/7 Support</h3>
                    <p className="text-gray-600">Our team is available around the clock</p>
                    <div className="flex items-center mt-2">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                        <div key={day} className="flex flex-col items-center mr-2 last:mr-0">
                          <span className="text-xs text-gray-500">{day}</span>
                          <span className="w-6 h-1 bg-primary rounded-full mt-1"></span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Location</h3>
                    <p className="text-gray-600">123 Business Avenue, Suite 100</p>
                    <p className="text-gray-600">Delaware, USA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial widget */}
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h3 className="font-bold mb-4">What Customers Say About Our Support</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 italic mb-2">
                    "Their customer service is exceptional. I had an issue with my account setup and they resolved it
                    within 30 minutes. Truly impressive!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                    <span className="text-xs font-medium">Michael T., E-commerce Owner</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 italic mb-2">
                    "The support team at StripeGate is incredibly friendly and knowledgeable. They helped me set up my
                    payment gateway with patience and expertise."
                  </p>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full mr-2"></div>
                    <span className="text-xs font-medium">Sarah L., SaaS Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
