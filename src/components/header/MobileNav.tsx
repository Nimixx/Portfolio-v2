import { useState } from 'preact/hooks'
import { NAV_ITEMS } from '../../consts'
import useNoScroll from '../hooks/useNoScroll.ts'
import NavButton from './NavButton.tsx'

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useNoScroll({ isMenuOpen, setIsMenuOpen })

  const handleOpen = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {!isMenuOpen && <NavButton handleOpen={handleOpen} isMenuOpen={isMenuOpen} />}
      {isMenuOpen && (
        <nav className="fixed left-0 right-0 top-0 flex h-screen w-full items-start justify-between bg-primary_dark/90 p-5 backdrop-blur-3xl duration-300 animate-in slide-in-from-left md:hidden">
          <ul className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <li className="slide-in-from-down text-6xl font-bold duration-300 animate-in slide-in-from-right">
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
          </ul>
          <NavButton handleOpen={handleOpen} isMenuOpen={isMenuOpen} />
        </nav>
      )}
    </>
  )
}
