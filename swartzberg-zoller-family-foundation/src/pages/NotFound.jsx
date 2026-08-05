import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Swartzberg Zoller Family Foundation</title>
        <meta name="description" content="The requested page could not be found. Swartzberg Zoller Family Foundation. EIN: 36-3864416." />
        <link rel="canonical" href="https://swartzberg-zoller-family-foundation.bond/404" />
      </Helmet>

      <section className="bg-slate-50 min-h-[70vh] flex items-center justify-center">
        <div className="container-custom px-4 text-center">
          <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-bold text-primary-600 font-serif">404</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-slate-600 max-w-md mx-auto mb-8">
            The page you are looking for does not exist or has been moved. 
            Please check the URL or navigate back to our homepage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-primary">
              <Home className="w-4 h-4 mr-2" />
              Return to Homepage
            </Link>
            <Link to="/contact" className="btn-secondary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </div>
          <div className="mt-12 text-sm text-slate-400">
            Swartzberg Zoller Family Foundation | EIN: 36-3864416<br />
            30 South Wells Street 4049, Chicago, IL 60606-5054
          </div>
        </div>
      </section>
    </>
  )
}
