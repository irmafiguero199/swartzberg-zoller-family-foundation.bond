import { Helmet } from 'react-helmet-async'
import { FileText, Mail, MapPin } from 'lucide-react'

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Swartzberg Zoller Family Foundation</title>
        <meta name="description" content="Terms of Service for the Swartzberg Zoller Family Foundation website. EIN: 36-3864416. Address: 30 South Wells Street 4049, Chicago, IL 60606-5054." />
        <link rel="canonical" href="https://swartzberg-zoller-family-foundation.bond/terms-of-service" />
      </Helmet>

      <section className="bg-white">
        <div className="container-custom section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4">
                <FileText className="w-7 h-7 text-primary-600" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-serif text-slate-900 mb-4">Terms of Service</h1>
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

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                Welcome to the Swartzberg Zoller Family Foundation website ("Site"). By accessing or using this Site, 
                you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please 
                do not use this Site. The Swartzberg Zoller Family Foundation ("Foundation," "we," "us," or "our") is 
                a registered 501(c)(3) nonprofit organization incorporated in the State of Illinois, with its principal 
                office located at 30 South Wells Street 4049, Chicago, IL 60606-5054. Our Federal Employer Identification 
                Number (EIN) is 36-3864416.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Use of the Site</h2>
              <p className="text-slate-600 leading-relaxed">
                This Site is provided for informational purposes regarding the Foundation's programs, services, and 
                charitable activities. You may use the Site only for lawful purposes and in accordance with these Terms. 
                You agree not to use the Site:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
                <li>To transmit any material that is defamatory, obscene, indecent, abusive, offensive, harassing, violent, hateful, inflammatory, or otherwise objectionable</li>
                <li>To impersonate or attempt to impersonate the Foundation, a Foundation employee, another user, or any other person or entity</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Site</li>
                <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Site</li>
              </ul>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Intellectual Property Rights</h2>
              <p className="text-slate-600 leading-relaxed">
                The Site and its entire contents, features, and functionality (including but not limited to all 
                information, software, text, displays, images, video, and audio, and the design, selection, and 
                arrangement thereof) are owned by the Swartzberg Zoller Family Foundation, its licensors, or other 
                providers of such material and are protected by United States and international copyright, trademark, 
                patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p className="text-slate-600 leading-relaxed mt-4">
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly 
                perform, republish, download, store, or transmit any of the material on our Site without our prior 
                written consent, except as necessary for your personal, non-commercial use.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Donations</h2>
              <p className="text-slate-600 leading-relaxed">
                The Swartzberg Zoller Family Foundation is a registered 501(c)(3) public charity. All donations are 
                tax-deductible to the fullest extent allowed by law. Donations are voluntary and non-refundable except 
                in cases of error or fraud, which must be reported within 30 days of the transaction. Donors will 
                receive an acknowledgment letter for tax purposes. The Foundation reserves the right to allocate 
                donations to the area of greatest need unless specifically restricted by the donor.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Disclaimer of Warranties</h2>
              <p className="text-slate-600 leading-relaxed">
                The Site is provided on an "as is" and "as available" basis, without any warranties of any kind, 
                either express or implied. The Foundation does not warrant that the Site will be uninterrupted, 
                timely, secure, or error-free, or that any defects will be corrected. The Foundation makes no 
                representations or warranties about the accuracy, reliability, completeness, or timeliness of the 
                content on this Site.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Limitation of Liability</h2>
              <p className="text-slate-600 leading-relaxed">
                To the fullest extent permitted by law, the Swartzberg Zoller Family Foundation and its board members, 
                officers, employees, agents, and affiliates shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, 
                or other intangible losses, resulting from your access to or use of or inability to access or use the Site.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Indemnification</h2>
              <p className="text-slate-600 leading-relaxed">
                You agree to defend, indemnify, and hold harmless the Swartzberg Zoller Family Foundation and its 
                board members, officers, employees, and agents from and against any claims, liabilities, damages, 
                judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising 
                out of or relating to your violation of these Terms or your use of the Site.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">8. Governing Law and Jurisdiction</h2>
              <p className="text-slate-600 leading-relaxed">
                These Terms and any dispute or claim arising out of or in connection with them shall be governed by 
                and construed in accordance with the laws of the State of Illinois, without regard to its conflict 
                of law provisions. Any legal suit, action, or proceeding arising out of or related to these Terms 
                or the Site shall be instituted exclusively in the federal or state courts located in Cook County, 
                Illinois.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">9. Changes to Terms</h2>
              <p className="text-slate-600 leading-relaxed">
                We may revise and update these Terms from time to time at our sole discretion. All changes are 
                effective immediately when we post them. Your continued use of the Site following the posting of 
                revised Terms means that you accept and agree to the changes.
              </p>

              <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">10. Contact Information</h2>
              <p className="text-slate-600 leading-relaxed">
                If you have any questions about these Terms, please contact us:
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
