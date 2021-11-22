const alphaElem = document.getElementById("alpha")
const generateButton = document.getElementById("generate")
const alphaString = "Your current alphabet is"

let alphas = new Set("abcdefghijklmnopqrstuvwxyz".split(""))

function getRandomItem(set) {
    let items = Array.from(set);
    return items[Math.floor(Math.random() * items.length)];
}

const newAlpha = () => {
    const char = getRandomItem(alphas)
    alphas.delete(char)
    return char
}

const getChar = () => alphas.size == 0 ? "Completed!" : `${alphaString} '${newAlpha()}'`

function f(){
    if (alphas.size == 0) {
        generateButton.innerHTML = "Restart!"
        generateButton.onclick = () => {
            generateButton.innerHTML = "Next"
            alphas = new Set("abcdefghijklmnopqrstuvwxyz".split(""))
            generateButton.onclick = f
            alphaElem.innerHTML = getChar()
        }
    }
    alphaElem.innerHTML = getChar()
}

generateButton.onclick = f

alphaElem.innerHTML = getChar()