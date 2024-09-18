import { Metadata } from 'next'
import { Header } from '@/layout/Header'
import { Footer } from '@/layout/Footer'
import { CONFIG } from '@/global/config'
import './globals.css'

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
}: {
  children: React.ReactNode
}) {
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

      <body className="flex flex-col min-h-screen font-sans text-base leading-normal text-foregroundLightTheme bg-backgroundLightTheme dark:text-foregroundDarkTheme dark:bg-backgroundDarkTheme antialiased">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_36rem_minmax(0,1fr)] grow">
          <Header />

          <div>{children}</div>
        </div>

        <Footer />
      </body>
    </html>
  )
}
