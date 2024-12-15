import { NativeTextLink } from '@/components/NativeTextLink'

export const Footer = () => {
  return (
    <footer className="py-8 px-2 space-y-4 border-t border-current text-center">
      <p>
        Desenvolvido por{' '}
        <NativeTextLink href="https://github.com/ricardospalves">
          Ricardo Alves
        </NativeTextLink>
        .
      </p>

      <p>
        Esta página é um projeto de{' '}
        <NativeTextLink href="https://github.com/ricardospalves/ricardospalves.github.io">
          código aberto
        </NativeTextLink>{' '}
        lançado sob a{' '}
        <NativeTextLink href="https://github.com/ricardospalves/ricardospalves.github.io/blob/main/LICENSE">
          licença MIT
        </NativeTextLink>
        .
      </p>
    </footer>
  )
}
