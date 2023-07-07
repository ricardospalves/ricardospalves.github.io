import { EntityCard } from '@/components/EntityCard'
import { TargetSection } from '@/components/TargetSection'
import { CARDS } from './CARDS.constant'

export const Education = () => {
  return (
    <TargetSection id="formacao-academica" heading="Formação acadêmica">
      {CARDS.map(({ id, ...props }) => {
        return <EntityCard key={id} {...props} />
      })}
    </TargetSection>
  )
}
