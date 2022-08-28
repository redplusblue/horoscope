let username = undefined;
let initUsername;
let events = ["will fall down the stairs if the sun is too high.", 
             "will eat a sandwich at some point in the future.",
             "will choke if they eat a lot of riceballs.", 
             "will fly a truck in the water.", 
             "will have a sword fighting contest with a baboon.",
             "will drink tea and chill out."]
let funny = ["I didn't fall down. I did attack the floor, though.",
             "I don't suffer from insanity, I enjoy every minute of it.", 
             "I don't need a hair stylist, my pillow gives me a new hairstyle every morning.",
            "I get enough exercise pushing my luck.",
            "I had loads to do today. Ah well, so now I have loads to do tomorrow.",
            "I like to be an optimist. It pisses people off.",
            "I refuse to answer that question on the grounds that I don't know the answer.",
            "I refuse to have a battle of wits with an opponent so clearly unarmed.",
            "A train station is where the train stops. A bus station is where the bus stops. On my desk, I have a work station…",
            "After millions of years of evolution, you're kind of a disappointment.",
            "All my life I thought air was for free. That was until I bought a bag of potato chips.",
            "I speak fluent ironic with a solid sarcastic accent.", 
            "I am nobody. Nobody is perfect. I am perfect.",
            "He who wakes up early, yawns all day long.",
            "I am an example to others. A bad example.",
            "I would like to apologize to anyone whom I haven't offended yet. Please be patient, I will get to you shortly.",
            "Change is inevitable, except from a parking meter.",
            "Come over to the dark side…we've got candy.",
            "Confessions may be great for your soul, but they are hell for your reputation.",
            "Dear math exercise book, kindly grow up finally and solve your own problems!",
            "A bag of money can be a symbol not only of wealth, but also of tremendous inflation.",
            "Do people talk about you behind your back? Simply fart.",
            "I'm not lazy. I'm just highly motivated to do nothing.",
            "I'm really good at stuff until somebody watches me do that stuff.",
            "I'd like to help you out today. Which way did you come in?",
            "A bank is a place that will lend you money, if you can prove that you don't need it.",
            "A jellyfish has existed as a species for 500 million years, surviving just fine without a brain. That gives hope to quite a few people.",
            "Doing nothing is hard, you never know when you're done.",
            "Don't worry if plan A fails, there are 25 more letters in the alphabet.",
            "Always remember you're unique, just like everyone else.",
            "Every rule has an exception. This rule is no exception.",
            "As long as cocoa beans grow on trees, chocolate is fruit to me.",
            "“Stressed” is just “desserts” spelled backwards.",
            "Hard work pays off in the future. Lounging on the couch pays off right now.",
            "God created the world, everything else is made in China.",
            "The shortest horror story: Monday.",
            "The road to success is always under construction."]

let button = document.getElementById('submit-btn')
button.addEventListener('click', recordName)
let reloadButton = document.getElementById('reload-btn')
reloadButton.addEventListener('click', reloadPage);

let display = document.getElementById('display-text')
let matrixDisplay = document.getElementById('random-display-text')
let centerText = document.getElementById('center-txt')
let source = document.getElementById('src')

function recordName() {
    username = document.getElementById('name-box').value;
    if(initUsername == username) {
        clicked("funny")
        updateDisplay(username, "funny")
    } else {
        clicked("events")
        updateDisplay(username, "events")
    }
}

function clicked(array) {
    if(array == "events") {
        source.style.display = 'none';
        initUsername = username;
        centerText.innerText = "Try again!";
        matrixDisplay.innerText = "";
        if(events.length == 2) {
             matrixDisplay.innerText = "Last prediction!";
        }
    } else {
        source.style.display = 'inherit'; 
        centerText.innerText = "Click again!";
        matrixDisplay.innerText = "Haha, I'm funny!";
    }
}

function updateDisplay(_string, array) {
    if(array == "events") {
        if(events.length == 0) 
            {
                display.innerText = `That is all for today, ${_string.toLowerCase()}.`
                endSession();
            }
        randNum = parseInt(Math.random()*events.length)
        display.innerText = `${_string.toLowerCase()} ${events[randNum]}`
        events.splice(randNum, 1)
    } else {
        if(funny.length == 0) {
            display.innerText = `That is all for today, ${_string.toLowerCase()}.`
            endSession();
        }
        randNum = parseInt(Math.random()*funny.length)
        display.innerText = `${funny[randNum]}`
        funny.splice(randNum, 1)
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