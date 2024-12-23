import { Entities } from '@/components/Entities'
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
            </Entities.CardContent>
          </Entities.Card>
        </Entities.Root>
      </Section.Container>
    </Section.Root>
  )
}
