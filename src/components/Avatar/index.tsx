import { classNames } from '@/utils/classNames'
import { cloneElement, isValidElement, ReactNode } from 'react'

export type AvatarProps = {
  children?: ReactNode
  className?: string
  title?: string
}

export const Avatar = ({ children, className, title }: AvatarProps) => {
  const isElement = isValidElement(children)

  if (!isElement) {
    return (
      <span
        className={classNames([
          'flex items-center justify-center text-center font-bold text-3xl rounded-full overflow-hidden',
          className,
        ])}
        aria-hidden={title ? undefined : true}
        title={title}
      >
        <span className="block" aria-hidden={true}>
          {children}
        </span>
      </span>
    )
  }

  const modifiedChildren = cloneElement(children, {
    className: 'block size-full',
  })

  return (
    <span
      className={classNames(['rounded-full overflow-hidden', className])}
      aria-hidden={title ? undefined : true}
      title={title}
    >
      {modifiedChildren}
    </span>
  )
}
