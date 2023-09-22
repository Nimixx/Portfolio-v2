document.addEventListener('DOMContentLoaded', (event: Event) => {
  const themeRadios = document.querySelectorAll<HTMLInputElement>('input[name="theme"]')

  const setTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('selectedTheme', theme)

    const radio = document.querySelector(
      `input[name="theme"][value="${theme}"]`
    ) as HTMLInputElement
    if (radio) {
      radio.checked = true
    }
  }

  themeRadios.forEach((radio) => {
    radio.addEventListener('change', (event: Event) => {
      const selectedTheme = (event.target as HTMLInputElement)?.value
      if (selectedTheme) {
        setTheme(selectedTheme)
      }
    })
  })

  const savedTheme = localStorage.getItem('selectedTheme')
  if (savedTheme) {
    setTheme(savedTheme)
  }
})
