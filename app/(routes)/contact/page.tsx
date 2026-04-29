import ContactForm from '@/components/sections/ContactForm'
import { contactPage } from '@/data'
import Link from 'next/link'

export const metadata = {
  title: contactPage.page.title,
  description: contactPage.page.metaDescription,
}

export default function Contact() {
  const { sections, contactInfo, socialLinks } = contactPage

  return (
    <main className='bg-slate-900 min-h-screen'>
      {/* Hero Section */}
      <section className='py-20 md:py-32 bg-linear-to-b from-slate-800 to-slate-900 border-b border-slate-700'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-sm text-blue-400 mb-6'>
            💬 Get in Touch
          </div>
          <h1 className='text-5xl md:text-6xl font-bold text-white mb-6'>{sections.hero.title}</h1>
          <p className='text-xl text-slate-300 mb-4'>{sections.hero.subtitle}</p>
          <p className='text-lg text-slate-400 max-w-2xl mx-auto'>{sections.hero.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className='py-20 md:py-32'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div className='order-2 md:order-1'>
              <div className='bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700'>
                <h2 className='text-2xl font-bold text-white mb-2'>{sections.cta.heading}</h2>
                <p className='text-slate-400 mb-8'>{sections.cta.description}</p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className='order-1 md:order-2 space-y-8'>
              {/* Email */}
              <div className='bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300'>
                <div className='flex items-start gap-4'>
                  <div className='text-3xl'>📧</div>
                  <div>
                    <h3 className='text-lg font-semibold text-white mb-1'>{contactInfo.email.label}</h3>
                    <p className='text-blue-400 hover:text-blue-300 transition-colors'>
                      <a href={`mailto:${contactInfo.email.address}`}>{contactInfo.email.address}</a>
                    </p>
                    <p className='text-slate-400 text-sm mt-2'>Response time: {contactInfo.email.responseTime}</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className='bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300'>
                <div className='flex items-start gap-4'>
                  <div className='text-3xl'>📱</div>
                  <div>
                    <h3 className='text-lg font-semibold text-white mb-1'>{contactInfo.phone.label}</h3>
                    <p className='text-slate-300'>
                      <a href={`tel:${contactInfo.phone.number}`} className='hover:text-blue-400 transition-colors'>
                        {contactInfo.phone.number}
                      </a>
                    </p>
                    <p className='text-slate-400 text-sm mt-2'>{contactInfo.phone.availability}</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className='bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300'>
                <div className='flex items-start gap-4'>
                  <div className='text-3xl'>📍</div>
                  <div>
                    <h3 className='text-lg font-semibold text-white mb-1'>{contactInfo.location.label}</h3>
                    <p className='text-slate-300'>
                      {contactInfo.location.city}, {contactInfo.location.state} {contactInfo.location.country}
                    </p>
                    {contactInfo.location.remote && <p className='text-blue-400 text-sm mt-2'>✓ Open to remote work</p>}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className='text-lg font-semibold text-white mb-4'>Follow Me</h3>
                <div className='grid grid-cols-2 gap-3'>
                  {socialLinks.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:text-white hover:border-blue-500/50 transition-all duration-300 text-center text-sm font-medium'
                    >
                      {link.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-20 md:py-32 bg-slate-800/50 border-t border-slate-700'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white mb-4'>Frequently Asked Questions</h2>
            <p className='text-slate-400'>Common questions about working together</p>
          </div>

          <div className='space-y-4'>
            {/* FAQ Item 1 */}
            <details className='group bg-slate-700/50 border border-slate-600 rounded-lg p-6 cursor-pointer hover:border-blue-500/50 transition-all duration-300'>
              <summary className='flex items-center justify-between font-semibold text-white'>
                <span>What services do you offer?</span>
                <span className='transition-transform duration-300 group-open:rotate-180'>↓</span>
              </summary>
              <p className='text-slate-300 mt-4'>
                I offer data science consulting, machine learning model development, data engineering, statistical
                analysis, and advisory services. Im also available for speaking engagements and mentorship.
              </p>
            </details>

            {/* FAQ Item 2 */}
            <details className='group bg-slate-700/50 border border-slate-600 rounded-lg p-6 cursor-pointer hover:border-blue-500/50 transition-all duration-300'>
              <summary className='flex items-center justify-between font-semibold text-white'>
                <span>Whats your typical response time?</span>
                <span className='transition-transform duration-300 group-open:rotate-180'>↓</span>
              </summary>
              <p className='text-slate-300 mt-4'>
                I typically respond to inquiries within 24-48 hours. For urgent matters, please call or mention it in
                your subject line.
              </p>
            </details>

            {/* FAQ Item 3 */}
            <details className='group bg-slate-700/50 border border-slate-600 rounded-lg p-6 cursor-pointer hover:border-blue-500/50 transition-all duration-300'>
              <summary className='flex items-center justify-between font-semibold text-white'>
                <span>Do you work remotely?</span>
                <span className='transition-transform duration-300 group-open:rotate-180'>↓</span>
              </summary>
              <p className='text-slate-300 mt-4'>
                Yes! Im based in San Francisco but work with clients globally. Remote collaboration is my preferred way
                of working.
              </p>
            </details>

            {/* FAQ Item 4 */}
            <details className='group bg-slate-700/50 border border-slate-600 rounded-lg p-6 cursor-pointer hover:border-blue-500/50 transition-all duration-300'>
              <summary className='flex items-center justify-between font-semibold text-white'>
                <span>Can we schedule a call?</span>
                <span className='transition-transform duration-300 group-open:rotate-180'>↓</span>
              </summary>
              <p className='text-slate-300 mt-4'>
                Absolutely! Feel free to reach out via email or phone. Im happy to discuss your needs and explore
                potential collaboration opportunities.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 md:py-32 bg-linear-to-r from-blue-600 to-cyan-600'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>Lets Create Something Amazing Together</h2>
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto'>
            Whether you have a specific project in mind or just want to chat about data science, Im here to help.
          </p>
          <Link
            href='#contact-form'
            className='inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105'
          >
            Start Conversation
          </Link>
        </div>
      </section>
    </main>
  )
}
