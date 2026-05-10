import { classNames } from '@/utils/classNames'
import { ReactNode } from 'react'

type CardProps = {
  children?: ReactNode
  className?: string
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <article
      className={classNames([
        'flex items-start gap-4 pb-8 px-2 last:pb-0 mb-8 last:mb-0',
        className,
      ])}
    >
      {children}
    </article>
  )
}
