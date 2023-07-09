import { Footer } from '@/layout/Footer/Footer'
import './globals.css'

export const metadata = {
  title: 'Ricardo Alves',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans text-base leading-normal antialiased text-foregroundLightTheme bg-backgroundLightTheme dark:text-foregroundDarkTheme dark:bg-backgroundDarkTheme">
        {children}

        <Footer />
      </body>
    </html>
  )
}
