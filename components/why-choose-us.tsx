"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import Image from "next/image"

const features = [
  "100% Legal and compliant Stripe account setup",
  "3-day account setup and activation",
  "No hidden charges",
  "Lifetime support",
]

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why Choose Us</h2>

        <div ref={ref} className="flex flex-col md:flex-row items-center gap-12">
          <div
            className={cn(
              "md:w-1/2 transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
            )}
          >
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </span>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={cn(
              "md:w-1/2 transition-all duration-700",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
            )}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/500x400/685fff/FFFFFF?text=Global+Payment+Support+Team"
                alt="Global payment support team"
                width={500}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg w-48 md:w-64">
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="font-medium">Support Agent</p>
                    <p className="text-sm text-gray-500">Online</p>
                  </div>
                </div>
                <p className="text-sm">How can I help you set up your Stripe account today?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
