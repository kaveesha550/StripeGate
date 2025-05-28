import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, MapPin, Clock, DollarSign } from "lucide-react"

export default function CareersPage() {
  // Sample job listings
  const jobs = [
    {
      id: 1,
      title: "Payment Gateway Specialist",
      department: "Technical Operations",
      location: "Remote",
      type: "Full-time",
      salary: "$60,000 - $80,000",
      description:
        "We're looking for an experienced Payment Gateway Specialist to help our clients set up and optimize their Stripe payment processing systems.",
      responsibilities: [
        "Configure and troubleshoot Stripe payment gateways",
        "Assist clients with integration and technical issues",
        "Stay updated on Stripe features and best practices",
        "Collaborate with the client success team to ensure seamless payment experiences",
        "Implement security best practices for payment processing",
      ],
      requirements: [
        "2+ years experience with payment gateways (Stripe preferred)",
        "Strong knowledge of API integrations",
        "Excellent problem-solving skills",
        "Experience with e-commerce platforms",
        "Customer service mindset",
      ],
    },
    {
      id: 2,
      title: "International Business Consultant",
      department: "Business Development",
      location: "Remote",
      type: "Full-time",
      salary: "$70,000 - $90,000",
      description:
        "Join our team as an International Business Consultant to help businesses navigate global payment solutions and expand their operations internationally.",
      responsibilities: [
        "Advise clients on international business structures",
        "Assist with business registration in the US and other jurisdictions",
        "Develop strategies for global payment acceptance",
        "Consult on compliance and regulatory requirements",
        "Create customized solutions for clients' specific needs",
      ],
      requirements: [
        "3+ years experience in international business consulting",
        "Knowledge of global payment systems and regulations",
        "Understanding of US business formation and operation",
        "Excellent communication and client management skills",
        "Bachelor's degree in Business, Finance, or related field",
      ],
    },
    {
      id: 3,
      title: "Client Success Manager",
      department: "Customer Support",
      location: "Remote",
      type: "Full-time",
      salary: "$50,000 - $70,000",
      description:
        "We're seeking a Client Success Manager to ensure our clients have an exceptional experience and achieve success with our payment gateway solutions.",
      responsibilities: [
        "Onboard new clients and guide them through our services",
        "Serve as the main point of contact for assigned clients",
        "Identify upsell opportunities and additional service needs",
        "Gather and address client feedback",
        "Collaborate with technical teams to resolve client issues",
      ],
      requirements: [
        "2+ years in customer success or account management",
        "Experience in fintech or payment processing preferred",
        "Strong communication and relationship-building skills",
        "Problem-solving aptitude and client-first mindset",
        "Ability to understand technical concepts and explain them simply",
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At StripeGate, we're building solutions that empower businesses around the world to participate in the
              global economy. Join us in our mission to make payment processing accessible to everyone, regardless of
              their location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Why Work With Us</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-2">Remote-First Culture</h3>
                  <p className="text-gray-700">
                    We're a globally distributed team with a flexible work environment that prioritizes results over
                    hours. Work from anywhere and maintain a healthy work-life balance.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-2">Global Impact</h3>
                  <p className="text-gray-700">
                    Your work directly helps entrepreneurs and businesses in developing countries access the global
                    market, creating real economic opportunities.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-2">Growth Opportunities</h3>
                  <p className="text-gray-700">
                    As a rapidly growing company, we offer significant opportunities for career advancement and the
                    chance to develop new skills across different areas.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg mb-2">Competitive Benefits</h3>
                  <p className="text-gray-700">
                    Enjoy competitive compensation, health benefits, paid time off, professional development allowances,
                    and more.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Our Values</h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-bold text-primary text-lg">Accessibility</h3>
                    <p className="text-gray-700">
                      We believe financial infrastructure should be accessible to everyone, regardless of location.
                    </p>
                  </li>

                  <li>
                    <h3 className="font-bold text-primary text-lg">Integrity</h3>
                    <p className="text-gray-700">
                      We operate with complete transparency and within legal frameworks to provide legitimate solutions.
                    </p>
                  </li>

                  <li>
                    <h3 className="font-bold text-primary text-lg">Empowerment</h3>
                    <p className="text-gray-700">
                      We enable entrepreneurs to compete on a global scale by providing the tools they need to succeed.
                    </p>
                  </li>

                  <li>
                    <h3 className="font-bold text-primary text-lg">Excellence</h3>
                    <p className="text-gray-700">
                      We strive for excellence in everything we do, from customer service to technical implementations.
                    </p>
                  </li>

                  <li>
                    <h3 className="font-bold text-primary text-lg">Innovation</h3>
                    <p className="text-gray-700">
                      We continuously improve our solutions to address evolving challenges in global commerce.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>

            <div className="space-y-8">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:border-primary/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-gray-500">{job.department}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                        <MapPin className="w-3 h-3 mr-1" /> {job.location}
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                        <Clock className="w-3 h-3 mr-1" /> {job.type}
                      </span>
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm flex items-center">
                        <DollarSign className="w-3 h-3 mr-1" /> {job.salary}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6">{job.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-bold mb-3">Responsibilities</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {job.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3">Requirements</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        {job.requirements.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button className="bg-primary hover:bg-primary/90">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
            <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-3">Don't see a position that fits?</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We're always on the lookout for talented individuals who are passionate about our mission. Send us your
              resume and let us know how you can contribute to our team.
            </p>
            <Button className="bg-primary hover:bg-primary/90">Submit Your Resume</Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
