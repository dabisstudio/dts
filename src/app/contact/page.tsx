'use client'

import { useState } from 'react'
import FadeIn from '@/components/animations/FadeIn'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In a real application, you would send the form data to your backend
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // })

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <div className="space-y-24">
      <section className="min-h-[50vh] flex flex-col justify-center">
        <FadeIn>
          <h1 className="hero-title mb-6">Get in Touch</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Ready to start your project? Have questions about our services? We'd love to hear from you.
          </p>
        </FadeIn>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn delay={0.1}>
            <div>
              <h2 className="text-2xl font-serif-primary font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <p>
                  <strong>Email:</strong><br />
                  <a href="mailto:hello@dabisstudio.com" className="text-electric-blue hover:underline">
                    hello@dabisstudio.com
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong><br />
                  <a href="tel:+1234567890" className="text-electric-blue hover:underline">
                    +1 (234) 567-890
                  </a>
                </p>
                <p>
                  <strong>Location:</strong><br />
                  New York, NY
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            {isSubmitted ? (
              <div className="bg-electric-blue/10 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                <Button
                  className="mt-6"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                  />
                </div>

                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
