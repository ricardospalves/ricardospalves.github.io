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
    <p className="text-highlight-foreground">
      {children} {shortCourses && <i>(curso livre)</i>}
    </p>
  )
}
