import { Helmet } from 'react-helmet-async'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'

const articles = [
  {
    title: 'Foundation Awards $125,000 in Spring 2026 Scholarships',
    date: 'May 20, 2026',
    category: 'Scholarships',
    excerpt: 'Forty-five students from Chicago Public Schools received merit-based and need-based scholarships for the 2026-2027 academic year, bringing total scholarship distributions to over $450,000 since inception.',
  },
  {
    title: 'Emergency Family Support Fund Reaches 300th Household',
    date: 'April 8, 2026',
    category: 'Family Support',
    excerpt: 'The Foundation celebrated a milestone as its Emergency Family Support Fund provided assistance to the 300th household since the program was expanded in 2021. The program has distributed over $380,000 in direct aid.',
  },
  {
    title: 'New Partnership with Chicago Youth Centers Announced',
    date: 'March 15, 2026',
    category: 'Partnerships',
    excerpt: 'The Swartzberg Zoller Family Foundation has entered a multi-year partnership with Chicago Youth Centers to expand mentorship programming to the South Chicago and North Lawndale neighborhoods.',
  },
  {
    title: '2025 Annual Report Published',
    date: 'February 28, 2026',
    category: 'Foundation News',
    excerpt: 'The Foundation published its 2025 Annual Report, detailing $285,000 in program distributions, 180 families served, and 38 scholarship recipients. The report is available for download on our Registration Information page.',
  },
  {
    title: 'Winter Relief Program Distributes 150 Emergency Kits',
    date: 'January 30, 2026',
    category: 'Family Support',
    excerpt: 'During the January cold snap, the Foundation coordinated with community partners to distribute winter emergency kits including coats, heating vouchers, and supplies to vulnerable families across Cook County.',
  },
  {
    title: 'Youth Mentorship Program Expands to STEM Fields',
    date: 'December 10, 2025',
    category: 'Mentorship',
    excerpt: 'Responding to growing demand, the Professional Mentorship Program added 25 new mentors in technology, engineering, and healthcare sectors, matching 60 youth for the 2026 program cycle.',
  },
]

export default function News() {
  return (
    <>
      <Helmet>
        <title>News | Swartzberg Zoller Family Foundation</title>
        <meta name="description" content="Latest news and updates from the Swartzberg Zoller Family Foundation. EIN: 36-3864416." />
        <link rel="canonical" href="https://swartzberg-zoller-family-foundation.bond/news" />
      </Helmet>

      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6">News & Updates</h1>
          <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">
            The latest from the Swartzberg Zoller Family Foundation.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <article key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full">
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 text-xs">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-slate-900 mb-3">{article.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                <Link to="/contact" className="text-primary-600 text-sm font-medium hover:text-primary-700 flex items-center gap-1">
                  Read more <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
