import { TargetSection } from '@/components/TargetSection'

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
    <TargetSection id="habilidades" heading="Habilidades">
      <ul className="pl-8 list-disc space-y-2">
        {LIST.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </TargetSection>
  )
}
