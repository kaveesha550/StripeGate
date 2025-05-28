"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowLeft, Copy, CheckCircle, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import Header from "@/components/header"

const plans = {
  personal: {
    name: "Stripe Personal Account Setup",
    price: 89.99,
  },
  business: {
    name: "Stripe Business Account Setup",
    price: 179.99,
  },
}

const cryptoRates = {
  bitcoin: 0.000015, // BTC per USD (example rate)
  ethereum: 0.00025, // ETH per USD (example rate)
  usdt: 1, // USDT per USD (1:1)
}

// Real wallet addresses
const cryptoAddresses = {
  bitcoin: "bc1q7cw8jawzew2xkp6l37xmz475t5d8wqsrnfd4rx",
  ethereum: "0xbDCD62C8011E5C5CEf8D09e923a37604D8F5818b",
  usdt: "TYP2ss83TiXkxapyWZpmJ9f2WdrgqVHRF8", // USDT (TRC20)
}

const cryptoIcons = {
  bitcoin: "https://placehold.co/200x200/F7931A/FFFFFF?text=BTC",
  ethereum: "https://placehold.co/200x200/627EEA/FFFFFF?text=ETH",
  usdt: "https://placehold.co/200x200/26A17B/FFFFFF?text=USDT",
}

const cryptoNetworks = {
  bitcoin: "Bitcoin Network",
  ethereum: "Ethereum Network (ERC20)",
  usdt: "Tron Network (TRC20)",
}

