import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | StripeGate",
  description: "StripeGate's privacy policy explaining how we collect, use, and protect your personal information.",
  robots: "noindex, nofollow",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last updated: January 1, 2024</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">We collect information you provide directly to us, such as:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Business information (company name, business type, website)</li>
                  <li>Identity verification documents (passport, driver's license)</li>
                  <li>Payment information (cryptocurrency transaction details)</li>
                  <li>Communication records (emails, support tickets)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Provide and maintain our services</li>
                  <li>Process your account setup requests</li>
                  <li>Verify your identity and comply with legal requirements</li>
                  <li>Communicate with you about our services</li>
                  <li>Provide customer support</li>
                  <li>Improve our services and develop new features</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>To service providers who assist in our operations</li>
                  <li>When required by law or legal process</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. This includes:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Encryption of sensitive data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Secure data centers and infrastructure</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  We retain your personal information for as long as necessary to provide our services and comply with
                  legal obligations. Account setup information is typically retained for 7 years for compliance
                  purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information (subject to legal requirements)</li>
                  <li>Object to processing of your information</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar tracking technologies to improve your experience on our website. You can
                  control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. International Transfers</h2>
                <p className="text-gray-700 mb-4">
                  Your information may be transferred to and processed in countries other than your own. We ensure
                  appropriate safeguards are in place for such transfers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-gray-700">Email: privacy@stripegate.com</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
