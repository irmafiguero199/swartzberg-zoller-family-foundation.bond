import { Helmet } from 'react-helmet-async'
import { Shield, Calendar, MapPin, Users, Award, Heart, Target, Lightbulb } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const milestones = [
  { year: '2011', title: 'Foundation Established', description: 'The Swartzberg Zoller Family Foundation was formally established as a 501(c)(3) nonprofit organization in the State of Illinois.' },
  { year: '2013', title: 'First Scholarship Program', description: 'Launched our inaugural educational scholarship program, awarding $25,000 to 10 deserving students from Chicago Public Schools.' },
  { year: '2015', title: 'Family Crisis Fund', description: 'Established the Emergency Family Support Fund to provide rapid financial assistance to families experiencing unexpected hardship.' },
  { year: '2017', title: 'Community Partnership Expansion', description: 'Partnered with 15 community organizations across Cook County to expand our reach and impact in underserved neighborhoods.' },
  { year: '2019', title: 'Youth Mentorship Launch', description: 'Introduced the Professional Mentorship Program, connecting 50 at-risk youth with career mentors in their fields of interest.' },
  { year: '2021', title: 'Pandemic Response Initiative', description: 'Distributed over $180,000 in emergency relief to 400+ families affected by the COVID-19 pandemic, including food, rent, and medical assistance.' },
  { year: '2023', title: 'Strategic Growth Phase', description: 'Expanded programming to serve the entire Chicago metropolitan area, increasing annual scholarship awards to $150,000.' },
  { year: '2025', title: '15th Anniversary', description: 'Celebrated 15 years of service with over $2.1 million in total charitable distributions and 1,200+ families supported.' },
]

const values = [
  { icon: Heart, title: 'Compassion', description: 'We lead with empathy, recognizing the dignity and worth of every individual and family we serve.' },
  { icon: Target, title: 'Accountability', description: 'We are transparent stewards of charitable resources, ensuring every dollar creates measurable impact in our community.' },
  { icon: Users, title: 'Collaboration', description: 'We believe lasting change requires partnership. We work alongside community organizations, schools, and families.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We continuously seek creative solutions to complex social challenges, adapting our programs to meet evolving community needs.' },
  { icon: Award, title: 'Excellence', description: 'We hold ourselves to the highest standards of program quality, governance, and ethical conduct in all operations.' },
  { icon: Shield, title: 'Integrity', description: 'We operate with honesty, transparency, and respect, building trust with donors, partners, and the communities we serve.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Swartzberg Zoller Family Foundation</title>
        <meta name="description" content="Learn about the Swartzberg Zoller Family Foundation, our history, values, and commitment to serving Chicago communities since 2011. EIN: 36-3864416." />
        <link rel="canonical" href="https://swartzberg-zoller-family-foundation.bond/about" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6 text-sm">
              <Shield className="w-4 h-4 text-primary-300" />
              <span>501(c)(3) Nonprofit | EIN: 36-3864416</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6">
              About Our Foundation
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 leading-relaxed">
              For over 15 years, the Swartzberg Zoller Family Foundation has been a trusted 
              partner in building stronger families and more resilient communities across Chicago.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Info Banner */}
      <section className="bg-primary-50 border-y border-primary-100">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-primary-600 shrink-0" />
              <div>
                <span className="font-semibold text-slate-700">Federal Tax ID:</span>
                <span className="font-mono text-primary-700 ml-2">36-3864416</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-primary-600 shrink-0" />
              <div>
                <span className="font-semibold text-slate-700">Founded:</span>
                <span className="text-slate-600 ml-2">2011 in Illinois</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary-600 shrink-0" />
              <div>
                <span className="font-semibold text-slate-700">Address:</span>
                <span className="text-slate-600 ml-2">30 South Wells Street 4049, Chicago, IL 60606-5054</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title="Our Story" centered={false} />
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed mb-4">
                  The Swartzberg Zoller Family Foundation was established in 2011 by the Swartzberg and Zoller families 
                  with a shared vision: to create meaningful, lasting change in the lives of families and individuals 
                  facing adversity in the Chicago metropolitan area. What began as a modest family charitable initiative 
                  has grown into a recognized 501(c)(3) nonprofit organization with a broad portfolio of programs 
                  serving thousands of community members annually.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Our founders believed that strong families are the foundation of strong communities. Guided by this 
                  principle, the Foundation has invested over $2.1 million in direct charitable distributions since 
                  inception, focusing on three interconnected pillars: educational access, family stability, and 
                  community development.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Headquartered at 30 South Wells Street in downtown Chicago, we maintain close partnerships with 
                  local schools, social service agencies, healthcare providers, and civic organizations to ensure 
                  our programs address real, documented community needs. Our board of directors, comprised of 
                  community leaders, educators, and business professionals, provides strategic oversight and 
                  governance to ensure the Foundation operates with the highest standards of integrity and 
                  effectiveness.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  As a registered 501(c)(3) public charity (EIN: 36-3864416), all donations to the Swartzberg Zoller 
                  Family Foundation are tax-deductible to the fullest extent allowed by law. We publish annual reports 
                  and financial statements to maintain transparency with our donors, partners, and the communities 
                  we serve.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-8 lg:p-12">
              <h3 className="font-serif font-bold text-2xl text-slate-900 mb-6">Key Facts</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold shrink-0">
                    15+
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Years of Service</div>
                    <div className="text-sm text-slate-600">Serving Chicago since 2011</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold shrink-0">
                    $2.1M
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Total Distributions</div>
                    <div className="text-sm text-slate-600">In direct charitable grants and programs</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold shrink-0">
                    1,200+
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Families Supported</div>
                    <div className="text-sm text-slate-600">Through our various assistance programs</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold shrink-0">
                    35+
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Community Partners</div>
                    <div className="text-sm text-slate-600">Schools, nonprofits, and agencies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-slate-50">
        <div className="container-custom section-padding">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones in the history of the Swartzberg Zoller Family Foundation."
          />
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-primary-200 ml-4 md:ml-6 space-y-10">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-sm" />
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                    <span className="inline-block bg-primary-100 text-primary-700 text-sm font-bold px-3 py-1 rounded-full mb-3">
                      {milestone.year}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">{milestone.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide every decision we make and every program we operate."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:border-primary-200 transition-colors">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
