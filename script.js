const set = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'`',
	'~',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'-',
	'_',
	'=',
	'+',
	'[',
	'{',
	']',
	'}',
	'.',
	',',
]
const slider = document.getElementById('length')
const passNumber = document.getElementById('length-label')
const generateButton = document.getElementById('button')
const output = document.getElementById('output')
const copyButton = document.getElementById('copy-button')

// ? Making the number of characters response to slider value
function sliding() {
	passNumber.innerText = slider.value
}

passNumber.innerText = slider.value
slider.addEventListener('change', sliding)

// ? Generator function & characters set

function generator(length) {
	let generatedArray = []

	set.forEach((el) => {
		generatedArray.push(set[Math.floor(Math.random() * set.length + 1)])
	})

	return generatedArray.join('').slice(0, length)
}

generateButton.addEventListener('click', function () {
	output.value = generator(slider.value)
	output.innerHTML = output.value
})

copyButton.addEventListener('click', function (text) {
	const input = document.createElement('input')
	input.setAttribute('value', output.value)
	document.body.appendChild(input)
	input.select()
	const result = document.execCommand('copy')
	document.body.removeChild(input)
	return result
})
