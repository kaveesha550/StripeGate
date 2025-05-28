"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Header from "@/components/header"

const plans = {
  personal: {
    name: "Stripe Personal Account Setup",
    price: 89.99,
    features: [
      "Full verified USA Stripe account",
      "EIN Number & Verification Letter",
      "Payoneer Account",
      "USA Address & Phone Number",
      "Lifetime Support",
      "3-day delivery",
    ],
  },
  business: {
    name: "Stripe Business Account Setup",
    price: 179.99,
    features: [
      "Full verified USA Business Stripe account",
      "Legal company registration in the USA",
      "EIN Number & Verification Letter",
      "Payoneer Account under business name",
      "USA Business Address & Phone Number",
      "Free Mercury Bank Account",
      "Free Wise Business Account",
      "Lifetime Support",
      "5-day delivery",
    ],
  },
}

export default function CheckoutPage({ params }: { params: { plan: string } }) {
  const router = useRouter()
  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Get plan details based on URL parameter
    const planType = params.plan === "business" ? "business" : "personal"
    setSelectedPlan(plans[planType])
  }, [params.plan])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCustomerInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleProceedToPayment = () => {
    if (!customerInfo.name || !customerInfo.email) {
      alert("Please provide your name and email to continue.")
      return
    }

    setIsLoading(true)

    try {
      // Store customer info in localStorage for use on the payment page
      localStorage.setItem("customerName", customerInfo.name)
      localStorage.setItem("customerEmail", customerInfo.email)

      // Redirect to the payment page with the selected payment method
      router.push(`/payment/${params.plan}?method=bitcoin`)
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred. Please try again later.")
      setIsLoading(false)
    }
  }

  if (!selectedPlan) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  return (
    <>
      <Header />
      <div className="pt-32 pb-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          <Link href="/#services" className="flex items-center text-primary mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Plans
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Summary */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                  <CardDescription>Review your selected plan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg">{selectedPlan.name}</h3>
                      <p className="text-2xl font-bold text-primary">${selectedPlan.price}</p>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-2">What's included:</h4>
                      <ul className="space-y-2">
                        {selectedPlan.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Payment Options */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Information</CardTitle>
                  <CardDescription>Please provide your details to continue</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={customerInfo.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={customerInfo.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h3 className="font-medium text-blue-800 mb-2">Payment Information</h3>
                      <p className="text-blue-700 text-sm mb-2">
                        You'll be redirected to our secure payment processor to complete your payment with
                        cryptocurrency.
                      </p>
                      <p className="text-blue-700 text-sm">
                        We accept Bitcoin (BTC), Ethereum (ETH), USDT, and many other cryptocurrencies.
                      </p>
                    </div>

                    <Button
                      onClick={handleProceedToPayment}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-opacity"
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : "Proceed to Payment"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
