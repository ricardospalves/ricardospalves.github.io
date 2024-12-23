import { classNames } from '@/utils/classNames'
import type { HTMLAttributes } from 'react'

type NativeAttributes = HTMLAttributes<HTMLDivElement>

type RootProps = NativeAttributes

export const Root = ({ className, ...props }: RootProps) => {
  return <section className={classNames(['py-16', className])} {...props} />
}
