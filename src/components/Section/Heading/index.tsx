import { classNames } from '@/utils/classNames'
import { ReactNode } from 'react'

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children?: ReactNode
  className?: string
}

export const Heading = ({ as, className, children }: HeadingProps) => {
  const Component = as

  return (
    <Component
      className={classNames([
        'mb-16 text-2xl lg:text-4xl font-light text-highlightForeground',
        className,
      ])}
    >
      {children}
    </Component>
  )
}
