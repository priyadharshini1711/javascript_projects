const button = document.querySelector("button")
const body = document.querySelector("body")
const paragraph = document.getElementById("hexValue")

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function onBackgroundColorHex() {
    let hex = "#"

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hexValues.length)
        hex = hex + hexValues[index]
    }

    paragraph.innerHTML = hex
    body.style.background = hex
}