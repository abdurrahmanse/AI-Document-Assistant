'use client'

import { SiteIcon } from '@/components/ui'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const subjectOptions = ['Job Inquiry', 'Collaboration Proposal', 'Speaking Engagement', 'Consulting', 'Other']

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: Replace with your actual email service endpoint
      // This can be EmailJS, SendGrid, or a custom API route
      console.log('Form submitted:', formData)

      // Simulated success response
      setSubmitStatus('success')
      setSubmitMessage('Thank you for your message! Ill get back to you soon.')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage('Something went wrong. Please try again.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      {/* Name Field */}
      <div>
        <label htmlFor='name' className='block text-sm font-medium text-white mb-2'>
          <span className='mr-2 inline-flex align-middle text-cyan-400'>
            <SiteIcon name='users' className='h-4 w-4' />
          </span>
          Name <span className='text-red-400'>*</span>
        </label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
          placeholder='Your name'
          className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300'
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor='email' className='block text-sm font-medium text-white mb-2'>
          <span className='mr-2 inline-flex align-middle text-cyan-400'>
            <SiteIcon name='mail' className='h-4 w-4' />
          </span>
          Email <span className='text-red-400'>*</span>
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          placeholder='your.email@example.com'
          className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300'
        />
      </div>

      {/* Subject Select */}
      <div>
        <label htmlFor='subject' className='block text-sm font-medium text-white mb-2'>
          <span className='mr-2 inline-flex align-middle text-cyan-400'>
            <SiteIcon name='message' className='h-4 w-4' />
          </span>
          Subject <span className='text-red-400'>*</span>
        </label>
        <select
          id='subject'
          name='subject'
          value={formData.subject}
          onChange={handleChange}
          required
          className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 appearance-none cursor-pointer'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`,
            backgroundPosition: 'right 0.75rem center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1.5em 1.5em',
            paddingRight: '2.5rem',
          }}
        >
          <option value=''>Select a subject...</option>
          {subjectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor='message' className='block text-sm font-medium text-white mb-2'>
          <span className='mr-2 inline-flex align-middle text-cyan-400'>
            <SiteIcon name='message' className='h-4 w-4' />
          </span>
          Message <span className='text-red-400'>*</span>
        </label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder='Tell me about your inquiry...'
          className='w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none'
        />
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className='p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-300 text-sm'>
          <span className='mr-2 inline-flex align-middle text-green-300'>
            <SiteIcon name='check' className='h-4 w-4' />
          </span>
          {submitMessage}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className='p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm'>
          <span className='mr-2 inline-flex align-middle text-red-300'>
            <SiteIcon name='x' className='h-4 w-4' />
          </span>
          {submitMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type='submit'
        disabled={isSubmitting}
        className='w-full px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-slate-600 disabled:to-slate-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100'
      >
        <span className='inline-flex items-center gap-2'>
          <SiteIcon name={isSubmitting ? 'sparkles' : 'mail'} className='h-4 w-4' />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </span>
      </button>

      <p className='text-xs text-slate-400 text-center'>I&apos;ll typically respond within 24-48 hours.</p>
    </form>
  )
}
