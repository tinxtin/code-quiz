
var timerEl = document.querySelector('#time');
var questionEl = document.querySelector('#question-title');
var questionContainerEl = document.querySelector('#questions');
var startScreenEl = document.querySelector('#start-screen');
var answerBtnEl = document.querySelector('#choices');
var startEl = document.querySelector('#start');
var feedbackEl = document.querySelector('#feedback');
var endScreenEl = document.querySelector('#end-screen');
var submitBtnEl = document.querySelector('#submit');

var quizQuestions = [
    { 
        num: 1,
        question: 'What keyword is used to create a JavaScript variable?',
        answer: [
            {text: 'variable', correct: false},
            {text: 'const', correct: false},
            {text: 'var', correct: true},
            {text: 'create', correct: false},
        ]
    },
    {
        num: 2,
        question: 'How do you call the function "helloWorld"?',
        answer: [
            {text: 'call helloWorld()', correct: false},
            {text: 'helloWorld()', correct: true},
            {text: 'helloWorld', correct: false},
            {text: 'function helloWorld()', correct: false},
        ]
    },
    { 
        num: 3,
        question: 'What css property is used to change the text color of an element?',
        answer: [
            {text: 'fontcolor', correct: false},
            {text: 'textcolor', correct: false},
            {text: 'none of these', correct: false},
            {text: 'color', correct: true},
        ]
    },
    { 
        num: 4,
        question: 'What HTML tag is used to link a JavaScript file',
        answer: [
            {text: 'script', correct: true},
            {text: 'link', correct: false},
            {text: 'javascript', correct: false},
            {text: 'meta', correct: false},
        ]
    },
    { 
        num: 5,
        question: 'If var x = [], what will "typeof(x)" return?',
        answer: [
            {text: 'array', correct: false},
            {text: 'object', correct: true},
            {text: 'undefined', correct: false},
            {text: 'variable', correct: false},
        ]
    },
    {
        num: 6,
        question: 'Which symbol is used as css selector to select "class" attribute?',
        answer: [
            {text: '#', correct: false},
            {text: '>', correct: false},
            {text: '.', correct: true},
            {text: '[]', correct: false},
        ]
    },
    { 
        num: 7,
        question: 'HTML IDs can only be used once.',
        answer: [
            {text: 'True', correct: true},
            {text: 'False', correct: false}
        ]
    },
    { 
        num: 8,
        question: 'JavaScript localstorage can only store strings.',
        answer: [
            {text: 'True', correct: true},
            {text: 'False', correct: false}
        ]
    },
    { 
        num: 9,
        question: '"DOM" is short for?',
        answer: [
            {text: 'Document Object Model', correct: true},
            {text: 'Document Only Model', correct: false},
            {text: 'None of these', correct: false},
            {text: 'Dominos', correct: false},
        ]
    },
    {
        num: 10,
        question: 'Which method is to used to initially store data in localstorage?',
        answer: [
            {text: 'getItem()', correct: false},
            {text: 'push()', correct: false},
            {text: 'setItem()', correct: true},
            {text: 'set()', correct: false},
        ]
    }
]

var storeQuestion = [];
var correctAns = 0;
var totalTime = 100;
var clearTimeId;

function startQuiz() {
    questionContainerEl.className = '';
    startScreenEl.style.display = 'none';
    setTimer(totalTime);
    getQuestion();
}

function setTimer(time) {
    if (time === 0) {
        clearInterval(clearTimeId);
        timerEl.textContent = 0;
        endQuiz(time);
        return
    }
    timerEl.textContent = time;
    clearTimeId = window.setInterval(() => {
        time--;
        timerEl.textContent = time;
        if (time <= 0) {
            clearInterval(clearTimeId);
            endQuiz(time);
            return;
        }
    }, 1000)
}

function getQuestion() {
    resetState();
    var currQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    if (storeQuestion.length === quizQuestions.length) {
        clearInterval(clearTimeId);
        endQuiz(timerEl.textContent);
    } else if (storeQuestion.includes(currQuestion.num)) {
        getQuestion();
        return;
    } else {
        storeQuestion.push(currQuestion.num);
    }
    questionEl.textContent = currQuestion.question;
    currQuestion.answer.forEach(answer => {
        var button = document.createElement('button')
        button.textContent = answer.text;
        answerBtnEl.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', (e) => {
            var result = selectAns(e);
            showFeedback(result);
            if (!result) {
                var timeDeduction = 10;
                var currTime = parseInt(timerEl.textContent);
                if (currTime <= 10) {
                    currTime -= currTime;
                    clearInterval(clearTimeId);
                } else {
                    currTime -= timeDeduction;
                    clearInterval(clearTimeId);
                }
                setTimer(currTime);
            }
        });
    })
}

function resetState() {
    while (answerBtnEl.firstChild) {   
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    };
}

function selectAns(e) {
    var selectedBtn = e.target;
    var isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        var correctSound = new Audio('./sfx/correct.wav');
        correctSound.play();
        getQuestion();
        return true;
    } else {
        var incorrectSound = new Audio('./sfx/incorrect.wav');
        incorrectSound.play();
        getQuestion();
        return false;
    }
}

function showFeedback(result) {
    feedbackEl.classList.remove('hide');
    var feedback = document.createElement('div');
    if (result) {
        feedback.append('Correct');
    } else {
        feedback.append('Incorrect');
    }
    feedbackEl.appendChild(feedback);
    setTimeout(() => {
        feedbackEl.removeChild(feedbackEl.firstChild);
        feedbackEl.classList.add('hide');
    }, 1000)
}

function endQuiz(score) {
    questionContainerEl.classList.add('hide');
    endScreenEl.classList.remove('hide');
    var finalScore = document.querySelector('#final-score');
    finalScore.textContent = score;

    submitBtnEl.addEventListener('click', () => {
        submitScore(score)
    })
}

function submitScore(score) {
    var initial = document.querySelector('#initials').value;
    var keyNum = localStorage.length + 1
    localStorage.setItem(keyNum, `${initial} - ${score}`)
    window.location.href = '/highscores.html'
}

startEl.addEventListener('click', startQuiz);






