'use client'

import { HOME_PAGE_SECTIONS } from '@/constants/homePageSections'
import { useNavigationVisibility } from '@/hooks/useNavigationVisibility'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { classNames } from '@/utils/classNames'
import Link from 'next/link'

const SECTIONS = Object.values(HOME_PAGE_SECTIONS)

export const Navigation = () => {
  const { open } = useNavigationVisibility((state) => state)
  const currentSection = useScrollSpy()

  return (
    <nav
      className={classNames([
        'md:block md:static absolute top-full inset-x-0 border-y border-foreground md:border-y-0 bg-background shadow md:shadow-none',
        !open && 'hidden',
      ])}
    >
      <ul className="md:flex divide-y divide-foreground md:divide-y-0">
        {SECTIONS.map(({ ID, NAME }) => {
          return (
            <li key={ID}>
              <Link
                href={`#${ID}`}
                className={classNames([
                  'block px-2 py-3 md:p-4',
                  ID === currentSection?.ID &&
                    'bg-highlightForeground text-background md:bg-transparent md:text-highlightForeground',
                ])}
              >
                {NAME}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
