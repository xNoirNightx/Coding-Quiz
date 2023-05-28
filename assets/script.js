// quiz
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const starterBtn = document.querySelector("#starter-btn");
// score
const scoreboardContainer = document.getElementById("scoreboard-container");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");

// variables 
let currentQuestion = 0;
let score = 0;
let timeLeft = 60; 
let playerName = "";


// timer
function updateTimer() {
    timerElement.textContent = `Time: ${timeLeft}`;
  
    if (timeLeft === 0) {
      endQuiz();
    } else {
      timeLeft--;
    }
  }

// scoreboard 
nameForm.addEventListener("submit", function(event) {
    event.preventDefault();
    playerName = nameInput.value;
    addToScoreboard(playerName, score);
    nameForm.reset();
    scoreboardContainer.style.display = "none";
  });


// questions 
function displayQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";
}
    {
        q:"what colour is the sky?",
        a: ["blue","yellow","green","red"],
        c: "blue"
    },{
        q:"what colour is the sun?",
        a: ["blue","yellow","white","red"],
        c: "white"
    },{
        q:"is javascript really dumb",
        a: ["yes","no","maybe","duh"],
        c: "duh"
    },{
        q:"im out of questions for filler",
        a: ["one","two","three","four"],
        c: "one"
    },{
        q:"i could have just copied the same one 5 times i know",
        a: ["coral","is","very","tired"],
        c: "coral"
    }


function displayQuestions(){
    const h1El= document.createElement("h1")
    h1El.textContent= questions[0].q
    container.append(h1El)
    for(let i=0 ; i < questions[0].a.length; i++){
        const btn= document.createElement("button")
        btn.textContent= questions[0].a[i]
        container.append(btn)   
    }
}















