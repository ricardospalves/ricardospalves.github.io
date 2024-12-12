import { classNames } from '@/utils/classNames'
import { HTMLAttributes } from 'react'

type NativeProps = HTMLAttributes<HTMLDivElement>

type CardContentProps = NativeProps

export const CardContent = ({ className, ...props }: CardContentProps) => {
  return <div className={classNames(['grow', className])} {...props} />
}
