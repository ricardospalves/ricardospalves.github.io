import { ReactNode } from 'react'

type CardInstitutionProps = {
  children?: ReactNode
  shortCourses?: boolean
}

export const CardInstitution = ({
  children,
  shortCourses,
}: CardInstitutionProps) => {
  return (
    <p className="text-highlightForeground">
      {children} {shortCourses && <i>(curso livre)</i>}
    </p>
  )
}
