import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last Updated: April 8, 2023</p>

          <div className="prose max-w-none">
            <p className="mb-6">
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the StripeGate
              website and services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="mb-6">
              By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of
              the terms, you may not access our services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Service Description</h2>
            <p className="mb-6">
              StripeGate provides payment gateway setup services for businesses in countries where Stripe does not
              directly operate. Our services include account setup, verification, and ongoing support.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Fees and Payment</h2>
            <p className="mb-6">
              3.1. You agree to pay all fees associated with our services as outlined on our pricing page.
              <br />
              3.2. All fees are non-refundable unless expressly stated otherwise.
              <br />
              3.3. We reserve the right to change our fees at any time, but will provide advance notice of any changes.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Account Setup and Verification</h2>
            <p className="mb-6">
              4.1. You must provide accurate and complete information during the account setup process.
              <br />
              4.2. You are responsible for maintaining the confidentiality of any credentials provided to you.
              <br />
              4.3. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Compliance with Laws</h2>
            <p className="mb-6">
              5.1. You agree to use our services only for lawful purposes and in compliance with all applicable laws and
              regulations.
              <br />
              5.2. You acknowledge that you are responsible for understanding and adhering to all laws and regulations
              related to your business activities and payment processing.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Prohibited Activities</h2>
            <p className="mb-6">You agree not to use our services for any of the following activities:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Sale of illegal goods or services</li>
              <li>Fraudulent transactions or money laundering</li>
              <li>Infringement of intellectual property rights</li>
              <li>Adult content or services</li>
              <li>Gambling or betting services (unless properly licensed)</li>
              <li>Sale of weapons, ammunition, or controlled substances</li>
              <li>Any activity that violates the terms of service of Stripe or our payment partners</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="mb-6">
              7.1. Our services are provided "as is" without warranties of any kind.
              <br />
              7.2. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of our services.
              <br />
              7.3. Our liability is limited to the amount you have paid us for services in the twelve-month period
              preceding the claim.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Indemnification</h2>
            <p className="mb-6">
              You agree to indemnify and hold harmless StripeGate, its affiliates, officers, agents, and employees from
              any claim or demand, including reasonable attorneys' fees, made by any third party due to or arising out
              of your use of our services, your violation of these Terms, or your violation of any rights of another.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. Termination</h2>
            <p className="mb-6">
              9.1. We may terminate or suspend your access to our services immediately, without prior notice or
              liability, for any reason.
              <br />
              9.2. Upon termination, your right to use our services will immediately cease.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to Terms</h2>
            <p className="mb-6">
              We reserve the right to modify or replace these Terms at any time. We will provide notice of any changes
              by posting the new Terms on our website. Your continued use of our services after any changes constitutes
              acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">11. Governing Law</h2>
            <p className="mb-10">
              These Terms shall be governed by the laws of the United States, without regard to its conflict of law
              principles. Any disputes arising from these Terms shall be resolved in the courts located in Delaware,
              USA.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-bold mb-4">Questions About Our Terms?</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us at support@stripegate.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
