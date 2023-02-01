 let wordInput = document.querySelector("#word-input")
 let currentWord = document.querySelector("#current-word")
 //console.log(wordInput)
 //console.log(currentWord)
 let scoreDisplay = document.querySelector("#score")
 let timeDisplay = document.querySelector("#time")
 //console.log(scoreDisplay,timeDisplay)
 let message = document.querySelector("#message")

 let score = 0
 let time = 6
// Array of Words
const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
    ];

window.addEventListener("DOMContentLoaded",init)    


function init(){
    showWords(words)
    wordInput.addEventListener("input",startMatch)
    setInterval(countdown,1000)
    setInterval(checkStatus,50)
}

function showWords(words){
const randomIndex = Math.floor(Math.random()*words.length)
currentWord.innerHTML = words[randomIndex]
}

function startMatch(){
    if(matchWord()){
        showWords(words)
        wordInput.value = ""
        message.innerHTML = "Correct!!"
        score++
        time = 6
    }
    else{
        message.innerHTML = "Incorrect!!"
    }
    scoreDisplay.innerHTML = score
}

function matchWord(){
    if(currentWord.innerHTML == wordInput.value){
    return true
}
else{
    return false
}
}

function countdown(){
    if(time>0){
        time--
        timeDisplay.innerHTML = time
    }
}

function checkStatus(){
    if(time===0)
    message.innerHTML = "GameOver!!"
}