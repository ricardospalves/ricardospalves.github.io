import { TargetSection } from '@/components/TargetSection'

const LIST = ['Node.js', 'MongoDB', 'Inglês']

export const Improvement = () => {
  return (
    <TargetSection
      id="aprimorando-meus-conhecimentos"
      heading="Aprimorando meus conhecimentos"
    >
      <ul className="pl-8 list-disc space-y-2">
        {LIST.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </TargetSection>
  )
}
