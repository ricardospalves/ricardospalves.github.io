import { Footer } from '@/layout/Footer/Footer'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ricardo Alves',
  description:
    'Desenvolvedor front-end desde 2015 com contribuição em mais de 70 projetos (e contando).',
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