export default function PaymentPage({ params }: { params: { plan: string } }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const paymentMethod = searchParams.get("method") || "bitcoin"

  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [copied, setCopied] = useState(false)
  const [transactionId, setTransactionId] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({
    transactionId: false,
    email: false,
    name: false,
  })

  useEffect(() => {
    // Get plan details based on URL parameter
    const planType = params.plan === "business" ? "business" : "personal"
    setSelectedPlan(plans[planType])

    // Get customer info from localStorage if available
    try {
      const storedName = localStorage.getItem("customerName")
      const storedEmail = localStorage.getItem("customerEmail")

      if (storedName) setCustomerName(storedName)
      if (storedEmail) setCustomerEmail(storedEmail)
    } catch (error) {
      console.error("Error accessing localStorage:", error)
    }
  }, [params.plan])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getCryptoAmount = () => {
    if (!selectedPlan) return 0
    return (selectedPlan.price * cryptoRates[paymentMethod as keyof typeof cryptoRates]).toFixed(
      paymentMethod === "bitcoin" ? 6 : paymentMethod === "ethereum" ? 5 : 2,
    )
  }

  const handleSubmitPayment = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate inputs
    const newErrors = {
      transactionId: !transactionId.trim(),
      email: !customerEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerEmail),
      name: !customerName.trim(),
    }

    setErrors(newErrors)

    if (newErrors.transactionId || newErrors.email || newErrors.name) {
      return
    }

    setIsSubmitting(true)

    try {
      // In a real implementation, you would send this data to your server
      // to store in a database for later verification
      const paymentData = {
        plan: params.plan,
        amount: selectedPlan.price,
        cryptoAmount: getCryptoAmount(),
        cryptoCurrency: paymentMethod,
        transactionId,
        customerEmail,
        customerName,
        timestamp: new Date().toISOString(),
      }

      console.log("Payment data:", paymentData)

      // Simulate processing
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to success page
      router.push(
        `/success/${params.plan}?method=${paymentMethod}&email=${encodeURIComponent(customerEmail)}&name=${encodeURIComponent(customerName)}`,
      )
    } catch (error) {
      console.error("Error submitting payment:", error)
      alert("There was an error processing your payment. Please try again.")
    } finally {
      setIsSubmitting(false)
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
          <Link href={`/checkout/${params.plan}`} className="flex items-center text-primary mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Checkout
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Payment Instructions */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Complete Your Payment</CardTitle>
                  <CardDescription>
                    Select your preferred cryptocurrency and send the exact amount to the address below
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Cryptocurrency Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Select Cryptocurrency</label>
                      <div className="grid grid-cols-3 gap-3">
                        {["bitcoin", "ethereum", "usdt"].map((crypto) => (
                          <div
                            key={crypto}
                            className={`border rounded-lg p-3 cursor-pointer transition-all ${
                              paymentMethod === crypto
                                ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                                : "border-gray-200 hover:border-primary/50"
                            }`}
                            onClick={() => router.push(`/payment/${params.plan}?method=${crypto}`)}
                          >
                            <div className="flex flex-col items-center">
                              <img
                                src={cryptoIcons[crypto as keyof typeof cryptoIcons] || "/placeholder.svg"}
                                alt={crypto}
                                className="w-12 h-12 mb-2"
                              />
                              <span className="font-medium text-sm">{crypto.toUpperCase()}</span>
                              <span className="text-xs text-gray-500">
                                {cryptoNetworks[crypto as keyof typeof cryptoNetworks]}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Wallet Address */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {paymentMethod.toUpperCase()} Address (
                        {cryptoNetworks[paymentMethod as keyof typeof cryptoNetworks]})
                      </label>
                      <div className="flex">
                        <Input
                          value={cryptoAddresses[paymentMethod as keyof typeof cryptoAddresses]}
                          readOnly
                          className="flex-1 bg-gray-50"
                        />
                        <Button
                          variant="outline"
                          className="ml-2"
                          onClick={() =>
                            copyToClipboard(cryptoAddresses[paymentMethod as keyof typeof cryptoAddresses])
                          }
                        >
                          {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    {/* Amount */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Amount to Send</label>
                      <div className="flex">
                        <Input
                          value={`${getCryptoAmount()} ${paymentMethod.toUpperCase()}`}
                          readOnly
                          className="flex-1 bg-gray-50"
                        />
                        <Button
                          variant="outline"
                          className="ml-2"
                          onClick={() => copyToClipboard(getCryptoAmount().toString())}
                        >
                          {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    {/* Instructions */}
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h3 className="font-medium text-blue-800 mb-2">Payment Instructions</h3>
                      <ol className="space-y-1 text-sm text-blue-700 list-decimal pl-4">
                        <li>
                          Send exactly {getCryptoAmount()} {paymentMethod.toUpperCase()} to the address above
                        </li>
                        <li>Ensure you're sending from a wallet you control (not an exchange)</li>
                        <li>After sending, enter the transaction ID/hash below</li>
                        <li>Complete the form with your details and submit</li>
                        <li>We'll review your payment and send a confirmation email when verified</li>
                      </ol>
                    </div>

                    {/* Transaction Verification Form */}
                    <form onSubmit={handleSubmitPayment} className="space-y-4 mt-8 border-t pt-6">
                      <h3 className="font-medium text-lg mb-4">Verify Your Payment</h3>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Transaction ID/Hash *</label>
                        <Input
                          value={transactionId}
                          onChange={(e) => setTransactionId(e.target.value)}
                          placeholder="Enter the transaction ID from your wallet"
                          className={errors.transactionId ? "border-red-500" : ""}
                        />
                        {errors.transactionId && (
                          <p className="text-red-500 text-sm mt-1">Transaction ID is required</p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">
                          This helps us verify your payment on the blockchain
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                        <Input
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="Enter your full name"
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Email *</label>
                        <Input
                          type="email"
                          value={customerEmail}
                          onChange={(e) => setCustomerEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">Valid email is required</p>}
                        <p className="text-xs text-gray-500 mt-1">
                          We'll send your receipt and setup instructions to this email
                        </p>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-opacity"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <Clock className="animate-spin mr-2 h-4 w-4" /> Processing...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            Verify Payment <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={cryptoIcons[paymentMethod as keyof typeof cryptoIcons] || "/placeholder.svg"}
                        alt={paymentMethod}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h3 className="font-bold">{selectedPlan.name}</h3>
                        <p className="text-sm text-gray-500">Paying with {paymentMethod.toUpperCase()}</p>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between mb-2">
                        <span>Subtotal</span>
                        <span>${selectedPlan.price}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Network Fee</span>
                        <span>$0.00</span>
                      </div>
                      <div className="flex justify-between font-bold text-lg pt-2 border-t">
                        <span>Total</span>
                        <span>${selectedPlan.price}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>In {paymentMethod.toUpperCase()}</span>
                        <span>
                          {getCryptoAmount()} {paymentMethod.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-2">Need Help?</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        If you're having trouble with your payment, please contact our support team.
                      </p>
                      <Button variant="outline" className="w-full">
                        Contact Support
                      </Button>
                    </div>
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
