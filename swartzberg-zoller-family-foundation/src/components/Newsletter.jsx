import { useState } from 'react'
import { Mail, Send, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-primary-50 border-y border-primary-100">
      <div className="container-custom section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-6">
            <Mail className="w-7 h-7 text-primary-600" />
          </div>
          <h2 className="text-3xl font-bold font-serif text-slate-900 mb-4">
            Stay Connected with Our Foundation
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter to receive updates on our programs, impact stories, 
            upcoming events, and ways you can support the Swartzberg Zoller Family Foundation.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
              <CheckCircle className="w-5 h-5" />
              Thank you for subscribing! We will be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </button>
            </form>
          )}

          <p className="text-xs text-slate-400 mt-4">
            Swartzberg Zoller Family Foundation | 30 South Wells Street 4049, Chicago, IL 60606-5054 | EIN: 36-3864416
          </p>
        </div>
      </div>
    </section>
  )
}
