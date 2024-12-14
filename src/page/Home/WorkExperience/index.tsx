import { Entities } from '@/components/Entities'
import { Section } from '@/components/Section'

export const WorkExperience = () => {
  return (
    <Section.Root>
      <Section.Container>
        <Section.Heading as="h2">Experiência profissional</Section.Heading>

        <Entities.Root>
          <Entities.Card>
            <Entities.CardAvatar>
              <svg
                viewBox="0 0 24 24"
                className="block size-full fill-background"
              >
                <circle cx={12} cy={12} r={12} />
              </svg>
            </Entities.CardAvatar>

            <Entities.CardContent>
              <Entities.CardTitle as="h3">
                Desenvolvedor front-end
              </Entities.CardTitle>

              <Entities.CardInstitution>Spacelab</Entities.CardInstitution>

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
