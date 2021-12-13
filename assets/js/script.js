var count;
var numQuestions = questions;
var currentQuestion; 
var userAnswers = [];
var gameStop = true;
var gameScore;
var timerInterval;

var time = document.getElementById("timer");
var score = document.getElementById("user-score");

var startBtn = document.getElementById("start");
startBtn.addEventListener("click", newGame);

// GET EACH CONTAINER <div>
var welcomeDiv = document.querySelector(".welcome-container");
var questionDiv = document.querySelector(".questions-container");
let formDiv = document.querySelector(".form-container");
var leaderboard = document.querySelector(".user-scores");

var qTitle = document.getElementById("question-title");
var qChoices = document.getElementById("question-choices");
var userSubmit = document.getElementById("userSubmit");
var leaderScore = document.querySelector(".leaderScore");

userSubmit.addEventListener("click", function(event) {
  event.preventDefault()
  var userName = document.getElementById ("userName").value  
  var prevUser = JSON.parse(localStorage.getItem("codeQuiz")) || []
  prevUser.push({
    user:userName, score:gameScore
  })
  localStorage.setItem("codeQuiz", JSON.stringify(prevUser))
  console.log(userName, prevUser,"ls")

  formDiv.classList.add("hide")
  leaderScore.classList.remove("hide")

  let liTags=""

for (let i = 0; i < prevUser.length; i ++) {
  liTags += `<li class="leadername"> ${prevUser[i].user} - ${prevUser[i].score}</li>`
}
document.getElementById("leaders").innerHTML = liTags

});

// NEW GAME FUNCTION
function newGame() {
    gameStop = false;
    gameScore = 0;
    currentQuestion = 0;
    userAnswers = [];
    count = 75;
  
    timer();
    
    time.textContent = count;


    welcomeDiv.classList.add("hide");
    questionDiv.classList.remove("hide");

    check();
};

// TIMER FUNCTION
function timer() {
   timerInterval = setInterval(function() {
       count--;
       time.textContent = count;

       if (count === 0) {
           gameOver();
       }
   }, 1000) 
};

// CHECKS NUMBER OF QUESTIONS
function check() {
    if (currentQuestion >= questions.length) {
        gameOver();
    } else {
        loadQuestion();
    }
};

// LOAD QUESTIONS
function loadQuestion() {
    qTitle.textContent = '';
    qChoices.textContent = '';

    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        qTitle.textContent = questions[currentQuestion].title;

        var ansChoice = document.createElement("li");
        ansChoice.setAttribute("id", i);
        ansChoice.setAttribute("data-name", `data-choice-${i}`);
        ansChoice.setAttribute("value", questions[currentQuestion].choices[i]);
        ansChoice.classList.add("ans-choice");


        ansChoice.addEventListener("click", next)
        ansChoice.textContent = questions[currentQuestion].choices[i];

        qChoices.appendChild(ansChoice);
    }

};

// GOES TO NEXT QUESTION
function next(e){
    if(event.target.innerText === questions[currentQuestion].answer) {
        gameScore += 10;
    }

    currentQuestion++;

    check();

};

// GAME OVER 
function gameOver() {
    gameStop = true;

    clearInterval(timerInterval);
    time.textContent = "- -";

    questionDiv.classList.add("hide");

    score.textContent = gameScore;
    formDiv.classList.remove("hide");
    userName.value = '';
};


//  QUESTIONS 
var questions = [
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: [
          "<js>",
          "<scripting>",
          "<javascript>",
          "<script>"
        ],
      answer: "<script>"
    },

    {
        title: "Where is the correct place to insert a JavaScript?",
        choices: [
          "The <head> section",
          "Both the <head> section and the <body> section are correct",
          "The <body> section",
          "The <footer> section"
        ],
      answer: "Both the <head> section and the <body> section are correct"
    },

    {
        title: "What is wireframing?",
        choices: [
          "A blueprint of our website's page layout.",
          "A 3D model of our websites structure made from wires.",
          "A CSS library that helps in the creation of borders around our boxed elements.",
          "Wireframing helps us quickly set up our HTML page."
        ],
      answer: "A blueprint of our website's page layout."
    },

    {
        title: "How would I check which files are staged, unstaged, and untracked using git commands?",
        choices: [
          "git commit -m",
          "git fetch",
          "git add .",
          "git status"
        ],
      answer: "git status"
    },

    {
        title: "What is the command we use to create a new file?",
        choices: [
          "touch",
          "cd",
          "pwd",
          "mkdir"
        ],
      answer: "touch"
    },

    {
        title: "JavaScript is the same as Java.",
        choices: [
          "True",
          "False"
        ],
      answer: "True"
    },
  ];
  
  