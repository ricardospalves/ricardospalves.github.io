import { Section } from '@/components/Section'
import { SKILLS_LIST } from './skillsList'
import { HOME_PAGE_SECTIONS } from '@/constants/homePageSections'
import { List } from '@/components/List'

const SECTION = HOME_PAGE_SECTIONS.SKILLS

export const Skills = () => {
  return (
    <Section.Root id={SECTION.ID}>
      <Section.Container>
        <Section.Heading as="h2">{SECTION.NAME}</Section.Heading>

        <div className="px-2 lg:px-0">
          <ul className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 text-center text-highlightForeground">
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

          <List.Root>
            <List.Item>Estrutura de dados;</List.Item>
            <List.Item>Algoritmos;</List.Item>
            <List.Item>Responsive Web Design;</List.Item>
            <List.Item>UX (User Experience);</List.Item>
            <List.Item>UI design;</List.Item>
            <List.Item>Usabilidade;</List.Item>
            <List.Item>Acessibilidade.</List.Item>
          </List.Root>
        </div>
      </Section.Container>
    </Section.Root>
  )
}
