import React from 'react'

export function FAQSection() {
  return (
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
              
            </summary>
            <p className='text-slate-300 mt-4'>
              Absolutely! Feel free to reach out via email or phone. Im happy to discuss your needs and explore
              potential collaboration opportunities.
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}
