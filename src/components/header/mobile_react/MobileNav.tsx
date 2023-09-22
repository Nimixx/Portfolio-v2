import { NAV_ITEMS } from '../../../consts.ts'
import { useOpenNav } from '../../hooks/useOpenNav.ts'
import NavButton from '../mobile_react/NavButton.tsx'

export default function MobileNav() {
  const { isMenuOpen, handleOpen } = useOpenNav()

  return (
    <>
      {!isMenuOpen && <NavButton handleOpen={handleOpen} isMenuOpen={isMenuOpen} />}
      {isMenuOpen && (
        <nav className="slideInLeft fixed left-0 right-0 top-0 flex h-screen w-full items-start justify-between bg-primary_dark/90 p-5 backdrop-blur-3xl md:hidden">
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li className="text-6xl font-bold">
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
