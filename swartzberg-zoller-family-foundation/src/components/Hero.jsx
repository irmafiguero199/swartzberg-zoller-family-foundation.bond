import { Link } from 'react-router-dom'
import { Shield, ArrowRight, Users, GraduationCap, Heart, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Users, value: '1,200+', label: 'Families Supported' },
  { icon: GraduationCap, value: '$450K', label: 'In Scholarships Awarded' },
  { icon: Heart, value: '35+', label: 'Community Partners' },
  { icon: TrendingUp, value: '15', label: 'Years of Service' },
]

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center pt-8 lg:pt-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Shield className="w-4 h-4 text-primary-300" />
            <span className="text-sm font-medium">Registered 501(c)(3) Nonprofit Organization</span>
            <span className="text-primary-300 font-mono text-sm">| EIN: 36-3864416</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif leading-tight mb-6">
            Swartzberg Zoller<br />
            <span className="text-primary-300">Family Foundation</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            Dedicated to empowering families, advancing education, and building stronger communities 
            through strategic philanthropy and direct charitable programs in the Chicago metropolitan area.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/programs" className="btn-primary text-base px-8 py-4">
              Explore Our Programs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/donate" className="btn-secondary text-base px-8 py-4 border-white text-white hover:bg-white/10">
              Support Our Mission
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <stat.icon className="w-8 h-8 text-primary-300 mx-auto mb-3" />
                <div className="text-2xl lg:text-3xl font-bold font-serif">{stat.value}</div>
                <div className="text-sm text-primary-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
