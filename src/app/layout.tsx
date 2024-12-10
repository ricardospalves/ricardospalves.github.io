import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { CONFIG } from '@/global/config'
import './globals.css'
import { classNames } from '@/utils/classNames'

const interFont = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(CONFIG.url),
  title: `${CONFIG.name} - ${CONFIG.occupation}`,
  description: CONFIG.description,
  robots: 'index,follow',
  verification: {
    google: 'u1GUmbTO1-GCaMc0IjPoL7EUp3MPUapTtdFMUCE3Ob4',
  },
  twitter: {
    card: 'summary_large_image',
    site: CONFIG.url,
    description: CONFIG.description,
    title: CONFIG.name,
    images: '/share/twitter-card-cover.png',
  },
  openGraph: {
    url: CONFIG.url,
    type: 'website',
    locale: 'pt_BR',
    siteName: CONFIG.name,
    title: CONFIG.name,
    description: CONFIG.description,
    images: '/share/open-graph-cover.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="./favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="./favicons/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="./favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#000000" />
      </head>

      <body
        className={classNames([
          'text-base leading-normal antialiased',
          interFont.className,
        ])}
      >
        {children}
      </body>
    </html>
  )
}
