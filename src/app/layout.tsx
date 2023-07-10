import { Footer } from '@/layout/Footer/Footer'
import './globals.css'
import { Metadata } from 'next'
import { CONFIG } from '@/global/config'

export const metadata: Metadata = {
  title: CONFIG.name,
  description: CONFIG.description,
  robots: 'index,follow',
  twitter: {
    card: 'summary_large_image',
    site: CONFIG.url,
    description: CONFIG.description,
    title: CONFIG.name,
    images: `${CONFIG.url}/cover.png`,
  },
  openGraph: {
    url: CONFIG.url,
    type: 'website',
    locale: 'pt_BR',
    siteName: CONFIG.name,
    title: CONFIG.name,
    description: CONFIG.description,
    images: `${CONFIG.url}/cover.png`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#000000" />
      </head>

      <body className="font-sans text-base leading-normal antialiased text-foregroundLightTheme bg-backgroundLightTheme dark:text-foregroundDarkTheme dark:bg-backgroundDarkTheme">
        {children}

        <Footer />
      </body>
    </html>
  )
}
