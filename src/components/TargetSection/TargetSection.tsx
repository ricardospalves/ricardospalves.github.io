import { ReactNode } from 'react'
import { createIDFromString } from '@/utils/createIDFromString'
import { Heading } from './Heading'

export type TargetSectionProps = {
  heading: string
  children?: ReactNode
}

export const TargetSection = ({ heading, children }: TargetSectionProps) => {
  const id = createIDFromString(heading)

  return (
    <section id={id} className="max-w-xl mx-auto px-0 lg:p-4">
      <Heading href={`#${id}`}>{heading}</Heading>

      <div className="px-4 mt-8 space-y-16">{children}</div>
    </section>
  )
}
