"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { ClipboardList, CreditCard, CheckCircle } from "lucide-react"

interface StepProps {
  icon: React.ReactNode
  title: string
  description: string
  step: number
  delay: number
}

function Step({ icon, title, description, step, delay }: StepProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-xl p-8 shadow-md transition-all duration-700 relative flex flex-col items-center text-center",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
        {step}
      </div>
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <Step
            icon={<ClipboardList size={48} />}
            title="Choose an Account"
            description="Select between a Personal or Business Stripe account based on your needs."
            step={1}
            delay={0}
          />

          <Step
            icon={<CreditCard size={48} />}
            title="Pay & Send Details"
            description="Make payment and provide the necessary setup details for your account."
            step={2}
            delay={200}
          />

          <Step
            icon={<CheckCircle size={48} />}
            title="Wait & Accept Payments"
            description="Your setup is completed in just 3 days, then you can start accepting payments."
            step={3}
            delay={400}
          />
        </div>
      </div>
    </section>
  )
}
