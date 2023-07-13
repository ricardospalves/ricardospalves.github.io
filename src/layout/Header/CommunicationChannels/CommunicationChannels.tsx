import { CHANNELS } from './CHANNELS.constant'

export const CommunicationChannels = () => {
  return (
    <ul className="flex justify-center lg:mt-8 gap-4 shrink-0">
      {CHANNELS.map(({ Icon, href, name }) => {
        return (
          <li key={name} className="shrink-0">
            <a
              href={href}
              className="block w-8 h-8 text-blue-800 transition-colors hover:text-blue-950 focus-visible:text-blue-950 dark:text-sky-400 dark:hover:text-sky-300 dark:focus-visible:text-sky-300"
            >
              <span className="sr-only">{name}</span>

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
