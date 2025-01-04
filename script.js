const contaiiner = document.querySelector(".contaiiner");
const questionBox = document.querySelector(".question");
const choicesBox = document.querySelector(".choices");
const nxtbtn = document.querySelector(".nxtbtn");
const score = document.querySelector(".score");
let Totalscore = 0;

const quizQuestions = [
    {
        question: "What is 5 + 3?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "What is 10 - 4?",
        options: ["5", "6", "7", "8"],
        answer: "6"
    },
    {
        question: "What is 7 × 3?",
        options: ["20", "21", "22", "23"],
        answer: "21"
    },
    {
        question: "What is 12 ÷ 4?",
        options: ["2", "3", "4", "5"],
        answer: "3"
    },
    {
        question: "What is the square of 6?",
        options: ["30", "32", "36", "40"],
        answer: "36"
    }
];

function showQuestion() {
    const currentQuestion = quizQuestions[currentQuestionCount];
    questionBox.innerText = currentQuestion.question;
    choicesBox.innerHTML = '';  // Clear previous options
    for (let i = 0; i < currentQuestion.options.length; i++) {
        const childDiv = document.createElement('div');
        childDiv.innerText = currentQuestion.options[i];
        childDiv.className = 'option-div';
        choicesBox.appendChild(childDiv);

        childDiv.addEventListener('click', () => {
            const allOptions = choicesBox.querySelectorAll('.option-div');
            allOptions.forEach(option => {
                if (option !== childDiv) {
                    option.classList.remove('selected');
                }
            });

            if (childDiv.classList.contains('selected')) {
                childDiv.classList.remove('selected');
            } else {
                childDiv.classList.add('selected');
            }
        });
    }
}

let choosenAnswer = () => {
    const selectedOption = document.querySelector(".option-div.selected");
    if (!selectedOption && nxtbtn.innerText === "Next") {
        alert("Please select an answer!");
        return;
    }
    if (selectedOption.innerText == quizQuestions[currentQuestionCount].answer) {
        Totalscore++;
    }
};

let showScore = () => {
    questionBox.innerText = "";
    choicesBox.innerText = "";
    contaiiner.innerHTML = "Thank You";
    score.innerText=`Your total score is ${Totalscore} out of ${quizQuestions.length}`; 
    nxtbtn.innerText = "Play Again";
    nxtbtn.addEventListener('click', () => {
        window.location.reload(); 
    });
};

let currentQuestionCount = 0;
showQuestion();

nxtbtn.addEventListener('click', () => {
    choosenAnswer();
    currentQuestionCount++;
    if (currentQuestionCount < quizQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
});
