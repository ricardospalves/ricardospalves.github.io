import { classNames } from '@/utils/classNames'
import { ElementType, HTMLAttributes } from 'react'

type NativeProps = HTMLAttributes<HTMLUListElement> &
  HTMLAttributes<HTMLOListElement>

type OwnProps = {
  ordered?: boolean
}

type RootProps = NativeProps & OwnProps

export const Root = ({ ordered, className, ...props }: RootProps) => {
  const Component: ElementType = ordered ? 'ol' : 'ul'

  return (
    <Component
      className={classNames([
        'pl-8',
        ordered ? 'list-decimal' : 'list-disc',
        className,
      ])}
      {...props}
    />
  )
}
