// Function to update the theme value in the <p> tag
function updateThemeValue() {
  const selectedTheme = localStorage.getItem('selectedTheme')
  const themeValueElement = document.getElementById('themeValue')

  if (selectedTheme && themeValueElement) {
    themeValueElement.textContent = selectedTheme
  } else if (themeValueElement) {
    themeValueElement.textContent = 'No theme selected'
  }
}

const radioButtons = document.querySelectorAll<HTMLInputElement>('input[name="theme"]')
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener('change', () => {
    localStorage.setItem('selectedTheme', radioButton.value)
    updateThemeValue()
  })
})

updateThemeValue()
