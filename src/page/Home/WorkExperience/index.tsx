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
              <Entities.CardHeading as="h3">
                Front-end na <b>Spacelab</b>
              </Entities.CardHeading>

              <Entities.CardTimeRange
                startISODate="01-01-2015"
                endISODate="01-01-2025"
              />
            </Entities.CardContent>
          </Entities.Card>
        </Entities.Root>
      </Section.Container>
    </Section.Root>
  )
}
