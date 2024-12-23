import { classNames } from '@/utils/classNames'
import { ReactNode } from 'react'

type RootProps = {
  children?: ReactNode
  className?: string
}

export const Root = ({ children, className }: RootProps) => {
  return (
    <section className={classNames(['py-16', className])}>{children}</section>
  )
}
