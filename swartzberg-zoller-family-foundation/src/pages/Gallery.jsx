import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Calendar, MapPin, Camera, Filter } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

const categories = ['All', 'Scholarships', 'Community Events', 'Family Support', 'Mentorship', 'Annual Gala']

const events = [
  {
    title: '2026 Spring Scholarship Awards Ceremony',
    date: 'May 15, 2026',
    location: 'University of Chicago, Ida Noyes Hall',
    category: 'Scholarships',
    description: 'Celebrating 45 scholarship recipients from Chicago Public Schools who received awards totaling $125,000 for the 2026-2027 academic year. Families, educators, and community leaders gathered to honor student achievement.',
  },
  {
    title: 'Holiday Food Distribution Drive',
    date: 'December 20, 2025',
    location: 'South Loop Community Center',
    category: 'Family Support',
    description: 'Distributed holiday meal kits and grocery vouchers to 200 families in need across the Chicago South Loop and Bronzeville neighborhoods. Over 50 volunteers participated in the day-long distribution event.',
  },
  {
    title: 'Youth Mentorship Kickoff Event',
    date: 'October 5, 2025',
    location: 'Chicago Cultural Center',
    category: 'Mentorship',
    description: 'Matched 60 youth with professional mentors at our annual mentor-mentee matching event. Attendees participated in team-building activities, goal-setting workshops, and a keynote address by a local business leader.',
  },
  {
    title: '15th Annual Foundation Gala',
    date: 'September 12, 2025',
    location: 'The Palmer House Hilton, Chicago',
    category: 'Annual Gala',
    description: 'Our milestone 15th anniversary gala raised over $180,000 for Foundation programs. The evening featured scholarship recipient testimonials, a silent auction, and recognition of long-standing community partners.',
  },
  {
    title: 'Back-to-School Supply Drive',
    date: 'August 18, 2025',
    location: 'Harold Washington Library Center',
    category: 'Community Events',
    description: 'Provided backpacks, school supplies, and educational materials to 350 students preparing for the new school year. Community partners including Chicago Public Schools and local businesses contributed resources.',
  },
  {
    title: 'Community Health & Wellness Fair',
    date: 'June 8, 2025',
    location: 'South Loop Community Center',
    category: 'Community Events',
    description: 'Free health screenings, wellness workshops, and family resources for over 400 residents. Partnered with Rush University Medical Center and the Chicago Department of Public Health.',
  },
  {
    title: 'Winter Emergency Relief Distribution',
    date: 'January 25, 2025',
    location: 'Multiple Locations, Cook County',
    category: 'Family Support',
    description: 'Distributed winter coats, heating assistance vouchers, and emergency supplies to 150 families during a severe cold snap. Coordinated with the City of Chicago warming centers and social service agencies.',
  },
  {
    title: '2025 Fall Scholarship Awards Ceremony',
    date: 'November 8, 2024',
    location: 'DePaul University Student Center',
    category: 'Scholarships',
    description: 'Recognized 38 scholarship recipients with awards totaling $95,000. Keynote speaker was a 2018 Foundation alumna now working as a software engineer at a Chicago tech company.',
  },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredEvents = activeCategory === 'All'
    ? events
    : events.filter(e => e.category === activeCategory)

  return (
    <>
      <Helmet>
        <title>Gallery | Swartzberg Zoller Family Foundation</title>
        <meta name="description" content="Photo gallery and event archive of the Swartzberg Zoller Family Foundation. EIN: 36-3864416." />
        <link rel="canonical" href="https://swartzberg-zoller-family-foundation.bond/gallery" />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20 lg:py-28">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-6">
            Event Gallery
          </h1>
          <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">
            A visual record of our programs, events, and community engagement.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom section-padding">
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <Filter className="w-4 h-4 text-slate-400 mr-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <div key={index} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 group">
                {/* Placeholder Image Area */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-100 transition-colors">
                  <Camera className="w-12 h-12 text-primary-300" />
                </div>
                <div className="p-5">
                  <span className="inline-block bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full mb-3">
                    {event.category}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">{event.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {event.location}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-500">No events found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
