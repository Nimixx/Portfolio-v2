import { useEffect } from 'preact/hooks'

type ScrollProps = {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

const useNoScroll = ({ isMenuOpen, setIsMenuOpen }: ScrollProps) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false) // Reset the state to default if the screen is larger than 768px
        document.body.classList.remove('no-scroll')
      } else {
        if (isMenuOpen) {
          document.body.classList.add('no-scroll')
        } else {
          document.body.classList.remove('no-scroll')
        }
      }
    }

    // Add or remove the 'no-scroll' class based on the isMenuOpen state
    if (isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    // Listen for window resize events
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen, setIsMenuOpen])
}

export default useNoScroll
