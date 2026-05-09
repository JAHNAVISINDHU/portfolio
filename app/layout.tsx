import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Nakka Jahnavi Sindhu | Software Developer & Backend Engineer',
  description: 'Portfolio of Nakka Jahnavi Sindhu - A passionate Software Developer and Backend Engineer specializing in MERN stack, Python, and AI/ML solutions. Building impactful digital experiences.',
  keywords: ['Software Developer', 'Backend Engineer', 'MERN Stack', 'React', 'Node.js', 'Python', 'AI/ML', 'Full Stack Developer'],
  authors: [{ name: 'Nakka Jahnavi Sindhu' }],
  openGraph: {
    title: 'Nakka Jahnavi Sindhu | Software Developer',
    description: 'Portfolio of a passionate Software Developer specializing in backend systems and AI-driven solutions.',
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
