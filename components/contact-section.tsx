"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, Clock, MessageSquare, Shield, Award, Star, Users } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
    // Show success message
    alert("Message sent successfully! We'll get back to you soon.")
  }

  return (
    <section className="py-16 md:py-24 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Contact Us</h2>

        {/* Response Time Widget */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Lightning-Fast Response</h3>
                <p className="text-gray-600">We typically reply within 1 hour, 24/7</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">of inquiries answered within 60 minutes</span>
                <span className="text-2xl font-bold text-primary">95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-primary to-purple-600 h-3 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Widgets Grid */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Friendly Support */}
            <div className="bg-green-50 rounded-xl p-6 text-center border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Friendly Support</h3>
              <p className="text-gray-600 text-sm">Our team is known for being helpful and courteous</p>
            </div>

            {/* Secure Communication */}
            <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Secure Communication</h3>
              <p className="text-gray-600 text-sm">Your information is always protected</p>
            </div>

            {/* Expert Team */}
            <div className="bg-yellow-50 rounded-xl p-6 text-center border border-yellow-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600 text-sm">Knowledgeable specialists at your service</p>
            </div>

            {/* Satisfaction Guaranteed */}
            <div className="bg-purple-50 rounded-xl p-6 text-center border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
              <p className="text-gray-600 text-sm">We ensure your issues are fully resolved</p>
            </div>
          </div>
        </div>

        {/* Customer Satisfaction Metrics */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              <h3 className="text-2xl font-bold text-gray-900">Customer Satisfaction</h3>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">Response Time</span>
                  <span className="text-sm font-bold text-green-600">Excellent</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">Friendliness</span>
                  <span className="text-sm font-bold text-green-600">Excellent</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "96%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">Issue Resolution</span>
                  <span className="text-sm font-bold text-blue-600">Very Good</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Contact Form and Info */}
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity text-white py-6"
                >
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Direct Contact</h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-primary font-medium mb-2">support@stripegate.com</p>
                    <p className="text-sm text-gray-600">We respond to every message within 1 hour</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Telegram</h4>
                    <p className="text-green-600 font-medium mb-2">@stripegate_support</p>
                    <p className="text-sm text-gray-600">Instant messaging support available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">24/7 Support</h4>
                    <p className="text-blue-600 font-medium mb-2">Always Available</p>
                    <p className="text-sm text-gray-600">Our team is available around the clock</p>
                    <div className="flex gap-1 mt-2">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                        <div key={day} className="w-8 h-2 bg-primary rounded-full"></div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/5 to-purple-600/5 rounded-lg p-4 border border-primary/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium text-gray-900">Need Help?</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    If you're having trouble with your payment or setup, our support team is here to help.
                  </p>
                  <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/5">
                    Contact Support Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
