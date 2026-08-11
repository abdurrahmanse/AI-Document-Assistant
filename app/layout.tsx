import Footer from '@/components/layout/Footer'
import Navigation from '@/components/navigation/Navigation'
import type { Metadata } from 'next'
import { Rajdhani } from 'next/font/google'
import '@radix-ui/themes/styles.css'
import './globals.css'
import { Theme } from '@radix-ui/themes'

const rajdhani = Rajdhani({
  variable: '--font-rajdhani',
  subsets: ['latin'],
  weight: ['600', '700'],
})

export const metadata: Metadata = {
  title: 'S M Masfequier Rahman Swapno - Research-First Data Scientist',
  description:
    'Research-led data science portfolio focused on AI, machine learning, deep learning, NLP, computer vision, and data engineering',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={`${rajdhani.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>
        <Theme accentColor="blue" grayColor="slate" radius="large" scaling="100%">
          <Navigation />
          <main className='flex-1'>{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  )
}
