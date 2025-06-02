"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle, Upload, Plus, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

interface VerificationPageProps {
  params: {
    plan: string
  }
}

interface ShareholderInfo {
  fullName: string
  email: string
  phoneNumber: string
  address: string
  identityDoc: File | null
}

export default function VerificationPage({ params }: VerificationPageProps) {
  const router = useRouter()
  const plan = params.plan
  const [includeShareholders, setIncludeShareholders] = useState(false)
  const [accountInfo, setAccountInfo] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    businessName: "",
    businessAddress: "",
    website: "",
    identityDoc: null as File | null,
  })
  const [shareholders, setShareholders] = useState<ShareholderInfo[]>([])

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
  const isBusinessPlan = plan === "business"

  useEffect(() => {
    // Load payment info from previous step
    const paymentInfo = localStorage.getItem("paymentInfo")
    if (paymentInfo) {
      const parsed = JSON.parse(paymentInfo)
      setAccountInfo((prev) => ({
        ...prev,
        fullName: parsed.name,
        email: parsed.email,
      }))
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setAccountInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setAccountInfo((prev) => ({ ...prev, identityDoc: file }))
  }

  const handleShareholderChange = (index: number, field: string, value: string) => {
    setShareholders((prev) =>
      prev.map((shareholder, i) => (i === index ? { ...shareholder, [field]: value } : shareholder)),
    )
  }

  const handleShareholderFileChange = (index: number, file: File | null) => {
    setShareholders((prev) =>
      prev.map((shareholder, i) => (i === index ? { ...shareholder, identityDoc: file } : shareholder)),
    )
  }

  const addShareholder = () => {
    setShareholders((prev) => [
      ...prev,
      {
        fullName: "",
        email: "",
        phoneNumber: "",
        address: "",
        identityDoc: null,
      },
    ])
  }

  const removeShareholder = (index: number) => {
    setShareholders((prev) => prev.filter((_, i) => i !== index))
  }

  const handleIncludeShareholdersChange = (checked: boolean) => {
    setIncludeShareholders(checked)
    if (checked && shareholders.length === 0) {
      addShareholder()
    } else if (!checked) {
      setShareholders([])
    }
  }

  const handleSubmit = () => {
    // Here you would typically submit all the information to your backend
    router.push(`/payment/success/${plan}`)
  }

  return (
    <main className="min-h-screen pt-32 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Payment Under Review Notice */}
          <Card className="mb-8 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <CheckCircle className="h-6 w-6" />
                Payment Under Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 mb-2">
                Thank you for your payment! Your transaction is currently under review and you will receive a
                confirmation email once it's verified.
              </p>
              <p className="text-blue-600 font-medium">
                Please complete the information below to create your verified Stripe account.
              </p>
            </CardContent>
          </Card>

          {/* Account Information Form */}
          <Card>
            <CardHeader>
              <CardTitle>Account Setup Information</CardTitle>
              <CardDescription>
                Please provide the required information to set up your {details.title.toLowerCase()}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={accountInfo.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={accountInfo.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phoneNumber">Phone Number *</Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      value={accountInfo.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="website">Website (Optional)</Label>
                    <Input
                      id="website"
                      name="website"
                      value={accountInfo.website}
                      onChange={handleInputChange}
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={accountInfo.address}
                    onChange={handleInputChange}
                    placeholder="Enter your full address"
                    required
                  />
                </div>
              </div>

              {/* Business Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Business Information</h3>

                <div>
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={accountInfo.businessName}
                    onChange={handleInputChange}
                    placeholder="Enter your business name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="businessAddress">Business Address *</Label>
                  <Textarea
                    id="businessAddress"
                    name="businessAddress"
                    value={accountInfo.businessAddress}
                    onChange={handleInputChange}
                    placeholder="Enter your business address"
                    required
                  />
                </div>
              </div>

              {/* Identity Documents */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Identity Documents</h3>

                <div>
                  <Label htmlFor="identityDoc">Upload Identity Document (ID Card/Passport/Driving License) *</Label>
                  <div className="mt-2">
                    <input
                      id="identityDoc"
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("identityDoc")?.click()}
                      className="w-full"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      {accountInfo.identityDoc ? accountInfo.identityDoc.name : "Choose File"}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Shareholders (Business Plan Only - Optional) */}
              {isBusinessPlan && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="includeShareholders"
                      checked={includeShareholders}
                      onCheckedChange={handleIncludeShareholdersChange}
                    />
                    <Label htmlFor="includeShareholders" className="text-lg font-semibold">
                      Include Shareholders Information (Optional)
                    </Label>
                  </div>

                  {includeShareholders && (
                    <div className="space-y-4 pl-6 border-l-2 border-gray-200">
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-600">
                          Add information for company shareholders or beneficial owners
                        </p>
                        <Button type="button" onClick={addShareholder} variant="outline" size="sm">
                          <Plus className="h-4 w-4 mr-2" />
                          Add Shareholder
                        </Button>
                      </div>

                      {shareholders.map((shareholder, index) => (
                        <div key={index} className="border rounded-lg p-4 space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Shareholder {index + 1}</h4>
                            {shareholders.length > 1 && (
                              <Button
                                type="button"
                                onClick={() => removeShareholder(index)}
                                variant="ghost"
                                size="sm"
                                className="text-red-600"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label>Full Name *</Label>
                              <Input
                                value={shareholder.fullName}
                                onChange={(e) => handleShareholderChange(index, "fullName", e.target.value)}
                                placeholder="Enter full name"
                                required
                              />
                            </div>
                            <div>
                              <Label>Email *</Label>
                              <Input
                                type="email"
                                value={shareholder.email}
                                onChange={(e) => handleShareholderChange(index, "email", e.target.value)}
                                placeholder="Enter email"
                                required
                              />
                            </div>
                          </div>

                          <div>
                            <Label>Phone Number *</Label>
                            <Input
                              value={shareholder.phoneNumber}
                              onChange={(e) => handleShareholderChange(index, "phoneNumber", e.target.value)}
                              placeholder="Enter phone number"
                              required
                            />
                          </div>

                          <div>
                            <Label>Address *</Label>
                            <Textarea
                              value={shareholder.address}
                              onChange={(e) => handleShareholderChange(index, "address", e.target.value)}
                              placeholder="Enter full address"
                              required
                            />
                          </div>

                          <div>
                            <Label>Upload Identity Document *</Label>
                            <div className="mt-2">
                              <input
                                type="file"
                                accept=".jpg,.jpeg,.png,.pdf"
                                onChange={(e) => handleShareholderFileChange(index, e.target.files?.[0] || null)}
                                className="hidden"
                                id={`shareholderDoc-${index}`}
                              />
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => document.getElementById(`shareholderDoc-${index}`)?.click()}
                                className="w-full"
                              >
                                <Upload className="h-4 w-4 mr-2" />
                                {shareholder.identityDoc ? shareholder.identityDoc.name : "Choose File"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button onClick={handleSubmit} className="w-full bg-gradient-to-r from-primary to-purple-600">
                Submit Account Information
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
