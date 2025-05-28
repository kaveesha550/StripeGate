"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { ArrowRight, Upload, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Header from "@/components/header"

const plans = {
  personal: {
    name: "StripeGate Personal Account",
    price: 89.99,
    deliveryTime: "3 days",
  },
  business: {
    name: "StripeGate Business Account",
    price: 179.99,
    deliveryTime: "5 days",
  },
}

export default function SuccessPage({ params }: { params: { plan: string } }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const paymentMethod = searchParams.get("method") || "bitcoin"
  const customerEmail = searchParams.get("email") || ""
  const customerName = searchParams.get("name") || ""
  const planType = params.plan === "business" ? "business" : "personal"

  const [selectedPlan, setSelectedPlan] = useState<any>(null)
  const [formData, setFormData] = useState({
    // Personal information
    fullName: customerName,
    email: customerEmail,
    phoneNumber: "",
    businessName: "",

    // Business-specific information
    businessDirectorName: "",
    businessSecretaryName: "",

    // Document upload
    identityDocument: null,
    additionalInfo: "",
  })

  useEffect(() => {
    // Get plan details based on URL parameter
    setSelectedPlan(plans[planType])
  }, [planType])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // In a real implementation, you would send this data to your server
      // to store in a database and potentially send an email notification
      console.log("Form submitted:", formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Show success message and redirect to home
      alert(
        "Thank you! Your information has been submitted. We'll start setting up your StripeGate account right away.",
      )
      router.push("/")
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error submitting your information. Please try again.")
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
          <div className="max-w-3xl mx-auto">
            {/* Success Message */}
            <Card className="mb-8 border-yellow-200 bg-yellow-50">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-yellow-800 mb-2">Payment Under Review</h2>
                  <p className="text-yellow-700 mb-4">
                    Thank you for your purchase. Your payment for Stripe{" "}
                    {planType === "business" ? "Business" : "Personal"} Account Setup is being verified.
                  </p>
                  <div className="bg-white p-4 rounded-lg w-full max-w-md">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Order ID:</span>
                      <span className="font-medium">{Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Amount Paid:</span>
                      <span className="font-medium">${selectedPlan.price}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Payment Method:</span>
                      <span className="font-medium">{paymentMethod.toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Estimated Delivery:</span>
                      <span className="font-medium">{selectedPlan.deliveryTime}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Setup Form */}
            <Card>
              <CardHeader>
                <CardTitle>
                  Complete Your Stripe {planType === "business" ? "Business" : "Personal"} Account Setup
                </CardTitle>
                <CardDescription>
                  Please provide the following information to set up your Stripe account. We'll send you a confirmation
                  email when your payment is verified.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information Section */}
                  <div>
                    <h3 className="text-lg font-medium mb-4">Required Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phoneNumber">Phone Number *</Label>
                        <Input
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="businessName">
                          Business Name {planType === "personal" ? "(Optional)" : "*"}
                        </Label>
                        <Input
                          id="businessName"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="Your Business Name"
                          required={planType === "business"}
                        />
                      </div>

                      {planType === "business" && (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="businessDirectorName">Business Director Name *</Label>
                            <Input
                              id="businessDirectorName"
                              name="businessDirectorName"
                              value={formData.businessDirectorName}
                              onChange={handleChange}
                              placeholder="Director's Full Name"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="businessSecretaryName">Business Secretary Name *</Label>
                            <Input
                              id="businessSecretaryName"
                              name="businessSecretaryName"
                              value={formData.businessSecretaryName}
                              onChange={handleChange}
                              placeholder="Secretary's Full Name"
                              required
                            />
                          </div>
                        </>
                      )}

                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="identityDocument">Identity Document (Passport/ID) *</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            id="identityDocument"
                            name="identityDocument"
                            type="file"
                            onChange={handleFileChange}
                            className="flex-1"
                            required
                          />
                          <Button type="button" variant="outline" size="icon">
                            <Upload className="h-4 w-4" />
                          </Button>
                        </div>
                        <p className="text-xs text-gray-500">
                          Upload a clear photo or scan of your passport or government ID
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      placeholder="Any specific requirements or questions about your StripeGate account setup"
                      rows={4}
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-medium text-blue-800 mb-2">What happens next?</h3>
                    <ol className="space-y-1 text-sm text-blue-700 list-decimal pl-4">
                      <li>Our team will verify your payment on the blockchain</li>
                      <li>Once payment is confirmed, we'll send you a confirmation email</li>
                      <li>We'll review your information and begin setting up your StripeGate account</li>
                      <li>You'll receive updates via email throughout the process</li>
                      <li>Your account will be ready within {selectedPlan.deliveryTime}</li>
                    </ol>
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Information <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
