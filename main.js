let isDarkTheme = true

const toggleTheme = document.querySelector('.theme')
const root = document.documentElement

const calculatorButtons = document.querySelectorAll('.buttons button')

toggleTheme.addEventListener('click', event => {
  if (isDarkTheme) {
    //change to white theme
    root.style.setProperty('--bg-color', '#ffffff')
    root.style.setProperty('--calculator-color', '#fcfdff')

    root.style.setProperty('--button-color-1', '#f9fbff')
    root.style.setProperty('--button-color-2', '#eaecf0')

    root.style.setProperty('--button-shadow-1', '#e5e7eb')
    root.style.setProperty('--button-shadow-2', '#f9fbff')

    root.style.setProperty('--color-strong-shadow', '#646464')

    root.style.setProperty('--font-color', '#000')

    toggleTheme.innerHTML = 'dark_mode'
    isDarkTheme = false
  } else {
    //change to dark theme
    root.style.setProperty('--bg-color', '#272727')
    root.style.setProperty('--calculator-color', '#0e0e0e')

    root.style.setProperty('--button-color-1', '#141414')
    root.style.setProperty('--button-color-2', '#313131')

    root.style.setProperty('--button-shadow-1', '#cccccc4b')
    root.style.setProperty('--button-shadow-2', 'rgba(255, 255, 255, 0.14)')

    root.style.setProperty('--color-strong-shadow', '#000')

    root.style.setProperty('--font-color', '#bebebe')

    toggleTheme.innerHTML = 'light_mode'
    isDarkTheme = true
  }
})

window.addEventListener('keydown', event => {
  console.log(event.key)
})

calculatorButtons.forEach(elements => {
  elements.addEventListener('click', event => {
    console.log(event)
  })
})
