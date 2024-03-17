import { CONFIG } from '@/global/config'
import { Resumes } from './Resumes/Resumes'

export const Bio = () => {
  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-black dark:text-white">
        {CONFIG.author}
      </h1>

      <h2 className="text-xl font-bold">{CONFIG.occupation}</h2>

      <div className="mt-4 space-y-4 text-black dark:text-white">
        <p>
          Olá, sou o <strong>{CONFIG.author}</strong>,{' '}
          <strong>{CONFIG.occupation.toLowerCase()}</strong> desde{' '}
          <time dateTime="2015">2015</time>, apaixonado por criar interfaces
          incríveis e funcionais. Com ampla contribuição em uma variedade de
          projetos, desde pequenos emails marketing até sites robustos. Busco
          evoluir constantemente em cada novo desafio, zelando pelas boas
          práticas, experiência do usuário e acessibilidade.
        </p>

        <p>
          Estou sempre atualizado com as últimas tendências e tecnologias,
          buscando expandir meu conhecimento e aprimorar minhas habilidades.
        </p>
      </div>

      <Resumes />
    </div>
  )
}
