 //variables for application state
 
var currentQuestionIndex = 0;
var time = questionObjArr.length * 15; 
var timerId;


// Variables to reference DOM elements using document.getElementById()
var timeEl = document.getElementById(timer);
var startBtn = document.getElementById(start-button);
var submit = document.getElementById(submit-button);
var questions = document.getElementById(title-section);
var submit = document.getElementById(quiz-section);
var choices = document.getElementById(high-score);
var submit = document.getElementById(highscore-display);
var timer = document.getElementById(initials);
var submit = document.getElementById(feedback);

var start = document.getElementById(questions);
var feedback = document.getElementById(choices);

var questions = [
  {  
    question: "In what state is the Churchill Downs horse track located?",
    choices: {
        a:"Ohio", 
        b:"Kentucky", 
        c:"Virginia", 
        d:"Pennsylvania"
    },
    answer: "b"         
},

{     
    question: "What was the original Yankee stadium called?",
    choices: {
        a:"Heritage Field",
        b:"Polo Grounds",
        c:"Meadowlands",
        d:"Gotham Field" 
    },
    answer: "a" 
},

{  
    question: "What state did the baseball franchise, the San Franciso Giants, move from?",
    choices: {
        a:"Nevada",
        b:"New York",
        c:"New Jersey",
        d:"Connecticut"
    },
    answer: "b" 
},

{  
    question: "In what year was the NY Giants football team established?",
    choices: {
        a:"1920",
        b:"1960",
        c:"1925",
        d:"1953"
    },
    answer: "c"
    
},

{  
    question: "How many Stanley Cups have the New Jersey Devils hockey team won?",
    choices: {
        a:"0",
        b:"5",
        c:"2",
        d:"3", 
    },
    answer: "d"
        
  }

];

function startQuiz() {
  titleScreen.setAttributes("class", "hide");
  quizScreen.setAttributes("class", "show");
  timerId = setInterval(tick, 1000);
  timeEl.textContent = time;
  getQuestion();
};

function startTimer() {
    timerId = setInterval(updateTime, 1000);
};

function updateTime() {
    // decrement time
    time--;

    // display time to web page with timer DOM element textContent
    timerEl.textContent = time;
  
    // check if user ran out of time (time <= 0)
    // call quizEnd function if true
    if (time <= 0) {
      quizEnd();
    }
};

function getQuestion() {

}


/// need to add get question function, need to add function question click, 
/// need to add right or wrong?
/// need to add current question index
/// need to check if we ran out of questions
/// end quiz
/// save high score
///check for enter event needed?

 // need to add event listeners//
// user clicks buttion to start quiz

// user clicks button to submit initials

// user clicks button to answer choice

 document.getElementById("start-button").addEventListener("click", startQuiz);

