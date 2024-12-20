import { Section } from '@/components/Section'
import { SKILLS_LIST } from './skillsList'

export const Skills = () => {
  return (
    <Section.Root>
      <Section.Container>
        <Section.Heading as="h2">Habilidades</Section.Heading>

        <ul className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 text-highlightForeground">
          {SKILLS_LIST.map(({ Icon, name }) => {
            return (
              <li
                className="flex items-center justify-center flex-col aspect-square border border-current rounded"
                key={name}
              >
                <span className="block mt-2">{name}</span>

                <Icon
                  className="block mx-auto size-12 order-first"
                  aria-hidden={true}
                />
              </li>
            )
          })}
        </ul>

        <p className="mt-8 mb-4 text-xl">Habilidades relacionadas:</p>

        <ul className="pl-8 list-disc">
          <li>Responsive Web Design;</li>
          <li>UX (User Experience);</li>
          <li>UI design;</li>
          <li>Usabilidade;</li>
          <li>Acessibilidade.</li>
        </ul>
      </Section.Container>
    </Section.Root>
  )
}
