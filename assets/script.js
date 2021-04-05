//time and score//

var timeEl = document.querySelector("p.time");
var secondsLeft = 60;
var scoreEl = document.querySelector("#score");

//sections and intro//

var introEl = document.querySelector("#intro");
var questionsEl = document.querySelector("#questions");
var questionEl = document.querySelector("#question");
var questionCount = 0;
var rightorwrongEl = document.querySelector("#rightorwrong");

//final//
var finaLEl = document.querySelector("#final");
var enterInitials = document.querySelector("#initials");


//scores//
var highscoresEl = document.querySelector("#highscores");
var scoreListEl = document.querySelector("#score-list");
var scoreList = [];

//buttons//
var startBtn = document.querySelector("#start");
var ansBtn = document.querySelectorAll("button.ansBtn")
var ansBtn1 = document.querySelector("#answer1");
var ansBtn2 = document.querySelector("#answer2");
var ansBtn3 = document.querySelector("#answer3");
var ansBtn4 = document.querySelector("#answer4");
var submitScrBtn = document.querySelector("#submit-score");
var returnBtn = document.querySelector("#return");
var clearScrBtn = document.querySelector("#clearscores");
var viewScrBtn = document.querySelector("#view-scores");


var questions = [
  {  
    question: "In what state is the Churchill Downs horse track located?",
    answers: {
        a:"Ohio", 
        b:"Kentucky", 
        c:"Virginia", 
        d:"Pennsylvania"
    },
    correctAnswer: "b"         
},

{     
    question: "What was the original Yankee stadium called?",
    answers: {
        a:"Heritage Field",
        b:"Polo Grounds",
        c:"Meadowlands",
        d:"Gotham Field" 
    },
    correctAnswer: "a" 
},

{  
    question: "What state did the baseball franchise, the San Franciso Giants, move from?",
    answers: {
        a:"Nevada",
        b:"New York",
        c:"New Jersey",
        d:"Connecticut"
    },
    correctAnswer: "b" 
},

{  
    question: "In what year was the NY Giants football team established?",
    answers: {
        a:"1920",
        b:"1960",
        c:"1925",
        d:"1953"
    },
    correctAnswer: "c"
    
},

{  
    question: "How many Stanley Cups have the New Jersey Devils hockey team won?",
    answers: {
        a:"0",
        b:"5",
        c:"2",
        d:"3", 
    },
    correctAnswer: "d"
        
  }

];



function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finaLEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000);
}

function startQuiz() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}





function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById(questions);
    titleEl.textContent = currentQuestionIndex.title;
    choicesEl.innerHTML = "";
    currentQuestionIndex.answers.forEach(function(choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
        choiceNode.textContent = i + 1 + ". " + choice;
        choiceNode.onclick = questionClick;
        choicesEl.appendChild(choiceNode);
    });
}

function startQuiz() {
  titleScreen.setAttributes('class', 'hide');
  quizScreen.setAttributes('class', 'show');
  timerId = setInterval(tick, 1000);
  timeEl.textContent = time;
  getQuestion();
}

function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ansBtn1.textContent = questions[id].answers[0];
        ansBtn2.textContent = questions[id].answers[1];
        ansBtn3.textContent = questions[id].answers[2];
        ansBtn4.textContent = questions[id].answers[3];
    }

}

function checkAnswer(event) {
    event.preventDefault();

    rightorwrongEl.style.display = "block";
    var p = document.createElement("p");
    rightorwrongEl.appendChild(p);

    setTimeout(function () {
        p.style.display = 'none';

    }, 1000);

    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Incorrect";
    }

    if (questionCount < questions.length) {
        questionCount++;
    }

    setQuestion(questionCount);
}

function addScore(event) {
    event.preventDefault();

    finaLEl.stle.display = "none";
    highscoresEl.style.display = "block";

    var init = enterInitials.value.toUpperCase();
    scoreList.push({ initals. init, score: secondsLeft });

    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
            return 1;
        } else {
            return -1;
        }

    });


    scoreListEl.innerHTML="";
    for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreList[i].initals}: ${scoreList[i].score}`;
        scoreListEl.append(li); 
    }

    storeScores();
    displayScores();
}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}