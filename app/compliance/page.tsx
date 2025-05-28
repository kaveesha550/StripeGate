import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Check, FileText, AlertTriangle } from "lucide-react"

export default function CompliancePage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Compliance & Legal Framework</h1>
          <p className="text-lg text-gray-700 mb-12">
            At StripeGate, we are committed to providing payment gateway services that are 100% legal and compliant with
            all applicable regulations. This page outlines our compliance practices and the legal framework we operate
            within.
          </p>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <div className="flex items-center mb-6">
              <Shield className="h-10 w-10 text-primary mr-4" />
              <h2 className="text-2xl font-bold">Our Compliance Commitment</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Our business model is designed to legally enable businesses and individuals in countries where Stripe
              doesn't operate to access global payment processing. We achieve this through a carefully structured and
              fully compliant framework that adheres to international financial regulations.
            </p>
            <p className="text-gray-700">
              All accounts we set up are legitimate, properly registered business entities in the United States. We
              don't use loopholes or gray areas - our method is transparent and follows all legal requirements.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Regulatory Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> US Business Requirements
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Legal business registration in appropriate US state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Tax compliance with IRS regulations including EIN registration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Proper business documentation and corporate structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Registered agent services for legal requirements</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Payment Processing Compliance
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Full adherence to Stripe's Terms of Service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Compliance with Payment Card Industry (PCI) standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Anti-money laundering (AML) protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Know Your Customer (KYC) verification procedures</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> International Compliance
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Compliance with Office of Foreign Assets Control (OFAC) regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Adherence to international fund transfer regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Cross-border payment reporting compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Respect for local regulations in client countries</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" /> Data & Privacy Compliance
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>GDPR compliance for data protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Secure handling of personal and financial information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Encrypted data storage and transfer protocols</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    <span>Transparent data collection and usage policies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-12">
            <div className="flex items-start">
              <AlertTriangle className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Prohibited Activities</h3>
                <p className="text-gray-700 mb-4">
                  While our service provides legitimate payment processing, we strictly prohibit the use of our services
                  for:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                    <span>Illegal goods or services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                    <span>Money laundering or fraudulent transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                    <span>Adult content or services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                    <span>Gambling or betting (unless properly licensed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                    <span>Sale of weapons, ammunition, or controlled substances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
                    <span>Any activity that violates Stripe's policies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Legal Documentation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link href="/terms" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Terms of Service</h3>
                <p className="text-sm text-gray-600">Our complete terms governing the use of our services</p>
              </Link>
              <Link href="/privacy" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Privacy Policy</h3>
                <p className="text-sm text-gray-600">How we collect, use, and protect your personal information</p>
              </Link>
              <Link
                href="/cookie-policy"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <FileText className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">Cookie Policy</h3>
                <p className="text-sm text-gray-600">Information about cookies and tracking technologies we use</p>
              </Link>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Our legal and compliance team is available to address any questions or concerns you may have about our
              services and how we ensure legal compliance.
            </p>
            <Button className="bg-primary hover:bg-primary/90">Contact Our Compliance Team</Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
