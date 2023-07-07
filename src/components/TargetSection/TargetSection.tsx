import { ReactNode } from 'react'

export type TargetSectionProps = {
  id: string
  heading: string
  children?: ReactNode
}

export const TargetSection = ({
  id,
  heading,
  children,
}: TargetSectionProps) => {
  return (
    <section id={id}>
      <h2 className="pb-2 border-b border-current text-xl font-bold text-black dark:text-white">
        {heading}
      </h2>

      <div className="px-4 mt-8 space-y-16">{children}</div>
    </section>
  )
}
