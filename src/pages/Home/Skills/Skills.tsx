import { TargetSection } from '@/components/TargetSection'
import { TARGET_SECTIONS } from '@/constants/TARGET_SECTIONS'

const LIST = [
  'React (com Next.js e Remix)',
  'JavaScript/TypeScript',
  'HTML5',
  'CSS3 (SASS/SCSS e Tailwind CSS)',
  'Git',
  'UX/UI Design',
  'Responsive Web Design',
]

export const Skills = () => {
  return (
    <TargetSection heading={TARGET_SECTIONS.skills.name}>
      <ul className="pl-8 list-disc space-y-2">
        {LIST.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </TargetSection>
  )
}
