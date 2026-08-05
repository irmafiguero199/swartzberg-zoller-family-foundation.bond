import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin, Shield } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/mission-vision', label: 'Mission & Vision' },
  { path: '/programs', label: 'Programs' },
  { path: '/impact', label: 'Impact' },
  { path: '/team', label: 'Team' },
  { path: '/news', label: 'News' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-900 text-white text-sm py-2">
        <div className="container-custom px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-primary-300" />
              <span className="font-medium">501(c)(3) Registered</span>
            </span>
            <span className="hidden sm:inline text-primary-400">|</span>
            <span className="font-mono text-primary-200">EIN: 36-3864416</span>
            <span className="hidden md:inline text-primary-400">|</span>
            <span className="hidden md:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary-300" />
              30 South Wells Street 4049, Chicago, IL 60606-5054
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+13125551234" className="flex items-center gap-1.5 hover:text-primary-300 transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">(312) 555-1234</span>
            </a>
            <a href="mailto:admin@swartzberg-zoller-family-foundation.bond" className="flex items-center gap-1.5 hover:text-primary-300 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden lg:inline">admin@swartzberg-zoller-family-foundation.bond</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className={`bg-white border-b border-slate-200 transition-shadow duration-200 ${scrolled ? 'shadow-md' : ''}`}>
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg font-serif">
                SZ
              </div>
              <div className="hidden sm:block">
                <div className="font-serif font-bold text-lg text-slate-900 leading-tight">Swartzberg Zoller</div>
                <div className="text-xs text-primary-600 font-medium">Family Foundation</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-slate-600 hover:text-primary-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/donate"
                className="ml-2 px-5 py-2.5 bg-accent-500 text-white text-sm font-semibold rounded-lg hover:bg-accent-600 transition-colors"
              >
                Donate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-slate-600 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                    location.pathname === link.path
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-slate-600 hover:text-primary-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/donate"
                className="block mt-2 px-3 py-2.5 bg-accent-500 text-white text-sm font-semibold rounded-lg text-center hover:bg-accent-600"
              >
                Donate Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
