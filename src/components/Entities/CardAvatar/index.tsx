import type { AvatarProps } from '@/components/Avatar'
import { Avatar } from '@/components/Avatar'
import { classNames } from '@/utils/classNames'

type CardAvatarProps = AvatarProps

export const CardAvatar = ({ className, ...props }: CardAvatarProps) => {
  return (
    <Avatar
      className={classNames([
        'shrink-0 size-16 text-background bg-highlightForeground',
        className,
      ])}
      {...props}
    />
  )
}
