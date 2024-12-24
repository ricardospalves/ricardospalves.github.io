'use client'

import { create } from 'zustand'

type NavigationVisibilityState = {
  open: boolean
  setOpen: (open: boolean) => void
}

export const useNavigationVisibility = create<NavigationVisibilityState>(
  (set) => {
    return {
      open: false,
      setOpen: (open) => {
        return set({
          open,
        })
      },
    }
  },
)
