var startButton = document.getElementById("startButton")
var timer = document.getElementById("timer")
var question = document.getElementById("question")
var choices = document.getElementById("choices")
var divPrompt = document.getElementById("divPrompt")
var highscores = document.getElementById("highscores")
var scoreDiv = document.getElementById("score")
var end = document.getElementById("end")
var choiceA = document.getElementById("choiceA")
var choiceB = document.getElementById("choiceB")
var choiceC = document.getElementById("choiceC")
var choiceD = document.getElementById("choiceD")

var secondsLeft = 60
var i = 0
var score = 0
var correctAnswer
var timerInterval
var initials
var storeIt
var numHighscores = 10
var highscoresStorage = []

var questionList = [
    {
        question: "What is 1+1?",
        answers: {
            a: "2",
            b: "4",
            c: "6",
            d: "8"
        },
        correctAnswer: "a"
    },
    {
        question: "What is 2+2?",
        answers: {
            a: "2",
            b: "4",
            c: "6",
            d: "8"
        },
        correctAnswer: "b"
    }
]




startButton.addEventListener("click", startGame)
function startGame(){
    timer.setAttribute("class", "timer")
    scoreDiv.setAttribute("class", "score")
    question.setAttribute("class", "question")
    choices.setAttribute("class", "choices")
    divPrompt.setAttribute("class", "hidden")
    startButton.setAttribute("class", "hidden")
    end.setAttribute("class", "hidden")
    startTimer()
    showQuestion()
}

function startTimer(){
    timerInterval = setInterval(function() {
    timer.textContent = "Timer: " + secondsLeft
    secondsLeft--;
    if(secondsLeft === 0 || secondsLeft < 0) {
      clearInterval(timerInterval);
      endGame()
    }
  }, 1000);
}

function endGame(){
    timer.setAttribute("class", "timer hidden")
    question.setAttribute("class", "question hidden")
    choices.setAttribute("class", "choices hidden")
    scoreDiv.setAttribute("class", "score hidden")
    end.setAttribute("class", "")
    startButton.setAttribute("class", "")
    clearInterval(timerInterval)
    secondsLeft = 60
    i = 0
    storeIt = window.confirm("Game Over! Your score is: " + score + "\nWould you like to store to your highscore?")
    if (storeIt){
        storeHighscore()
    } else {
        window.alert("Hit Start to play again!")
    }
}

function showQuestion(){
    question.textContent = questionList[i].question
    choiceA.textContent = "a. " + questionList[i].answers.a
    choiceB.textContent = "b. " + questionList[i].answers.b
    choiceC.textContent = "c. " + questionList[i].answers.c
    choiceD.textContent = "d. " + questionList[i].answers.d
    correctAnswer = questionList[i].correctAnswer
}

choiceA.addEventListener("click", selectedA)
choiceB.addEventListener("click", selectedB)
choiceC.addEventListener("click", selectedC)
choiceD.addEventListener("click", selectedD)
function selectedA(){
    if (correctAnswer === "a"){
        score++
    } else {
        secondsLeft = secondsLeft -5
        score--
    }
    scoreDiv.textContent = "Score: " + score
    nextQuestion()
}
function selectedB(){
    if (correctAnswer === "b"){
        score++
    } else {
        secondsLeft = secondsLeft -5
        score--
    }
    scoreDiv.textContent = "Score: " + score
    nextQuestion()
}
function selectedC(){
    if (correctAnswer === "c"){
        score++
    } else {
        secondsLeft = secondsLeft -5
        score--
    }
    scoreDiv.textContent = "Score: " + score
    nextQuestion()
}
function selectedD(){
    if (correctAnswer === "d"){
        score++
    } else {
        secondsLeft = secondsLeft -5
        score--
    }
    scoreDiv.textContent = "Score: " + score
    nextQuestion()
}

function nextQuestion(){
    i = i + 1
    if (i === questionList.length){
        endGame()
    } else{
        showQuestion()
    }
}

function storeHighscore(){
    initials = window.prompt("What are your initials?")
    newScore = {initials, score}
    highscoresStorage.push(newScore)
    highscoresStorage.sort(function(a, b){return b.score - a.score})
    highscoresStorage.splice(numHighscores)
    localStorage.setItem("Score", JSON.stringify(highscoresStorage))
}