import { Entities } from '@/components/Entities'
import { List } from '@/components/List'
import { Section } from '@/components/Section'
import { HOME_PAGE_SECTIONS } from '@/constants/homePageSections'

const SECTION = HOME_PAGE_SECTIONS.WORK

export const WorkExperience = () => {
  return (
    <Section.Root id={SECTION.ID}>
      <Section.Container>
        <Section.Heading as="h2">{SECTION.NAME}</Section.Heading>

        <Entities.Root>
          <Entities.Card>
            <Entities.CardAvatar title="Spacelab - Produtora e Agência Web">
              SP
            </Entities.CardAvatar>

            <Entities.CardContent>
              <Entities.CardTitle as="h3">
                Desenvolvedor front-end
              </Entities.CardTitle>

              <Entities.CardInstitution>
                Spacelab - Produtora e Agência Web
              </Entities.CardInstitution>

              <Entities.CardTimeRange
                startISODate="2015-01-26"
                endISODate="current"
              />

              <List.Root className="mt-4">
                <List.Item>
                  Desenvolver interfaces de usuário para todos os projetos,
                  garantindo uma experiência visual atraente e funcional;
                </List.Item>

                <List.Item>
                  Implementar tecnologias modernas, como React e TypeScript,
                  para criar aplicações escaláveis e de alta qualidade;
                </List.Item>

                <List.Item>
                  Otimizar a performance, acessibilidade e usabilidade das
                  aplicações, resultando em um aumento significativo na
                  satisfação do usuário e na conformidade com as diretrizes de
                  acessibilidade.
                </List.Item>
              </List.Root>
            </Entities.CardContent>
          </Entities.Card>
        </Entities.Root>
      </Section.Container>
    </Section.Root>
  )
}
