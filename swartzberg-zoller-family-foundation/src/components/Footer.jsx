import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Shield, Heart, ExternalLink } from 'lucide-react'

const quickLinks = [
  { path: '/about', label: 'About Us' },
  { path: '/programs', label: 'Our Programs' },
  { path: '/impact', label: 'Impact' },
  { path: '/team', label: 'Our Team' },
  { path: '/news', label: 'News' },
  { path: '/gallery', label: 'Gallery' },
]

const legalLinks = [
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms-of-service', label: 'Terms of Service' },
  { path: '/registration-information', label: 'Registration Info' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg font-serif">
                SZ
              </div>
              <div>
                <div className="font-serif font-bold text-white leading-tight">Swartzberg Zoller</div>
                <div className="text-xs text-primary-400 font-medium">Family Foundation</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              A registered 501(c)(3) nonprofit organization dedicated to supporting families 
              and strengthening communities through charitable giving, education, and direct assistance programs.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-400">
              <Shield className="w-4 h-4" />
              <span className="font-mono">EIN: 36-3864416</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="font-serif font-semibold text-white text-lg mb-4">Legal & Info</h3>
            <ul className="space-y-2.5 mb-6">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-primary-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500 text-white text-sm font-semibold rounded-lg hover:bg-accent-600 transition-colors"
            >
              <Heart className="w-4 h-4" />
              Make a Donation
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-semibold text-white text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 shrink-0" />
                <span className="text-sm">
                  30 South Wells Street 4049<br />
                  Chicago, IL 60606-5054<br />
                  United States
                </span>
              </li>
              <li>
                <a href="tel:+13125551234" className="flex items-center gap-3 text-sm hover:text-primary-400 transition-colors">
                  <Phone className="w-5 h-5 text-primary-400 shrink-0" />
                  (312) 555-1234
                </a>
              </li>
              <li>
                <a href="mailto:admin@swartzberg-zoller-family-foundation.bond" className="flex items-center gap-3 text-sm hover:text-primary-400 transition-colors break-all">
                  <Mail className="w-5 h-5 text-primary-400 shrink-0" />
                  admin@swartzberg-zoller-family-foundation.bond
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Swartzberg Zoller Family Foundation. All rights reserved.
            Registered 501(c)(3) nonprofit organization. EIN: 36-3864416.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://swartzberg-zoller-family-foundation.bond" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-primary-400 transition-colors flex items-center gap-1">
              swartzberg-zoller-family-foundation.bond
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
