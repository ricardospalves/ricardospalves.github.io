import { classNames } from '@/utils/classNames'
import { HTMLAttributes } from 'react'

type NativeProps = HTMLAttributes<HTMLDivElement>

type CardHeadingProps = NativeProps & {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const CardHeading = ({ as, className, ...props }: CardHeadingProps) => {
  const Component = as

  return (
    <Component
      className={classNames([
        'grow text-highlightForeground text-lg',
        className,
      ])}
      {...props}
    />
  )
}
