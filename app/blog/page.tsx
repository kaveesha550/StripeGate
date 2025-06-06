import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Stripe Payment Processing Blog | StripeGate",
  description:
    "Expert insights on Stripe payment processing, international payments, business setup, and payment gateway solutions for non-supported countries.",
  keywords: "stripe blog, payment processing, international payments, stripe setup guide, payment gateway",
}

const blogPosts = [
  {
    slug: "stripe-unsupported-countries-guide",
    title: "Complete Guide to Stripe in Unsupported Countries (2024)",
    excerpt:
      "Learn how businesses in non-supported countries can legally access Stripe's payment processing capabilities through compliant setup methods.",
    date: "2024-01-15",
    author: "StripeGate Team",
    category: "Guides",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "stripe-vs-paypal-international",
    title: "Stripe vs PayPal: Which is Better for International Businesses?",
    excerpt:
      "Comprehensive comparison of Stripe and PayPal for international payment processing, including fees, features, and global availability.",
    date: "2024-01-10",
    author: "Payment Expert",
    category: "Comparison",
    readTime: "6 min read",
  },
  {
    slug: "ein-number-international-business",
    title: "Why Your International Business Needs a US EIN Number",
    excerpt:
      "Discover the benefits of obtaining a US EIN number for your international business and how it opens doors to US payment processors.",
    date: "2024-01-05",
    author: "Business Advisor",
    category: "Business Setup",
    readTime: "5 min read",
  },
  {
    slug: "stripe-fees-breakdown-2024",
    title: "Stripe Fees Breakdown: Complete Cost Analysis for 2024",
    excerpt:
      "Detailed breakdown of all Stripe fees including transaction fees, international charges, and hidden costs you should know about.",
    date: "2024-01-01",
    author: "Finance Team",
    category: "Pricing",
    readTime: "7 min read",
  },
  {
    slug: "payment-gateway-security-best-practices",
    title: "Payment Gateway Security: Best Practices for Online Businesses",
    excerpt:
      "Essential security measures every online business should implement to protect customer payment data and prevent fraud.",
    date: "2023-12-28",
    author: "Security Expert",
    category: "Security",
    readTime: "9 min read",
  },
  {
    slug: "mercury-bank-vs-wise-business",
    title: "Mercury Bank vs Wise Business: Which is Right for Your Business?",
    excerpt:
      "Compare Mercury Bank and Wise Business accounts for international businesses, including features, fees, and setup requirements.",
    date: "2023-12-25",
    author: "Banking Specialist",
    category: "Banking",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Payment Processing Insights & Guides</h1>
            <p className="text-xl text-gray-700 mb-8">
              Expert advice on Stripe setup, international payments, and business growth strategies
            </p>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Featured Article</h2>
              <Card className="overflow-hidden border-primary/20">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="h-64 md:h-full bg-gradient-to-br from-primary/10 to-purple-600/10 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <ArrowRight className="h-8 w-8 text-primary" />
                        </div>
                        <span className="text-primary font-medium">Featured Guide</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded">{featuredPost.category}</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {featuredPost.author}
                        </div>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <CardTitle className="text-2xl md:text-3xl">{featuredPost.title}</CardTitle>
                      <CardDescription className="text-lg">{featuredPost.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        <Button className="bg-gradient-to-r from-primary to-purple-600">
                          Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <span className="bg-gray-100 px-2 py-1 rounded">{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="outline" size="sm">
                          Read More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Set Up Your Stripe Account?</h2>
            <p className="text-xl mb-8">Stop reading about it and start accepting global payments today</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#services">
                <Button className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6">View Our Services</Button>
              </Link>
              <Link href="/#contact">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
                >
                  Get Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
