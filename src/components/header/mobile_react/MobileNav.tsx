import { NAV_ITEMS } from '../../../consts.ts'
import { useOpenNav } from '../../hooks/useOpenNav.ts'
import NavButton from '../mobile_react/NavButton.tsx'
import { useEffect } from 'preact/hooks'
import { gsap } from 'gsap'

// Set default GSAP values
gsap.defaults({
  ease: 'power2.inOut', // Default ease
  duration: 0.5 // Default duration in seconds
})

export default function MobileNav() {
  const { isMenuOpen, handleOpen } = useOpenNav()

  useEffect(() => {
    if (isMenuOpen) {
      const navElement = document.querySelector('.mobile-nav')
      const closeBtn = document.querySelector('.close_btn')
      const navLinks = document.querySelectorAll('.nav_link')

      const timeline = gsap.timeline()

      timeline
        .to(navElement, { x: 0 })
        .to(closeBtn, { opacity: 1, rotate: 360 }, '-=0.3')
        .to(navLinks, { x: 0, stagger: 0.2, opacity: 1 }, '-=0.3')

      return () => {
        timeline.kill()
      }
    }
  }, [isMenuOpen])

  return (
    <aside className="">
      {!isMenuOpen && <NavButton handleOpen={handleOpen} isMenuOpen={isMenuOpen} />}
      {isMenuOpen && (
        <nav className="mobile-nav fixed left-0 right-0 top-0 flex h-screen w-full -translate-x-full items-start justify-between bg-primary_dark/90 p-5 backdrop-blur-3xl md:hidden">
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li
                className="nav_link -translate-x-full text-6xl font-bold opacity-0"
                key={item.path}
              >
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
          </ul>
          <NavButton
            handleOpen={handleOpen}
            isMenuOpen={isMenuOpen}
            buttonClass="close_btn opacity-0"
          />
        </nav>
      )}
    </aside>
  )
}
