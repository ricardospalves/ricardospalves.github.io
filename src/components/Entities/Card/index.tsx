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
        'flex items-start gap-4 pt-8 first:pt-0 mt-8 first:mt-0',
        className,
      ])}
    >
      {children}
    </article>
  )
}
