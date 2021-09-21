const sides = document.querySelectorAll(".side-input");
const submitbtn = document.querySelector("#calculate");
const output = document.querySelector("#output");

function calculateSumOfSquare(a, b) {
    const sum = a * a + b * b;
    return sum;
}

function calculateHypotenuse() {
    sum = calculateSumOfSquare(Number(sides[0].value), Number(sides[1].value));
    output.innerText = "Hypotenuse of Triangle is: " + sum;
}

submitbtn.addEventListener("click", calculateHypotenuse);
