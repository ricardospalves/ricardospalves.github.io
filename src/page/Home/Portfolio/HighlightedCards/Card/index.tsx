import { ExternalLink } from '@/components/ExternalLink'
import { LuExternalLink as ExternalLinkIcon } from 'react-icons/lu'

export type CardProps = {
  name: string
  href: string
  description: string
}

export const Card = ({ description, href, name }: CardProps) => {
  return (
    <article>
      <ExternalLink
        href={href}
        className="block lg:flex lg:flex-col lg:min-h-full p-4 border border-current hover:border-highlight-foreground focus-visible:border-highlight-foreground hover:text-highlight-foreground focus-visible:text-highlight-foreground rounded transition-colors"
      >
        <h4 className="text-lg font-bold text-highlight-foreground">{name}</h4>

        <p className="my-4">{description}</p>

        <p className="flex items-center justify-center gap-2 py-3 lg:mt-auto font-bold text-center rounded bg-highlight-foreground text-background">
          <span className="block">Ver o projeto</span>
          <ExternalLinkIcon className="block size-6" aria-hidden={true} />
        </p>
      </ExternalLink>
    </article>
  )
}
