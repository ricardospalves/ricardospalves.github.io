import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CONFIG } from '@/global/config'
import { classNames } from '@/utils/classNames'
import { Footer } from '@/layouts/Footer'
import { Header } from '@/layouts/Header'
import './globals.css'

const interFont = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.URL),
  title: `${CONFIG.NAME} - ${CONFIG.OCCUPATION}`,
  description: CONFIG.DESCRIPTION,
  robots: 'index,follow',
  verification: {
    google: 'u1GUmbTO1-GCaMc0IjPoL7EUp3MPUapTtdFMUCE3Ob4',
  },
  twitter: {
    card: 'summary_large_image',
    site: CONFIG.URL,
    description: CONFIG.DESCRIPTION,
    title: CONFIG.NAME,
    images: '/share/twitter-card-cover.png',
  },
  openGraph: {
    url: CONFIG.URL,
    type: 'website',
    locale: 'pt_BR',
    siteName: CONFIG.NAME,
    title: CONFIG.NAME,
    description: CONFIG.DESCRIPTION,
    images: '/share/open-graph-cover.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-title" content="Ricardo Alves" />
        <meta name="theme-color" content="#000000" />
      </head>

      <body
        className={classNames([
          'text-base leading-normal antialiased',
          interFont.className,
        ])}
      >
        <div className="grid grid-rows-[auto_minmax(auto,1fr)_auto] min-h-screen">
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
