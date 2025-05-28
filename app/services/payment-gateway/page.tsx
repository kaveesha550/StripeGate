import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PaymentGatewayPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-6">Payment Gateway Setup</h1>
              <p className="text-lg text-gray-700 mb-6">
                Our Payment Gateway Setup service provides a complete solution for integrating Stripe's powerful payment
                processing capabilities into your website or application. Whether you're running an e-commerce store,
                SaaS platform, or any other online business, our team ensures a smooth implementation that meets your
                specific needs.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg mb-8">
                <p className="text-sm text-gray-700 mb-1">Starting from</p>
                <p className="text-2xl font-bold mb-2">$39.99</p>
                <p className="text-gray-700">Choose between Personal or Business account</p>
              </div>
              <Link href="/#services">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-opacity text-white py-6 px-8 text-lg">
                  Choose Your Plan
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=Payment+Gateway+Setup"
                  alt="Payment Gateway Setup"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Account Setup</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0 mt-1" />
                  <span>StripeGate account configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0 mt-1" />
                  <span>Verification & compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0 mt-1" />
                  <span>Payment methods setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0 mt-1" />
                  <span>Webhooks configuration</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Integration Support</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0 mt-1" />
                  <span>Website integration guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0 mt-1" />
                  <span>API implementation assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0 mt-1" />
                  <span>Checkout page optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0 mt-1" />
                  <span>Testing and troubleshooting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Ongoing Support</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0 mt-1" />
                  <span>Lifetime technical support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0 mt-1" />
                  <span>Payment issue resolution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0 mt-1" />
                  <span>Account maintenance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-5 w-5 flex-shrink-0 mt-1" />
                  <span>Updates and optimization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Integration Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h3 className="font-bold mb-2">Account Setup</h3>
                <p className="text-gray-600 text-sm">
                  We configure your StripeGate account based on your business needs
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">2</span>
                </div>
                <h3 className="font-bold mb-2">Technical Assessment</h3>
                <p className="text-gray-600 text-sm">We analyze your website or platform to plan the integration</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">3</span>
                </div>
                <h3 className="font-bold mb-2">Integration</h3>
                <p className="text-gray-600 text-sm">We implement the payment gateway with your platform</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">4</span>
                </div>
                <h3 className="font-bold mb-2">Testing & Launch</h3>
                <p className="text-gray-600 text-sm">
                  We thoroughly test and then help you go live with your payment system
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">What platforms do you support for integration?</h3>
                <p className="text-gray-700">
                  We support most major platforms including WordPress, Shopify, WooCommerce, Magento, custom websites,
                  mobile apps, and more. If you have a specific platform not listed here, please contact us.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">How long does the integration process take?</h3>
                <p className="text-gray-700">
                  Standard integrations typically take 3-5 days after your StripeGate account is set up. More complex
                  integrations may take longer depending on your specific requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Do you offer custom development for payment features?</h3>
                <p className="text-gray-700">
                  Yes, we can provide custom development services for specific payment features like subscription
                  management, marketplace payment splits, or complex checkout flows. These services are quoted
                  separately based on your requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">What payment methods can I accept?</h3>
                <p className="text-gray-700">
                  With our integration, you can accept all payment methods supported by StripeGate, including
                  credit/debit cards, digital wallets (Apple Pay, Google Pay), and local payment methods in various
                  countries.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to integrate StripeGate payments into your platform?</h2>
            <Link href="/#services">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-opacity text-white py-6 px-8 text-lg">
                Choose Your Plan
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
