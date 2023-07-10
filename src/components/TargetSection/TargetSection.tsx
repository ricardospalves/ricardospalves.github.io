import Link from 'next/link'
import { ReactNode } from 'react'
import { MdLink as AnchorIcon } from 'react-icons/md'
import { createIDFromString } from '@/utils/createIDFromString'

export type TargetSectionProps = {
  heading: string
  children?: ReactNode
}

export const TargetSection = ({ heading, children }: TargetSectionProps) => {
  const id = createIDFromString(heading)

  return (
    <section id={id}>
      <h2 className="flex items-center gap-2 pb-2 border-b border-current text-xl font-bold text-black dark:text-white">
        <span className="block grow">{heading}</span>

        <Link
          className="flex items-center justify-center w-7 h-7 shrink-0 text-blue-800 hover:text-blue-950 focus-visible:text-blue-950 dark:text-sky-400 dark:hover:text-sky-300 dark:focus-visible:text-sky-300"
          href={`#${id}`}
          aria-hidden={true}
          tabIndex={-1}
        >
          <AnchorIcon className="block w-full h-full" />
        </Link>
      </h2>

      <div className="px-4 mt-8 space-y-16">{children}</div>
    </section>
  )
}
