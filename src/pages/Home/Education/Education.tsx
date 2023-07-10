import { EntityCard } from '@/components/EntityCard'
import { TargetSection } from '@/components/TargetSection'
import { CARDS } from './CARDS.constant'
import { TARGET_SECTIONS } from '@/constants/TARGET_SECTIONS'

export const Education = () => {
  return (
    <TargetSection heading={TARGET_SECTIONS.education.name}>
      {CARDS.map(({ id, ...props }) => {
        return <EntityCard key={id} {...props} />
      })}
    </TargetSection>
  )
}
