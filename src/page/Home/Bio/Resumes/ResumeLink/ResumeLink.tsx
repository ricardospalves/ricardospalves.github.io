import { IconBase } from 'react-icons'

export type ResumeLinkProps = {
  label: string
  href: string
  Icon: typeof IconBase
}

export const ResumeLink = ({ Icon, href, label }: ResumeLinkProps) => {
  return (
    <p>
      <a
        href={href}
        className="flex items-center justify-center px-2 py-4 rounded text-lg text-center font-bold transition-colors bg-blue-800 hover:bg-blue-950 focus-visible:bg-blue-950 text-white dark:bg-sky-400 dark:hover:bg-sky-300 dark:focus-visible:bg-sky-300 dark:text-backgroundDarkTheme"
      >
        <Icon className="block shrink-0 size-6 mr-2" aria-hidden={true} />
        <span className="block">{label}</span>
      </a>
    </p>
  )
}
