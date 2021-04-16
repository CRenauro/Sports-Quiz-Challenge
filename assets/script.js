//time and score//

var timeEl = document.querySelector("p.time");
var secondsLeft = 60;
var scoreEl = document.querySelector("#score");

//sections and intro//

const introEl = document.querySelector("#intro");
const questionsEl = document.querySelector("#questions");
var questionEl = document.querySelector("#question");
var questionCount = 0;
const rightorwrongEl = document.querySelector("#rightorwrong");

//final//
const finalEl = document.querySelector("#final");
var enterInitials = document.querySelector("#initials");


//scores//
const highscoresEl = document.querySelector("#highscores");
var scoreListEl = document.querySelector("#score-list");
var scoreList = [];

//buttons//
const startBtn = document.querySelector("#start");
const ansBtn = document.querySelectorAll("button.ansBtn")
const ansBtn1 = document.querySelector("#answer1");
const ansBtn2 = document.querySelector("#answer2");
const ansBtn3 = document.querySelector("#answer3");
const ansBtn4 = document.querySelector("#answer4");
const submitScrBtn = document.querySelector("#submit-score");
const returnBtn = document.querySelector("#return");
const clearScrBtn = document.querySelector("#clearscores");
const viewScrBtn = document.querySelector("#view-scores");


const questions = [
    {  
        question: "In what state is the Churchill Downs horse track located?",
        answers: ["1. Ohio", "2. Kentucky", "3. Virginia", "4. Pennsylvania"],
        correctAnswer: "2"         
    },
    {     
        question: "What was the original Yankee stadium called?",
        answers: ["1. Heritage Field", "2. Polo Grounds", "3. Meadowlands", "4. Gotham Field"],
        correctAnswer: "1" 
    },
    {  
        question: "What state did the baseball franchise, the San Franciso Giants, move from?",
        answers: ["1. Nevada", "2. New York", "3. New Jersey", "4. Connecticut"],
        correctAnswer: "2" 
    },
    {  
        question: "In what year was the NY Giants football team established?",
        answers: ["1. 1920", "2. 1960", "3. 1925", "4. 1953"],
        correctAnswer: "3"
    
    },
    {  
        question: "How many Stanley Cups have the New Jersey Devils hockey team won?",
        answers: ["1. 0", "2. 5", "3. 2", "4. 3"],
        correctAnswer: "4"    
    }
];



function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = `Time:${secondsLeft}s`;

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 2000);
}

function startQuiz() {
    introEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
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

    console.log(`questions[questionCount].correctAnswer: ${questions[questionCount].correctAnswer}`);
    console.log(`event.target.value: ${event.target.value}`);

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

    finalEl.style.display = "none";
    highscoresEl.style.display = "block";

    var init = enterInitials.value.toUpperCase();
    console.log(`init: ${init}`)
    scoreList.push({ initials: init, score: secondsLeft });
    console.log(scoreList);
    scoreList = scoreList.sort((a, b) => {
        if (a.score < b.score) {
            return 1;
        } else {
            return -1;
        }

    });


    scoreListEl.innerHTML="";
    console.log(scoreList);
    for (let i = 0; i < scoreList.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
        scoreListEl.append(li); 
    }

    storeScores();
    displayScores();
}

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}


function displayScores() {
    var storedScoreList = JSON.parse(localStorage.getItem("scoreList"));
    console.log(storedScoreList);

    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
}

function clearScores() {
    localStorage.clear();
    scoreListEl.innerHTML="";

}

startBtn.addEventListener("click", startQuiz);

ansBtn.forEach(item => {
    item.addEventListener("click", checkAnswer);
});

submitScrBtn.addEventListener("click", addScore);
returnBtn.addEventListener("click", function () {
    highscoresEl.style.display = "none";
    introEl.style.display = "block";
    secondsLeft = 60;
    timeEl.textContent = `Time:${secondsLeft}s`;
});

clearScrBtn.addEventListener("click", clearScores);

viewScrBtn.addEventListener("click", function () {
    if (highscoresEl.style.display === "none") {
        highscoresEl.style.display = "block";
    } else if (highscoresEl.style.display === "block") {
        highscoresEl.style.display = "none";
    } else {
        return alert("no scores to show");
    }
});