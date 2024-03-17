import { ResumeLink } from './ResumeLink/ResumeLink'
import { FILES } from './files'

export const Resumes = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 mt-8">
      {FILES.map(({ Icon, href, label }) => {
        return <ResumeLink key={href} label={label} href={href} Icon={Icon} />
      })}
    </div>
  )
}
