import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

interface SuccessPageProps {
  params: {
    plan: string
  }
}

export default function SuccessPage({ params }: SuccessPageProps) {
  const plan = params.plan

  const planDetails = {
    personal: {
      title: "Stripe Personal Account Setup",
      price: "$39.99",
      deliveryTime: "3 days",
    },
    business: {
      title: "Stripe Business Account Setup",
      price: "$169.99",
      deliveryTime: "5 days",
    },
  }

  const details = plan === "business" ? planDetails.business : planDetails.personal

  return (
    <main className="min-h-screen pt-32 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-green-200">
            <CardHeader className="text-center">
              <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl md:text-3xl text-green-700">Payment Successful!</CardTitle>
              <CardDescription>Thank you for your purchase. Your order has been confirmed.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-medium text-lg mb-4">Order Summary</h3>

                  <div className="flex justify-between mb-2">
                    <span>Service:</span>
                    <span className="font-medium">{details.title}</span>
                  </div>

                  <div className="flex justify-between mb-2">
                    <span>Amount paid:</span>
                    <span className="font-medium">{details.price}</span>
                  </div>

                  <div className="flex justify-between mb-2">
                    <span>Order ID:</span>
                    <span className="font-medium">
                      {Math.floor(Math.random() * 1000000)
                        .toString()
                        .padStart(6, "0")}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                  <h3 className="font-medium text-lg mb-4 text-blue-800">What happens next?</h3>

                  <ol className="space-y-4">
                    <li className="flex gap-3">
                      <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-800 text-sm font-medium">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-blue-800">Order Processing</p>
                        <p className="text-blue-700">Our team will review your order and begin the setup process.</p>
                      </div>
                    </li>

                    <li className="flex gap-3">
                      <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-800 text-sm font-medium">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-blue-800">Information Request</p>
                        <p className="text-blue-700">
                          We'll contact you via email for any additional information needed for your setup.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-3">
                      <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-800 text-sm font-medium">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-blue-800">Account Setup</p>
                        <p className="text-blue-700">
                          We'll set up your Stripe account and all included services within {details.deliveryTime}.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-3">
                      <div className="bg-blue-100 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-800 text-sm font-medium">4</span>
                      </div>
                      <div>
                        <p className="font-medium text-blue-800">Delivery</p>
                        <p className="text-blue-700">
                          You'll receive your account credentials and setup instructions via email.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center">
              <div className="space-y-4 w-full">
                <Link href="/" className="w-full">
                  <Button className="w-full bg-gradient-to-r from-primary to-purple-600">Return to Home</Button>
                </Link>

                <Link href="/contact" className="w-full">
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  )
}
