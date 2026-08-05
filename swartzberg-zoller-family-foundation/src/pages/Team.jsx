import { Helmet } from 'react-helmet-async'
import { Calendar, Mail, Shield } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const boardMembers = [
  {
    name: 'David Swartzberg',
    role: 'President & Chair of the Board',
    bio: "David Swartzberg co-founded the Foundation in 2011 and serves as its President. With over 25 years of experience in financial services and community development, David provides strategic leadership and oversees the Foundation's governance and long-term planning. He holds an MBA from the University of Chicago Booth School of Business and has served on multiple nonprofit boards across the Chicago area.",
    since: '2011',
  },
  {
    name: 'Rachel Zoller',
    role: 'Vice President & Secretary',
    bio: "Rachel Zoller brings extensive experience in education policy and nonprofit management to her role as Vice President. A former Chicago Public Schools administrator, Rachel leads the Foundation's scholarship and youth mentorship programs. She holds a Master's in Education Policy from Northwestern University and is a certified nonprofit executive.",
    since: '2011',
  },
  {
    name: 'Michael Swartzberg',
    role: 'Treasurer',
    bio: "Michael Swartzberg serves as the Foundation's Treasurer, overseeing financial management, compliance, and audit processes. A CPA with 20 years of public accounting experience, Michael ensures the Foundation maintains the highest standards of fiscal responsibility and transparency. He is a partner at a Chicago-based accounting firm specializing in nonprofit clients.",
    since: '2012',
  },
  {
    name: 'Dr. Angela Williams',
    role: 'Board Member',
    bio: "Dr. Angela Williams is a clinical psychologist and professor at the University of Illinois Chicago, where her research focuses on family resilience and community mental health. She advises the Foundation on program design related to family support services and trauma-informed care. Dr. Williams holds a Ph.D. in Clinical Psychology from Loyola University Chicago.",
    since: '2015',
  },
  {
    name: 'James Patterson',
    role: 'Board Member',
    bio: "James Patterson is a community development specialist with 15 years of experience in affordable housing and neighborhood revitalization. He leads the Foundation's community development grant-making strategy and partnership development. James holds a Master's in Urban Planning from the University of Michigan and previously directed a Chicago-based community development corporation.",
    since: '2017',
  },
  {
    name: 'Sarah Goldstein',
    role: 'Board Member',
    bio: "Sarah Goldstein is an attorney specializing in nonprofit law and tax-exempt organizations. She advises the Foundation on legal compliance, governance matters, and IRS regulations. Sarah is a partner at a Chicago law firm and holds a J.D. from DePaul University College of Law. She also serves as pro bono counsel for several Chicago-area charitable organizations.",
    since: '2019',
  },
]

const staffMembers = [
  {
    name: 'Jennifer Martinez',
    role: 'Executive Director',
    bio: 'Jennifer Martinez leads the day-to-day operations of the Foundation, managing program implementation, staff supervision, and external partnerships. With 12 years of nonprofit leadership experience, Jennifer previously served as Deputy Director at the Chicago Community Trust. She holds an MPA from the University of Illinois Springfield.',
  },
  {
    name: 'Thomas Reed',
    role: 'Program Director - Education',
    bio: "Thomas Reed oversees all educational programming, including scholarship administration, college readiness initiatives, and the youth mentorship program. A former college admissions counselor, Thomas holds a Master's in Higher Education Administration from Indiana University.",
  },
  {
    name: 'Amanda Foster',
    role: 'Program Director - Family Services',
    bio: "Amanda Foster manages the Foundation's family support and emergency assistance programs. A licensed social worker with 10 years of case management experience, Amanda ensures that families receive timely, dignified, and effective support. She holds an MSW from the University of Chicago School of Social Service Administration.",
  },
  {
    name: "Kevin O'Brien",
    role: 'Development & Communications Manager',
    bio: "Kevin O'Brien leads the Foundation's fundraising, donor relations, and communications efforts. He manages the website, annual reports, and public outreach campaigns. Kevin holds a Bachelor's in Communications from DePaul University and has previously worked with several Chicago-area arts and education nonprofits.",
  },
]

export default function Team() {
  return (
    <>
      <Helmet>
        <title>Our Team | Swartzberg Zoller Family Foundation</title>
        <meta name="description" content="Meet the Board of Directors and staff of the Swartzberg Zoller Family Foundation. EIN: 36-3864416." />
        <link rel="canonical" href="https://swartzberg-zoller-family-foundation.bond/team" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6">
            Our Team
          </h1>
          <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">
            Dedicated leaders and professionals committed to serving Chicago-area families.
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <SectionHeader
            title="Board of Directors"
            subtitle="Our volunteer board provides governance, strategic direction, and fiduciary oversight for the Foundation."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {boardMembers.map((member) => (
              <div key={member.name} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl font-serif shrink-0">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-bold text-lg text-slate-900">{member.name}</h3>
                    <p className="text-primary-600 font-medium text-sm">{member.role}</p>
                    <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
                      <Calendar className="w-3 h-3" />
                      Board member since {member.since}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mt-4">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-primary-50 rounded-xl p-6 border border-primary-100 max-w-3xl mx-auto">
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary-600" />
              Board Meetings
            </h3>
            <p className="text-slate-600 text-sm">
              The Board of Directors meets quarterly, typically in March, June, September, and December. 
              Annual meetings are held in December to review organizational performance, approve the annual budget, 
              and set strategic priorities for the coming year. Meeting minutes are maintained by the Secretary 
              and are available for review by qualified parties upon written request to the Foundation office.
            </p>
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="bg-slate-50">
        <div className="container-custom section-padding">
          <SectionHeader
            title="Foundation Staff"
            subtitle="Our professional staff manages daily operations, program delivery, and community engagement."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {staffMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-secondary-100 rounded-full flex items-center justify-center text-secondary-700 font-bold text-xl font-serif shrink-0">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-bold text-lg text-slate-900">{member.name}</h3>
                    <p className="text-secondary-600 font-medium text-sm">{member.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mt-4">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Note */}
      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-6">
              <Shield className="w-7 h-7 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold font-serif text-slate-900 mb-4">Governance & Transparency</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The Swartzberg Zoller Family Foundation is governed by a volunteer Board of Directors that meets 
              regularly to provide oversight and strategic direction. The Foundation operates in full compliance 
              with IRS regulations for 501(c)(3) public charities and Illinois nonprofit corporation law. 
              Our Form 990 filings, audited financial statements, and annual reports are available upon request.
            </p>
            <p className="text-sm text-slate-500">
              Swartzberg Zoller Family Foundation | EIN: 36-3864416 | 30 South Wells Street 4049, Chicago, IL 60606-5054
            </p>
          </div>
        </div>
      </section>
    </>
  )
}