/* Start of the application when clicking on the 'Start Quiz' button */
document.addEventListener("DOMContentLoaded", () => {
  const indexEl =  document.querySelector("#start");
  const createAccountForm = document.querySelector("#quiz");

  document.querySelector("#start-quiz").addEventListener("click", e => {
    e.preventDefault();
    indexEl.classList.add("hidden");
    createAccountForm.classList.remove("hidden");

    loadQuestion();
    startTimer();
  });
});

/* Array named quiz that stores objects that store the questions, choices and the correct answers for each question */
const quiz = [
  {
    question: "Commonly used data types DO not include:",
    choices: ["1. strings", "2. boolean", "3. alerts", "4. numbers"],
    correctAnswer: "3. alerts"
  },
  {
    question: "The condition in an if / else statement is enclosed with ________.",
    choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    correctAnswer: "2. curly brackets"
  },
  {
    question: "A very useful tool used during development and debbugging for printing content to the debugger is:",
    choices: ["1. JavaScript", "2. terminal / Bash", "3. for loops", "4. console.log"],
    correctAnswer: "4. console.log"
  },
  {
    question: "Arrays in JavaScript can be used to store ________.",
    choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    correctAnswer: "4. all of the above"
  },
  {
    question: "String values must be enclosed within ________ when being assigned to variables.",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
    correctAnswer: "3. quotes"
  }
];

/* Variables; arrayQuestion represent the position of the questions on que quiz array above, score stores how many correct, wrongs we had
while reolving the quiz , the timer is the time we have to answer the quiz before ir closes, the timerId is how we represent the timer visually 
and functionally */
var arrayQuestion = 0;
var score = 0;
var timer = 76;
var timerId = null;


/* Function; loads questions and the choices, the 'for' creates the choices for each 'choices' on the quiz array, ex: if choices had 5 disctinct 
values then 5 answer boxes will be created */
function loadQuestion() {
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const thisQuiz = quiz[arrayQuestion];

  questionEl.textContent = thisQuiz.question;
  choicesEl.innerHTML = "";

  for (let i = 0; i < thisQuiz.choices.length; i++) {
    const choice = thisQuiz.choices[i];
    const button = document.createElement("button");
    button.className = 'btn';
    button.textContent = choice;
    button.addEventListener("click", function() {
      checkAnswer(choice);
    });
    choicesEl.appendChild(button);
  }
}

// Function; check if the the right answer was selected and returns "Correct" else if no tthe right answer returns "Wrong"
function checkAnswer(choice) {
  const thisQuiz = quiz[arrayQuestion];
  // If the answer is correct, add to the score and display a message

  if (choice === thisQuiz.correctAnswer) {
    score++;
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = "Wrong!";
  }

  // Continues with the next question by incrementing the array quiz position to the next one
  arrayQuestion++;
  if (arrayQuestion < quiz.length) {
    loadQuestion();
  } else {
    endQuiz();
  }
}

// function; starts timer when clicking the start quiz button, also stops when the user completes the quiz or when the timer reaches 0
function startTimer() {
  const timerEl = document.getElementById("timer");
  timerId = setInterval(function() {
    timer--;
    timerEl.textContent = "Time: " + timer;
    if (timer <= 0) {
      endQuiz();
    }
  }, 1000);
}

// function; ends the quiz and returs in screen how many points the user got, also stops the timer
function endQuiz() {
  clearInterval(timerId);
  const quizElement = document.getElementById("quiz");

  quizElement.innerHTML = 
  `<div style="justify-content: center; text-align: left; margin-left: 25%; margin-right: 25%; font-family: Arial;">
  <h2 style="font-size: 40px;">All done!</h2>
  <p style="font-size: 25px;">Your final score is  ` + score + ` / 5.</p>
  <p style="font-size: 25px;">Enter Initials: <input style="font-size: 25px;">
  <button style="font-size: 20px; background-color: #351C75; border-radius: 10px; padding: 5px 15px; color: white; font-family: Arial, Helvetica, sans-serif;">Submit</button></p>
  </div>`;
  //document.getElementById("quiz").innerHTML = "<h2>All done!</h2><p>Your final score is  " + score + ".";
}
