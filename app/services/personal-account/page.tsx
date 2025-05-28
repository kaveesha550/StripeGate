import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PersonalAccountPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-6">Personal Stripe Account Setup</h1>
              <p className="text-lg text-gray-700 mb-6">
                Our Personal Stripe Account setup service enables individuals from non-supported countries to access
                Stripe's powerful payment processing capabilities. Set up in just 3 days, our service gives you
                everything you need to start accepting global payments immediately.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg mb-8">
                <p className="text-2xl font-bold mb-2">$89.99</p>
                <p className="text-gray-700">One-time setup fee</p>
              </div>
              <Link href="/checkout/personal">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-opacity text-white py-6 px-8 text-lg">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/600x400/685fff/FFFFFF?text=Personal+StripeGate+Account"
                  alt="Personal StripeGate Account"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Full verified USA Stripe account</p>
                    <p className="text-gray-600 text-sm">A fully functional Stripe account registered in the USA</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">EIN Number & Verification Letter</p>
                    <p className="text-gray-600 text-sm">Legal Employer Identification Number for US verification</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Payoneer Account</p>
                    <p className="text-gray-600 text-sm">For easy withdrawals to your local bank account</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">USA Address & Phone Number</p>
                    <p className="text-gray-600 text-sm">Legitimate US address and phone number for verification</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Global Payment Acceptance</p>
                    <p className="text-gray-600 text-sm">
                      Accept payments from customers worldwide using any major payment method
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Quick Setup</p>
                    <p className="text-gray-600 text-sm">Start accepting payments in just 3 days</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">100% Legal Compliance</p>
                    <p className="text-gray-600 text-sm">
                      All accounts are legally registered and compliant with regulations
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Lifetime Support</p>
                    <p className="text-gray-600 text-sm">
                      Our team will assist you with any issues or questions that arise
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Is this service legal?</h3>
                <p className="text-gray-700">
                  Yes, our service is 100% legal. We create a fully compliant StripeGate account using legitimate
                  business structures that adhere to all applicable regulations.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">How do I get paid from my StripeGate account?</h3>
                <p className="text-gray-700">
                  We set up a Payoneer account that connects to your Stripe account. Funds can be withdrawn from
                  Payoneer to your local bank account in your country.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">What information do I need to provide?</h3>
                <p className="text-gray-700">
                  You'll need to provide basic identification information and details about how you plan to use the
                  account. We've streamlined the process to make it as simple as possible.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Are there any monthly fees?</h3>
                <p className="text-gray-700">
                  No, there are no monthly fees. You pay a one-time setup fee of $89.99, and then only the standard
                  Stripe transaction fees apply (typically 2.9% + $0.30 per successful charge).
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to start accepting global payments?</h2>
            <Link href="/checkout/personal">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-opacity text-white py-6 px-8 text-lg">
                Get Your Personal Stripe Account Now
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
