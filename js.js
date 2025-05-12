let firstNumber;
let operator;
let secondNumber;

const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operator");

numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        firstNumber = button.textContent.trim()
        console.log("first number: " + firstNumber);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        operator = button.textContent.trim();
        console.log("Operator: " + operator);
    })
})

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    console.log("equaling")
})

function add(a, b) {
    return a + b
}

function substract(a, b) {
    return b - a
}

function multiply(a, b) {
    return a * b
}

function  divide(a, b) {
    return  b / a
}

function operate(firstNumber, operator, secondNumber) {

}