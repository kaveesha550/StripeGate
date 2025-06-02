"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, ArrowLeft, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface CryptoPaymentPageProps {
  params: {
    plan: string
  }
}

export default function CryptoPaymentPage({ params }: CryptoPaymentPageProps) {
  const router = useRouter()
  const plan = params.plan
  const [copied, setCopied] = useState(false)
  const [selectedCrypto, setSelectedCrypto] = useState("btc")
  const [paymentInfo, setPaymentInfo] = useState({
    transactionId: "",
    name: "",
    email: "",
  })

  const planDetails = {
    personal: {
      title: "Stripe Personal Account Setup",
      price: 39.99,
    },
    business: {
      title: "Stripe Business Account Setup",
      price: 169.99,
    },
  }

  const details = plan === "business" ? planDetails.business : planDetails.personal

  // Crypto conversion rates and addresses
  const cryptoData = {
    btc: {
      name: "BITCOIN",
      network: "Bitcoin Network",
      address: "bc1q7cw8jawzew2xkp6l37xmz475t5d8wqsrnfd4rx",
      amount: (details.price * 0.0000025).toFixed(6),
      icon: "BTC",
      color: "bg-orange-500",
    },
    eth: {
      name: "ETHEREUM",
      network: "Ethereum Network (ERC20)",
      address: "0xbDCD62C8011E5C5CEf8D09e923a37604D8F5818b",
      amount: (details.price * 0.000042).toFixed(6),
      icon: "ETH",
      color: "bg-blue-500",
    },
    usdt: {
      name: "USDT",
      network: "Tron Network (TRC20)",
      address: "TYP2ss83TiXkxapyWZpmJ9f2WdrgqVHRF8",
      amount: details.price.toFixed(2),
      icon: "USDT",
      color: "bg-green-500",
    },
  }

  const selectedCryptoData = cryptoData[selectedCrypto as keyof typeof cryptoData]

  // Load customer info from previous step
  useEffect(() => {
    const customerInfo = localStorage.getItem("customerInfo")
    if (customerInfo) {
      const parsed = JSON.parse(customerInfo)
      setPaymentInfo((prev) => ({
        ...prev,
        name: parsed.name,
        email: parsed.email,
      }))
    }
  }, [])

  // Handle copy to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPaymentInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitPayment = () => {
    if (paymentInfo.transactionId && paymentInfo.name && paymentInfo.email) {
      localStorage.setItem("paymentInfo", JSON.stringify(paymentInfo))
      router.push(`/payment/verification/${plan}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <span className="text-primary text-sm font-bold">S</span>
            </div>
            <span className="text-white text-xl font-bold">StripeGate</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-opacity-80">
              Home
            </Link>
            <Link href="/#services" className="text-white hover:text-opacity-80">
              Services
            </Link>
            <Link href="/#contact" className="text-white hover:text-opacity-80">
              Contact Us
            </Link>
            <Button variant="secondary" size="sm">
              Get Started
            </Button>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Back to Checkout */}
        <Link
          href={`/checkout/${plan}`}
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Checkout
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Payment Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 space-y-8">
              <div>
                <h1 className="text-2xl font-bold mb-2">Complete Your Payment</h1>
                <p className="text-gray-600">
                  Select your preferred cryptocurrency and send the exact amount to the address below
                </p>
              </div>

              {/* Select Cryptocurrency */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Select Cryptocurrency</h3>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(cryptoData).map(([key, crypto]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCrypto(key)}
                      className={`p-4 border-2 rounded-lg text-center transition-all ${
                        selectedCrypto === key ? "border-primary bg-primary/5" : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 ${crypto.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}
                      >
                        <span className="text-white font-bold text-sm">{crypto.icon}</span>
                      </div>
                      <div className="font-medium">{crypto.name}</div>
                      <div className="text-sm text-gray-500">{crypto.network}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Address and Amount */}
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">
                    {selectedCryptoData.name} Address ({selectedCryptoData.network})
                  </Label>
                  <div className="mt-1 flex items-center gap-2">
                    <Input value={selectedCryptoData.address} readOnly className="font-mono text-sm bg-gray-50" />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(selectedCryptoData.address)}
                      className="flex-shrink-0"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-700">Amount to Send</Label>
                  <div className="mt-1 flex items-center gap-2">
                    <Input
                      value={`${selectedCryptoData.amount} ${selectedCryptoData.icon}`}
                      readOnly
                      className="font-mono text-sm bg-gray-50"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(`${selectedCryptoData.amount}`)}
                      className="flex-shrink-0"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Payment Instructions */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-3">Payment Instructions</h4>
                <ol className="space-y-2 text-sm text-blue-700">
                  <li>
                    1. Send exactly {selectedCryptoData.amount} {selectedCryptoData.icon} to the address above
                  </li>
                  <li>2. Ensure you're sending from a wallet you control (not an exchange)</li>
                  <li>3. After sending, enter the transaction ID/hash below</li>
                  <li>4. Complete the form with your details and submit</li>
                  <li>5. We'll review your payment and send a confirmation email when verified</li>
                </ol>
              </div>

              {/* Verify Your Payment */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Verify Your Payment</h3>

                <div>
                  <Label htmlFor="transactionId" className="text-sm font-medium text-gray-700">
                    Transaction ID/Hash *
                  </Label>
                  <Input
                    id="transactionId"
                    name="transactionId"
                    value={paymentInfo.transactionId}
                    onChange={handleInputChange}
                    placeholder="Enter the transaction ID from your wallet"
                    className="mt-1"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">This helps us verify your payment on the blockchain</p>
                </div>

                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={paymentInfo.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="mt-1"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Your Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={paymentInfo.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="mt-1"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    We'll send your receipt and setup instructions to this email
                  </p>
                </div>

                <Button
                  onClick={handleSubmitPayment}
                  disabled={!paymentInfo.transactionId || !paymentInfo.name || !paymentInfo.email}
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 py-6"
                >
                  Verify Payment <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 ${selectedCryptoData.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{selectedCryptoData.icon}</span>
                  </div>
                  <div>
                    <div className="font-medium">{details.title}</div>
                    <div className="text-sm text-gray-500">Paying with {selectedCryptoData.name}</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${details.price.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Network Fee</span>
                    <span>$0.00</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${details.price.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>In {selectedCryptoData.name}</span>
                      <span>
                        {selectedCryptoData.amount} {selectedCryptoData.icon}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium mb-2">Need Help?</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    If you're having trouble with your payment, please contact our support team.
                  </p>
                  <Link href="/#contact">
                    <Button variant="outline" size="sm" className="w-full">
                      Contact Support
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
