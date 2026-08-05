import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Shield, Send, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Swartzberg Zoller Family Foundation</title>
        <meta name="description" content="Contact the Swartzberg Zoller Family Foundation. Address: 30 South Wells Street 4049, Chicago, IL 60606-5054. Email: admin@swartzberg-zoller-family-foundation.bond. EIN: 36-3864416." />
        <link rel="canonical" href="https://swartzberg-zoller-family-foundation.bond/contact" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">
            We welcome your questions, partnership inquiries, and feedback.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <SectionHeader title="Get in Touch" centered={false} />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Mailing Address</h3>
                    <p className="text-slate-600 text-sm">
                      Swartzberg Zoller Family Foundation<br />
                      30 South Wells Street 4049<br />
                      Chicago, IL 60606-5054<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <a href="tel:+13125551234" className="text-primary-600 hover:text-primary-700 font-medium">
                      (312) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a href="mailto:admin@swartzberg-zoller-family-foundation.bond" className="text-primary-600 hover:text-primary-700 font-medium break-all">
                      admin@swartzberg-zoller-family-foundation.bond
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Hours</h3>
                    <p className="text-slate-600 text-sm">
                      Monday - Friday: 9:00 AM - 5:00 PM (Central Time)<br />
                      Saturday - Sunday: Closed<br />
                      Holiday closures follow the Federal Reserve schedule.
                    </p>
                  </div>
                </div>
              </div>

              {/* Nonprofit Info Box */}
              <div className="mt-8 bg-primary-50 rounded-xl p-6 border border-primary-100">
                <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  Nonprofit Information
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Legal Name:</span>
                    <span className="font-medium text-slate-700">Swartzberg Zoller Family Foundation</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Federal Tax ID (EIN):</span>
                    <span className="font-mono text-slate-700">36-3864416</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">IRS Status:</span>
                    <span className="font-medium text-slate-700">501(c)(3) Public Charity</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">State of Incorporation:</span>
                    <span className="font-medium text-slate-700">Illinois</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Year Founded:</span>
                    <span className="font-medium text-slate-700">2011</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-slate-50 rounded-xl p-6 lg:p-8 border border-slate-100">
                <h2 className="font-serif font-bold text-2xl text-slate-900 mb-2">Send Us a Message</h2>
                <p className="text-slate-500 text-sm mb-6">We typically respond within 2 business days.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">Message Sent Successfully</h3>
                    <p className="text-slate-600">Thank you for reaching out. We will respond to your inquiry as soon as possible.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="scholarship">Scholarship Application Question</option>
                        <option value="family-support">Family Support Services</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="donation">Donation Inquiry</option>
                        <option value="media">Media Request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
