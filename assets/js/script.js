var startButton = document.getElementById("startButton")
var timer = document.getElementById("timer")
var question = document.getElementById("question")
var choices = document.getElementById("choices")
var divPrompt = document.getElementById("divPrompt")
var nextButton = document.getElementById("nextButton")
var highscores = document.getElementById("highscores")

var secondsLeft = 10

var randomQuestions, currentQuestion;
var questionList = [
    {
        question: "What is 1+1",
        answers: {
            a: "2",
            b: "4",
            c: "6",
            d: "8"
        },
        correctAnswer: "a"
    }
]





startButton.addEventListener("click", startGame)

function startGame(){
    timer.setAttribute("class", "timer")
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
    
}

function showResults(){

}

function nextQuestion(){

}
