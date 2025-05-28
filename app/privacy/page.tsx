import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last Updated: April 8, 2023</p>

          <div className="prose max-w-none">
            <p className="mb-6">
              At StripeGate, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you use our website and services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>

            <h3 className="text-xl font-bold mt-6 mb-2">1.1 Personal Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name, email address, phone number</li>
              <li>Billing address and payment information</li>
              <li>Government-issued identification documents</li>
              <li>Business information (for business accounts)</li>
              <li>IP address and browser information</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2">1.2 Usage Information</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Pages visited on our website</li>
              <li>Time spent on pages</li>
              <li>Links clicked</li>
              <li>Referring website or source</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect for various purposes, including to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide and maintain our services</li>
              <li>Process transactions and send transaction notifications</li>
              <li>Verify your identity and prevent fraud</li>
              <li>Communicate with you about your account or our services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Information Sharing and Disclosure</h2>
            <p className="mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>
                Service providers that help us deliver our services (payment processors, verification services, etc.)
              </li>
              <li>Business partners with your consent</li>
              <li>Legal authorities when required by law or to protect our rights</li>
              <li>Affiliated companies as part of our business operations</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect your personal information.
              However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Retention</h2>
            <p className="mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Restriction of processing of your personal information</li>
              <li>Data portability</li>
              <li>Objection to processing of your personal information</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
            <p className="mb-6">
              We use cookies and similar tracking technologies to track activity on our website and hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">8. Children's Privacy</h2>
            <p className="mb-6">
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
              information from children under 18.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">9. International Data Transfers</h2>
            <p className="mb-6">
              Your information may be transferred to and processed in countries other than the country in which you
              reside. These countries may have data protection laws that are different from those in your country.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            <p className="mb-10">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
            <p>
              Email: privacy@stripegate.com
              <br />
              Address: 123 Business Avenue, Suite 100, Delaware, USA
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
