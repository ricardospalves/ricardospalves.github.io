import { classNames } from '@/utils/classNames'
import { ReactNode } from 'react'

type AvatarProps = {
  children?: ReactNode
  className?: string
}

export const Avatar = ({ children, className }: AvatarProps) => {
  return (
    <div
      className={classNames([
        'size-16 p-2 rounded-full bg-highlightForeground',
        className,
      ])}
    >
      {children}
    </div>
  )
}
