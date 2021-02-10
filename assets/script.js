//5 Multiple Choice Questions:
var questionOne = [
    {
        title: "In what state is the Churchill Downs horse track located?",
        choices: ["Ohio", "Kentucky", "Virginia", "Pennsylvania"],
        answer: "Kentucky"
        
    }
]
var questionTwo = [
    {
        title: "What was the original Yankee stadium called?",
        choices: ["Heritage Field", "Polo Grounds", "Meadowlands", "Gotham Field"],
        answer: "Heritage Field"
    }
]
var questionThree = [
    {
        title: "What state did the baseball franchise, the San Franciso Giants, move from?",
        choices: ["Nevada", "New York", "New Jersey", "Connecticut"],
        answer: "New York"
    }
]
var questionFour = [
    {
        title: "In what year was the NY Giants football team established?",
        choices: ["1920", "1960", "1925", "1953"],
        answer: "1925"
    }
]
var questionFive = [
    {
        title: "How many Stanley Cups have the New Jersey Devils hockey team won?",
        choices: ["0", "5", "2", "3"],
        answer: "3"
    }
]

//Goes to page 2
var mainEl = document.getElementById("start");
document.getElementById("start").onclick = function () { 
    location.href = "page2.html";
};

//page 2
var startButton = document.getElementById('start-btn')
startButton.addEventListener('click', startQuiz)

//tried adding timer, but was running out of time

var container = document.getElementById('container')
var nextQuestion = document.getElementById('question')
var getAnswer = document.getElementById('answer') //add buttons?

// var shuffleQuestions, currentQuestionIndex

function startQuiz() {
    console.log('started')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    nextQuestion()

}

function nextQuestion() {
    showQuestion(shuffleQuestions[currentQuestionIndex])
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.innerText
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    }
}

function reset() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}
function getAnswer(){
}