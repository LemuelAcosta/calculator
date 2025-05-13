let firstNumber = '';
let operator = '';
let secondNumber = '';
let formula = '';

const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    'x': (a, b) => a * b,
    '/': (a, b) => b !== 0 ? a / b : 'Error: Divide by zero',
}

const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operator");
const formulaDisplay = document.querySelector(".formula")
const resultDisplay = document.querySelector(".result")

numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        let key = button.textContent.trim();
        if(operator == '') {
            firstNumber = firstNumber + key;
        }else {
            secondNumber = secondNumber + key;
        }

        formulaDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`
        resultDisplay.textContent = ``
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        operator = button.textContent.trim();

        formulaDisplay.textContent = `${firstNumber} ${operator} ${secondNumber}`
    })
})

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    resultDisplay.textContent = `${operate(firstNumber, operator, secondNumber)}`
    firstNumber = '';
    operator = '';
    secondNumber = '';

});

const ac = document.querySelector('#ac');
ac.addEventListener("click", (e) => {
    formulaDisplay.textContent = '';
    resultDisplay.textContent = '';

    firstNumber = '';
    operator = '';
    secondNumber = '';
})

function displayFormula() {
    let number;
    if(firstNumber != '') {
        number = firstNumber;
    }else {
        number = secondNumber;
    }
    display.textContent = display.textContent + ` ${number}`
}

function operate(firstNumber, operator, secondNumber) {
    let result;
    if(operators[operator]) {
        result = operators[operator](parseInt(firstNumber), parseInt(secondNumber))
    }

    return result;
}


