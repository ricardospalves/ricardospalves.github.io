import { EntityCard } from '@/components/EntityCard'
import { TargetSection } from '@/components/TargetSection'
import { TARGET_SECTIONS } from '@/constants/TARGET_SECTIONS'
import { MonthNumbers } from '@/enums/MonthNumbers'

export const Experience = () => {
  return (
    <TargetSection heading={TARGET_SECTIONS.experience.name}>
      <EntityCard
        heading="Desenvolvedor front-end"
        subheading="Spacelab - Produtora e Agência Web"
        startDate={new Date(2015, MonthNumbers.January)}
        endDate="current"
        description="Responsável pelo front-end (programação de interfaces), já desenvolvi sites, landing pages, e-commerces, blogs, emails marketing, hotsites e muitos outros projetos relacionados a web, das mais variadas formas, especificações e particularidades. Todos os projetos são responsivos e usam tecnologias como React (Next.js/Remix), JavaScript/TypeScript, CSS (SASS/SCSS e Tailwind CSS), HTML e muitas outras."
      />
    </TargetSection>
  )
}
