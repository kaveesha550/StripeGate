import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, CreditCard, Shield, Clock, Users } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Personal Stripe Account Setup - $39.99 | StripeGate",
  description:
    "Get your personal Stripe account set up in 3 days for just $39.99. Includes EIN number, Payoneer account, USA address & phone number. Perfect for freelancers and individual businesses.",
  keywords:
    "personal stripe account, stripe setup, freelancer payments, individual stripe account, stripe for non-supported countries",
  openGraph: {
    title: "Personal Stripe Account Setup - Accept Global Payments",
    description:
      "Professional Stripe account setup for individuals and freelancers. Start accepting international payments in just 3 days.",
    type: "website",
  },
}

export default function PersonalAccountPage() {
  const features = [
    "Full verified USA Stripe account",
    "EIN Number & Verification Letter",
    "Payoneer Account setup",
    "USA Address & Phone Number",
    "Lifetime Support included",
    "3-day delivery guarantee",
    "100% legal and compliant",
    "No monthly fees",
  ]

  const benefits = [
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Accept Global Payments",
      description: "Process payments from customers worldwide with full Stripe functionality",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "100% Legal Setup",
      description: "Fully compliant account setup that meets all regulatory requirements",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Quick 3-Day Setup",
      description: "Get your account ready to accept payments in just 3 business days",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Lifetime Support",
      description: "Ongoing support to help you maximize your payment processing",
    },
  ]

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Personal Stripe Account Setup</h1>
            <p className="text-xl text-gray-700 mb-8">
              Perfect for freelancers, consultants, and individual businesses who need to accept global payments
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-3xl font-bold text-primary">$39.99</span>
              <span className="text-gray-600">One-time payment</span>
            </div>
            <Link href="/checkout/personal">
              <Button className="bg-gradient-to-r from-primary to-purple-600 text-white text-lg px-8 py-6">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Complete Package Features</h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Perfect For</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Freelancers and consultants</li>
                  <li>• Individual service providers</li>
                  <li>• Small online businesses</li>
                  <li>• Content creators and influencers</li>
                  <li>• Digital product sellers</li>
                  <li>• Anyone in non-Stripe countries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Personal Account Setup</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4">{benefit.icon}</div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Start Accepting Global Payments?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Join thousands of satisfied customers who are now processing payments worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/checkout/personal">
                <Button className="bg-gradient-to-r from-primary to-purple-600 text-white text-lg px-8 py-6">
                  Order Now - $39.99
                </Button>
              </Link>
              <Link href="/#contact">
                <Button variant="outline" className="text-lg px-8 py-6">
                  Have Questions?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
