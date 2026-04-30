import Footer from '@/components/common/Footer'
import Navigation from '@/components/common/Navigation'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import './globals.css'

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'S M Masfequier Rahman Swapno - Senior Data Scientist',
  description: 'Senior Data Scientist Portfolio - AI, machine learning, deep learning, NLP, computer vision, and data engineering',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${firaCode.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>
        <Navigation />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
