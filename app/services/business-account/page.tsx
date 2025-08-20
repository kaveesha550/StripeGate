import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Building, CreditCard, Globe, Shield, Star } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Business Stripe Account Setup - $119.99 | StripeGate",
  description:
    "Complete business Stripe account setup with legal USA company registration, EIN number, business bank accounts, and more. 5-day delivery with lifetime support.",
  keywords:
    "business stripe account, stripe business setup, company registration USA, business bank account, stripe for businesses",
  openGraph: {
    title: "Business Stripe Account Setup - Complete Business Solution",
    description:
      "Full business setup including legal company registration, Stripe account, and business banking. Perfect for serious businesses.",
    type: "website",
  },
}

export default function BusinessAccountPage() {
  const features = [
    "Full verified USA Business Stripe account",
    "Legal company registration in the USA",
    "EIN Number & Verification Letter",
    "Payoneer Account under business name",
    "USA Business Address & Phone Number",
    "Free Mercury Bank Account setup",
    "Free Wise Business Account setup",
    "Lifetime Support included",
    "5-day delivery guarantee",
    "100% legal and compliant",
  ]

  const benefits = [
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "Legal Business Entity",
      description: "Get a real USA company with all legal documentation and registration",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-primary" />,
      title: "Multiple Payment Options",
      description: "Accept payments through Stripe, bank transfers, and international methods",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Business Banking",
      description: "Access to Mercury and Wise business accounts for international operations",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Enterprise-Grade Security",
      description: "Full compliance with business regulations and payment security standards",
    },
  ]

  const comparison = [
    { feature: "Stripe Account", individual: "Individual", business: "Business" },
    { feature: "Legal Entity", individual: "Individual", business: "USA Company" },
    { feature: "Bank Accounts", individual: "Payoneer Only", business: "Payoneer + Mercury + Wise" },
    { feature: "Business Address", individual: "Personal Address", business: "Business Address" },
    { feature: "EIN Number", individual: "✓", business: "✓" },
    { feature: "Setup Time", individual: "3 days", business: "5 days" },
    { feature: "Price", individual: "$39.99", business: "$119.99" },
  ]

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              Most Popular Choice
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Stripe Account Setup</h1>
            <p className="text-xl text-gray-700 mb-8">
              Complete business solution with legal company registration, business banking, and full Stripe integration
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-3xl font-bold text-primary">$119.99</span>
              <span className="text-gray-600">One-time payment</span>
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">Best Value</div>
            </div>
            <Link href="/checkout/business">
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
            <h2 className="text-3xl font-bold text-center mb-12">Complete Business Package</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Everything Included</h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/5 to-purple-600/5 p-8 rounded-lg border border-primary/10">
                <h3 className="text-2xl font-bold mb-6">Perfect For</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• E-commerce businesses</li>
                  <li>• SaaS companies</li>
                  <li>• Digital agencies</li>
                  <li>• International businesses</li>
                  <li>• Serious entrepreneurs</li>
                  <li>• Companies needing business banking</li>
                </ul>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <span className="font-bold">Most Popular</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    95% of our business customers choose this package for its comprehensive features
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Business Account</h2>
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Individual vs Business Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-4 text-left">Feature</th>
                    <th className="border border-gray-300 p-4 text-center">Individual Account</th>
                    <th className="border border-gray-300 p-4 text-center">Business Account</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="border border-gray-300 p-4 font-medium">{row.feature}</td>
                      <td className="border border-gray-300 p-4 text-center">{row.individual}</td>
                      <td className="border border-gray-300 p-4 text-center font-medium text-primary">
                        {row.business}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Scale Your Business?</h2>
            <p className="text-xl mb-8">
              Get everything you need to run a professional business with global payment capabilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/checkout/business">
                <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">
                  Order Now - $119.99
                </Button>
              </Link>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 bg-transparent"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
