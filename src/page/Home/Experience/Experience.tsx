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
        description="Responsável pelo front-end, já desenvolvi diversos projetos como websites, landing pages, e-commerces, blogs, e muitos outros projetos relacionados a web. Especializado em tecnologias como React (Next.js/Remix), JavaScript/TypeScript, CSS (SASS/SCSS e Tailwind CSS) e HTML, além de garantir uma boa usabilidade, experiência do usuário e acessibilidade."
      />
    </TargetSection>
  )
}
