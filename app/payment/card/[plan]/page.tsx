"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { CreditCard, Calendar, Lock } from "lucide-react"

interface CardPaymentPageProps {
  params: {
    plan: string
  }
}

export default function CardPaymentPage({ params }: CardPaymentPageProps) {
  const router = useRouter()
  const plan = params.plan

  const planDetails = {
    personal: {
      title: "Stripe Personal Account Setup",
      price: "$39.99",
    },
    business: {
      title: "Stripe Business Account Setup",
      price: "$169.99",
    },
  }

  const details = plan === "business" ? planDetails.business : planDetails.personal

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    // Format card number with spaces
    if (name === "cardNumber") {
      const formatted = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
      setFormData({ ...formData, [name]: formatted.substring(0, 19) })
      return
    }

    // Format expiry date
    if (name === "expiry") {
      const formatted = value.replace(/\D/g, "")
      if (formatted.length <= 2) {
        setFormData({ ...formData, [name]: formatted })
      } else {
        setFormData({ ...formData, [name]: `${formatted.substring(0, 2)}/${formatted.substring(2, 4)}` })
      }
      return
    }

    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate payment processing
    setTimeout(() => {
      router.push(`/payment/success/${plan}`)
    }, 2000)
  }

  return (
    <main className="min-h-screen pt-32 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Card Payment</h1>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
              <CardDescription>Enter your card information to complete the purchase.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="cardName">Cardholder Name</Label>
                    </div>
                    <div className="relative">
                      <Input
                        id="cardName"
                        name="cardName"
                        placeholder="John Doe"
                        required
                        value={formData.cardName}
                        onChange={handleChange}
                        className="pl-10"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <div className="flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">
                          <rect width="24" height="16" fill="#1A1F71" rx="2" />
                          <polygon fill="#F7B600" points="15.245 15.046 17.799 0.954 21.821 0.954 19.267 15.046" />
                          <path
                            fill="#F7B600"
                            d="M9.5,1 C8.626,1 7.883,1.237 7.229,1.644 L7.229,1.644 L7.229,1.639 C6.529,2.07 6.026,2.679 5.705,3.2 L5.705,3.2 L0.475,15.046 L4.497,15.046 L5.382,12.428 L9.418,12.428 L9.513,15.046 L13.061,15.046 L12.443,1.003 Z M6.516,9.672 L8.004,4.968 L8.595,9.672 Z"
                          />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16">
                          <rect width="24" height="16" fill="#252525" rx="2" />
                          <circle cx="9" cy="8" r="5" fill="#EB001B" />
                          <circle cx="15" cy="8" r="5" fill="#F79E1B" />
                          <path
                            fill="#FF5F00"
                            d="M12,5.5 C13.109,6.3 13.909,7.6 13.909,9 C13.909,10.4 13.209,11.7 12,12.5 C10.791,11.7 10.091,10.4 10.091,9 C10.091,7.6 10.891,6.3 12,5.5 Z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="relative">
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        required
                        value={formData.cardNumber}
                        onChange={handleChange}
                        maxLength={19}
                        className="pl-10"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <CreditCard className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <div className="relative">
                        <Input
                          id="expiry"
                          name="expiry"
                          placeholder="MM/YY"
                          required
                          value={formData.expiry}
                          onChange={handleChange}
                          maxLength={5}
                          className="pl-10"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Calendar className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <div className="relative">
                        <Input
                          id="cvv"
                          name="cvv"
                          type="password"
                          placeholder="123"
                          required
                          value={formData.cvv}
                          onChange={handleChange}
                          maxLength={4}
                          className="pl-10"
                        />
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          <Lock className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email for Receipt</Label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10"
                      />
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span>Service:</span>
                      <span className="font-medium">{details.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total:</span>
                      <span className="font-bold text-primary">{details.price}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-center">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-purple-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : `Pay ${details.price}`}
                </Button>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500 mb-2">Your payment is secured with 256-bit SSL encryption</p>
                  <Link href={`/checkout/${plan}`} className="text-sm text-primary hover:underline">
                    Go back to payment methods
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </main>
  )
}
