import { Entities } from '@/components/Entities'
import { Section } from '@/components/Section'
import { HOME_PAGE_SECTIONS } from '@/constants/homePageSections'
import { EDUCATION_LIST } from './list'

const SECTION = HOME_PAGE_SECTIONS.EDUCATION

export const Education = () => {
  return (
    <Section.Root id={SECTION.ID}>
      <Section.Container>
        <Section.Heading as="h2">{SECTION.NAME}</Section.Heading>

        <Entities.Root>
          {EDUCATION_LIST.map(
            ({
              endDate,
              institution,
              startDate,
              title,
              href,
              shortCourses,
            }) => {
              const key = `${title}:${institution}`

              return (
                <Entities.Card key={key}>
                  <Entities.CardAvatar title={institution}>
                    {institution[0].toUpperCase()}
                  </Entities.CardAvatar>

                  <Entities.CardContent>
                    <Entities.CardTitle as="h3">{title}</Entities.CardTitle>

                    <Entities.CardInstitution shortCourses={shortCourses}>
                      {institution}
                    </Entities.CardInstitution>

                    {href && <Entities.CardLink href={href} />}

                    <Entities.CardTimeRange
                      startISODate={startDate}
                      endISODate={endDate}
                      formatTemplate="MMMM 'de' yyyy"
                    />
                  </Entities.CardContent>
                </Entities.Card>
              )
            },
          )}
        </Entities.Root>
      </Section.Container>
    </Section.Root>
  )
}
