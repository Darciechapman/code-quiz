var counter = 75;
var startBtn = document.getElementById("start");
var timer = document.getElementById("count");
var questions1 = document.getElementById("question1");
var questions2 = document.getElementById("question2");
var questions3 = document.getElementById("question3");
var questions4 = document.getElementById("question4");
    

function startQuiz() {

    timerId = setInterval(tikTok, 1000);
    
    timer.textContent = counter;

    displayQuestion1;

    startBtn.style.display = "none";
}


function tikTok() {
    
    counter--;
    timer.textContent = counter;
  
    
    if (counter <= 0) {
      return counter = 1;
    }
  }

function displayQuestion1() {
    question1.style.display = "inline";
}

startBtn.addEventListener("click", startQuiz);


