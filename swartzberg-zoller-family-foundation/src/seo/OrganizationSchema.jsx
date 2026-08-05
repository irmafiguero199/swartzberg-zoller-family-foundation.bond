import { Helmet } from 'react-helmet-async'

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Swartzberg Zoller Family Foundation",
    "alternateName": "SZFF",
    "url": "https://swartzberg-zoller-family-foundation.bond",
    "logo": "https://swartzberg-zoller-family-foundation.bond/logo.svg",
    "email": "admin@swartzberg-zoller-family-foundation.bond",
    "telephone": "+1-312-555-1234",
    "taxID": "36-3864416",
    "sameAs": [],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "30 South Wells Street 4049",
      "addressLocality": "Chicago",
      "addressRegion": "IL",
      "postalCode": "60606-5054",
      "addressCountry": "US"
    },
    "description": "A registered 501(c)(3) nonprofit organization dedicated to supporting families and strengthening communities through charitable giving, education, and direct assistance programs in the Chicago metropolitan area.",
    "foundingDate": "2011",
    "areaServed": {
      "@type": "City",
      "name": "Chicago, Illinois"
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  )
}
