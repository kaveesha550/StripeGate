import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">About StripeGate</h1>

          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              StripeGate was founded with a simple yet powerful mission: to make global payment processing accessible to
              entrepreneurs and businesses in countries where Stripe doesn't operate.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
            <p className="mb-6">
              We believe that geographical location shouldn't limit your business potential. Our team of payment
              processing experts and international business consultants have developed a 100% legal and compliant
              solution to enable businesses in non-supported countries to access Stripe's powerful payment
              infrastructure.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">How We Started</h2>
            <p className="mb-6">
              Our journey began in 2010 when our founder, a tech entrepreneur from a developing country, experienced
              firsthand the frustrations of being unable to process global payments efficiently. After manually creating
              a complex solution for his own business, he realized that thousands of other entrepreneurs faced the same
              challenge.
            </p>
            <p className="mb-6">
              This led to the creation of StripeGate - a service dedicated to bridging the global payment divide and
              empowering businesses worldwide.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg my-12">
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Accessibility:</span> Making global payment solutions available to all
                  businesses
                </li>
                <li>
                  <span className="font-semibold">Integrity:</span> Operating with complete transparency and within
                  legal frameworks
                </li>
                <li>
                  <span className="font-semibold">Empowerment:</span> Enabling entrepreneurs to compete on a global
                  scale
                </li>
                <li>
                  <span className="font-semibold">Excellence:</span> Providing reliable, high-quality services with
                  exceptional support
                </li>
                <li>
                  <span className="font-semibold">Innovation:</span> Constantly improving our solutions to meet evolving
                  needs
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-4">Our Team</h2>
            <p className="mb-6">
              StripeGate is powered by a diverse team of payment processing experts, international legal consultants,
              and customer support specialists. With team members across 12 countries, we bring global perspective and
              local expertise to solve your payment challenges.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-4">Our Commitment</h2>
            <p className="mb-10">
              We're committed to providing not just a service, but a complete solution that allows you to focus on
              growing your business. From account setup to ongoing support, our team is dedicated to your success in the
              global marketplace.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
