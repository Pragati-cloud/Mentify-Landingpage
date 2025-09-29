import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mentify AI - Transform Your AI Journey',
  description: 'Mentify-AI transforms how you interact with Artificial Intelligence, empowering you to build stable, long-term careers by sharing revolutionary AI Buddys tailored to your unique needs.',
  keywords: 'AI, Artificial Intelligence, AI Buddies, Machine Learning, Technology',
  authors: [{ name: 'Mentify AI Team' }],
  openGraph: {
    title: 'Mentify AI - Transform Your AI Journey',
    description: 'Revolutionary AI Buddies tailored to your unique needs',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}