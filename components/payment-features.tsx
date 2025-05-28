"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { CreditCard, Shield, Globe } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-xl p-8 shadow-lg transition-all duration-700",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default function PaymentFeatures() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">Payment Processing Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<CreditCard size={48} />}
            title="Multiple Payment Methods"
            description="Accept credit cards, digital wallets, and local payment methods from customers worldwide."
            delay={0}
          />

          <FeatureCard
            icon={<Shield size={48} />}
            title="Enhanced Security"
            description="PCI DSS compliant with advanced fraud protection to keep your transactions secure."
            delay={200}
          />

          <FeatureCard
            icon={<Globe size={48} />}
            title="Global Coverage"
            description="Process payments from anywhere in the world, regardless of your location or business registration."
            delay={400}
          />
        </div>
      </div>
    </section>
  )
}
