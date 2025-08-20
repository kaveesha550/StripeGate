"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { trackButtonClick } from "@/lib/analytics"

export default function HeroSection() {
  const handleGetStarted = () => {
    trackButtonClick("Get Started", "Hero Section")
    const servicesSection = document.getElementById("services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleContactUs = () => {
    trackButtonClick("Contact Us", "Hero Section")
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              Stripe Payment Solutions for Unsupported Countries
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Get Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                Stripe Account
              </span>{" "}
              Setup with StripeGate
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              We help businesses in non-supported countries legally access Stripe's powerful payment platform. Start
              accepting global payments in just 3 days.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity text-white text-lg px-8 py-6 rounded-lg"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 text-lg px-8 py-6 rounded-lg bg-transparent"
                onClick={handleContactUs}
              >
                Contact Us
              </Button>
            </div>

            {/* Key benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">100% Legal Compliance</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">3-Day Setup Time</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Global Payment Acceptance</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Lifetime Support</span>
              </div>
            </div>
          </div>

          {/* Right content - Image and floating elements */}
          <div className="lg:w-1/2 relative">
            <div className="relative bg-white p-2 rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-8 bg-gray-100 flex items-center px-3 gap-1.5">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>

              <div className="pt-8 rounded-lg overflow-hidden">
                <img
                  src="/images/stripe-checkout-dashboard.png"
                  alt="Stripe checkout page and analytics dashboard showing payment processing, revenue tracking, and business metrics"
                  className="w-full h-auto object-cover"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.currentTarget.src = "/placeholder.svg?height=400&width=600&text=Stripe+Dashboard"
                  }}
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg w-48 md:w-64 border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Payment Received</p>
                    <p className="text-xs text-gray-500">$1,250.00 USD</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium text-sm">Monthly Revenue</p>
                </div>
                <div className="h-10 flex items-end gap-1">
                  <div className="w-4 h-4 bg-primary/20 rounded-sm"></div>
                  <div className="w-4 h-5 bg-primary/30 rounded-sm"></div>
                  <div className="w-4 h-7 bg-primary/50 rounded-sm"></div>
                  <div className="w-4 h-6 bg-primary/40 rounded-sm"></div>
                  <div className="w-4 h-8 bg-primary/60 rounded-sm"></div>
                  <div className="w-4 h-10 bg-primary rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Pricing indicator */}
            <div className="absolute -bottom-4 right-10 bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg">
              <p className="text-sm font-medium">Starting at</p>
              <p className="text-2xl font-bold">$39.99</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
