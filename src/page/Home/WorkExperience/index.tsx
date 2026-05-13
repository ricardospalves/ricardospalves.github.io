import { Entities } from '@/components/Entities'
import { List } from '@/components/List'
import { Section } from '@/components/Section'
import { HOME_PAGE_SECTIONS } from '@/constants/homePageSections'
import { WORK_EXPERIENCE_LIST } from './list'

const SECTION = HOME_PAGE_SECTIONS.WORK

export const WorkExperience = () => {
  return (
    <Section.Root id={SECTION.ID}>
      <Section.Container>
        <Section.Heading as="h2">{SECTION.NAME}</Section.Heading>

        <Entities.Root>
          {WORK_EXPERIENCE_LIST.map(
            ({
              companyAvatar,
              companyName,
              endDate,
              jobTitle,
              startDate,
              list,
            }) => {
              return (
                <Entities.Card key={companyName}>
                  <Entities.CardAvatar title={companyName}>
                    {companyAvatar}
                  </Entities.CardAvatar>

                  <Entities.CardContent>
                    <Entities.CardTitle as="h3">{jobTitle}</Entities.CardTitle>

                    <Entities.CardInstitution>
                      {companyName}
                    </Entities.CardInstitution>

                    <Entities.CardTimeRange
                      startISODate={startDate}
                      endISODate={endDate}
                    />

                    {list && (
                      <List.Root className="mt-4">
                        {list.map((text, index) => {
                          return <List.Item key={index}>{text}</List.Item>
                        })}
                      </List.Root>
                    )}
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
