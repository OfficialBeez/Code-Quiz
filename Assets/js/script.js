var startButton = document.getElementById("startButton");
var highscores = document.getElementById("highscores");

var startPage = document.getElementById("startPage");
var questionPage = document.getElementById("questionPage")

timer.textContent = "Time: " + 0;

function startQuiz() {
    timeLeft = 60;
    var interval = setInterval(function () {
        timeLeft--;
        timer.textContent = 'Time : ' + timeLeft;
    }, 1000)
    show(1);
}
startButton.addEventListener("click", function () {
    startQuiz();
    console.log('You have started the quiz');
})
highscores.addEventListener("click", function () {
    console.log('Your Highscores :');
})

function show(index) {
    startPage.style.display = "none";
    questionPage.style.display = "none";
    //scorePage.style.display = "none";
    switch (index) {
        case 0 :
            startPage.style.display = "flex";
            break;
        case 1:
            questionPage.style.display = "block";
            break;
            //case 2:
            //scorePage.style.display = "block";
            //break;
        default:
    }
}