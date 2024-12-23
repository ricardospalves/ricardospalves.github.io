import { Entities } from '@/components/Entities'
import { Section } from '@/components/Section'
import { HOME_PAGE_SECTIONS } from '@/constants/homePageSections'
import { ReactNode } from 'react'

const SECTION = HOME_PAGE_SECTIONS.EDUCATION

type EducationListItem = {
  title: ReactNode
  institution: string
  startDate: string
  endDate: string
}

const EDUCATION_LIST: EducationListItem[] = [
  {
    title: 'Tecnologia em Sistemas para Internet',
    institution: 'UNINOVE',
    startDate: '2015-07-01T00:00',
    endDate: '2018-08-03T00:00',
  },
  {
    title: 'Técnico em Informática',
    institution: 'ETEC (Centro Paula Souza)',
    startDate: '2012-06-01T00:00',
    endDate: '2013-12-18T00:00',
  },
  {
    title: 'HTML5 Fundamentos',
    institution: 'Impacta Tecnologia',
    startDate: '2014-04-28T00:00',
    endDate: '2014-05-14T00:00',
  },
  {
    title: 'CSS3 Fundamentos',
    institution: 'Impacta Tecnologia',
    startDate: '2014-07-14T00:00',
    endDate: '2014-07-25T00:00',
  },
  {
    title: 'JavaScript Ninja',
    institution: 'Fernando Daciuk',
    startDate: '2018T00:00',
    endDate: '2018T00:00',
  },
  {
    title: <em lang="en">The Node.js Master Class</em>,
    institution: 'Pirple',
    startDate: '2024T00:00',
    endDate: '2024T00:00',
  },
]

export const Education = () => {
  return (
    <Section.Root id={SECTION.ID}>
      <Section.Container>
        <Section.Heading as="h2">{SECTION.NAME}</Section.Heading>

        <Entities.Root>
          {EDUCATION_LIST.map(({ endDate, institution, startDate, title }) => {
            const key = `${title}:${institution}`

            return (
              <Entities.Card key={key}>
                <Entities.CardAvatar title={institution}>
                  {institution[0].toUpperCase()}
                </Entities.CardAvatar>

                <Entities.CardContent>
                  <Entities.CardTitle as="h3">{title}</Entities.CardTitle>

                  <Entities.CardInstitution>
                    {institution}
                  </Entities.CardInstitution>

                  <Entities.CardTimeRange
                    startISODate={startDate}
                    endISODate={endDate}
                    formatTemplate="MMMM 'de' yyyy"
                  />
                </Entities.CardContent>
              </Entities.Card>
            )
          })}
        </Entities.Root>
      </Section.Container>
    </Section.Root>
  )
}
