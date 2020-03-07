var startBtn = document.getElementById("start");
var timer = document.getElementById("count");
var questionHeaderId = document.getElementById("question-header");
var questionsEl = document.getElementById("questions");
var optionsEl = document.getElementById("options");
var markEl = document.getElementById("mark");

var i = 0;
var score = 0;
var counter = 75;

//arry of object
//goal: to conver irtems inside array o
const questionsString = [
{ 
  question: "Is henry Viii cute?",
  options: ["yes", "no", "maybe", "so"],
  answer: "yes"
}, 
{ 
  question: "second question",
  options: ["yes", "no", "maybe", "so"],
  answer: "yes"
}, 
{ 
  question: "third",
  options: ["yes", "no", "maybe", "so"],
  answer: "yes"
}, 
{ 
  question: "forth",
  options: ["yes", "no", "maybe", "so"],
  answer: "yes"
}]
   

function startQuiz() {

  timerId = setInterval(tikTok, 1000);
    
  timer.textContent = counter;

  startBtn.style.display = "none";

  askQuestions();
  
}


function askQuestions() {

  //questionHeaderId.innerText = questions.question

  for (var i = 0; i < questionsString.length; i++) {
    var question1 = questionsString[i];
    var title = question1.question
    questionsEl.textContent = title;
    
  }

    optionsEl.innerHTML = "";

    var optionEl = document.createElement("button");
    optionEl.setAttribute("class", "option");
    optionEl.setAttribute("value", options);
    
    optionEl.textContent = i + 1 + ". " + options;

    optionEl.onclick = questionClicked;

    optionsEl.appendChild(optionEl);
  };
  


function questionClicked() {

  if (this.value !== question[i].answer) {

    counter -= 15;

    if (count < 0) {
      count = 0;
    }
    
    timer.textContent = counter;
    markEl.textContent = "Incorrect";

  } else {
    markEl.textContent = "You're right";
  }

  i++;

  if (i === questions.length) {
    quizEnd();
  } else {
    askQuestions();
  }
}

function quizEnd() {

  clearInterval(timer);

  var endScore = document.getElementById("score");
  endScore.textContent = count;

  questionsEl.setAttribute("class", "hide");
}


function tikTok() {
    
    counter--;
    timer.textContent = counter;
  
    
    if (counter <= 0) {
      return counter = 1;
    }
  }


startBtn.addEventListener("click", startQuiz);



