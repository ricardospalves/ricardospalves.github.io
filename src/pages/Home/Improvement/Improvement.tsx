import { TargetSection } from '@/components/TargetSection'
import { TARGET_SECTIONS } from '@/constants/TARGET_SECTIONS'

const LIST = ['Node.js', 'MongoDB', 'Inglês']

export const Improvement = () => {
  return (
    <TargetSection heading={TARGET_SECTIONS.improvements.name}>
      <ul className="pl-8 list-disc space-y-2">
        {LIST.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </TargetSection>
  )
}
