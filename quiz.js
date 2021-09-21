const quizForm = document.querySelector(".form-quiz");
const submitbtn = document.querySelector("#submit");
const output = document.querySelector("#output");

const correctAnswer = ["90°", "Right Angle"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizForm);
    for (let value of formResult.values()) {
        if (value === correctAnswer[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "Your Score is:" + score;
}

submitbtn.addEventListener("click", calculateScore);
