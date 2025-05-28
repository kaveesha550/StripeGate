"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { Users, Building, Clock, BarChart3 } from "lucide-react"

interface StatProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
}

function StatItem({ icon, value, label, suffix = "" }: StatProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const countingDone = useRef(false)

  useEffect(() => {
    if (inView && !countingDone.current) {
      const duration = 2000 // ms
      const steps = 50
      const stepTime = duration / steps
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
          countingDone.current = true
        } else {
          setCount(Math.floor(current))
        }
      }, stepTime)

      return () => clearInterval(timer)
    }
  }, [inView, value])

  return (
    <div ref={ref} className="flex flex-col items-center p-6 transition-transform duration-300 hover:scale-105">
      <div className="text-primary mb-4">{icon}</div>
      <div className="text-4xl md:text-5xl font-bold mb-2 flex items-center">
        <span className="animate-counter">{count}</span>
        <span>{suffix}</span>
      </div>
      <p className="text-gray-600 text-lg">{label}</p>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Global Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem icon={<Users size={48} />} value={1500} label="Stripe Accounts Created" suffix="+" />
          <StatItem icon={<Building size={48} />} value={999} label="Companies Registered" suffix="+" />
          <StatItem icon={<Clock size={48} />} value={12} label="Years of Experience" suffix="+" />
          <StatItem icon={<BarChart3 size={48} />} value={98} label="Customer Satisfaction" suffix="%" />
        </div>
      </div>
    </section>
  )
}
