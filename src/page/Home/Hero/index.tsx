import { Container } from '@/components/Container'
import { CONFIG } from '@/global/config'
import Link from 'next/link'
import { LuDownload as DownloadIcon } from 'react-icons/lu'

export const Hero = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen px-2 py-8">
      <Container className="grid items-center">
        <div className="lg:grid lg:grid-cols-2">
          <div>
            <h1 className="text-4xl lg:text-6xl leading-tight font-bold text-highlightForeground">
              {CONFIG.author}
            </h1>

            <p className="text-2xl">{CONFIG.occupation}</p>
          </div>

          <div className="mt-8 lg:mt-0">
            <p>
              Bacharel em Sistemas para Internet, Técnico em Informática pela
              ETEC, profissional desde 2015 e futuro Full Stack.
            </p>

            <Link
              href="/files/curriculo-ricardo-alves.pdf"
              className="flex lg:inline-flex items-center justify-center w-full lg:w-auto px-0 lg:px-8 py-4 mt-8 text-center font-bold text-lg bg-highlightForeground hover:bg-foreground focus-visible:bg-foreground text-background rounded transition-colors"
              download
            >
              <DownloadIcon className="block size-6" aria-hidden={true} />
              <span className="block pl-2">Baixar currículo</span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
