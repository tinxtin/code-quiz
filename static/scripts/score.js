var scoreTableEl = document.querySelector('#highscores');
var clearEl = document.querySelector('#clear');

// displays the high score table by grabbing all the stored items in localstorage.
function loadStorage() {
    for (var i = 0; i < localStorage.length; i++) {
        var li = document.createElement('li');
        li.textContent = localStorage.getItem(i+1)
        scoreTableEl.appendChild(li)
    }
}

// clears the high score table and localstorage.
clearEl.addEventListener('click', () => {
    for (var i = 0; i < localStorage.length; i++) {
        scoreTableEl.removeChild(scoreTableEl.firstChild);
    }
    localStorage.clear();
})

loadStorage();