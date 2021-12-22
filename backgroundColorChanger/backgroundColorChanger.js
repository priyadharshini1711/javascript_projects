const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'pink', 'blue']

body.style.background = colors[0]

function changeBackground() {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.background = colors[colorIndex]
}