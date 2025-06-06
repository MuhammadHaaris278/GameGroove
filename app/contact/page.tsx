"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    reason: "general",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, reason: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
        reason: "general",
      })
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-16">
      {/* Hero Section */}
      <section className="mb-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-gaming text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Have questions, feedback, or need support? We're here to help. Reach out to the GameGroove team using any of
            the methods below.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Contact Form */}
        <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-neon-green mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Message Sent!</h2>
              <p className="text-gray-300 mb-6">
                Thank you for reaching out. We've received your message and will get back to you as soon as possible.
              </p>
              <Button className="neon-button" onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="mr-2 h-6 w-6" /> Get in Touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue"
                  />
                </div>

                <div>
                  <Label>Reason for Contact</Label>
                  <RadioGroup
                    value={formState.reason}
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-2 mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="general" id="general" />
                      <Label htmlFor="general" className="text-gray-300">
                        General Inquiry
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="support" id="support" />
                      <Label htmlFor="support" className="text-gray-300">
                        Technical Support
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="feedback" id="feedback" />
                      <Label htmlFor="feedback" className="text-gray-300">
                        Feedback & Suggestions
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="business" id="business" />
                      <Label htmlFor="business" className="text-gray-300">
                        Business Inquiry
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="bg-gaming-highlight border-gaming-highlight focus:border-neon-blue min-h-[150px]"
                  />
                </div>

                <Button type="submit" className="neon-button w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </>
          )}
        </div>

        {/* Contact Info */}
        <div>
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gaming-highlight p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-neon-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Email</h3>
                  <p className="text-gray-300 mb-1">General Inquiries:</p>
                  <a href="mailto:info@gamegroove.com" className="text-neon-blue hover:underline">
                    info@gamegroove.com
                  </a>
                  <p className="text-gray-300 mt-2 mb-1">Support:</p>
                  <a href="mailto:support@gamegroove.com" className="text-neon-blue hover:underline">
                    support@gamegroove.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gaming-highlight p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-neon-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Phone</h3>
                  <p className="text-gray-300 mb-1">Customer Support:</p>
                  <a href="tel:+1234567890" className="text-neon-purple hover:underline">
                    +1 (234) 567-890
                  </a>
                  <p className="text-gray-300 mt-2 mb-1">Business Hours:</p>
                  <p className="text-gray-300">Monday - Friday: 9AM - 6PM EST</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gaming-highlight p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-neon-green" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Office Location</h3>
                  <p className="text-gray-300">
                    123 Gaming Street
                    <br />
                    Suite 456
                    <br />
                    San Francisco, CA 94107
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Connect With Us</h2>
            <p className="text-gray-300 mb-6">
              Follow us on social media for the latest updates, news, and community events.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Button variant="outline" className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook
              </Button>
              <Button variant="outline" className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
                Twitter
              </Button>
              <Button variant="outline" className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </Button>
              <Button variant="outline" className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
                YouTube
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-gaming text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6">
            <h3 className="text-lg font-bold text-white mb-3">How quickly will I receive a response?</h3>
            <p className="text-gray-300">
              We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please
              contact our support team by phone.
            </p>
          </div>
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6">
            <h3 className="text-lg font-bold text-white mb-3">Do you offer technical support on weekends?</h3>
            <p className="text-gray-300">
              Yes, our technical support team is available on weekends from 10AM to 4PM EST for urgent issues. For
              non-urgent matters, please submit a ticket and we'll respond on the next business day.
            </p>
          </div>
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6">
            <h3 className="text-lg font-bold text-white mb-3">How can I report a bug or issue?</h3>
            <p className="text-gray-300">
              You can report bugs or issues through our contact form by selecting "Technical Support" as the reason for
              contact. Please provide as much detail as possible, including steps to reproduce the issue.
            </p>
          </div>
          <div className="bg-gaming-card rounded-lg border border-gaming-highlight p-6">
            <h3 className="text-lg font-bold text-white mb-3">Can I visit your office in person?</h3>
            <p className="text-gray-300">
              Our office is open to visitors by appointment only. Please contact us at least 48 hours in advance to
              schedule a visit.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
