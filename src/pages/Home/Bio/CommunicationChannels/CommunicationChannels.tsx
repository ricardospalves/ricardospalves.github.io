import { CHANNELS } from './CHANNELS.constant'

export const CommunicationChannels = () => {
  return (
    <>
      <h2 className="mt-8 mb-4 text-xl font-bold text-black dark:text-white">
        Onde me encontrar
      </h2>

      <ul className="flex gap-8 ">
        {CHANNELS.map(({ Icon, href, name }) => {
          return (
            <li key={name} className="shrink-0">
              <a
                href={href}
                className="block w-11 h-11 text-blue-800 transition-colors hover:text-blue-950 focus-visible:text-blue-950 dark:text-sky-400 dark:hover:text-sky-300 dark:focus-visible:text-sky-300"
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
    </>
  )
}
