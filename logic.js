var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
var timer = document.getElementById("count");
var questionContainerEl = document.getElementById("questions-container");
const questionEl = document.getElementById("question"); 
const answerBtnsEl = document.getElementById("answer-buttons");


let shuffledQuestions, currentQuestionIndex;
var i = 0;
var score = 0;
var counter = 75;

//arry of object
//goal: to conver irtems inside array o
const questions = [
{ 
  question: "When did Henry VIII become king?",
  answer: [
    { text: "1509", correct: true },
    { text: "1520", correct: false },
    { text: "1525", correct: false },
    { text: "1542", correct: false },
  ]
}, 
{ 
  question: "How many of Henry VIII's six wives were executed?",
  answer: [
    { text: "2", correct: true },
    { text: "0", correct: false },
    { text: "4", correct: false },
    { text: "1", correct: false },
  ]
}, 
{ 
  question: "By the time he passed away, how many palaces did he have?",
  answer: [
    { text: "50", correct: true },
    { text: "23", correct: false },
    { text: "10", correct: false },
    { text: "65", correct: false },
  ]
}, 
{ 
  question: "Who was Henry VIII's dad?",
  answer: [
    { text: "henry VII", correct: true },
    { text: "james VI", correct: false },
    { text: "Harold Godwinson", correct: false },
    { text: "Piers morgan", correct: false },
  ]
}] 
   

function startQuiz() {

  timerId = setInterval(tikTok, 1000);
    
  timer.textContent = counter;

  startBtn.style.display = "none";

  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerEl.classList.remove("hide");

  getQuestion();
  
}


function getQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex]) 

  //questionHeaderId.innerText = questions.question

}

function showQuestion(question) {
  questionEl.innerText = question.question
  question.answer.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text
    button.classList.add("btn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerBtnsEl.appendChild(button);
  })
}
  
function resetState() {
  nextBtn.classList.add("hide");
  //removing previous answers. if there is a previous child remove
  while (answerBtnsEl.firstChild) {
    answerBtnsEl.removeChild(answerBtnsEl.firstChild)
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target
  const correct = selectedBtn.dataset.correct
  setStatusClass(document.body, correct);
  //creating answerbtnsEl.childern into an array. Enabling a loop through all btns
  Array.from(answerBtnsEl.children).forEach(button => {
    //checking if the button is correct or not
    setStatusClass(button, button.dataset.correct);
  })
  nextBtn.classList.remove("hide")
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
  } else {
    startBtn.innerText = "Restart"
    startBtn.classList.remove("hide");
  }
}  

function setStatusClass(element, correct, counter) {
  //clearing any status it may have from previous questions
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct");

  
  } else {
    element.classList.add("wrong");
  
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
} 


/*function questionClicked() {

  if (this.value !== question[i].answer) {

    counter -= 15;

    if (count < 0) {
      count = 0;
    }
    
    timer.textContent = counter;
    

  } else {
    
  }

  i++;

  if (i === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}
*/

function tikTok() {
    
    counter--;
    timer.textContent = counter;
  
    
    if (counter <= 0) {
      return counter = 1;
    }
  }


startBtn.addEventListener("click", startQuiz);

//going to next question
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++
  getQuestion()
})



