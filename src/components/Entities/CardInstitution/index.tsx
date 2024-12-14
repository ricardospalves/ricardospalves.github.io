import { ReactNode } from 'react'

type CardInstitutionProps = {
  children?: ReactNode
}

export const CardInstitution = ({ children }: CardInstitutionProps) => {
  return <p className="text-highlightForeground">{children}</p>
}
