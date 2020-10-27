// JS script file of testOfPets

// Variable Array
var btn = document.getElementById("test-button");
var headerHtml = document.getElementById("testingVisual");
var questionArea = document.getElementById("questionArea");
var questionEl = document.getElementById("question");
var timerEl = document.getElementById("timerEl");
var timerHtml = document.getElementById("timerHtml");
var resultScreen = document.getElementById("resultScreen");
var scoreBoard = document.getElementById("score");

// Buttons
var opt1 = document.getElementById("option1")
var opt2 = document.getElementById("option2")
var opt3 = document.getElementById("option3")
var opt4 = document.getElementById("option4")

// New variables
var currentQuestion=0;
var countdown = 100;

// Question and answer array
QnA = [
    {
        question: "What is the best animal?",
        options: ["dogs", "cats", "camels", "lizards"],
        crcAnswer: "dogs"
    },
    {
        question:"What is the worst animal?",
        options:["dogs", "cats", "camels", "lizards"],
        crcAnswer: "cats"
    },
    {
        question: "What is the weirdest animal?",
        options: ["dogs", "cats", "camels", "lizards"],
        crcAnswer: "camels"
    },
    {
        question: "What is the most amazing animal?",
        options: ["dogs", "cats", "camels", "lizards"],
        crcAnswer: "lizards"
    }
]

// Function to start quiz, (calls timer and showNext functions)
function startQuiz(){
    headerHtml.setAttribute("class", "hide");
    questionArea.setAttribute("class", "");
    timer()
    showNext()
}

// Timer function
function timer(){
    var interval = setInterval(function(){
        timerEl.textContent = countdown;

        if(countdown <= 0 || currentQuestion >= 5){
            clearInterval(interval)
            questionArea.setAttribute("class", "hide");
            resultScreen.setAttribute("class", "");
            timerEl.textContent = "Game Over!"
            scoreBoard.textContent = countdown
        }
        countdown--;
    }, 1000)
}

// showNext Function
function showNext() {
    // console.log(this)
    // console.log(this.textContent)
    if(currentQuestion > 0){
        var previousAnswer = this.textContent
        if(previousAnswer == QnA[currentQuestion-1].crcAnswer){
            console.log("great")
        } else {
            console.log("wrong!")
            countdown -= 25
        }
    }
    if(QnA[currentQuestion]){
        questionEl.textContent = QnA[currentQuestion].question
        opt1.textContent = QnA[currentQuestion].options[0]
        opt2.textContent = QnA[currentQuestion].options[1]
        opt3.textContent = QnA[currentQuestion].options[2]
        opt4.textContent = QnA[currentQuestion].options[3]
        currentQuestion++;
    }else{
        currentQuestion++;
    }
}

// event listeners
btn.addEventListener("click", startQuiz);
questionEl.addEventListener("click", showNext);
opt1.addEventListener("click", showNext)
opt2.addEventListener("click", showNext)
opt3.addEventListener("click", showNext)
opt4.addEventListener("click", showNext)

