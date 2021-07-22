let isDarkTheme = true

const toggleTheme = document.querySelector('.theme')
const root = document.documentElement

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

const displayText = document.querySelector('.display p')
const numbers = document.querySelectorAll('.buttons .numbers')
const buttons = document.querySelectorAll('.buttons button')
const operators = document.querySelectorAll('.buttons .operation')

let isNewNumber = true
let operator
let prevNumber

const prevCalculator = () => operator != undefined

const calculator = () => {
  if (prevCalculator()) {
    const currentNumber = parseFloat(displayText.innerText.replace(',', '.'))
    isNewNumber = true
    switch (operator) {
      case '+':
        updateDisplay(prevNumber + currentNumber)
        break

      case '-':
        updateDisplay(prevNumber - currentNumber)
        break

      case 'X':
        updateDisplay(prevNumber * currentNumber)
        break

      case '÷':
        updateDisplay(prevNumber / currentNumber)
        break
    }
  }
}

const updateDisplay = text => {
  if (isNewNumber) {
    displayText.innerText = text.toLocaleString('BR')
    isNewNumber = false
  } else {
    displayText.innerText += text.toLocaleString('BR')
  }
}

const selectOperator = event => {
  if (!isNewNumber) {
    calculator()
    isNewNumber = true
    operator = event.target.innerText
    prevNumber = parseFloat(displayText.innerText.replace(',', '.'))
  }
}

const activeResult = () => {
  calculator()
  operator = undefined
}

const clearDisplay = () => (displayText.innerText = '')

const clearCalculator = () => {
  clearDisplay()
  operator = undefined
  isNewNumber = true
  prevNumber = undefined
}

const removeLastNumber = () => {
  displayText.innerText = displayText.innerText.slice(0, -1)
}

const reverseSign = () => {
  isNewNumber = true
  updateDisplay(displayText.innerText * -1)
}

const existDecimal = () => displayText.innerText.indexOf(',') != -1

const existNumber = () => displayText.innerText.length > 0

const insertDecimal = () => {
  if (!existDecimal()) {
    if (existNumber()) {
      updateDisplay(',')
    } else {
      updateDisplay('0,')
    }
  }
}

const insertNumber = event => updateDisplay(event.target.innerText)

numbers.forEach(number => {
  number.addEventListener('click', insertNumber)
})

operators.forEach(operator => {
  operator.addEventListener('click', selectOperator)
})

document.querySelector('.result').addEventListener('click', activeResult)

document.querySelector('.backspace').addEventListener('click', removeLastNumber)

document.querySelector('.clear-display').addEventListener('click', clearDisplay)

document
  .querySelector('.clear-calculator')
  .addEventListener('click', clearCalculator)

document.querySelector('.reverse').addEventListener('click', reverseSign)

document.querySelector('.decimal').addEventListener('click', insertDecimal)

const keyboardMap = {
  0: 'key0',
  1: 'key1',
  2: 'key2',
  3: 'key3',
  4: 'key4',
  5: 'key5',
  6: 'key6',
  7: 'key7',
  8: 'key8',
  9: 'key9',
  '/': 'divider',
  '*': 'multiple',
  '-': 'subtraction',
  '+': 'sum',
  '=': 'result',
  Enter: 'result',
  Backspace: 'backspace',
  c: 'clear-calculator',
  Escape: 'clear-display',
  ',': 'decimal'
}

const mapKeyboard = event => {
  const key = event.key
  const keyPermission = () => Object.keys(keyboardMap).indexOf(key) != -1
  if (keyPermission()) {
    setTimeout(() => {
      document.querySelector(`.${keyboardMap[key]}`).classList.toggle('press')
    }, 200)
    document.querySelector(`.${keyboardMap[key]}`).classList.toggle('press')

    document.querySelector(`.${keyboardMap[key]}`).click()
  }
}

window.addEventListener('keydown', mapKeyboard)
