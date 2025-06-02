"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Info } from "lucide-react"
import { useRouter } from "next/navigation"

interface CheckoutPageProps {
  params: {
    plan: string
  }
}

export default function CheckoutPage({ params }: CheckoutPageProps) {
  const router = useRouter()
  const plan = params.plan
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
  })

  const planDetails = {
    personal: {
      title: "Stripe Personal Account Setup",
      price: "$39.99",
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
      title: "Stripe Business Account Setup",
      price: "$169.99",
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

  const details = plan === "business" ? planDetails.business : planDetails.personal

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCustomerInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleProceedToPayment = () => {
    if (customerInfo.name && customerInfo.email) {
      // Store customer info in localStorage for the next step
      localStorage.setItem("customerInfo", JSON.stringify(customerInfo))
      router.push(`/payment/crypto/${plan}`)
    }
  }

  return (
    <main className="min-h-screen pt-32 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Checkout</h1>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>Review your order details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">{details.title}</h3>
                    <p className="text-2xl font-bold text-primary">{details.price}</p>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">What's included:</h4>
                    <ul className="space-y-2">
                      {details.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Customer Information & Payment Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Basic Customer Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Customer Information</CardTitle>
                <CardDescription>Please provide your contact details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={customerInfo.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Information Note */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-500" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 mb-3">
                    You'll be redirected to our secure payment processor to complete your payment with cryptocurrency.
                  </p>
                  <p className="text-blue-700 font-medium">
                    We accept Bitcoin (BTC), Ethereum (ETH), USDT, and many other cryptocurrencies
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleProceedToPayment}
                  disabled={!customerInfo.name || !customerInfo.email}
                  className="w-full bg-gradient-to-r from-primary to-purple-600"
                >
                  Proceed to Payment
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
