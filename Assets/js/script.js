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

var questionButton = document.querySelector(".questionButton")

var correct = document.getElementById("correct");
var answerResponse = document.getElementById("answerResponse");

// Question Array
var questions = [ 
    {
        questionTitle : "Test1",
        A : "1. test",
        B : "2. test",
        C : "3. test",
        D : "4. test",
        correct : "1. test",
    },
    {
        questionTitle : "Test2",
        A : "1. test",
        B : "2. test",
        C : "3. test",
        D : "4. test",
        correct : "4. test",
    },
    {
        questionTitle : "Test3",
        A : "1. test",
        B : "2. test",
        C : "3. test",
        D : "4. test",
        correct : "4. test",
    },
    {
        questionTitle : "Test4",
        A : "1. test",
        B : "2. test",
        C : "3. test",
        D : "4. test",
        correct : "4. test",
    },
    {
        questionTitle : "Test5",
        A : "1. test",
        B : "2. test",
        C : "3. test",
        D : "4. test",
        correct : "4. test",
    },
    {
        questionTitle : "Test6",
        A : "1. test",
        B : "2. test",
        C : "3. test",
        D : "4. test",
        correct : "4. test",
    },
]
var questionIndex = 0;
//Sets timer to zero if quiz not started
timer.textContent = "00:" + 0 + 0;
//Makes it show starting page
display(0);

//Clock set with standard seconds
function clock() {
    setInterval(function () {
        timeLeft--;
        if (timeLeft >= 10) {
            timer.textContent = '00:' + timeLeft;
        } else {
            timer.textContent = '00:' + 0 + timeLeft 
            document.getElementById("timer").style.backgroundColor = "#e5554e";
        }
    }, 1000)
}
//Changes Display and Starts the Timer
function startQuiz() {
    timeLeft = 30;
    timer.textContent = '01:' + 0 + 0;
    document.getElementById("timer").style.backgroundColor = "#53bb74";
    clock();
    display(1);
        //if (timeLeft === 0 || questions.length === questionIndex) {
        //placeholder till finished screen done
   // }
}
//Question Header and and choices from array
function showQuestions() {
    var show = questions[questionIndex];

    questionTitle.innerHTML = show.questionTitle;

    choice1.innerHTML = show.A;
    choice1.setAttribute("data-answer", show.A);
    choice2.innerHTML = show.B;
    choice4.setAttribute("data-answer", show.B);
    choice3.innerHTML = show.C;
    choice4.setAttribute("data-answer", show.C);
    choice4.innerHTML = show.D;
    choice4.setAttribute("data-answer", show.D);
}

// Answer Events
showQuestions();
choice1.addEventListener("click", function (event) {
    checkAnswer(event);
})
choice2.addEventListener("click", function (event) {
    checkAnswer(event);
})
choice3.addEventListener("click", function (event) {
    checkAnswer(event);
})
choice4.addEventListener("click", function (event) {
    checkAnswer(event);
})

// To see if answer is true or not
function checkAnswer(event) {
    var answer = event.currentTarget.dataset.answer;

    for (let i = 0; i < questions.length; i++) {
        if (answer == questions[questionIndex].correct) {
            answerResponse.textContent = "Correct";
        } 
    }
    if (answer != questions[questionIndex].correct) {
        answerResponse.textContent = "Wrong";
        timeLeft -= 5;
        if (timeLeft < 0) {
         timeLeft = 1;
        }
    }
    if (questions.length === questionIndex+1) {
        return;
    }
    questionIndex++;
    showQuestions();
}

// Click events
startButton.addEventListener("click", function () {
    startQuiz();
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