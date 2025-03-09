import { Section } from '@/components/Section'
import { HOME_PAGE_SECTIONS } from '@/constants/homePageSections'
import { Highlighted } from './Highlighted'
import { OtherCustomers } from './OtherCustomers'

const SECTION = HOME_PAGE_SECTIONS.CUSTOMERS

export const Customers = () => {
  return (
    <Section.Root id={SECTION.ID}>
      <Section.Container>
        <Section.Heading as="h2" className="mb-0 lg:mb-0">
          {SECTION.NAME}
        </Section.Heading>

        <Highlighted />
        <OtherCustomers />
      </Section.Container>
    </Section.Root>
  )
}
