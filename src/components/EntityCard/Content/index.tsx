import { classNames } from '@/utils/classNames'
import { HTMLAttributes } from 'react'

type NativeProps = HTMLAttributes<HTMLDivElement>

type ContentProps = NativeProps

export const Content = ({ className, ...props }: ContentProps) => {
  return <div className={classNames(['grow', className])} {...props} />
}
