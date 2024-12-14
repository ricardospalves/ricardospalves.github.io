import { classNames } from '@/utils/classNames'
import { HTMLAttributes } from 'react'

type NativeProps = HTMLAttributes<HTMLDivElement>

type CardTitleProps = NativeProps & {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const CardTitle = ({ as, className, ...props }: CardTitleProps) => {
  const Component = as

  return (
    <Component
      className={classNames([
        'grow text-highlightForeground text-lg font-bold',
        className,
      ])}
      {...props}
    />
  )
}
