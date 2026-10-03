// Create floating hearts effect
function createHearts() {
    const heart = document.createElement('div');
    heart.classList.add('float-heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random() * 95 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHearts, 300);

var noClickCount = 0;

// Moves the NO button (and message) to a random spot that stays on screen
function moveNoButton(btn, showMessage) {
    var maxX = window.innerWidth - btn.offsetWidth - 10;
    var maxY = window.innerHeight - btn.offsetHeight - 60;
    var x = Math.max(5, Math.random() * maxX);
    var y = Math.max(5, Math.random() * maxY);

    btn.style.position = 'fixed';
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';

    if (showMessage) {
        var msg = document.getElementById('message');
        msg.innerText = 'Are you sure?';
        msg.style.position = 'fixed';
        msg.style.left = Math.min(x, window.innerWidth - 160) + 'px';
        msg.style.top = (y + btn.offsetHeight + 5) + 'px';
    }
}

document.getElementById('noButton').addEventListener('click', function() { //NOOOOO button
    noClickCount++;
    var yes = document.getElementById('yesButton');

    if (noClickCount == 1) {
        yes.style.fontSize = 'min(30px, 8vw)';
    } else if (noClickCount == 2) {
        this.style.fontSize = '10px';
        yes.style.fontSize = 'min(40px, 10vw)';
    } else if (noClickCount == 3) {
        yes.style.fontSize = 'min(90px, 20vw)';
        this.style.fontSize = '7px';
    } else if (noClickCount >= 4 && noClickCount < 10) {
        moveNoButton(this, false);
    } else if (noClickCount >= 10 && noClickCount < 15) {
        moveNoButton(this, true);
    } else if (noClickCount == 15) {
        document.getElementById('message').innerText = 'Oh No! You broke the button :c';
        this.disabled = true;
        this.style.color = 'grey';
    }
});

document.getElementById('yesButton').addEventListener('click', function() { //YESSSS button
    var question = document.getElementById('question');
    question.innerText = 'Is that true ba?\n so pwede na kitang ligawan?\n (Jejemon naman)';
    question.style.fontFamily = 'Arial, sans-serif';

    var heartSize = Math.min(100, window.innerWidth * 0.12);
    for (var i = 0; i < 100; i++) {
        var heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * (window.innerWidth - heartSize) + 'px';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // between 3 and 5 secs
        heart.style.animationDelay = Math.random() * 2 + 's';        // between 0 and 2 secs
        document.body.appendChild(heart);
    }
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';
    document.getElementById('message').style.display = 'none';
});