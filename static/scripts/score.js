var scoreTableEl = document.querySelector('#highscores');

for (var i = 0; i < localStorage.length; i++) {
    var li = document.createElement('li');
    li.textContent = localStorage.getItem(i+1)
    scoreTableEl.append(li)
}

