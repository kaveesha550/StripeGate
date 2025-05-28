import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import WhyChooseUs from "@/components/why-choose-us"
import PaymentFeatures from "@/components/payment-features"
import HowItWorks from "@/components/how-it-works"
import PricingPlans from "@/components/pricing-plans"
import Testimonials from "@/components/testimonials"
import FaqSection from "@/components/faq-section"
import CtaSection from "@/components/cta-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <WhyChooseUs />
      <PaymentFeatures />
      <HowItWorks />
      <PricingPlans />
      <Testimonials />
      <FaqSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
