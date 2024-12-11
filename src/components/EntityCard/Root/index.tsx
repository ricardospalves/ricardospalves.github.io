import { classNames } from '@/utils/classNames'
import { HTMLAttributes } from 'react'

type NativeProps = HTMLAttributes<HTMLDivElement>

type RootProps = NativeProps

export const Root = ({ className, ...props }: RootProps) => {
  return (
    <article
      className={classNames([
        'flex items-start gap-4 pt-8 first-of-type:pt-0 mt-8 first-of-type:mt-0 border-t border-t-current first-of-type:border-t-0',
        className,
      ])}
      {...props}
    />
  )
}
