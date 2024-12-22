import { Entities } from '@/components/Entities'
import { Section } from '@/components/Section'

export const WorkExperience = () => {
  return (
    <Section.Root>
      <Section.Container>
        <Section.Heading as="h2">Experiência profissional</Section.Heading>

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
            </Entities.CardContent>
          </Entities.Card>
        </Entities.Root>
      </Section.Container>
    </Section.Root>
  )
}
