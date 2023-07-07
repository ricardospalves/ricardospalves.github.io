import { ReactNode } from 'react'
import type { TimeProps } from './Time/Time'
import { Time } from './Time/Time'

export type EntityCardProps = {
  heading: string
  subheading: string
  startDate: TimeProps['date']
  endDate: TimeProps['date']
  description?: ReactNode
}

export const EntityCard = ({
  heading,
  subheading,
  startDate,
  endDate,
  description,
}: EntityCardProps) => {
  return (
    <article>
      <h3 className="font-bold text-black dark:text-white">{heading}</h3>

      <h4 className="mt-1">{subheading}</h4>

      <p className="mt-1">
        <Time date={startDate} /> – <Time date={endDate} />
      </p>

      {description && (
        <p className="mt-4 text-black dark:text-white">{description}</p>
      )}
    </article>
  )
}
