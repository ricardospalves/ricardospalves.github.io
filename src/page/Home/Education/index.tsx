import { Entities } from '@/components/Entities'
import { Section } from '@/components/Section'

export const Education = () => {
  return (
    <Section.Root>
      <Section.Container>
        <Section.Heading as="h2">Educação</Section.Heading>

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
                Tecnologia em Sistemas para Internet na <b>UNINOVE</b>
              </Entities.CardHeading>

              <Entities.CardTimeRange
                startISODate="2015T00:00"
                endISODate="2017T00:00"
                formatTemplate="yyyy"
              />
            </Entities.CardContent>
          </Entities.Card>

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
                Técnico em Informática na <b>ETEC</b>
              </Entities.CardHeading>

              <Entities.CardTimeRange
                startISODate="2012T00:00"
                endISODate="2013T00:00"
                formatTemplate="yyyy"
              />
            </Entities.CardContent>
          </Entities.Card>

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
                HTML5 Fundamentos na <b>Impacta Tecnologia</b>
              </Entities.CardHeading>

              <Entities.CardTimeRange
                startISODate="2014T00:00"
                formatTemplate="yyyy"
              />
            </Entities.CardContent>
          </Entities.Card>

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
                CSS3 Fundamentos na <b>Impacta Tecnologia</b>
              </Entities.CardHeading>

              <Entities.CardTimeRange
                startISODate="2014T00:00"
                formatTemplate="yyyy"
              />
            </Entities.CardContent>
          </Entities.Card>

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
                JavaScript na <b>Udemy</b>
              </Entities.CardHeading>

              <Entities.CardTimeRange
                startISODate="2018T00:00"
                formatTemplate="yyyy"
              />
            </Entities.CardContent>
          </Entities.Card>

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
                <em lang="en">The Node.js Master Class</em> na <b>Pirple.com</b>
              </Entities.CardHeading>

              <Entities.CardTimeRange
                startISODate="2024T00:00"
                formatTemplate="yyyy"
              />
            </Entities.CardContent>
          </Entities.Card>
        </Entities.Root>
      </Section.Container>
    </Section.Root>
  )
}
