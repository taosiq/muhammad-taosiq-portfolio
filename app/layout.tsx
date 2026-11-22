import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { BootScreen } from '@/components/fx/boot-screen'
import { NeuralBackground } from '@/components/fx/neural-background'
import { ScrollProgress } from '@/components/fx/scroll-progress'
import { CursorGlow } from '@/components/fx/cursor-glow'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'Muhammad Taosiq | Computer Science Graduate & Full-Stack Developer',
  description:
    'Portfolio of Muhammad Taosiq - Computer Science Graduate from NUST with expertise in AI, Deep Learning, and Full-Stack Development. Fully Funded Allama Iqbal Scholar.',
  keywords: ['Muhammad Taosiq', 'Computer Science', 'Full-Stack Developer', 'AI', 'Deep Learning', 'NUST', 'Portfolio'],
  authors: [{ name: 'Muhammad Taosiq' }],
  openGraph: {
    title: 'Muhammad Taosiq | Computer Science Graduate & Full-Stack Developer',
    description:
      'Portfolio of Muhammad Taosiq - Computer Science Graduate from NUST with expertise in AI, Deep Learning, and Full-Stack Development.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#070b14',
}

// The boot animation plays once per browser session; later page loads skip it.
const bootScript = `try{var d=document.documentElement;if(sessionStorage.getItem('mt-booted')||matchMedia('(prefers-reduced-motion: reduce)').matches){d.dataset.booted='1'}else{sessionStorage.setItem('mt-booted','1')}}catch(e){}`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <BootScreen />
        <NeuralBackground />
        <ScrollProgress />
        <CursorGlow />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
