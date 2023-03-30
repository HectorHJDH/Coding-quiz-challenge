var question = document.querySelector('#question');
var choices = document.querySelector('#choice-text');
var scoreText = document.querySelector('#score');

let currentQuestion = {};
let acceptedAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'Commonly used data types DO not include:',
        choices: ['strings', 'boolean', 'alerts', 'numbers'],
        answer: 'alerts'
    },
    {
        question: 'The condition in an if / else statement is enclosed with ________.',
        choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        answer: 'curly brackets'
    },
    {
        question: 'A very useful tool used during development and debbugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / Bash', 'for loops', 'console.log'],
        answer: 'console.log'
    },
    {
        question: 'Arrays in JavaScript can be used to store ________.',
        choices: ['numebrs and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above'
    },
    {
        question: 'String values must be enclosed within ________ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        answer: 'quotes'
    }
];

