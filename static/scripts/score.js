var scoreTableEl = document.querySelector('#highscores');
var clearEl = document.querySelector('#clear');

function loadStorage() {
    for (var i = 0; i < localStorage.length; i++) {
        var li = document.createElement('li');
        li.textContent = localStorage.getItem(i+1)
        scoreTableEl.appendChild(li)
    }
}

clearEl.addEventListener('click', () => {
    for (var i = 0; i < localStorage.length; i++) {
        scoreTableEl.removeChild(scoreTableEl.firstChild);
    }
    localStorage.clear();
})

loadStorage();