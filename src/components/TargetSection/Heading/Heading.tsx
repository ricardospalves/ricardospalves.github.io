import Link from 'next/link'
import { MdLink as AnchorIcon } from 'react-icons/md'

export type HeadingProps = {
  href: string
  children: string
}

export const Heading = ({ children, href }: HeadingProps) => {
  return (
    <h2 className="flex items-center gap-2 py-2 px-2 lg:px-0 sticky top-10 lg:top-0 border-b border-current text-xl font-bold text-black dark:text-white bg-backgroundLightTheme dark:bg-backgroundDarkTheme">
      <span className="block grow">{children}</span>

      <Link
        className="flex items-center justify-center w-7 h-7 shrink-0 text-blue-800 hover:text-blue-950 focus-visible:text-blue-950 dark:text-sky-400 dark:hover:text-sky-300 dark:focus-visible:text-sky-300"
        href={href}
        aria-hidden={true}
        tabIndex={-1}
      >
        <AnchorIcon className="block w-full h-full" />
      </Link>
    </h2>
  )
}
