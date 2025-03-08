import { ExternalLink } from '@/components/ExternalLink'
import { List } from '@/components/List'
import { LuExternalLink as ExternalLinkIcon } from 'react-icons/lu'
import { LIST } from './list'

export const OtherProjects = () => {
  return (
    <section className="px-2 lg:px-0 pt-16">
      <h3 className="mb-4 text-2xl font-bold text-highlightForeground">
        Outros projetos
      </h3>

      <List.Root className="space-y-1">
        {LIST.map(({ name, href }) => {
          return (
            <List.Item key={href}>
              <ExternalLink
                href={href}
                className="underline text-highlightForeground"
              >
                {name}{' '}
                <ExternalLinkIcon className="inline" aria-hidden={true} />
              </ExternalLink>
            </List.Item>
          )
        })}
      </List.Root>
    </section>
  )
}
