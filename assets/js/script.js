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

var secondsLeft = 600
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
        question: "What tag defines the body of the HTML document, and usually includes all the contents such as the text, hyperlinks, images, tables, lists, and more?",
        answers: {
            a: "<br></br>",
            b: "<title></title>",
            c: "<head></head>",
            d: "<body></body>"
        },
        correctAnswer: "d"
    },
    {
        question: "In JavaScript, what element is used to store multiple values in a single variable?",
        answers: {
            a: "Variables",
            b: "Arrays",
            c: "Functions",
            d: "Strings"
        },
        correctAnswer: "b"
    },
    {
        question: "In JavaScript, what is a block of code called that is used to perform a specific task?",
        answers: {
            a: "Function",
            b: "Declaration",
            c: "Variable",
            d: "String"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the format called that is used for storing and transporting data?",
        answers: {
            a: "JSON",
            b: "Syntax",
            c: "HTML",
            d: "Font"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the type of loop that continues through a block of code as long as the specified condition remains TRUE?",
        answers: {
            a: "Conditional loop",
            b: "For loop",
            c: "Else loop",
            d: "While loop"
        },
        correctAnswer: "d"
    },
    {
        question: "What is a JavaScript element that represents either TRUE or FALSE values?",
        answers: {
            a: "Condition",
            b: "Event",
            c: "Boolean",
            d: "RegExp"
        },
        correctAnswer: "c"
    },
    {
        question: "What tag is used to define the bottom section (footer) of an HTML document?",
        answers: {
            a: "<footer>",
            b: "<h1> to <h6>",
            c: "<button>",
            d: "<td>"
        },
        correctAnswer: "a"
    },
    {
        question: "What tag is used to define an unordered list that is bulleted?",
        answers: {
            a: "<u>",
            b: "<li>",
            c: "<s>",
            d: "<ul>"
        },
        correctAnswer: "d"
    },
    {
        question: "CSS stands for ____ Style Sheets.",
        answers: {
            a: "Curious",
            b: "Concept",
            c: "Concave",
            d: "Cascading"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the value called that defines colors such as the following: #FFFF00?",
        answers: {
            a: "Decimal Value",
            b: "Color Value",
            c: "Hex Value",
            d: "RGB Value"
        },
        correctAnswer: "c"
    },
]



// starts the game by hiding and showing HTML elements and triggering functions
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

// simple timer
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

// ends the game by hiding and showing HTML elements and prompting the user to see if they want to store their score
function endGame(){
    timer.setAttribute("class", "timer hidden")
    question.setAttribute("class", "question hidden")
    choices.setAttribute("class", "choices hidden")
    scoreDiv.setAttribute("class", "score hidden")
    end.setAttribute("class", "")
    startButton.setAttribute("class", "")
    clearInterval(timerInterval)
    secondsLeft = 600
    i = 0
    storeIt = window.confirm("Game Over! Your score is: " + score + "\nWould you like to store to your highscore?")
    if (storeIt){
        storeHighscore()
    } else {
        window.alert("Hit Start to play again!")
    }
}

// sorts through the question list array and showing the questions and choices
function showQuestion(){
    question.textContent = questionList[i].question
    choiceA.textContent = "a. " + questionList[i].answers.a
    choiceB.textContent = "b. " + questionList[i].answers.b
    choiceC.textContent = "c. " + questionList[i].answers.c
    choiceD.textContent = "d. " + questionList[i].answers.d
    correctAnswer = questionList[i].correctAnswer
}

// functions for the each choice clicked simply adds or remove score/time and triggers next question
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

// flips through the array to the next set of question and choices. checks if user is all done and will end game if so
function nextQuestion(){
    i = i + 1
    if (i === questionList.length){
        endGame()
    } else{
        showQuestion()
    }
}

// stores the user's initials and score into local storage
function storeHighscore(){
    initials = window.prompt("What are your initials?")
    newScore = {initials, score}
    highscoresStorage.push(newScore)
    highscoresStorage.sort(function(a, b){return b.score - a.score})
    highscoresStorage.splice(numHighscores)
    localStorage.setItem("Score", JSON.stringify(highscoresStorage))
}

// Unable to figure out how to retrieve local storage highscore with JSON.parse