import { ExternalLink } from '@/components/ExternalLink'
import { LuExternalLink as ExternalLinkIcon } from 'react-icons/lu'

type CardLinkProps = {
  href: string
}

export const CardLink = ({ href }: CardLinkProps) => {
  return (
    <p>
      <ExternalLink href={href} className="text-highlightForeground">
        <span className="underline">Link para o curso</span>{' '}
        <ExternalLinkIcon className="inline-block size-4" aria-hidden={true} />
      </ExternalLink>
    </p>
  )
}
