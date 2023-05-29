// questions 
const quizData = [
    {
      question: "Question 1:",
      choices: ["fdg", "Padgfdris", "Rodmdfge", "dfgdfg"],
      correctAnswer: 2,
    },
    {
      question: "Question 2: ",
      choices: ["sdf", "sdg", "sdg", "bsbdz"],
      correctAnswer: 1,
    },
    {
      question: "Question 3: ",
      choices: ["dfgdfg", "dfgfg", "hdfh", "dfgdf"],
      correctAnswer: 0,
    },
    {
      question: "Question 4: ",
      choices: ["dfg", "Afgd", "Cufdg", "Ffdge"],
      correctAnswer: 1,
    },
    {
      question: "Question 5: ",
      choices: ["hfdf", "dfg", "ffdgfg", "dfgdfg"],
      correctAnswer: 1,
    },
  ];

  //quiz ( add btn listenrs , **note go in order**)
  const startContainer = document.getElementById("start-container");
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");

  //scoreboard ( **note localstorage display)
  const scoreElement = document.getElementById("score");
  const nameInput = document.getElementById("name");
  const submitScoreBtn = document.getElementById("submit-score-btn");
  const scoreboardElement = document.getElementById("scoreboard");
  const timerElement = document.getElementById("timer");

  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 60; // 60 seconds
  let timer;

// quiz start and timer start ***add count down and minus points **** 
 function showStartPage() {
    startContainer.style.display = "block";
    quizContainer.style.display = "none";
  }
  
  function startQuiz() {
    startContainer.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion();
    startTimer();
  }
// display quiz questions 
function showQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.textContent = currentQuiz.question;
    choicesElement.innerHTML = "";
  
    for (let i = 0; i < currentQuiz.choices.length; i++) {
      const choice = currentQuiz.choices[i];
      const button = document.createElement("button");
      button.textContent = choice;
      button.value = i;
      button.addEventListener("click", selectAnswer);
      choicesElement.appendChild(button);
    }
  }



// variables ( change the 60 sec timer for longer quiz)



// timer

// scoreboard 

// question and answers correct/wrong  , add or remove points 


  // end quiz and score board
