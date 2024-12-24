import { HOME_PAGE_SECTIONS } from '@/constants/homePageSections'
import { useEffect, useState } from 'react'

const SECTIONS = Object.values(HOME_PAGE_SECTIONS)

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState<
    (typeof HOME_PAGE_SECTIONS)[keyof typeof HOME_PAGE_SECTIONS] | null
  >(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      const currentSection = SECTIONS.find(({ ID }) => {
        const element = document.getElementById(ID)

        if (element) {
          const { offsetTop, clientHeight } = element

          return (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + clientHeight
          )
        }

        return false
      })

      setActiveSection(currentSection || null)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return activeSection
}
