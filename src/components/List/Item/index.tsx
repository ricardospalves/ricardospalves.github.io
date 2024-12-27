import { HTMLAttributes } from 'react'

type ItemProps = HTMLAttributes<HTMLLIElement>

export const Item = ({ ...props }: ItemProps) => {
  return <li {...props} />
}
