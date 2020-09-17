var startBtn = document.getElementById("start-button");
var startTimer = document.getElementById("timer");
var currentTime = 60;
var gameClock;
var questionWhole = document.getElementById("questionDiv");
var question = document.getElementById("questionText");
var answerBtn = document.getElementById("questionBtn");
var welcomeUser = document.getElementById("welcome");
var questionNum = document.getElementById("questionNum");
var currentIndex = 0;


var questionObject = [{
        questionKey: "What is a useful tool for debugging?",
        choicesKey: ["1. Query Selector", "2. Getatttribute", "3. Alert", "4. Console.log"],
        answerKey: "4. Console.log"
    }, {
        questionKey: "How do you close and array?",
        choicesKey: ["1. Brackets", "2. Parentheses", "3. Period", "4. Dollar Sign"],
        answerKey: "1. Brackets"

    }, {
        questionKey: "When creating a variable, which response does not concern order?",
        choicesKey: ["1. Function", "2. Array", "3. Object", "4. Prompt"],
        answerKey: "3. Object"
    }, {
        questionKey: "What number do indexes start with?",
        choicesKey: ["1. One", "2. Zero", "3. Null", "4. 10"],
        answerKey: "2. Zero"
    }, {
        questionKey: "What is a easy way to store data values?",
        choicesKey: ["1. Prompt", "2. Variables", "3. Padding", "4. Pseudo Code"],
        answerKey: "2. Variables"
    }
];

// create function to add new question and choices
// function to check user choice for correct answer and increase index, and run next question
//// also deduct time for wrong answer, can go inside check answer func
// finish end game func - populate high-score page 
// save high-scores in local storage


startBtn.addEventListener("click", function () {
    console.log("i was clicked")
    welcomeUser.classList.add("hide");
    questionWhole.classList.remove("hide");
    addNextQuestion();
    gameClock = setInterval(runTimer, 1000);
});


function runTimer() {
    currentTime--;
    startTimer.textContent = currentTime;
    if (currentTime <= 0) {
        currentTime = 0;
        startTimer.textContent = currentTime;
        gameEnd();
    }

};


function gameEnd() {
    clearInterval(gameClock);
};

function answerCorrect() {
    console.log("checking answer");

}

function addNextQuestion() {
    question.innerHTML = "";
    answerBtn.innerHTML = "";
    questionNum.textContent = currentIndex + 1;
    question.textContent = questionObject[currentIndex].questionKey;
    for (var i=0; i<questionObject[currentIndex].choicesKey.length;i++){
        var buttonNode = document.createElement("button");
        buttonNode.textContent = questionObject[currentIndex].choicesKey[i];
        buttonNode.setAttribute("class","btn btn-primary my-2");
        buttonNode.setAttribute("value", questionObject[currentIndex].choicesKey[i]);
        buttonNode.onclick = answerCorrect;
        answerBtn.appendChild(buttonNode);

    }
}