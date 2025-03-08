import { Section } from '@/components/Section'
import { HOME_PAGE_SECTIONS } from '@/constants/homePageSections'
import { OtherProjects } from './OtherProjects'
import { HighlightedCards } from './HighlightedCards'

const SECTION = HOME_PAGE_SECTIONS.PORTFOLIO

export const Portfolio = () => {
  return (
    <Section.Root id={SECTION.ID}>
      <Section.Container>
        <Section.Heading as="h2" className="mb-0 lg:mb-0">
          {SECTION.NAME}
        </Section.Heading>
        <HighlightedCards />
        <OtherProjects />
      </Section.Container>
    </Section.Root>
  )
}
