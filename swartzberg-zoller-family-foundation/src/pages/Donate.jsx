import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Heart, Shield, CheckCircle, Mail, MapPin, Phone, CreditCard, Banknote, Building } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const donationAmounts = [25, 50, 100, 250, 500, 1000]

export default function Donate() {
  const [amount, setAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState('')
  const [frequency, setFrequency] = useState('one-time')
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', address: '', city: '', state: '', zip: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const finalAmount = customAmount ? parseFloat(customAmount) : amount

  return (
    <>
      <Helmet>
        <title>Donate | Swartzberg Zoller Family Foundation</title>
        <meta name="description" content="Make a tax-deductible donation to the Swartzberg Zoller Family Foundation. 501(c)(3) nonprofit. EIN: 36-3864416. All donations are tax-deductible." />
        <link rel="canonical" href="https://swartzberg-zoller-family-foundation.bond/donate" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 text-sm">
            <Shield className="w-4 h-4 text-primary-300" />
            <span>501(c)(3) Nonprofit | EIN: 36-3864416</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6">
            Support Our Mission
          </h1>
          <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">
            Your tax-deductible donation directly supports scholarships, family assistance, and community programs 
            across the Chicago metropolitan area.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Donation Form */}
            <div>
              <div className="bg-slate-50 rounded-xl p-6 lg:p-8 border border-slate-100">
                <h2 className="font-serif font-bold text-2xl text-slate-900 mb-2">Make a Donation</h2>
                <p className="text-slate-500 text-sm mb-6">All donations are tax-deductible. You will receive a receipt via email.</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-lg mb-2">Thank You for Your Support!</h3>
                    <p className="text-slate-600 mb-4">
                      Your generosity helps us continue serving Chicago-area families. A confirmation and tax receipt 
                      will be sent to your email address.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-slate-200 text-sm text-slate-500">
                      Swartzberg Zoller Family Foundation | EIN: 36-3864416<br />
                      30 South Wells Street 4049, Chicago, IL 60606-5054
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Frequency */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Donation Frequency</label>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFrequency('one-time')}
                          className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                            frequency === 'one-time'
                              ? 'bg-primary-600 text-white border-primary-600'
                              : 'bg-white text-slate-700 border-slate-300 hover:border-primary-400'
                          }`}
                        >
                          One-Time
                        </button>
                        <button
                          type="button"
                          onClick={() => setFrequency('monthly')}
                          className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                            frequency === 'monthly'
                              ? 'bg-primary-600 text-white border-primary-600'
                              : 'bg-white text-slate-700 border-slate-300 hover:border-primary-400'
                          }`}
                        >
                          Monthly
                        </button>
                      </div>
                    </div>

                    {/* Amount */}
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Donation Amount</label>
                      <div className="grid grid-cols-3 gap-3 mb-3">
                        {donationAmounts.map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => { setAmount(amt); setCustomAmount('') }}
                            className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                              amount === amt && !customAmount
                                ? 'bg-primary-600 text-white border-primary-600'
                                : 'bg-white text-slate-700 border-slate-300 hover:border-primary-400'
                            }`}
                          >
                            ${amt}
                          </button>
                        ))}
                      </div>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                        <input
                          type="number"
                          placeholder="Custom amount"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="w-full pl-8 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Donor Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Street Address</label>
                      <input type="text" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                        <input type="text" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">State</label>
                        <input type="text" value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">ZIP</label>
                        <input type="text" value={formData.zip} onChange={(e) => setFormData({...formData, zip: e.target.value})} className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="bg-primary-50 rounded-lg p-4 border border-primary-100">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600">Donation Summary:</span>
                        <span className="text-xl font-bold text-primary-700">${finalAmount.toFixed(2)} {frequency === 'monthly' ? '/ month' : ''}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-2">
                        Tax-deductible donation to Swartzberg Zoller Family Foundation, EIN: 36-3864416.
                      </p>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <Heart className="w-5 h-5" />
                      Complete Donation
                    </button>

                    <p className="text-xs text-slate-400 text-center">
                      This is a demonstration form. For actual donations, please contact us directly.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Other Ways to Give */}
            <div>
              <h2 className="font-serif font-bold text-2xl text-slate-900 mb-6">Other Ways to Give</h2>
              <div className="space-y-5">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                      <Banknote className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Send a Check</h3>
                      <p className="text-sm text-slate-600 mb-3">
                        Mail your donation check payable to "Swartzberg Zoller Family Foundation" to:
                      </p>
                      <p className="text-sm text-slate-700">
                        Swartzberg Zoller Family Foundation<br />
                        30 South Wells Street 4049<br />
                        Chicago, IL 60606-5054
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                      <Building className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Corporate Matching</h3>
                      <p className="text-sm text-slate-600">
                        Many employers match charitable donations made by their employees. Check with your HR department 
                        to see if your company participates. Our EIN is 36-3864416, which you will need for matching gift forms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                      <Heart className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Planned Giving & Legacy</h3>
                      <p className="text-sm text-slate-600 mb-3">
                        Include the Swartzberg Zoller Family Foundation in your estate planning. We accept bequests, 
                        charitable remainder trusts, and other planned giving vehicles.
                      </p>
                      <a href="mailto:admin@swartzberg-zoller-family-foundation.bond" className="text-primary-600 text-sm font-medium hover:text-primary-700">
                        Contact us to discuss planned giving options
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                      <CreditCard className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Wire Transfer</h3>
                      <p className="text-sm text-slate-600 mb-3">
                        For large donations, wire transfer may be preferred. Please contact us for banking details.
                      </p>
                      <div className="text-sm text-slate-700">
                        <a href="tel:+13125551234" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                          <Phone className="w-4 h-4" />
                          (312) 555-1234
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tax Info */}
              <div className="mt-6 bg-primary-50 rounded-xl p-6 border border-primary-100">
                <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  Tax Information
                </h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>The Swartzberg Zoller Family Foundation is a registered 501(c)(3) public charity.</p>
                  <p><strong>EIN:</strong> <span className="font-mono">36-3864416</span></p>
                  <p><strong>Address:</strong> 30 South Wells Street 4049, Chicago, IL 60606-5054</p>
                  <p>All donations are tax-deductible to the fullest extent allowed by U.S. law. You will receive an official acknowledgment letter for tax purposes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
