import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Heart, Users, GraduationCap, Calendar, MapPin } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Newsletter from '../components/Newsletter.jsx'

const programs = [
  {
    icon: GraduationCap,
    title: 'Educational Scholarships',
    description: 'Providing merit-based and need-based scholarships to students from underserved communities in the Chicago area pursuing higher education.',
    link: '/programs#education',
  },
  {
    icon: Heart,
    title: 'Family Support Services',
    description: 'Direct assistance programs including emergency financial aid, food security initiatives, and housing support for families facing crisis.',
    link: '/programs#family',
  },
  {
    icon: Users,
    title: 'Community Development',
    description: 'Investing in neighborhood revitalization projects, community centers, and programs that foster civic engagement and social cohesion.',
    link: '/programs#community',
  },
  {
    icon: BookOpen,
    title: 'Youth Mentorship',
    description: 'Pairing at-risk youth with professional mentors to provide guidance, career exposure, and academic support for long-term success.',
    link: '/programs#mentorship',
  },
]

const upcomingEvents = [
  {
    date: 'August 15, 2026',
    title: 'Annual Back-to-School Supply Drive',
    location: 'Chicago Public Library, Harold Washington Branch',
    description: 'Join us as we distribute backpacks, school supplies, and educational materials to over 300 students preparing for the new academic year.',
  },
  {
    date: 'September 22, 2026',
    title: 'Fall Scholarship Awards Ceremony',
    location: 'University of Chicago, Ida Noyes Hall',
    description: 'Celebrating our 2026 scholarship recipients and recognizing outstanding academic achievement in the Chicago community.',
  },
  {
    date: 'October 10, 2026',
    title: 'Community Health & Wellness Fair',
    location: 'South Loop Community Center',
    description: 'Free health screenings, wellness workshops, and family resources for residents of the Chicago South Loop neighborhood.',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Swartzberg Zoller Family Foundation | 501(c)(3) Nonprofit Organization</title>
        <meta name="description" content="Swartzberg Zoller Family Foundation - A registered 501(c)(3) nonprofit supporting families and communities through education, scholarships, and direct assistance. EIN: 36-3864416." />
        <link rel="canonical" href="https://swartzberg-zoller-family-foundation.bond/" />
      </Helmet>

      <Hero />

      {/* Mission Section */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              title="Our Mission"
              subtitle="The Swartzberg Zoller Family Foundation is committed to creating lasting positive change by supporting educational opportunities, strengthening family stability, and fostering vibrant, connected communities throughout the Chicago metropolitan area."
            />
            <Link to="/mission-vision" className="btn-primary mt-4">
              Read Our Full Mission
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="bg-slate-50">
        <div className="container-custom section-padding">
          <SectionHeader
            title="Our Programs"
            subtitle="Through four core program areas, we address the most pressing needs of families and communities in Chicago."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <div key={program.title} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <program.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">{program.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{program.description}</p>
                <Link to={program.link} className="text-primary-600 text-sm font-medium hover:text-primary-700 flex items-center gap-1">
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/programs" className="btn-secondary">
              View All Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Join us at our upcoming events and help make a difference in the Chicago community."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div className="flex items-center gap-2 text-primary-600 font-medium text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">{event.title}</h3>
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
                <p className="text-slate-600 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-900 text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif mb-4">
            Make a Difference Today
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8 text-lg">
            Your contribution to the Swartzberg Zoller Family Foundation directly supports families, 
            students, and communities in need. Every donation is tax-deductible under IRS Section 501(c)(3).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/donate" className="px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors text-lg">
              Donate Now
            </Link>
            <Link to="/contact" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-lg border border-white/20">
              Contact Us
            </Link>
          </div>
          <p className="text-primary-300 text-sm mt-6 font-mono">EIN: 36-3864416</p>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
