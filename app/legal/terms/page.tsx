import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | StripeGate",
  description: "Read StripeGate's terms of service for our Stripe account setup and payment processing services.",
  robots: "noindex, nofollow",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: January 1, 2024</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using StripeGate's services, you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by the above, please do not use this
                  service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
                <p className="text-gray-700 mb-4">
                  StripeGate provides Stripe account setup services for businesses in non-supported countries. Our
                  services include:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Personal Stripe account setup</li>
                  <li>Business Stripe account setup with legal entity registration</li>
                  <li>EIN number acquisition</li>
                  <li>Business address and phone number provision</li>
                  <li>Banking account setup (Payoneer, Mercury, Wise)</li>
                  <li>Ongoing support and maintenance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Legal Compliance</h2>
                <p className="text-gray-700 mb-4">
                  All services provided by StripeGate are fully legal and compliant with US and international
                  regulations. We operate under proper business licenses and maintain compliance with:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>US business registration requirements</li>
                  <li>Anti-Money Laundering (AML) regulations</li>
                  <li>Know Your Customer (KYC) requirements</li>
                  <li>Payment Card Industry (PCI) standards</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Customer Responsibilities</h2>
                <p className="text-gray-700 mb-4">Customers are responsible for:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Providing accurate and truthful information</li>
                  <li>Maintaining compliance with their local tax obligations</li>
                  <li>Using the Stripe account in accordance with Stripe's terms of service</li>
                  <li>Notifying us of any changes to their business or contact information</li>
                  <li>Ensuring their business activities are legal in their jurisdiction</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  Payment for our services is required upfront before account setup begins. We accept cryptocurrency
                  payments (Bitcoin, Ethereum, USDT). All payments are non-refundable once account setup has commenced.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Service Delivery</h2>
                <p className="text-gray-700 mb-4">
                  We guarantee delivery within the specified timeframes (3 days for personal accounts, 5 days for
                  business accounts) from the date of payment confirmation and receipt of all required documentation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  StripeGate's liability is limited to the amount paid for our services. We are not responsible for any
                  actions taken by Stripe, banking institutions, or regulatory bodies after account setup.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Privacy and Data Protection</h2>
                <p className="text-gray-700 mb-4">
                  We are committed to protecting your privacy and personal information. All data is handled in
                  accordance with our Privacy Policy and applicable data protection regulations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
                <p className="text-gray-700 mb-4">
                  Either party may terminate this agreement with written notice. Upon termination, all obligations cease
                  except for payment obligations and confidentiality requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
                <p className="text-gray-700 mb-4">For questions about these Terms of Service, please contact us at:</p>
                <p className="text-gray-700">
                  Email: legal@stripegate.com
                  <br />
                  Address: 1234 Business Ave, Suite 100, New York, NY 10001, USA
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
