import { IconBase } from 'react-icons'
import { MdEmail } from 'react-icons/md'
import { SiLinkedin, SiGithub, SiCodepen } from 'react-icons/si'

type Channel = {
  name: string
  href: string
  Icon: typeof IconBase
}

export const CHANNELS: Channel[] = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/ricardospalves',
    Icon: SiLinkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/ricardospalves',
    Icon: SiGithub,
  },
  {
    name: 'Codepen',
    href: 'https://codepen.io/ricardospalves',
    Icon: SiCodepen,
  },
  {
    name: 'E-mail',
    href: 'mailto:ricardospalves@gmail.com',
    Icon: MdEmail,
  },
]
