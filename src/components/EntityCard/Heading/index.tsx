import { classNames } from '@/utils/classNames'
import { HTMLAttributes } from 'react'

type NativeProps = HTMLAttributes<HTMLDivElement>

type HeadingProps = NativeProps & {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading = ({ as, className, ...props }: HeadingProps) => {
  const Component = as

  return (
    <Component
      className={classNames(['grow text-white text-lg', className])}
      {...props}
    />
  )
}
