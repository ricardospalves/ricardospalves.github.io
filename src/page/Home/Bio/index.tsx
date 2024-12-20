import { Section } from '@/components/Section'
import { ReactNode } from 'react'
import { IconBase } from 'react-icons'
import {
  LuCalendar as CalendarIcon,
  LuGraduationCap as GraduationCapIcon,
  LuMonitor as MonitorIcon,
} from 'react-icons/lu'

type ListItem = {
  id: string
  Icon: typeof IconBase
  children: ReactNode
}

const LIST: ListItem[] = [
  {
    id: 'experienceTime',
    Icon: CalendarIcon,
    children: (
      <>
        Profissional desde <time dateTime="2015-01-26">2015</time>;
      </>
    ),
  },
  {
    id: 'graduation',
    Icon: GraduationCapIcon,
    children: (
      <>
        Bacharel em <strong>Tecnologia em Sistemas para Internet</strong>;
      </>
    ),
  },
  {
    id: 'tecnico',
    Icon: MonitorIcon,
    children: (
      <>
        <strong>Técnico em Informatica</strong> pela ETEC;
      </>
    ),
  },
]

export const Bio = () => {
  return (
    <Section.Root>
      <Section.Container>
        <Section.Heading as="h2">Sobre mim</Section.Heading>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 px-2 lg:px-0">
          <div className="space-y-4">
            <p>
              Olá, sou o Ricardo Alves, desenvolvedor front-end, com ampla
              contribuição em uma variedade de projetos, desde pequenos e-mails
              marketing até sites robustos, como e-commerces e portais. Estou
              constantemente evoluindo em cada desafio, zelando pelas boas
              práticas, experiência do usuário e acessibilidade.
            </p>

            <p>
              Atualmente, estou aprofundando meus conhecimentos em back-end e
              bancos de dados, com foco em tecnologias como Node.js, Python,
              MySQL, PostgreSQL e MongoDB, para alcançar meu objetivo de me
              tornar um desenvolvedor full stack completo.
            </p>
          </div>

          <div className="lg:pl-16">
            <ul className="space-y-4">
              {LIST.map(({ id, Icon, children }) => {
                return (
                  <li className="flex items-center gap-2" key={id}>
                    <Icon
                      className="block size-6 shrink-0"
                      aria-hidden={true}
                    />

                    <span className="block">{children}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </Section.Container>
    </Section.Root>
  )
}
