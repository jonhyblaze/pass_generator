// import { set } from '/js/set.js'

// * Grabbing the DOM elements
const slider = document.getElementById('length')
const passNumber = document.getElementById('length-label')
const generateButton = document.getElementById('button')
const output = document.getElementById('output')
const copyButton = document.getElementById('copy-button')
const body = document.querySelector('body')
const power = document.querySelector('#power')
const description = document.querySelector('p')
const crackTime = document.querySelector('#time-to-crack')

console.log(body)

// * Selecting checkboxes

const lovercaseCheckbox = document.querySelector('#checkbox-abc')
const uppercaseCheckbox = document.querySelector('#checkbox-ABC')
const numbersCheckbox = document.querySelector('#checkbox-123')
const symbolsCheckbox = document.querySelector('#checkbox-sym')


// ? Making the number of characters response to slider value

function sliding() {
  passNumber.innerText = slider.value
}

passNumber.innerText = slider.value
slider.addEventListener('change', sliding)

// ? Generator function

function generator(length) {
  let generatedPassword= []
  let set;
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '0123456789'
  const symbols = '!@#$%^&*=-_?'
  
  // ? checking the checkboxes

  if (lovercaseCheckbox.checked === true) {
    set += lowercase
  }

  if (uppercaseCheckbox.checked === true) {
    set += uppercase
  }
  if (numbersCheckbox.checked === true) {
    set += numbers
  }
  if (symbolsCheckbox.checked === true) {
    set += symbols
  }
  
  // ? Transforming string of characters into the array

  set = set.split('')

// ? Looping threw the array and randomizing the positions of elements

  set.forEach( () => generatedPassword.push(set[Math.floor(Math.random() * set.length)]))

  console.log(set.length)

  return generatedPassword.join('').slice(0, length)
}

// * Generate button event listener

generateButton.addEventListener('click', function () {
  output.value = generator(slider.value)
  output.innerHTML = output.value

  if (slider.value < 4) {
    body.style.background = '#aaaaad'
    power.innerHTML = 'This is silly'
    crackTime.innerHTML = 'no time'
  }
  
  if (slider.value > 3 && slider.value < 6) {
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
    body.style.background = 'rgb(57, 231, 57)'
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
    power.innerHTML = 'You making quantum computers looks silly'
    crackTime.innerHTML = 'forever'
  }
  if (slider.value > 23) {
    body.style.background = '#a557e5'
    power.innerHTML = 'You ready for the multiverse'
    crackTime.innerHTML = 'infinity+1'
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
