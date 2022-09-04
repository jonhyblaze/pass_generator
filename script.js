import { set } from '/js/set.js'

// * Grabbing the DOM elements
const slider = document.getElementById('length')
const passNumber = document.getElementById('length-label')
const generateButton = document.getElementById('button')
const output = document.getElementById('output')
const copyButton = document.getElementById('copy-button')
const body = document.querySelector('body')
const power = document.querySelector('h3')
const description = document.querySelector('p')
const crackTime = document.querySelector('span')

// ? Making the number of characters response to slider value
function sliding() {
  passNumber.innerText = slider.value
}

passNumber.innerText = slider.value
slider.addEventListener('change', sliding)

// ? Generator function

function generator(length) {
  let generatedArray = []

  set.forEach(el => {
    generatedArray.push(set[Math.floor(Math.random() * set.length + 1)])
  })

  return generatedArray.join('').slice(0, length)
}

// * Generate button event listener

generateButton.addEventListener('click', function () {
  output.value = generator(slider.value)
  output.innerHTML = output.value
  if (slider.value < 6) {
    body.style.background = 'crimson'
    power.innerHTML = 'This password is a piece of cake'
    crackTime.innerHTML = 'less than 1 second'
  }
  if (slider.value > 5 && slider.value < 12) {
    body.style.background = 'orange'
    power.innerHTML = 'You can do better'
    crackTime.innerHTML = 'less than 1 hour'
  }
  if (slider.value > 11 && slider.value < 16) {
    body.style.background = '#E8F310'
    power.innerHTML = 'There is a room to grow'
    crackTime.innerHTML = 'less than 100 thousand years'
  }
  if (slider.value > 15 && slider.value < 18) {
    body.style.background = 'lime'
    power.innerHTML = 'Probably you can get away with that'
    crackTime.innerHTML = 'as long as a planet exists'
  }
  if (slider.value > 17 && slider.value < 22) {
    body.style.background = '#4ACDF3'
    power.innerHTML = 'You are bulletproofed now'
    crackTime.innerHTML = 'as long as sun shines'
  }
  if (slider.value > 21) {
    body.style.background = '#a557e5'
    power.innerHTML = 'You making quantum computing and AI looks silly'
    crackTime.innerHTML = 'forever'
  }
})

// ? Copy button logic

copyButton.addEventListener('click', function (text) {
  const input = document.createElement('input')
  input.setAttribute('value', output.value)
  document.body.appendChild(input)
  input.select()
  const result = document.execCommand('copy')
  document.body.removeChild(input)
  return result
})
