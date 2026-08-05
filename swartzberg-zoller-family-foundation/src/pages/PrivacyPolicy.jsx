import { Helmet } from 'react-helmet-async'
import { Shield, Mail, MapPin } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Swartzberg Zoller Family Foundation</title>
        <meta name="description" content="Privacy Policy of the Swartzberg Zoller Family Foundation. EIN: 36-3864416. Address: 30 South Wells Street 4049, Chicago, IL 60606-5054." />
        <link rel="canonical" href="https://swartzberg-zoller-family-foundation.bond/privacy-policy" />
      </Helmet>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4">
                <Shield className="w-7 h-7 text-primary-600" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-4">Privacy Policy</h1>
              <p className="text-slate-500">Last Updated: August 5, 2026</p>
            </div>

            <div className="prose prose-slate max-w-none">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mb-8">
                <p className="text-sm text-slate-600 m-0">
                  <strong>Swartzberg Zoller Family Foundation</strong><br />
                  30 South Wells Street 4049, Chicago, IL 60606-5054<br />
                  EIN: 36-3864416<br />
                  Email: <a href="mailto:admin@swartzberg-zoller-family-foundation.bond" className="text-primary-600">admin@swartzberg-zoller-family-foundation.bond</a>
                </p>
              </div>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed">
                The Swartzberg Zoller Family Foundation ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
                our website at swartzberg-zoller-family-foundation.bond. Please read this policy carefully. By accessing 
                or using our website, you agree to the terms of this Privacy Policy.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Fill out our contact form</li>
                <li>Subscribe to our newsletter</li>
                <li>Make a donation</li>
                <li>Apply for a scholarship or program</li>
                <li>Contact us via email or phone</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                This information may include your name, email address, phone number, mailing address, and any other 
                information you choose to provide. We do not collect sensitive personal information such as Social 
                Security numbers through this website.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-600 leading-relaxed">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>To respond to your inquiries and provide customer support</li>
                <li>To process donations and send donation receipts</li>
                <li>To send newsletters, updates, and event information (with your consent)</li>
                <li>To evaluate scholarship and program applications</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations and IRS reporting requirements</li>
              </ul>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-slate-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>With service providers who assist us in operating our website and programs (under strict confidentiality agreements)</li>
                <li>When required by law, such as in response to a subpoena or court order</li>
                <li>To protect the rights, property, or safety of the Foundation, our users, or the public</li>
                <li>In connection with a merger, acquisition, or organizational restructuring</li>
              </ul>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Data Security</h2>
              <p className="text-slate-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-slate-600 leading-relaxed">
                Our website may use cookies and similar tracking technologies to enhance your browsing experience, 
                analyze site traffic, and understand user behavior. You can control cookies through your browser 
                settings. Disabling cookies may affect the functionality of certain features on our website.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Third-Party Links</h2>
              <p className="text-slate-600 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                or content of these external sites. We encourage you to review the privacy policies of any third-party 
                sites you visit.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">8. Children's Privacy</h2>
              <p className="text-slate-600 leading-relaxed">
                Our website is not directed to children under the age of 13, and we do not knowingly collect personal 
                information from children under 13. If you believe we have inadvertently collected such information, 
                please contact us immediately so we can delete it.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">9. Your Rights</h2>
              <p className="text-slate-600 leading-relaxed">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt out of marketing communications</li>
                <li>The right to withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mt-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">10. Changes to This Policy</h2>
              <p className="text-slate-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an 
                updated "Last Updated" date. We encourage you to review this policy periodically.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">11. Contact Us</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 mt-4">
                <p className="text-slate-600 m-0">
                  <strong>Swartzberg Zoller Family Foundation</strong><br />
                  30 South Wells Street 4049<br />
                  Chicago, IL 60606-5054<br />
                  United States<br /><br />
                  Email: <a href="mailto:admin@swartzberg-zoller-family-foundation.bond" className="text-primary-600">admin@swartzberg-zoller-family-foundation.bond</a><br />
                  Phone: <a href="tel:+13125551234" className="text-primary-600">(312) 555-1234</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
