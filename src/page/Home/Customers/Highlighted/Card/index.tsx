import { PropsWithChildren } from 'react'

export type CardProps = PropsWithChildren & {
  name: string
}

export const Card = ({ name, children }: CardProps) => {
  return (
    <article className="block lg:flex lg:flex-col lg:min-h-full p-4 border border-current rounded">
      <h4 className="text-lg font-bold text-highlightForeground">{name}</h4>

      <div className="my-4 space-y-4">{children}</div>
    </article>
  )
}
