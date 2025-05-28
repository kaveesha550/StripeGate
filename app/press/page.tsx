import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Download, FileText, Mail } from "lucide-react"
import Image from "next/image"

export default function PressPage() {
  // Sample press releases
  const pressReleases = [
    {
      id: 1,
      title: "StripeGate Launches New Business Account Services to Support Global Entrepreneurs",
      date: "August 15, 2023",
      excerpt:
        "StripeGate announces the launch of comprehensive Business Account services designed to help entrepreneurs in developing countries access global markets through Stripe's payment infrastructure.",
      link: "#",
    },
    {
      id: 2,
      title: "StripeGate Celebrates Milestone of 1,000+ Businesses Onboarded",
      date: "May 3, 2023",
      excerpt:
        "StripeGate has officially helped over 1,000 businesses from non-supported countries set up compliant payment processing systems, enabling millions in global transactions.",
      link: "#",
    },
    {
      id: 3,
      title: "StripeGate Partners with Leading E-commerce Platforms for Seamless Integration",
      date: "February 22, 2023",
      excerpt:
        "New strategic partnerships with major e-commerce platforms will make it easier than ever for businesses in developing countries to integrate global payment processing.",
      link: "#",
    },
  ]

  // Sample media coverage
  const mediaCoverage = [
    {
      id: 1,
      source: "TechCrunch",
      title: "How StripeGate is Democratizing Global Payment Processing",
      date: "July 18, 2023",
      link: "#",
    },
    {
      id: 2,
      source: "Forbes",
      title: "StripeGate Named in 'Top 20 Fintech Startups to Watch'",
      date: "June 5, 2023",
      link: "#",
    },
    {
      id: 3,
      source: "Entrepreneur",
      title: "Breaking Down Borders: StripeGate's Mission to Connect Global Commerce",
      date: "April 11, 2023",
      link: "#",
    },
    {
      id: 4,
      source: "Financial Times",
      title: "The Rise of Payment Gateway Services for Emerging Markets",
      date: "March 8, 2023",
      link: "#",
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold mb-6">Press & Media</h1>
              <p className="text-lg text-gray-700 mb-8">
                Welcome to the StripeGate press center. Find our latest news, press releases, media coverage, and
                resources. For press inquiries, please contact our media relations team.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  <Mail className="mr-2 h-4 w-4" /> Contact Media Relations
                </Button>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" /> Download Press Kit
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600&text=StripeGate+Press"
                  alt="StripeGate Press"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Press Releases</h2>

            <div className="space-y-8">
              {pressReleases.map((release) => (
                <div key={release.id} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="text-sm text-gray-500 mb-2">{release.date}</div>
                  <h3 className="text-xl font-bold mb-3">{release.title}</h3>
                  <p className="text-gray-700 mb-4">{release.excerpt}</p>
                  <Link href={release.link} className="text-primary hover:text-primary/80 flex items-center">
                    Read Full Release <FileText className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline">View All Press Releases</Button>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Media Coverage</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaCoverage.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-primary/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {item.source}
                    </span>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="font-bold mb-3">{item.title}</h3>
                  <Link href={item.link} className="text-primary hover:text-primary/80 text-sm flex items-center">
                    Read Article <FileText className="ml-2 h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline">View All Media Coverage</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Company Facts</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Founded in 2018</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Headquartered in Delaware, USA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Team of 40+ professionals across 12 countries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Serving clients in 80+ countries</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span>Over 1,500 payment gateways set up</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Leadership</h2>
              <ul className="space-y-4">
                <li>
                  <p className="font-medium">John Smith</p>
                  <p className="text-sm text-gray-600">CEO & Founder</p>
                </li>
                <li>
                  <p className="font-medium">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">Chief Operating Officer</p>
                </li>
                <li>
                  <p className="font-medium">Michael Chen</p>
                  <p className="text-sm text-gray-600">Chief Technology Officer</p>
                </li>
                <li>
                  <p className="font-medium">Elena Rodriguez</p>
                  <p className="text-sm text-gray-600">VP of Global Operations</p>
                </li>
              </ul>
              <Button variant="link" className="mt-4 p-0 h-auto">
                View Full Leadership Team
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Resources</h2>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-primary hover:text-primary/80 flex items-center">
                    <Download className="mr-2 h-4 w-4" /> Company Logo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:text-primary/80 flex items-center">
                    <Download className="mr-2 h-4 w-4" /> Product Photos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:text-primary/80 flex items-center">
                    <Download className="mr-2 h-4 w-4" /> Brand Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:text-primary/80 flex items-center">
                    <Download className="mr-2 h-4 w-4" /> Executive Bios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-primary hover:text-primary/80 flex items-center">
                    <Download className="mr-2 h-4 w-4" /> Company Fact Sheet
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-8 rounded-lg text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Media Contact</h2>
            <p className="mb-6">For press inquiries, interview requests, or additional information:</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <p className="font-medium">Media Relations</p>
                <p>press@stripegate.com</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <p className="font-medium">Phone</p>
                <p>+1 (555) 234-5678</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
