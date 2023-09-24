import { useState } from 'preact/hooks'
import useNoScroll from './useNoScroll.ts'
import { gsap } from 'gsap'

export const useOpenNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useNoScroll({ isMenuOpen, setIsMenuOpen })

  const handleOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return {
    isMenuOpen,
    handleOpen
  }
}
