import { classNames } from '@/utils/classNames'
import { ReactNode } from 'react'

type RootProps = {
  children?: ReactNode
  className?: string
}

export const Root = ({ className, children }: RootProps) => {
  return (
    <div className={classNames(['divide-y divide-foreground', className])}>
      {children}
    </div>
  )
}
