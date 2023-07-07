import { EntityCard } from '@/components/EntityCard'
import { TargetSection } from '@/components/TargetSection'

export const Experience = () => {
  return (
    <TargetSection id="experiencia" heading="Experiência">
      <EntityCard
        heading="Desenvolvedor front-end"
        subheading="Spacelab - Produtora e Agência Web"
        startDate={new Date(2015, 0)}
        endDate="current"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in hic itaque quis unde veritatis nobis vero sed. Maxime expedita recusandae quasi dicta deserunt! Iste praesentium aliquid voluptatem pariatur iure."
      />
    </TargetSection>
  )
}
