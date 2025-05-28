import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BusinessRegistrationPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-6">US Business Registration</h1>
              <p className="text-lg text-gray-700 mb-6">
                Our US Business Registration service provides entrepreneurs and companies from around the world with a
                legitimate US business presence. This service is included with our Business StripeGate Account package
                but can also be purchased separately for those who need a US business entity for other purposes.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg mb-8">
                <p className="text-2xl font-bold mb-2">$129.99</p>
                <p className="text-gray-700">One-time registration fee</p>
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
                  src="/placeholder.svg?height=400&width=600&text=US+Business+Registration"
                  alt="US Business Registration"
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
                    <p className="font-medium">Legal US Company Formation</p>
                    <p className="text-gray-600 text-sm">
                      Registration of an LLC or Corporation in the state of your choice
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">EIN (Employer Identification Number)</p>
                    <p className="text-gray-600 text-sm">Federal Tax ID for your business</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">US Business Address</p>
                    <p className="text-gray-600 text-sm">Physical business address in the United States</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">US Phone Number</p>
                    <p className="text-gray-600 text-sm">Dedicated US phone number for your business</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Complete Documentation</p>
                    <p className="text-gray-600 text-sm">
                      All legal documents including Articles of Organization/Incorporation
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Registered Agent Service (1 year)</p>
                    <p className="text-gray-600 text-sm">Required legal representative in the US</p>
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
                    <p className="font-medium">Global Business Credibility</p>
                    <p className="text-gray-600 text-sm">Enhance your company's image with a US business presence</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Access to US Financial Services</p>
                    <p className="text-gray-600 text-sm">
                      Qualify for US banking, payment processors, and financial tools
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Expanded Market Access</p>
                    <p className="text-gray-600 text-sm">Easier access to US customers and business partners</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Legal Protection</p>
                    <p className="text-gray-600 text-sm">US LLCs provide liability protection for business owners</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Investment Opportunities</p>
                    <p className="text-gray-600 text-sm">Better positioning for attracting US-based investors</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">US Business Infrastructure</p>
                    <p className="text-gray-600 text-sm">
                      Complete business setup including address and communication channels
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
                <h3 className="text-lg font-medium mb-2">Which states do you register businesses in?</h3>
                <p className="text-gray-700">
                  We primarily register businesses in Delaware, Wyoming, and Nevada, which are known for their
                  business-friendly regulations and tax benefits. If you have a specific state preference, please let us
                  know during the registration process.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">
                  Do I need to travel to the US to complete the registration?
                </h3>
                <p className="text-gray-700">
                  No, our service handles the entire registration process remotely. You do not need to travel to the US
                  or be physically present at any point during the registration process.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">What about US taxes for my business?</h3>
                <p className="text-gray-700">
                  Your US business will have tax obligations in the United States. We provide basic guidance on tax
                  requirements, but we recommend consulting with a tax professional for comprehensive tax planning that
                  considers both US and your home country tax laws.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">What ongoing fees should I expect?</h3>
                <p className="text-gray-700">
                  After the initial registration fee, there will be annual state filing fees and registered agent
                  renewal fees. These vary by state but typically range from $50-300 per year. We'll provide detailed
                  information about these ongoing costs during the registration process.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to establish your US business presence?</h2>
            <Link href="/checkout/business">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition-opacity text-white py-6 px-8 text-lg">
                Start Your US Business Registration
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
