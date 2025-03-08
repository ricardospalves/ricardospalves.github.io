'use client'

import { useNavigationVisibility } from '@/hooks/useNavigationVisibility'
import { MdMenu as BurgerIcon, MdClose as CloseIcon } from 'react-icons/md'

export const BurgerButton = () => {
  const { open, setOpen } = useNavigationVisibility((state) => state)
  const ToggleButtonIcon = open ? CloseIcon : BurgerIcon

  return (
    <button
      type="button"
      className="block lg:hidden size-12 p-2"
      aria-label={
        open ? 'Fechar a navegação principal' : 'Abrir a navegação principal'
      }
      onClick={() => {
        setOpen(!open)
      }}
    >
      <ToggleButtonIcon
        className="block size-full fill-highlightForeground"
        aria-hidden={true}
      />
    </button>
  )
}
