import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <p className="text-gray-500 mb-8">Last Updated: April 8, 2023</p>

          <div className="prose max-w-none">
            <p className="mb-6">
              This Cookie Policy explains how StripeGate ("we", "us", or "our") uses cookies and similar technologies on
              our website. We encourage you to read this policy to understand what cookies we use and how we use them.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. What Are Cookies?</h2>
            <p className="mb-6">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website.
              They are widely used to make websites work more efficiently and provide information to the website owners.
              Cookies enhance user experience by remembering your preferences and enabling certain site functions.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Types of Cookies We Use</h2>
            <p className="mb-4">We use the following types of cookies on our website:</p>

            <h3 className="text-xl font-bold mt-6 mb-2">2.1 Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function properly. They enable basic functions like page
              navigation and access to secure areas of the website. The website cannot function properly without these
              cookies.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">2.2 Preference Cookies</h3>
            <p className="mb-4">
              These cookies allow the website to remember choices you make (such as your preferred language or the
              region you are in) and provide enhanced, more personal features.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">2.3 Analytics Cookies</h3>
            <p className="mb-4">
              These cookies collect information about how visitors use our website, including which pages visitors go to
              most often and if they receive error messages. We use this information to improve our website and your
              experience.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-2">2.4 Marketing Cookies</h3>
            <p className="mb-6">
              These cookies track your online activity to help advertisers deliver more relevant advertising or to limit
              how many times you see an ad. These cookies can share information with other organizations or advertisers.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Specific Cookies We Use</h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_ga</td>
                    <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">Used by Google Analytics to distinguish users</td>
                    <td className="border border-gray-300 px-4 py-2">2 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">_gid</td>
                    <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">Used by Google Analytics to distinguish users</td>
                    <td className="border border-gray-300 px-4 py-2">24 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">_gat</td>
                    <td className="border border-gray-300 px-4 py-2">Analytics</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Used by Google Analytics to throttle request rate
                    </td>
                    <td className="border border-gray-300 px-4 py-2">1 minute</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">stripe_gate_session</td>
                    <td className="border border-gray-300 px-4 py-2">Essential</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Maintains user session state across page requests
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">stripe_gate_preferences</td>
                    <td className="border border-gray-300 px-4 py-2">Preference</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Stores user preferences for website functionality
                    </td>
                    <td className="border border-gray-300 px-4 py-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Third-Party Cookies</h2>
            <p className="mb-6">
              We may allow third parties to place cookies on your device when you visit our website. These cookies
              enable third-party features or functionality to be provided on or through our website, such as analytics,
              advertising, and interaction with social media networks. The third parties may use these cookies to
              collect information about your online activities over time and across different websites.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. How to Manage Cookies</h2>
            <p className="mb-4">
              Most web browsers allow you to manage your cookie preferences. You can set your browser to refuse cookies
              or delete certain cookies. Generally, you can also manage similar technologies in the same way that you
              manage cookies using your browser's preferences.
            </p>
            <p className="mb-6">
              Please note that if you choose to block cookies, you may not be able to use the full functionality of our
              website.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">6. Changes to This Cookie Policy</h2>
            <p className="mb-6">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
              Cookie Policy on this page and updating the "Last Updated" date at the top of this policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
            <p className="mb-10">
              If you have any questions about our Cookie Policy, please contact us at privacy@stripegate.com.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-bold mb-4">More Information</h2>
            <p className="mb-4">
              For more information about how we protect your data, please read our{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
            <p>
              If you have specific questions about cookies or our data practices, please don't hesitate to contact our
              privacy team.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
