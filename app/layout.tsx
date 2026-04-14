import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: 'Muhammad Taosiq | Computer Science Graduate & Full-Stack Developer',
  description: 'Portfolio of Muhammad Taosiq - Computer Science Graduate from NUST with expertise in AI, Deep Learning, and Full-Stack Development. Fully Funded Allama Iqbal Scholar.',
  generator: 'v0.app',
  keywords: ['Muhammad Taosiq', 'Computer Science', 'Full-Stack Developer', 'AI', 'Deep Learning', 'NUST', 'Portfolio'],
  authors: [{ name: 'Muhammad Taosiq' }],
  openGraph: {
    title: 'Muhammad Taosiq | Computer Science Graduate & Full-Stack Developer',
    description: 'Portfolio of Muhammad Taosiq - Computer Science Graduate from NUST with expertise in AI, Deep Learning, and Full-Stack Development.',
    type: 'website',
  },
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
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
