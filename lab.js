const questions = [
    {
        question: "What is the capital of India?",
        options: ["Newdelhi", "London", "Berlin", "Madrid"],
        correctOption: 0
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctOption: 1
    },
    {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
        correctOption: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctOption: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsElements = document.querySelectorAll('.option');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const percentageElement = document.getElementById('percentage');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElements.forEach((element, index) => {
        element.textContent = currentQuestion.options[index];
        element.style.backgroundColor = '#f4f4f4';
    });
}

function selectOption(optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (optionIndex === currentQuestion.correctOption) {
        score++;
        optionsElements[optionIndex].style.backgroundColor = '#d4edda';
    } else {
        optionsElements[optionIndex].style.backgroundColor = '#f8d7da';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionContainer.style.display = 'none';
    nextButton.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.textContent = `Score: ${score}/${questions.length}`;
    const percentage = (score / questions.length) * 100;
    percentageElement.textContent = `Percentage: ${percentage.toFixed(2)}%`;
}

loadQuestion();