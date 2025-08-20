"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: "How does the Stripe account setup work for non-supported countries?",
    answer:
      "We set up a 100% legal Stripe account for you through our compliant infrastructure. This allows businesses in non-supported countries to process payments globally while adhering to all regulations.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "Stripe supports all major credit cards, digital wallets, and local payment methods. This includes Visa, Mastercard, American Express, Apple Pay, Google Pay, and many country-specific payment options.",
  },
  {
    question: "How long does setup take?",
    answer:
      "Setup typically takes 3-5 days, depending on the account type. Personal accounts are usually ready in 3 days, while business accounts may take up to 5 days due to the additional services included.",
  },
  {
    question: "Is this service legal?",
    answer:
      "Yes, our service complies with international payment regulations. We use legitimate business structures to provide payment processing capabilities to businesses in regions where Stripe doesn't have direct operations.",
  },
  {
    question: "What documents do I need to provide?",
    answer:
      "For personal accounts, basic identification is required. For business accounts, you'll need to provide business registration details. We'll guide you through the specific requirements during the setup process.",
  },
  {
    question: "Are there any monthly fees?",
    answer:
      "No, there are no monthly fees. You pay a one-time setup fee ($39.99 for individual, $119.99 for business), and then only Stripe's standard transaction fees apply (typically 2.9% + $0.30 per successful charge).",
  },
]

export default function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium py-4">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
