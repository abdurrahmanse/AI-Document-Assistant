import Footer from '@/components/layout/Footer'
import Navigation from '@/components/navigation/Navigation'
import type { Metadata } from 'next'
import '@radix-ui/themes/styles.css'
import './globals.css'
import { Theme } from '@radix-ui/themes'
import { LenisProvider } from '@/components/providers/LenisProvider'

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
    <html lang='en' className={`h-full antialiased`}>
      <body className='min-h-full flex flex-col'>
        <Theme accentColor="blue" grayColor="slate" radius="large" scaling="100%">
          <LenisProvider>
            <Navigation />
            <main className='flex-1'>{children}</main>
            <Footer />
          </LenisProvider>
        </Theme>
      </body>
    </html>
  )
}
