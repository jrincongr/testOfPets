var btn = document.getElementById("test-button");
var headerHtml = document.getElementById("testingVisual");
var questionArea = document.getElementById("questionArea")
var questionEl = document.getElementById("question");

//buttons
var opt1 = document.getElementById("option1")
var opt2 = document.getElementById("option2")
var opt3 = document.getElementById("option3")
var opt4 = document.getElementById("option4")

var currentQuestion=0;
var countdown = 10;

QnA = [
    {
        question: "What is the best animal?",
        options: ["dogs", "cats", "camels", "lizards"],
        crcAnswer: "dogs"
    },
    {
        question:"What is the worst animal",
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

function startQuiz(){
    headerHtml.setAttribute("class", "hide");
    questionArea.setAttribute("class", "");
    timer()
    showNext()
}

function timer(){
    var interval = setInterval(function(){
        btn.textContent = countdown;

        if(countdown <= 0){
            clearInterval(interval)
        }
        countdown--;
    }, 1000)
}

