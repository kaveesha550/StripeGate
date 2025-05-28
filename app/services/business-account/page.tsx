import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BusinessAccountPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-6">Business Stripe Account Setup</h1>
              <p className="text-lg text-gray-700 mb-6">
                Our Business Stripe Account setup service provides a comprehensive payment processing infrastructure for
                companies in non-supported countries. With legal US business registration and multiple banking options,
                this premium service gives you everything needed for professional global commerce.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg mb-8">
                <p className="text-2xl font-bold mb-2">$179.99</p>
                <p className="text-gray-700">One-time setup fee</p>
              </div>
              <Link href="/checkout/business">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-opacity text-white py-6 px-8 text-lg">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/600x400/685fff/FFFFFF?text=Business+StripeGate+Account"
                  alt="Business StripeGate Account"
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
                    <p className="font-medium">Full verified USA Business Stripe account</p>
                    <p className="text-gray-600 text-sm">
                      A fully functional business StripeGate account registered in the USA
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Legal company registration in the USA</p>
                    <p className="text-gray-600 text-sm">
                      Complete business registration with all necessary documentation
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">EIN Number & Verification Letter</p>
                    <p className="text-gray-600 text-sm">Legal Employer Identification Number for US tax compliance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Payoneer Account under business name</p>
                    <p className="text-gray-600 text-sm">For easy withdrawals to your local bank account</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Free Mercury Bank Account</p>
                    <p className="text-gray-600 text-sm">Digital banking designed for businesses</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Free Wise Business Account</p>
                    <p className="text-gray-600 text-sm">Multi-currency account for international transactions</p>
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
                    <p className="font-medium">Professional Business Presence</p>
                    <p className="text-gray-600 text-sm">
                      Establish a legitimate US business entity for greater credibility
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Multiple Banking Options</p>
                    <p className="text-gray-600 text-sm">
                      Access to Mercury and Wise accounts for optimal financial management
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Higher Processing Limits</p>
                    <p className="text-gray-600 text-sm">
                      Business accounts typically allow for higher transaction volumes
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Enhanced Business Features</p>
                    <p className="text-gray-600 text-sm">
                      Access to additional StripeGate features available only to business accounts
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Prioritized Customer Support</p>
                    <p className="text-gray-600 text-sm">Dedicated assistance for business account holders</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Who owns the registered business?</h3>
                <p className="text-gray-700">
                  The business is registered in your name as the owner. You receive all the necessary documentation
                  proving your ownership of the company.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">How do taxes work with a US-registered business?</h3>
                <p className="text-gray-700">
                  We provide guidance on tax compliance both in the US and in your home country. Our service includes
                  basic tax information, but we recommend consulting with a tax professional for your specific
                  situation.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  What's the difference between the personal and business account?
                </h3>
                <p className="text-gray-700">
                  The business account includes legal US business registration, multiple banking options (Mercury and
                  Wise), and generally higher processing limits. It's ideal for established businesses and those
                  planning significant growth.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">How long does the setup take?</h3>
                <p className="text-gray-700">
                  Business account setup typically takes 5 days due to the additional services included. This includes
                  business registration, StripeGate account setup, and configuration of all banking options.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to establish your global business presence?</h2>
            <Link href="/checkout/business">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-opacity text-white py-6 px-8 text-lg">
                Get Your Business Stripe Account Now
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
