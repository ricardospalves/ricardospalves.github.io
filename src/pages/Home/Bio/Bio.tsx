import { CONFIG } from '@/global/config'
import { CommunicationChannels } from './CommunicationChannels/CommunicationChannels'
import { ResumeLink } from './ResumeLink/ResumeLink'

export const Bio = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-black dark:text-white">
        {CONFIG.author}
      </h1>

      <h2 className="text-xl font-bold">{CONFIG.occupation}</h2>

      <div className="mt-4 space-y-4 text-black dark:text-white">
        <p>
          Olá, sou o <strong>{CONFIG.author}</strong>,{' '}
          <strong>{CONFIG.occupation.toLowerCase()}</strong> desde{' '}
          <time dateTime="2015">2015</time> com uma paixão por criar interfaces
          incríveis e funcionais. Contribuí em mais de 70 projetos (e contando),
          sempre zelando pelas boas práticas, experiência do usuário e
          acessibilidade.
        </p>

        <p>Aprendendo um pouco mais todo dia e evoluindo sempre.</p>
      </div>

      <ResumeLink />

      <CommunicationChannels />
    </div>
  )
}
