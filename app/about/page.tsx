import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Globe, Shield, Award, Target, Heart } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About StripeGate - Stripe Payment Solutions for Global Businesses",
  description:
    "Learn about StripeGate's mission to help businesses in non-supported countries access Stripe payment processing. Our story, values, and commitment to global commerce.",
  keywords:
    "about stripegate, stripe payment solutions, global payments, international business, payment processing company",
}

export default function AboutPage() {
  const stats = [
    { number: "1,500+", label: "Stripe Accounts Created", icon: <Users className="h-8 w-8" /> },
    { number: "150+", label: "Countries Served", icon: <Globe className="h-8 w-8" /> },
    { number: "99.9%", label: "Success Rate", icon: <Shield className="h-8 w-8" /> },
    { number: "12+", label: "Years Experience", icon: <Award className="h-8 w-8" /> },
  ]

  const values = [
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Mission-Driven",
      description:
        "We believe every business deserves access to world-class payment processing, regardless of location.",
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "100% Compliant",
      description: "All our services are fully legal and compliant with international regulations and standards.",
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Customer-First",
      description: "Your success is our success. We provide lifetime support and are always here to help.",
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "Global Impact",
      description: "Enabling businesses worldwide to participate in the global digital economy.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Former Stripe executive with 15+ years in fintech and international payments.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Payment systems architect with expertise in compliance and security infrastructure.",
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Operations",
      description: "International business specialist with deep knowledge of global regulations.",
    },
    {
      name: "David Kim",
      role: "Customer Success Director",
      description: "Dedicated to ensuring every customer achieves their payment processing goals.",
    },
  ]

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About StripeGate</h1>
            <p className="text-xl text-gray-700 mb-8">
              We're on a mission to democratize global payments by making Stripe accessible to businesses worldwide
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    StripeGate was founded in 2012 when our CEO, Sarah Johnson, experienced firsthand the frustration of
                    being unable to access Stripe while running a successful online business from a non-supported
                    country.
                  </p>
                  <p>
                    After spending months navigating complex regulations and compliance requirements, she successfully
                    set up a legal pathway to Stripe. Realizing that thousands of other entrepreneurs faced the same
                    challenge, she decided to create StripeGate to help businesses worldwide.
                  </p>
                  <p>
                    Today, we've helped over 1,500 businesses across 150+ countries access Stripe's powerful payment
                    processing capabilities, enabling them to compete in the global marketplace.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-purple-600/10 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-primary mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4">{value.icon}</div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl mb-8">Let us help you unlock global payment processing for your business</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#services">
                <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">View Our Services</Button>
              </Link>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
                >
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
