import { Helmet } from 'react-helmet-async'
import { Eye, Target, Compass, TrendingUp, BookOpen, Heart, Users, Globe } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const strategicGoals = [
  {
    icon: BookOpen,
    title: 'Expand Educational Access',
    description: 'Increase annual scholarship awards to $250,000 by 2028, with a focus on STEM and healthcare fields. Launch a college readiness program for 200+ high school juniors and seniors annually.',
    target: '2028',
  },
  {
    icon: Heart,
    title: 'Strengthen Family Stability',
    description: 'Grow the Emergency Family Support Fund to serve 500 families per year with direct financial assistance, food security programs, and housing stabilization services.',
    target: '2027',
  },
  {
    icon: Users,
    title: 'Scale Youth Mentorship',
    description: 'Expand the Professional Mentorship Program to match 150 youth annually with mentors across 20 career fields, incorporating virtual mentoring for broader geographic reach.',
    target: '2029',
  },
  {
    icon: Globe,
    title: 'Deepen Community Partnerships',
    description: 'Establish formal partnerships with 50 community-based organizations across Cook, DuPage, and Lake Counties to coordinate services and maximize collective impact.',
    target: '2030',
  },
]

export default function MissionVision() {
  return (
    <>
      <Helmet>
        <title>Mission & Vision | Swartzberg Zoller Family Foundation</title>
        <meta name="description" content="Our mission, vision, and strategic objectives for 2026-2030. Swartzberg Zoller Family Foundation is a 501(c)(3) nonprofit. EIN: 36-3864416." />
        <link rel="canonical" href="https://swartzberg-zoller-family-foundation.bond/mission-vision" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6">
            Mission & Vision
          </h1>
          <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">
            Guiding our work today and shaping our aspirations for tomorrow.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-6">Our Mission</h2>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8 lg:p-12 border border-primary-100">
              <p className="text-xl lg:text-2xl text-slate-800 leading-relaxed text-center font-medium">
                "The Swartzberg Zoller Family Foundation exists to empower individuals and strengthen families 
                by expanding access to education, providing critical support during times of crisis, and 
                fostering community connections that create pathways to long-term stability and success."
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">1</div>
                <h3 className="font-semibold text-slate-900 mb-2">Education</h3>
                <p className="text-sm text-slate-600">Removing financial barriers to higher education through scholarships and academic support programs.</p>
              </div>
              <div className="text-center p-4">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">2</div>
                <h3 className="font-semibold text-slate-900 mb-2">Family Support</h3>
                <p className="text-sm text-slate-600">Providing emergency assistance and stability services to families facing financial hardship.</p>
              </div>
              <div className="text-center p-4">
                <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">3</div>
                <h3 className="font-semibold text-slate-900 mb-2">Community</h3>
                <p className="text-sm text-slate-600">Building stronger, more connected neighborhoods through collaborative programs and civic engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-slate-50">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-6">
                <Eye className="w-8 h-8 text-secondary-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-6">Our Vision</h2>
            </div>
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-100">
              <p className="text-xl lg:text-2xl text-slate-800 leading-relaxed text-center font-medium">
                "A Chicago metropolitan area where every family has the resources, support, and opportunities 
                they need to thrive—regardless of their starting point. A community where educational aspirations 
                are never limited by financial circumstances, where families facing crisis receive timely and 
                dignified assistance, and where neighbors lift one another toward shared prosperity."
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Compass className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Equity-Focused</h3>
                  <p className="text-sm text-slate-600">We direct resources to communities and populations that have historically faced systemic barriers to opportunity.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Results-Driven</h3>
                  <p className="text-sm text-slate-600">We measure success by tangible outcomes: degrees earned, families stabilized, and lives transformed.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Community-Rooted</h3>
                  <p className="text-sm text-slate-600">Our programs are designed with community input, not imposed from outside. We listen first, then act.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart className="w-6 h-6 text-primary-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Family-Centered</h3>
                  <p className="text-sm text-slate-600">We recognize that individual success is intertwined with family wellbeing. Our programs support the whole family unit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <SectionHeader
            title="Strategic Objectives 2026-2030"
            subtitle="Concrete goals that will guide our programs, partnerships, and resource allocation over the next five years."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {strategicGoals.map((goal) => (
              <div key={goal.title} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <goal.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="bg-accent-100 text-accent-700 text-xs font-bold px-3 py-1 rounded-full">
                    Target: {goal.target}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">{goal.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
