startButton = document.getElementById("startButton");
highscores = document.getElementById("highscores");

function startQuiz() {
    timeLeft = 60;
    var interval = setInterval(function () {
        timeLeft--;
        timer.textContent = 'Time : ' + timeLeft;
    }, 1000)
}
timer.textContent = "Time: " + 0;
startButton.addEventListener("click", function () {
    startQuiz();
    console.log('You have started the quiz');
})
highscores.addEventListener("click", function () {
    console.log('Your Highscores :');
})