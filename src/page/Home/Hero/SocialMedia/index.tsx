import { IconBase } from 'react-icons'
import {
  SiLinkedin as LinkedInIcon,
  SiGithub as GithubIcon,
  SiCodepen as CodepenIcon,
} from 'react-icons/si'

type SocialMediaListItem = {
  name: string
  href: string
  Icon: typeof IconBase
}

const SOCIAL_MEDIA_LIST: Readonly<SocialMediaListItem[]> = [
  {
    href: 'https://linkedin.com/in/ricardospalves',
    name: 'LinkedIn',
    Icon: LinkedInIcon,
  },
  {
    href: 'https://github.com/ricardospalves',
    name: 'GitHub',
    Icon: GithubIcon,
  },
  {
    href: 'https://codepen.io/ricardospalves',
    name: 'Codepen',
    Icon: CodepenIcon,
  },
]

export const SocialMedia = () => {
  return (
    <ul className="flex items-center gap-4 mt-4">
      {SOCIAL_MEDIA_LIST.map(({ Icon, href, name }) => {
        return (
          <li key={href} className="shrink-0 size-12 lg:size-8">
            <a
              href={href}
              className="block size-full p-2 lg:p-0 hover:text-highlightForeground focus-visible:text-highlightForeground transition-colors"
            >
              <span className="sr-only">{name}</span>
              <Icon className="block size-full" aria-hidden={true} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
