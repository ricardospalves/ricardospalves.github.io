'use client'

import { Navigation } from './Navigation'
import { Logo } from './Logo'
import { BurgerButton } from './BurgerButton'
import { useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'
import { useNavigationVisibility } from '@/hooks/useNavigationVisibility'

const HeaderChildren = () => {
  const searchParams = useSearchParams()
  const setOpen = useNavigationVisibility((state) => state.setOpen)

  useEffect(() => {
    setOpen(false)
  }, [searchParams])

  return (
    <header className="shrink-0 sticky top-0 z-10 bg-background border-b border-b-black/50 shadow">
      <div className="flex justify-between max-w-5xl w-full mx-auto">
        <Logo />
        <BurgerButton />
        <Navigation />
      </div>
    </header>
  )
}

export const Header = () => {
  return (
    <Suspense>
      <HeaderChildren />
    </Suspense>
  )
}
