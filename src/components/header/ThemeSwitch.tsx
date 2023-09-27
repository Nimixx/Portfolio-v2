import { useState, useEffect } from 'preact/hooks'
import gsap from 'gsap'

export default function ThemeSwitch() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  const handleThemeChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('selectedTheme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)

    const currentIcon = document.querySelector(`.${theme === 'dark' ? 'moon' : 'sun'}`)

    gsap.to(currentIcon, {
      rotation: '+=360',
      duration: 0.5,
      ease: 'power4.EasyInOu'
    })
  }

  useEffect(() => {
    localStorage.setItem('selectedTheme', theme)
  }, [theme])

  return (
    <button
      onClick={handleThemeChange}
      className="group cursor-pointer rounded-md p-1.5 outline outline-2 outline-transparent hover:bg-primary_light hover:outline-accent_3/30 focus:bg-primary_light focus:outline-none focus:ring-2 focus:ring-primary_light focus:ring-opacity-50"
    >
      {theme === 'dark' ? (
        <div>
          <svg
            className="moon h-5 w-5 text-accent_1 group-focus-within:text-accent_3 group-hover:text-accent_3"
            xmlns="http://www.w3.org/2000/svg"
            width="256"
            height="256"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"
            />
          </svg>
        </div>
      ) : (
        <div>
          <svg
            className="sun h-5 w-5 text-accent_1 group-focus-within:text-accent_3 group-hover:text-accent_3"
            xmlns="http://www.w3.org/2000/svg"
            width="256"
            height="256"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm8 24a64 64 0 1 0 64 64a64.07 64.07 0 0 0-64-64Zm-69.66 5.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z"
            />
          </svg>
        </div>
      )}
    </button>
  )
}
