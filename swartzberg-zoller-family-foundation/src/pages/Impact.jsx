import { Helmet } from 'react-helmet-async'
import { Quote, Users, GraduationCap, Heart, Home, TrendingUp, Award, Handshake } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const impactStats = [
  { icon: Users, value: '1,200+', label: 'Families Supported', description: 'Through direct assistance and support programs since 2011' },
  { icon: GraduationCap, value: '450+', label: 'Scholarships Awarded', description: 'Total scholarship recipients pursuing higher education' },
  { icon: Heart, value: '$2.1M', label: 'Total Charitable Distributions', description: 'Invested in community programs and direct aid' },
  { icon: Home, value: '320', label: 'Families Housed', description: 'Prevented eviction and secured stable housing' },
  { icon: TrendingUp, value: '89%', label: 'Scholarship Retention', description: 'Students who continue through degree completion' },
  { icon: Award, value: '35+', label: 'Community Partners', description: 'Active partnerships with local organizations' },
]

const testimonials = [
  {
    quote: "The Swartzberg Zoller Family Foundation scholarship allowed me to attend Northwestern University without taking on crushing student debt. I am now a first-generation college graduate working as a registered nurse at Rush University Medical Center, giving back to the same community that supported me.",
    name: "Maria Santos",
    role: "Scholarship Recipient, Class of 2022",
    program: "Educational Scholarships",
  },
  {
    quote: "When my husband lost his job during the pandemic, we were weeks away from losing our apartment. The Foundation's emergency assistance program covered our rent for two months while he found new employment. They didn't just give us money—they gave us hope and dignity during our darkest time.",
    name: "Denise Thompson",
    role: "Family Support Services Recipient",
    program: "Family Support Services",
  },
  {
    quote: "As a mentor in the Youth Mentorship Program, I have seen firsthand how a consistent, caring adult relationship can transform a young person's trajectory. My mentee, James, just started his freshman year at UIC studying engineering. Programs like this don't just change lives—they change communities.",
    name: "Robert Chen",
    role: "Professional Mentor, 3 Years",
    program: "Youth Mentorship Program",
  },
]

const partners = [
  'Chicago Public Schools',
  'University of Illinois Chicago',
  'Northwestern University',
  'Rush University Medical Center',
  'Chicago Food Depository',
  'Heartland Alliance',
  'Ladder Up',
  'Chicago Youth Centers',
  'Evanston Scholars',
  'Lake County Community Foundation',
  'DuPage County Health Department',
  'South Loop Neighborhood Association',
]

export default function Impact() {
  return (
    <>
      <Helmet>
        <title>Our Impact | Swartzberg Zoller Family Foundation</title>
        <meta name="description" content="See the measurable impact of the Swartzberg Zoller Family Foundation. 1,200+ families supported, $2.1M in distributions, 450+ scholarships awarded. EIN: 36-3864416." />
        <link rel="canonical" href="https://swartzberg-zoller-family-foundation.bond/impact" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6">
            Our Impact
          </h1>
          <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">
            Real numbers, real stories, real change in the Chicago community.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <SectionHeader
            title="Impact by the Numbers"
            subtitle="Measurable outcomes from our programs and services since the Foundation was established in 2011."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactStats.map((stat) => (
              <div key={stat.label} className="bg-slate-50 rounded-xl p-6 border border-slate-100 text-center">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold font-serif text-slate-900 mb-1">{stat.value}</div>
                <div className="font-semibold text-slate-700 mb-2">{stat.label}</div>
                <p className="text-sm text-slate-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-50">
        <div className="container-custom section-padding">
          <SectionHeader
            title="Stories of Impact"
            subtitle="Hear directly from the individuals and families whose lives have been touched by our programs."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-slate-100 flex flex-col">
                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                <p className="text-slate-700 leading-relaxed mb-6 flex-1">"{t.quote}"</p>
                <div className="border-t border-slate-100 pt-4">
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                  <div className="text-xs text-primary-600 font-medium mt-1">{t.program}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <SectionHeader
            title="Our Partners"
            subtitle="We are proud to collaborate with these outstanding organizations to maximize our collective impact."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {partners.map((partner) => (
              <div key={partner} className="bg-slate-50 rounded-lg p-4 border border-slate-100 flex items-center gap-3">
                <Handshake className="w-5 h-5 text-primary-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
