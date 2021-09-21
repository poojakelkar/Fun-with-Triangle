const inputs = document.querySelectorAll(".input-triangle");
const isTriangleBtn = document.querySelector("#is-triangle");
const output = document.querySelector("#output");

function calculateTriangle(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
}

function isTriangle() {
    const sum = calculateTriangle(
        Number(inputs[0].value),
        Number(inputs[1].value),
        Number(inputs[2].value)
    );
    if (sum === 180) {
        output.innerText = "Yay, Its a triangle";
    } else {
        output.innerText = "No, Its not a triangle";
    }
}

isTriangleBtn.addEventListener("click", isTriangle);
