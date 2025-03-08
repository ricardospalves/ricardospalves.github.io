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
        'lg:block lg:static absolute top-full inset-x-0 border-y border-foreground lg:border-y-0 bg-background shadow lg:shadow-none',
        !open && 'hidden',
      ])}
    >
      <ul className="lg:flex divide-y divide-foreground lg:divide-y-0">
        {SECTIONS.map(({ ID, NAME }) => {
          return (
            <li key={ID}>
              <Link
                href={`#${ID}`}
                className={classNames([
                  'block px-2 py-3 lg:p-4',
                  ID === currentSection?.ID &&
                    'bg-highlightForeground text-background lg:bg-transparent lg:text-highlightForeground',
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
