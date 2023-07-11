import { TargetSection } from '@/components/TargetSection'
import { TARGET_SECTIONS } from '@/constants/TARGET_SECTIONS'
import { CHANNELS } from './CHANNELS.constant'

export const CommunicationChannels = () => {
  return (
    <TargetSection heading={TARGET_SECTIONS.social.name}>
      <ul className="flex gap-8 ">
        {CHANNELS.map(({ Icon, href, name }) => {
          return (
            <li key={name} className="shrink-0">
              <a
                href={href}
                className="block w-10 h-10 text-blue-800 transition-colors hover:text-blue-950 focus-visible:text-blue-950 dark:text-sky-400 dark:hover:text-sky-300 dark:focus-visible:text-sky-300"
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
    </TargetSection>
  )
}
