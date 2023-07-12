import { CHANNELS } from './CHANNELS.constant'

export const CommunicationChannels = () => {
  return (
    <ul className="flex gap-6 md:gap-8 shrink-0">
      {CHANNELS.map(({ Icon, href, name }) => {
        return (
          <li key={name} className="shrink-0">
            <a
              href={href}
              className="block w-8 h-8 text-blue-800 transition-colors hover:text-blue-950 focus-visible:text-blue-950 dark:text-sky-400 dark:hover:text-sky-300 dark:focus-visible:text-sky-300"
              aria-label={name}
            >
              <Icon
                className="block w-full h-full"
                aria-hidden={true}
                focusable={false}
                title={name}
              />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
