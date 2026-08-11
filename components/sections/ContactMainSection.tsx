/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import ContactForm from '../forms/ContactForm';

interface ContactMainSectionProps {
  cta: { heading: string; description: string }
  contactInfo: any
  socialLinks: Array<any>
}

export function ContactMainSection({ cta, contactInfo, socialLinks }: ContactMainSectionProps) {
  return (
    <section className='py-20 md:py-32'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='order-2 md:order-1'>
            <div className='bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700'>
              <h2 className='text-2xl font-bold text-white mb-2'>{cta.heading}</h2>
              <p className='text-slate-400 mb-8'>{cta.description}</p>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info */}
          <div className='order-1 md:order-2 space-y-8'>
            {/* Email */}
            <div className='bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300'>
              <div className='flex items-start gap-4'>
                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 text-cyan-300'>
                  
                </div>
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
                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 text-cyan-300'>
                  
                </div>
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
                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-500/20 to-cyan-500/20 text-cyan-300'>
                  
                </div>
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
                    <span className='inline-flex items-center gap-2'>
                      
                      {link.platform}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
