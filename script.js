const quiz = [
  {
    question: "What year did the pandemic started?",
    a: "2018",
    b: "2019",
    c: "2020",
    d: "2021",
    correctAnswer: "b",
  },
  {
    question: "Which of the following birds can't fly?",
    a: "chicken",
    b: "humming bird",
    c: "eagle",
    d: "owl",
    correctAnswer: "a",
  },
  {
    question: "What is the most popular programming language in 2021?",
    a: "Java",
    b: "C++",
    c: "Python",
    d: "JavaScript",
    correctAnswer: "d",
  },
  {
    question: "Pila imong grado karon nga sem?",
    a: "1.1",
    b: "2.4",
    c: "1.5",
    d: "5.0",
    correctAnswer: "d",
  },
  {
    question: "Igna salamat master",
    a: "dili ko",
    b: "dili ko ",
    c: "salamat master",
    d: "dili ko",
    correctAnswer: "c",
  },
];

let questionCounter = 0;
let score = 0;
let currentAnswer;

const btnNextContainer = document.querySelector(".btn-next-container");
const currentQuestionEl = document.getElementById("question");
const btnChoices = document.querySelectorAll(".btn-choices");
const btnChoiceA = document.getElementById("a");
const btnChoiceB = document.getElementById("b");
const btnChoiceC = document.getElementById("c");
const btnChoiceD = document.getElementById("d");
const btnNext = document.querySelector(".btn-next");

const quizContainer = document.querySelector(".flex-container");

loadQuestions();

function loadQuestions() {
  let currentQuestion = quiz[questionCounter];
  currentQuestionEl.textContent = currentQuestion.question;
  btnChoiceA.textContent = currentQuestion.a;
  btnChoiceB.textContent = currentQuestion.b;
  btnChoiceC.textContent = currentQuestion.c;
  btnChoiceD.textContent = currentQuestion.d;
  console.log(questionCounter);
}

btnChoices.forEach((btns) => {
  btns.addEventListener("click", (btn) => {
    let selected = btn.currentTarget.id;
    btnChoices.forEach((item) => {
      if (item !== btns) {
        item.classList.remove("selected");
      }
    });
    btns.classList.add("selected");
    currentAnswer = selected;
    console.log(currentAnswer);
  });
});

btnNext.addEventListener("click", () => {
  getAnswer(currentAnswer);
  questionCounter++;

  btnChoices.forEach((btns) => {
    btns.classList.remove("selected");
  });
  if (questionCounter < quiz.length) {
    loadQuestions();
  } else if (questionCounter >= quiz.length) {
    quizContainer.innerHTML = `<h1>Your score is: ${score}`;
    document.querySelector(".btn-next").remove();
    const btnReload = document.createElement("button");
    btnReload.setAttribute("class", "btn-reload");
    btnReload.textContent = "Reload";
    btnNextContainer.appendChild(btnReload);
    btnReload.addEventListener("click", () => {
      location.reload();
    });
  }
});

function getAnswer(answer) {
  if (answer == quiz[questionCounter].correctAnswer) {
    score++;
    currentAnswer = undefined;
    alert("Nice one baby!");
    console.log(`score: ${score}`);
  } else {
    alert("Boo!");
  }
}
