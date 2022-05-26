var startButton = document.getElementById("startButton")
var timer = document.getElementById("timer")
var question = document.getElementById("question")
var choices = document.getElementById("choices")
var divPrompt = document.getElementById("divPrompt")
var nextButton = document.getElementById("nextButton")
var highscores = document.getElementById("highscores")
var scoreDiv = document.getElementById("score")
var choiceA = document.getElementById("choiceA")
var choiceB = document.getElementById("choiceB")
var choiceC = document.getElementById("choiceC")
var choiceD = document.getElementById("choiceD")

var secondsLeft = 60
var i = 0
var score = 0
var correctAnswer

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
    nextButton.setAttribute("class", "")
    startButton.setAttribute("class", "hidden")
    startTimer()
    showQuestion()
}

function startTimer(){
  var timerInterval = setInterval(function() {
    timer.textContent = "Timer: " + secondsLeft
    secondsLeft--;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      endGame()
    }
  }, 1000);
}

function endGame(){

}

function showQuestion(){
    correctAnswer = ""
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
nextButton.addEventListener("click", nextQuestion)
function nextQuestion(){
    i++
    showQuestion()
}
