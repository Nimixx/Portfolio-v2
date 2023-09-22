import { useEffect } from 'preact/hooks'

type ScrollProps = {
  isMenuOpen: boolean
  setIsMenuOpen: (isMenuOpen: boolean) => void
}

const useNoScroll = ({ isMenuOpen, setIsMenuOpen }: ScrollProps) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
        document.body.classList.remove('no-scroll')
      } else {
        if (isMenuOpen) {
          document.body.classList.add('no-scroll')
        } else {
          document.body.classList.remove('no-scroll')
        }
      }
    }

    if (isMenuOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen, setIsMenuOpen])
}

export default useNoScroll
