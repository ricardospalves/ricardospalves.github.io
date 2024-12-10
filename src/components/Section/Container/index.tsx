import { Container as InnerContaier } from '@/components/Container'
import { ReactNode } from 'react'

type RootProps = {
  children?: ReactNode
  className?: string
}

export const Container = ({ children, className }: RootProps) => {
  return <InnerContaier className={className}>{children}</InnerContaier>
}
