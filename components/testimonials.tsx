"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

interface TestimonialProps {
  name: string
  role: string
  content: string
  rating: number
  delay: number
}

function Testimonial({ name, role, content, rating, delay }: TestimonialProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-xl p-8 shadow-lg transition-all duration-700 border border-gray-100",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} size={20} />
        ))}
      </div>

      <p className="text-gray-700 mb-6">{content}</p>

      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 to-blue-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">What Our Clients Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial
            name="Sarah Johnson"
            role="E-commerce Owner"
            content="Setting up my Stripe account through StripeGate was incredibly easy. I was able to start accepting payments globally within days, which has significantly expanded my business reach."
            rating={5}
            delay={0}
          />

          <Testimonial
            name="Michael Chen"
            role="SaaS Founder"
            content="As a tech startup in a non-supported country, payment processing was our biggest challenge. StripeGate's Stripe setup service solved it completely, allowing us to focus on growing our product."
            rating={5}
            delay={200}
          />

          <Testimonial
            name="Elena Rodriguez"
            role="Digital Agency Director"
            content="The Stripe business account setup was worth every penny. Not only did we get Stripe access, but the additional bank accounts have streamlined our international operations."
            rating={4}
            delay={400}
          />
        </div>
      </div>
    </section>
  )
}
