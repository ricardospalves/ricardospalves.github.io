import { ExternalTextLink } from '@/components/ExternalTextLink/ExternalTextLink'

const YEAR_RELEASED = 2023
const CURRENT_YEAR = new Date().getFullYear()

export const Footer = () => {
  return (
    <footer className="py-8 mt-16 border-t border-current text-black dark:text-white">
      <div className="max-w-xl mx-auto px-4 text-center space-y-4">
        <p>
          Desenvolvido por{' '}
          <ExternalTextLink href="https://github.com/ricardospalves">
            Ricardo Alves
          </ExternalTextLink>
          .
        </p>

        <p>
          Esta página é um projeto de{' '}
          <ExternalTextLink href="https://github.com/ricardospalves/ricardospalves.github.io">
            código aberto
          </ExternalTextLink>{' '}
          lançado sob a{' '}
          <ExternalTextLink href="https://github.com/ricardospalves/ricardospalves.github.io/blob/main/LICENSE">
            licença MIT
          </ExternalTextLink>
          .
        </p>

        <p>
          Copyright © {YEAR_RELEASED}
          {CURRENT_YEAR !== YEAR_RELEASED && `–${CURRENT_YEAR}`} Ricardo Alves
        </p>
      </div>
    </footer>
  )
}
