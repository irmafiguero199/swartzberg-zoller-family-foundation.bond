import { Helmet } from 'react-helmet-async'
import { Shield, MapPin, Users, FileText, Building, Calendar, CheckCircle, ExternalLink } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

export default function RegistrationInformation() {
  return (
    <>
      <Helmet>
        <title>Registration Information | Swartzberg Zoller Family Foundation</title>
        <meta name="description" content="Official registration information for Swartzberg Zoller Family Foundation. EIN: 36-3864416. 501(c)(3) nonprofit. Address: 30 South Wells Street 4049, Chicago, IL 60606-5054." />
        <link rel="canonical" href="https://swartzberg-zoller-family-foundation.bond/registration-information" />
      </Helmet>

      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6">
            Registration Information
          </h1>
          <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">
            Official documentation and legal status of the Swartzberg Zoller Family Foundation.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto space-y-10">

            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif text-slate-900">Federal Tax Information</h2>
                  <p className="text-sm text-slate-500">IRS Registration Details</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5 border border-primary-100">
                  <p className="text-sm text-slate-500 mb-1">Federal Employer Identification Number (EIN)</p>
                  <p className="text-3xl font-mono font-bold text-primary-700">36-3864416</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-primary-100">
                  <p className="text-sm text-slate-500 mb-1">IRS Tax-Exempt Status</p>
                  <p className="text-xl font-bold text-slate-900">501(c)(3) Public Charity</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-primary-100">
                  <p className="text-sm text-slate-500 mb-1">IRS Determination Date</p>
                  <p className="text-lg font-semibold text-slate-900">2011</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-primary-100">
                  <p className="text-sm text-slate-500 mb-1">Deductibility Status</p>
                  <div className="flex items-center gap-2 text-green-700 font-semibold">
                    <CheckCircle className="w-5 h-5" />
                    Donations Are Tax-Deductible
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-xl p-5 border border-primary-100">
                <p className="text-sm text-slate-600 leading-relaxed">
                  The Swartzberg Zoller Family Foundation is recognized by the Internal Revenue Service as a tax-exempt 
                  public charity under Section 501(c)(3) of the Internal Revenue Code. All donations made to the Foundation 
                  are tax-deductible to the fullest extent permitted by law. Donors will receive an official acknowledgment 
                  letter confirming their tax-deductible contribution.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary-600 rounded-lg flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif text-slate-900">State Registration</h2>
                  <p className="text-sm text-slate-500">Illinois Nonprofit Corporation</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">State of Incorporation</p>
                  <p className="text-lg font-semibold text-slate-900">Illinois</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">Date of Incorporation</p>
                  <p className="text-lg font-semibold text-slate-900">2011</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">Entity Type</p>
                  <p className="text-lg font-semibold text-slate-900">Not-for-Profit Corporation</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">Good Standing</p>
                  <div className="flex items-center gap-2 text-green-700 font-semibold">
                    <CheckCircle className="w-5 h-5" />
                    Active & In Good Standing
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif text-slate-900">Registered Address</h2>
                  <p className="text-sm text-slate-500">Principal Office Location</p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <p className="text-lg text-slate-800 font-medium">
                  Swartzberg Zoller Family Foundation<br />
                  30 South Wells Street 4049<br />
                  Chicago, IL 60606-5054<br />
                  United States
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-sm">
                  <a href="tel:+13125551234" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                    <ExternalLink className="w-4 h-4" />
                    (312) 555-1234
                  </a>
                  <a href="mailto:admin@swartzberg-zoller-family-foundation.bond" className="flex items-center gap-2 text-primary-600 hover:text-primary-700">
                    <ExternalLink className="w-4 h-4" />
                    admin@swartzberg-zoller-family-foundation.bond
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif text-slate-900">Governance</h2>
                  <p className="text-sm text-slate-500">Board of Directors & Leadership</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">Board President</p>
                  <p className="font-semibold text-slate-900">David Swartzberg</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">Vice President</p>
                  <p className="font-semibold text-slate-900">Rachel Zoller</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">Treasurer</p>
                  <p className="font-semibold text-slate-900">Michael Swartzberg</p>
                </div>
                <div className="bg-white rounded-xl p-5 border border-slate-200">
                  <p className="text-sm text-slate-500 mb-1">Executive Director</p>
                  <p className="font-semibold text-slate-900">Jennifer Martinez</p>
                </div>
              </div>

              <div className="mt-6 bg-white rounded-xl p-5 border border-slate-200">
                <p className="text-sm text-slate-600 leading-relaxed">
                  The Foundation is governed by a volunteer Board of Directors that meets quarterly to provide 
                  strategic oversight, approve budgets, and ensure compliance with all federal and state regulations. 
                  The Board consists of six members with expertise in finance, education, law, and community development.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif text-slate-900">Annual Reports & Filings</h2>
                  <p className="text-sm text-slate-500">Financial Transparency Documents</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between bg-slate-50 rounded-lg p-4 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900">2025 Annual Report</p>
                      <p className="text-sm text-slate-500">Published February 2026</p>
                    </div>
                  </div>
                  <span className="text-sm text-slate-400">Available upon request</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 rounded-lg p-4 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900">Form 990 - 2024 Tax Year</p>
                      <p className="text-sm text-slate-500">Filed with the IRS</p>
                    </div>
                  </div>
                  <span className="text-sm text-slate-400">Available upon request</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 rounded-lg p-4 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-slate-400" />
                    <div>
                      <p className="font-medium text-slate-900">Audited Financial Statements 2024</p>
                      <p className="text-sm text-slate-500">Independent audit completed</p>
                    </div>
                  </div>
                  <span className="text-sm text-slate-400">Available upon request</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-100 text-sm text-slate-600">
                <p className="font-medium text-slate-700 mb-1">Requesting Documents</p>
                <p>To request copies of our Form 990, audited financial statements, or annual reports, please contact us at <a href="mailto:admin@swartzberg-zoller-family-foundation.bond" className="text-primary-600">admin@swartzberg-zoller-family-foundation.bond</a> or call <a href="tel:+13125551234" className="text-primary-600">(312) 555-1234</a>.</p>
              </div>
            </div>

            <div className="bg-primary-900 text-white rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold font-serif mb-4">Official Organization Summary</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                <div>
                  <p className="text-primary-300 text-sm">Legal Name</p>
                  <p className="font-medium">Swartzberg Zoller Family Foundation</p>
                </div>
                <div>
                  <p className="text-primary-300 text-sm">EIN</p>
                  <p className="font-mono">36-3864416</p>
                </div>
                <div>
                  <p className="text-primary-300 text-sm">Status</p>
                  <p className="font-medium">501(c)(3) Public Charity</p>
                </div>
                <div>
                  <p className="text-primary-300 text-sm">Founded</p>
                  <p className="font-medium">2011 in Illinois</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-primary-300 text-sm">Registered Address</p>
                  <p className="font-medium">30 South Wells Street 4049, Chicago, IL 60606-5054</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
