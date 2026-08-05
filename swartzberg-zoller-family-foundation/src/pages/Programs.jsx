import { Helmet } from 'react-helmet-async'
import { GraduationCap, Heart, Users, BookOpen, CheckCircle, MapPin, Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'

const programCategories = [
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Educational Scholarships',
    description: 'Our flagship scholarship program provides financial assistance to students from low-income families pursuing post-secondary education at accredited institutions.',
    details: [
      'Merit-based scholarships of $2,500-$10,000 per academic year',
      'Need-based emergency grants for students facing unexpected financial hardship',
      'Renewable awards for students maintaining satisfactory academic progress',
      'Special consideration for first-generation college students',
    ],
    eligibility: 'Applicants must be residents of Cook, DuPage, or Lake County, demonstrate financial need, and be enrolled or accepted at an accredited two or four-year institution.',
    serviceArea: 'Cook, DuPage, and Lake Counties, Illinois',
    upcomingEvent: {
      title: '2026 Fall Scholarship Application Opens',
      date: 'September 1, 2026',
      location: 'Online Application Portal',
    },
  },
  {
    id: 'family',
    icon: Heart,
    title: 'Family Support Services',
    description: 'Direct assistance programs designed to help families navigate financial crises and maintain stability during difficult times.',
    details: [
      'Emergency rent and utility assistance to prevent homelessness',
      'Food security programs including grocery vouchers and meal distribution',
      'Medical expense support for uninsured and underinsured families',
      'Childcare subsidies for working parents facing temporary hardship',
    ],
    eligibility: 'Families must reside in the Chicago metropolitan area, have at least one dependent child under age 18 or a senior citizen, and demonstrate immediate financial crisis through documented need.',
    serviceArea: 'Chicago metropolitan area (Cook, DuPage, Lake, Will, and Kane Counties)',
    upcomingEvent: {
      title: 'Holiday Family Assistance Program Registration',
      date: 'November 1, 2026',
      location: 'Community Partners Network',
    },
  },
  {
    id: 'community',
    icon: Users,
    title: 'Community Development',
    description: 'Investments in neighborhood infrastructure, public spaces, and community-building initiatives that strengthen social bonds and civic engagement.',
    details: [
      'Neighborhood beautification and public space improvement grants',
      'Community event sponsorships for cultural and civic gatherings',
      'Youth sports and recreation program funding',
      'Small neighborhood organization capacity-building support',
    ],
    eligibility: 'Community organizations, neighborhood associations, and civic groups operating within the Chicago metropolitan area with a documented track record of community service.',
    serviceArea: 'Priority given to underserved neighborhoods in Chicago, Evanston, and Waukegan',
    upcomingEvent: {
      title: 'Spring Community Grant Application Deadline',
      date: 'March 15, 2027',
      location: 'Online Submission',
    },
  },
  {
    id: 'mentorship',
    icon: BookOpen,
    title: 'Youth Mentorship Program',
    description: 'A structured mentorship initiative connecting young people aged 14-21 with professionals who provide career guidance, academic support, and personal development coaching.',
    details: [
      'One-on-one professional mentoring relationships lasting 12+ months',
      'Career exposure field trips to local businesses and institutions',
      'Workforce readiness workshops covering resume writing, interviewing, and professional communication',
      'College and career pathway planning with dedicated counselors',
    ],
    eligibility: 'Youth must be between ages 14-21, enrolled in school or an approved GED program, and referred by a school counselor, social worker, or community organization.',
    serviceArea: 'Primarily Chicago Public Schools and surrounding districts',
    upcomingEvent: {
      title: 'Mentor-Mentee Matching Event',
      date: 'October 5, 2026',
      location: 'Chicago Cultural Center, 78 E Washington St',
    },
  },
]

export default function Programs() {
  return (
    <>
      <Helmet>
        <title>Our Programs | Swartzberg Zoller Family Foundation</title>
        <meta name="description" content="Explore our four core programs: Educational Scholarships, Family Support Services, Community Development, and Youth Mentorship. EIN: 36-3864416." />
        <link rel="canonical" href="https://swartzberg-zoller-family-foundation.bond/programs" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6">
            Our Programs
          </h1>
          <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">
            Four interconnected program areas designed to address the root causes of poverty, 
            expand educational opportunity, and build stronger communities.
          </p>
        </div>
      </section>

      {/* Programs Detail */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="space-y-16">
            {programCategories.map((program, index) => (
              <div key={program.id} id={program.id} className={`scroll-mt-32 ${index % 2 === 1 ? 'bg-slate-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12 rounded-2xl' : ''}`}>
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                      <program.icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">{program.title}</h2>
                    </div>
                  </div>

                  <p className="text-slate-600 text-lg leading-relaxed mb-8">{program.description}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary-600" />
                        Program Details
                      </h3>
                      <ul className="space-y-3">
                        {program.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600">
                            <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mt-2 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-white rounded-xl p-5 border border-slate-200">
                        <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary-600" />
                          Eligibility
                        </h3>
                        <p className="text-sm text-slate-600">{program.eligibility}</p>
                      </div>

                      <div className="bg-white rounded-xl p-5 border border-slate-200">
                        <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-primary-600" />
                          Service Area
                        </h3>
                        <p className="text-sm text-slate-600">{program.serviceArea}</p>
                      </div>

                      <div className="bg-primary-50 rounded-xl p-5 border border-primary-100">
                        <h3 className="font-semibold text-primary-800 mb-2 flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-primary-600" />
                          Upcoming Event
                        </h3>
                        <p className="text-sm font-medium text-slate-900">{program.upcomingEvent.title}</p>
                        <p className="text-sm text-slate-600 mt-1">{program.upcomingEvent.date} | {program.upcomingEvent.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-900 text-white">
        <div className="container-custom section-padding text-center">
          <h2 className="text-3xl font-bold font-serif mb-4">Interested in Applying or Partnering?</h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            We welcome inquiries from potential applicants, community partners, and organizations 
            interested in collaborating to serve Chicago-area families.
          </p>
          <Link to="/contact" className="btn-secondary border-white text-white hover:bg-white/10">
            Contact Our Program Team
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
