let count;
let numQuestions = questions;
let currentQuestion; 
let userAnswers = [];

let time = document.getElementById("timer");
let startBtn = document.getElementById("start");
startBtn.addEventListener("click", newGame);

// GET EACH CONTAINER <div>
let welcomeDiv = document.querySelector(".welcome-container");
let questionDiv = document.querySelector(".questions-container");





let qTitle = document.getElementById("question-title");
let qChoices = document.getElementById("question-choices");

// NEW GAME FUNCTION
function newGame() {
    // Set gameEnd variable to FALSE and start game
    gameStop = false;
    // Reset score
    gameScore = 0;

    // Initalize question set 
    currentQuestion = 0;

    // ** REMOVE ??? ** //
    // Reset answer array for new game
    userAnswers = [];

    // ** Initialize Timer ** //
    // Define amount of game time (in seconds)
    count = 75;
    // call timer function to initiate timerInterval
    timer();
    // Show time on the DOM
    time.textContent = count;

    // Hide 'welcome-container' div
    welcomeDiv.classList.add("hide");
    // Un-hide 'question-container' div
    questionDiv.classList.remove("hide");

    // Run check function
    check();
};

// TIMER FUNCTION
function timer() {
    // Create a new timer
   timerInterval = setInterval(function() {
       // decrement timer count
       count--;
       // update display in DOM
       time.textContent = count;

       // Test - Time rus out 
       if (count === 0) {
           // Run gameOver function
           gameOver();
       }
   }, 1000)  // Run every 1000 ms (or 1 second)
};

// CHECKS NUMBER OF QUESTIONS
function check() {
    // TEST HOW MANY QUESTIONS LEFT
    if (currentQuestion === numQuestions) {
        // Run gameOver function
        gameOver();
    } else {
        loadQuestion();
    }
};

// LOAD QUESTIONS
function loadQuestion() {
    // Clear question title
    qTitle.textContent = '';
    qChoices.textContent = '';

    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
        qTitle.textContent = questions[currentQuestion].title;

        //-- Render a new <li> for each question choice --//
        // Create li element for each answer choice
        let ansChoice = document.createElement("li");
        // Add 'id' attribute to each choice 
        ansChoice.setAttribute("id", i);
        // Add 'data' attribute to each choice
        ansChoice.setAttribute("data-name", `data-choice-${i}`);
        ansChoice.setAttribute("value", questions[currentQuestion].choices[i]);
        // Add our class containing the CSS styling 
        ansChoice.classList.add("ans-choice");


        // Add event listener
        ansChoice.addEventListener("click", next)
        // Update text of li element
        ansChoice.textContent = questions[currentQuestion].choices[i];

        // Add answer choice to <ul> DOM
        qChoices.appendChild(ansChoice);
    }

};

//  QUESTIONS 
var questions = [
    {
        title: "Question 1",
        choices: [
          "A",
          "B",
          "C",
          "D"
        ],
      answer: "A"
    },

    {
        title: "Question 1",
        choices: [
          "A",
          "B",
          "C",
          "D"
        ],
      answer: "A"
    },

    {
        title: "Question 2",
        choices: [
          "A",
          "B",
          "C",
          "D"
        ],
      answer: "A"
    },

    {
        title: "Question 3",
        choices: [
          "A",
          "B",
          "C",
          "D"
        ],
      answer: "A"
    },

    {
        title: "Question 4",
        choices: [
          "A",
          "B",
          "C",
          "D"
        ],
      answer: "A"
    },

    {
        title: "Question 5",
        choices: [
          "A",
          "B",
          "C",
          "D"
        ],
      answer: "A"
    },

    {
        title: "Question 6",
        choices: [
          "A",
          "B",
          "C",
          "D"
        ],
      answer: "A"
    },
  ];
  
  