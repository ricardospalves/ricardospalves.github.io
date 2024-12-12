import { classNames } from '@/utils/classNames'
import { ReactNode } from 'react'

type CardAvatarProps = {
  children?: ReactNode
  className?: string
}

export const CardAvatar = ({ children, className }: CardAvatarProps) => {
  return (
    <div
      className={classNames([
        'shrink-0 size-16 p-2 rounded-full bg-highlightForeground',
        className,
      ])}
    >
      {children}
    </div>
  )
}
