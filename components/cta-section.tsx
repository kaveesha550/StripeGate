"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CtaSection() {
  const router = useRouter()

  const handleGetStarted = () => {
    // Navigate to the pricing/services section
    if (typeof document !== "undefined") {
      const servicesSection = document.getElementById("services")
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" })
      } else {
        router.push("/#services")
      }
    } else {
      router.push("/#services")
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://placehold.co/1600x800/685fff/FFFFFF?text=World+Map"
          alt="World map"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            If you are in a Stripe-unsupported country, No problem!
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Let us set up your Stripe account today and start accepting global payments within days.
          </p>
          <Button
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-opacity text-white text-lg px-8 py-6 rounded-lg"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}
