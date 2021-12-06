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
    count = 5;
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

    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        qTitle.textContent = questions[currentQuestion].title;

        //-- Render a new <li> for each question choice --//
        // Create li element for each answer choice
        var ansChoice = document.createElement("li");
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

function next(e){
    if(event.target.innerText === questions[currentQuestion].answer) {
        gameScore += 10;
    }

    // Increment currentQuestion
    currentQuestion++;

    // Run check
    check();

}
// GAME OVER 
function gameOver() {
    // Set gameStop variable to TRUE
    gameStop = true;

    // Clear countdown timer
    clearInterval(timerInterval);
    time.textContent = "- -";

    // Add any time left to game score
    gameScore += count;

    // Hide question container
    questionDiv.classList.add("hide");

    // Display Game Score
    score.textContent = gameScore;
    // Un-hide form container
    formDiv.classList.remove("hide");
    // Clear form input field
    username.value = '';
}

function saveUser(event) {
    // Prevent the form from reloading the page
    event.preventDefault();
    // Check that the input is NOT empty
    if (username.value == '') {
        return;
    }

    let tempArray = localStorage.getItem("userScores");
    // TEST Do we have a JSON object called 'userScores' stored in localStorage?
    let parsedTempArray = JSON.parse(tempArray);
    // IF we DO have stored data in localStorage run the following
    if (parsedTempArray !== null) {
        // Add current game score to high score array
        parsedTempArray.push(
            {
                username: username.value,
                score: gameScore
            }
        );

        // Sort data from highest to lowest before storing in localStorage
        sortScores(parsedTempArray);

        // Save updated JavaScript OBJECT to local storage by turning it into a JSON OBJECT
        localStorage.setItem('userScores', JSON.stringify(parsedTempArray));
    } else {  
        // ELSE - the userScores OBJECT was cleared and we need to create a new ARRAY to put our JS Object into, convert it and store it.
        let highScoreArray = [];
        // Add current game score to high score array
        highScoreArray.push(
            {
                username: username.value,
                score: gameScore
            }
        );
        localStorage.setItem('userScores', JSON.stringify(highScoreArray));
    }
    // Clear form input field
    username.value = '';
    // Display the Leader Board
    showLeader();
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
  
  