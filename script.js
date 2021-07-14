const quiz = [
  {
    question: "In 1768, Captain James Cook set out to explore which ocean?",
    a: "Pacific Ocean",
    b: "Atlantic Ocean",
    c: "Indian Ocean",
    d: "Arctic Ocean",
    correctAnswer: "a",
  },
  {
    question: "What is actually electricity?",
    a: "A flow of water",
    b: "A flow of air",
    c: "A flow of electrons",
    d: "A flow of atoms",
    correctAnswer: "c",
  },
  {
    question: "Which of the following is not an international organisation?",
    a: "FIFA",
    b: "NATO",
    c: "ASEAN",
    d: "FBI",
    correctAnswer: "d",
  },
  {
    question: "Which of the following disorders is the fear of being alone?",
    a: "Agoraphobia",
    b: "Aerophobia",
    c: "Acrophobia",
    d: "Arachnophobia",
    correctAnswer: "a",
  },
  {
    question:
      "Which of the following is a song by the German heavy metal band “Scorpions”?",
    a: "Stairway to Heaven",
    b: "Wind of Change",
    c: "Don’t Stop Me Now",
    d: "Hey Jude",
    correctAnswer: "b",
  },
  {
    question: "What is the speed of sound?",
    a: "120 km/h",
    b: "1,200 km/h",
    c: "400 km/h",
    d: "700 km/h",
    correctAnswer: "b",
  },
  {
    question: "Which is the easiest way to tell the age of many trees?",
    a: "To measure the width of the tree",
    b: "To count the rings on the trunk",
    c: "To count the number of leaves",
    d: "To measure the height of the tree",
    correctAnswer: "b",
  },
  {
    question: "What do we call a newly hatched butterfly?",
    a: "A moth",
    b: "A butter",
    c: "A caterpillar",
    d: "A chrysalis",
    correctAnswer: "c",
  },
  {
    question: "In total, how many novels were written by the Bronte sisters?",
    a: "4",
    b: "5",
    c: "6",
    d: "7",
    correctAnswer: "d",
  },
  {
    question: "Which did Viking people use as money?",
    a: "Rune stones",
    b: "Jewellery",
    c: "Seal skins",
    d: "Wool",
    correctAnswer: "b",
  },
  {
    question:
      "What was the first country to use tanks in combat during World War I?",
    a: "France",
    b: "Japan",
    c: "Britain",
    d: "Germany",
    correctAnswer: "c",
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
    question: "What is the main component of the sun?",
    a: "Liquid lava",
    b: "Gas",
    c: "Molten iron",
    d: "Rock",
    correctAnswer: "b",
  },
  {
    question: "Goulash is a type of beef soup in which country?",
    a: "Hungary",
    b: "Czech Republic",
    c: "Slovakia",
    d: "Ireland",
    correctAnswer: "a",
  },
  {
    question: "Which two months are named after Emperors of the Roman Empire?",
    a: "January and February",
    b: "March and April",
    c: "May and June",
    d: "July and August",
    correctAnswer: "d",
  },
  {
    question: "Which of the following animals can run the fastest?",
    a: "Cheetah",
    b: "Leopard",
    c: "Tiger",
    d: "Lion",
    correctAnswer: "a",
  },
  {
    question: "Where did the powers of Spiderman come from?",
    a: "He was born with them",
    b: "He was bitten by a radioactive spider",
    c: "He went through a scientific experiment",
    d: "He woke up with them after a dream",
    correctAnswer: "b",
  },
  {
    question:
      "What is the most points that a player can score with a single throw in darts?",
    a: "20",
    b: "40",
    c: "60",
    d: "80",
    correctAnswer: "c",
  },
  {
    question:
      "In the United States, football is called soccer. So what is American football called in the United Kingdom?",
    a: "Rugby",
    b: "American football",
    c: "Handball",
    d: "Combball",
    correctAnswer: "b",
  },
  {
    question:
      "Which of the following actors was the first one to play James Bond?",
    a: "Timothy Dalton",
    b: "Roger Moore",
    c: "Sean Connery",
    d: "George Lazenby",
    correctAnswer: "c",
  },
  {
    question: "Which of the following songs was the top-selling hit in 2019?",
    a: "Someone You Loved",
    b: "Old Town Road",
    c: "I Don’t Care",
    d: "Bad Guy",
    correctAnswer: "a",
  },
  {
    question: "In which country is Transylvania?",
    a: "Bulgaria",
    b: "Romania",
    c: "Croatia",
    d: "Serbia",
    correctAnswer: "b",
  },
  {
    question:
      "The phrase: ”I think, therefore I am” was coined by which philosopher?",
    a: "Socrates",
    b: "Plato",
    c: "Aristotle",
    d: "Descartes",
    correctAnswer: "d",
  },
  {
    question:
      "In the series “Game of Thrones”, Winterfell is the ancestral home of which family?",
    a: "The Lannisters",
    b: "The Starks",
    c: "The Tully’s",
    d: "The Targaryens",
    correctAnswer: "b",
  },
  {
    question: "Who is known as the Patron Saint of Spain?",
    a: "St Patrick",
    b: "St Benedict",
    c: "St James",
    d: "St John",
    correctAnswer: "",
  },
  {
    question: "What does the term “SOS” comm",
    a: "Save Our Sheep",
    b: "Save Our Ship",
    c: "Save Our Seal",
    d: "Save Our Souls",
    correctAnswer: "d",
  },
  {
    question: "Which company is known for publishing the Mario video game?",
    a: "Xbox",
    b: "Nintendo",
    c: "SEGA",
    d: "Electronic Arts",
    correctAnswer: "b",
  },
  {
    question:
      "We often use sodium bicarbonate in the kitchen. What is its other name?",
    a: "Vinegar",
    b: "Sugar",
    c: "Salt",
    d: "Baking soda",
    correctAnswer: "d",
  },
  {
    question: "Which was the first film by Disney to be produced in colour?",
    a: "Toy Story",
    b: "Sleeping Beauty",
    c: "Snow White and the Seven Dwarfs",
    d: "Cinderella",
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
    quizContainer.innerHTML = `<h1>Your score is: ${score} / ${quiz.length}`;
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
  let correctLetter = quiz[questionCounter].correctAnswer;
  if (answer == correctLetter) {
    score++;
    currentAnswer = undefined;
    alert("Nice one baby!");
    console.log(`score: ${score}`);
  } else {
    console.log(correctLetter);
    alert(
      `Boo! The Correct answer is "${quiz[questionCounter][correctLetter]}"`
    );
  }
}
