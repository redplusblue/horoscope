let username = undefined;
let events = ["will fall down the stairs if the sun is too high.", 
             "will eat a sandwich at some point in the future.",
             "will choke if they eat a lot of riceballs.", 
             "will fly a truck in the water.", 
             "will have a sword fighting contest with a baboon.",
             "will drink tea and chill out."]

let button = document.getElementById('submit-btn')
button.addEventListener('click', recordName)

let display = document.getElementById('display-text')
let matrixDisplay = document.getElementById('random-display-text')
let centerText = document.getElementById('center-txt')

function recordName() {
    username = document.getElementById('name-box').value
    clicked()
    updateDisplay(username)
}

function clicked() {
    centerText.innerText = "Try again!"
    matrixAnimation()
    // Count clicks add an easter egg console.log('1')
}

function matrixAnimation() {
    randOne = Math.random()
    matrixDisplay.innerText = '';
}

function updateDisplay(_string) {
    randNum = parseInt(Math.random()*events.length)
    if(display.innerText.includes(events[randNum])){randNum = parseInt(Math.random()*events.length)};
    display.innerText = `${_string.toLowerCase()} ${events[randNum]}`

}