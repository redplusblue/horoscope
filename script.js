let username = undefined;
let events = ["will fall down the stairs if the sun is too high.", 
             "will eat a sandwich at some point in the future.",
             "will choke if they eat a lot of riceballs.", 
             "will fly a truck in the water.", 
             "will have a sword fighting contest with a baboon.",
             "will drink tea and chill out."]

let button = document.getElementById('submit-btn')
button.addEventListener('click', recordName)
let reloadButton = document.getElementById('reload-btn')
reloadButton.addEventListener('click', reloadPage);

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
    if(events.length == 2) {
        matrixDisplay.innerText = "Last prediction!";
    } 
}

function matrixAnimation() {
    randOne = Math.random()
    matrixDisplay.innerText = '';
}

function updateDisplay(_string) {
    randNum = parseInt(Math.random()*events.length)
    display.innerText = `${_string.toLowerCase()} ${events[randNum]}`
    events.splice(randNum, 1)
    if(events.length == 0) 
        {
            display.innerText = `That is all for today, ${_string.toLowerCase()}.`
            endSession()
        }

}

function endSession() {
    centerText.style.display = 'none';
    document.getElementById('name-box').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('reload-btn').style.display = 'inherit';
}

function reloadPage() { 
    window.location.reload();
}