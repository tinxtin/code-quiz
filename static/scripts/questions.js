
var timerEl = document.querySelector('#time');
var questionEl = document.querySelector('#question-title');
var questionContainerEl = document.querySelector('#questions');
var startScreenEle = document.querySelector('#start-screen');
var choicesEl = document.querySelector('#choices');
var startEl = document.querySelector('#start');

var quizQuestions = [
    { 
        num: 1,
        question: 'What keyword is used to create a JavaScript variable?',
        options: [
            'variable', 'const', 'var', 'create'
        ],
        answer: 'var'
    },
    {
        num: 2,
        question: 'How do you call the function "helloWorld"?',
        options: [
            'call helloWorld()', 'helloWorld()', 'helloWorld', 'function helloWorld()'
        ],
        answer: 'helloWorld()'
    },
    { 
        num: 3,
        question: 'What css property is used to change the text color of an element?',
        options: [
            'fontcolor', 'textcolor', 'none of these', 'color'
        ],
        answer: 'color'
    },
    { 
        num: 4,
        question: 'What HTML tag is used to link a JavaScript file',
        options: [
            'script', 'link', 'javascript', 'meta'
        ],
        answer: 'script'
    },
    { 
        num: 5,
        question: 'If var x = [], what will "typeof(x)" return?',
        options: [
            'array', 'object', 'undefined', 'variable'
        ],
        answer: 'object'
    },
    {
        num: 6,
        question: 'Which symbol is used as css selector to select "class" attribute?',
        options: [
            '#', '>', '.', '[]'
        ],
        answer: '.'
    },
    { 
        num: 7,
        question: 'HTML IDs can only be used once.',
        options: [
            'True', 'False'
        ],
        answer: 'True'
    },
    { 
        num: 8,
        question: 'JavaScript localstorage can only store strings.',
        options: [
            'True', 'False'
        ],
        answer: 'True'
    },
    { 
        num: 9,
        question: '"DOM" is short for?',
        options: [
            'Document Object Model', 'Document Only Model', 'None of these', 'Dominos'
        ],
        answer: 'Document Object Model'
    },
    {
        num: 10,
        question: 'Which method is to used to initially store data in localstorage?',
        options: [
            'getItem()', 'push()', 'setItem()', 'set()'
        ],
        answer: 'setItem()'
    }
]
var storeQuestion = [];
var totalTime = 100;


function setTimer(time) {
    var timeInterval = setInterval(() => {
        time--;
        timerEl.textContent = `${time} seconds`;
        if (time === 0) {
            clearInterval(timeInterval);
        }
    }, 1000)
}

function getQuestions() {
    var questionObj = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    storeQuestion.push(questionObj.num);
    questionEl.textContent = questionObj.question;

    for (var i = 0; i < questionObj.options.length; i++) {
        var el = document.createElement('button')
        el.setAttribute('data-index', i);
        el.textContent = questionObj.options[i];
        choicesEl.append(el);
    }

    return questionObj;
}

startEl.addEventListener('click', () => {
    questionContainerEl.className = '';
    startScreenEle.style.display = 'none';

    setTimer(totalTime);
    
    getQuestions();
})




