
var timerEl = document.querySelector('#time');

var quizQuestions = [
    { 
        num: 1,
        question: 'What keyword is used to create a JavaScript variable?',
        options: [
            'variable', 'const', 'var', 'create'
        ],
        answers: 'var'
    },
    {
        num: 2,
        question: 'How do you call the function "helloWorld"?',
        options: [
            'call helloWorld()', 'helloWorld()', 'helloWorld', 'function helloWorld()'
        ],
        answers: 'helloWorld()'
    },
    { 
        num: 3,
        question: 'What css property is used to change the text color of an element?',
        options: [
            'fontcolor', 'textcolor', 'none of these', 'color'
        ],
        answers: 'color'
    },
    { 
        num: 4,
        question: 'What HTML tag is used to link a JavaScript file',
        options: [
            'script', 'link', 'javascript', 'meta'
        ],
        answers: 'script'
    },
    { 
        num: 5,
        question: 'If var x = [], what will "typeof(x)" return?',
        options: [
            'array', 'object', 'undefined', 'variable'
        ],
        answers: 'object'
    },
    {
        num: 6,
        question: 'Which symbol is used as css selector to select "class" attribute?',
        options: [
            '#', '>', '.', '[]'
        ],
        answers: '.'
    },
    { 
        num: 7,
        question: 'HTML IDs can only be used once.',
        options: [
            'True', 'False'
        ],
        answers: 'True'
    },
    { 
        num: 8,
        question: 'JavaScript localstorage can only store strings.',
        options: [
            'True', 'False'
        ],
        answers: 'True'
    },
    { 
        num: 9,
        question: '"DOM" is short for?',
        options: [
            'Document Object Model', 'Document Only Model', 'None of these', 'Dominos'
        ],
        answers: 'Document Object Model'
    },
    {
        num: 10,
        question: 'Which method is to used to initially store data in localstorage?',
        options: [
            'getItem()', 'push()', 'setItem()', 'set()'
        ],
        answers: 'setItem()'
    }
]

function setTimer(time) {
    var timeInterval = setInterval(() => {
        time--;
        timerEl.textContent = time;

        if (time === 0) {
            clearInterval(timeInterval);
        }

    }, 10)

}

document.querySelector('#start').addEventListener('click', (event) => {
    var totalTime = 100;
    var numQuestions = 10;
    var score;
    setTimer(totalTime);

})


