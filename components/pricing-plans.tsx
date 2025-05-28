"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PlanFeature {
  text: string
}

interface PricingPlanProps {
  title: string
  price: string
  features: PlanFeature[]
  isPopular?: boolean
  delay: number
  planType: string
}

function PricingPlan({ title, price, features, isPopular = false, delay, planType }: PricingPlanProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl p-8 transition-all duration-700 relative",
        isPopular ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-xl" : "bg-white shadow-lg",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-bold py-1 px-4 rounded-full text-sm">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span
              className={cn(
                "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                isPopular ? "bg-white text-primary" : "bg-primary text-white",
              )}
            >
              <Check className="w-3 h-3" />
            </span>
            <span className={isPopular ? "text-white" : "text-gray-700"}>{feature.text}</span>
          </li>
        ))}
      </ul>

      <Link href={`/checkout/${planType}`}>
        <Button
          className={cn(
            "w-full py-6",
            isPopular
              ? "bg-white text-primary hover:bg-gray-100"
              : "bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:opacity-90",
          )}
        >
          Get Started
        </Button>
      </Link>
    </div>
  )
}

export default function PricingPlans() {
  const personalFeatures = [
    { text: "Full verified USA Stripe account" },
    { text: "EIN Number & Verification Letter" },
    { text: "Payoneer Account" },
    { text: "USA Address & Phone Number" },
    { text: "Lifetime Support" },
    { text: "3-day delivery" },
  ]

  const businessFeatures = [
    { text: "Full verified USA Business Stripe account" },
    { text: "Legal company registration in the USA" },
    { text: "EIN Number & Verification Letter" },
    { text: "Payoneer Account under business name" },
    { text: "USA Business Address & Phone Number" },
    { text: "Free Mercury Bank Account" },
    { text: "Free Wise Business Account" },
    { text: "Lifetime Support" },
    { text: "5-day delivery" },
  ]

  return (
    <section className="py-16 md:py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Pricing Plans</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          <PricingPlan
            title="Stripe Personal Account Setup"
            price="$89.99"
            features={personalFeatures}
            delay={0}
            planType="personal"
          />

          <PricingPlan
            title="Stripe Business Account Setup"
            price="$179.99"
            features={businessFeatures}
            isPopular={true}
            delay={200}
            planType="business"
          />
        </div>
      </div>
    </section>
  )
}
