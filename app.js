const inputs = document.querySelectorAll(".input-triangle")
const isTriangleBtn = document.querySelector("#is-triangle")

function calculateTriangle(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3
    return sum;

}

function isTriangle() {
    sum = calculateTriangle(Number(inputs[0], inputs[1], inputs[2]))
    if (sum === 180) {
        console.log("Yay, Its a triangle")
    } else {
        console.log("No, Its not a triangle")
    }
}

isTriangleBtn.addEventListener("click", isTriangle)