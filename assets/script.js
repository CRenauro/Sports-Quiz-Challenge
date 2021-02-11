(function(){
    function buildQuiz(){
      // variable to store the HTML output
      var output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          var answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            //radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      //combine output list into one string
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // get answer 
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }

    var countDownTime = 30;
	function countDownTimer() {
		var seconds = countDownTime % 30;
		var result = (seconds  < 10 ? "0" + seconds : seconds);
		document.getElementById("timer").innerHTML = result;
   		if(countDownTime == 0 ){ countDownTime = 30*30*30; }
   		countDownTime = countDownTime - 1;
   		setTimeout(function(){ countDownTimer() }, 1000);
	}
	countDownTimer();

    
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var myQuestions = [
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
        correctanswer: "c"
        
    },

    {  
        question: "How many Stanley Cups have the New Jersey Devils hockey team won?",
        answers: {
            a:"0",
            b:"5",
            c:"2",
            d:"3", 
        },
        correctanswer: "d"
            
    }
];

buildQuiz();

var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
var currentSlide = 0;

showSlide(currentSlide);

submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);

})();