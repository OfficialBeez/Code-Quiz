// ID Variables
var startButton = document.getElementById("startButton");
var highscores = document.getElementById("highscores");

var startPage = document.getElementById("startPage");

var questionPage = document.getElementById("questionPage");
var questionTitle = document.getElementById("questionTitle");
var choice1 = document.getElementById("A");
var choice2 = document.getElementById("B");
var choice3 = document.getElementById("C");
var choice4 = document.getElementById("D");

// Question Array
var questions = [ 
    {
        "questionTitle" : "Test",
        "A" : "Test",
        "B" : "Test",
        "C" : "Test",
        "D" : "Test",
        "answer" : "C"
    },
    {
        "questionTitle" : "",
        "A" : "",
        "B" : "",
        "C" : "",
        "D" : "",
        "answer" : "C"
    },
    {
        "questionTitle" : "",
        "A" : "",
        "B" : "",
        "C" : "",
        "D" : "",
        "answer" : "C"
    },
    {
        "questionTitle" : "",
        "A" : "",
        "B" : "",
        "C" : "",
        "D" : "",
        "answer" : "C"
    },
    {
        "questionTitle" : "",
        "A" : "",
        "B" : "",
        "C" : "",
        "D" : ""
    },
    {
        "questionTitle" : "",
        "A" : "",
        "B" : "",
        "C" : "",
        "D" : "",
        "answer" : "C"
    },
];
var questionIndex = 0;

//Sets timer to zero if quiz not started
timer.textContent = "Time: " + 0;

//Makes it show starting page
display(0);

//Changes Display and Starts the Timer
function startQuiz() {
    timeLeft = 60;
    var interval = setInterval(function () {
        timeLeft--;
        timer.textContent = 'Time : ' + timeLeft;
        //if (timeLeft === 0 || questions.length === questionIndex) {
            //placeholder till finished screen done
       // }
    }, 1000)
    display(1);
}
//Question Header and HTML built-in choice feature connected to the array
function showQuestions() {
    var show = questions[questionIndex];

    questionTitle.innerHTML = show.questionTitle;
    choice1.innerHTML = show.A;
    choice1.setAttribute = ("data-answer", show.A);
    choice2.innerHTML = show.B;
    choice2.setAttribute = ("data-answer", show.B);
    choice3.innerHTML = show.C;
    choice3.setAttribute = ("data-answer", show.C);
    choice4.innerHTML = show.D;
    choice4.setAttribute = ("data-answer", show.D);

    // Answer Events
choice1.addEventListener("click", function (event) {
    checkAnswer(event);
});
choice2.addEventListener("click", function (event) {
    checkAnswer(event);
});
choice3.addEventListener("click", function (event) {
    checkAnswer(event);
});
choice4.addEventListener("click", function (event) {
    checkAnswer(event);
});
}

// Click events
startButton.addEventListener("click", function () {
    startQuiz();
    showQuestions();
    console.log('You have started the quiz');
});
highscores.addEventListener("click", function () {
    console.log('Your Highscores :');
});



function display(index) {
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