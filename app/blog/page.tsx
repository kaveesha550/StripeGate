import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "How to Accept Global Payments in Non-Supported StripeGate Countries",
      excerpt:
        "Learn about the legal methods to process payments globally even if your country isn't directly supported by StripeGate.",
      date: "April 2, 2023",
      author: "Michael Chen",
      readTime: "8 min read",
      category: "Payments",
      slug: "accept-global-payments",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Setting Up Your StripeGate Account for International Business",
      excerpt:
        "A step-by-step guide to properly configure your StripeGate account for maximum international compatibility and lower fees.",
      date: "March 15, 2023",
      author: "Sarah Johnson",
      readTime: "12 min read",
      category: "Setup Guide",
      slug: "stripe-account-setup-guide",
    },
    {
      id: 3,
      title: "5 Common Mistakes When Processing International Payments (And How to Avoid Them)",
      excerpt:
        "Discover the pitfalls many businesses encounter when expanding their payment processing globally and practical solutions.",
      date: "February 28, 2023",
      author: "David Rodriguez",
      readTime: "6 min read",
      category: "Best Practices",
      slug: "international-payment-mistakes",
    },
    {
      id: 4,
      title: "Understanding Payment Compliance Across Borders: A Beginner's Guide",
      excerpt:
        "Navigate the complex world of international payment regulations and ensure your business stays compliant no matter where you operate.",
      date: "February 10, 2023",
      author: "Aisha Patel",
      readTime: "10 min read",
      category: "Compliance",
      slug: "payment-compliance-guide",
    },
    {
      id: 5,
      title: "How Businesses in Developing Countries Can Compete Globally with Proper Payment Infrastructure",
      excerpt:
        "Real-world case studies of businesses that overcame payment limitations to build successful international companies.",
      date: "January 25, 2023",
      author: "James Wong",
      readTime: "9 min read",
      category: "Success Stories",
      slug: "payment-infrastructure-for-global-competition",
    },
  ]

  return (
    <>
      <Header />
      <main className="pt-32 pb-16 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Our Blog</h1>
          <p className="text-lg text-gray-600 mb-12">
            Insights, guides, and industry updates on global payment processing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-medium px-4 py-1 rounded-full bg-white/20">{post.category}</span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <div className="flex items-center mr-4">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
                    <span className="text-sm">{post.author}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog/archive" className="text-primary hover:underline">
              View all blog posts →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
