const numberButtons = document.querySelectorAll('.num-button');
const display = document.querySelector('.displayed-value');
const operatorButtons = document.querySelectorAll('.op-button');
const eqButton = document.querySelector('.eq-button');

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operation(num1, num2, operator) {
    switch(operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Invalid operator."
    }
}

let userNum1 = null;
let userNum2 = null;
let userOperation = null;
let equalSelected = false;

function appendNumber(num) {
    if (!userNum1) {
        userNum1 = num;
        display.textContent = userNum1;
    } else if (!userOperation){
        userNum1 += num;
        display.textContent = userNum1;
    } else if (!userNum2) {
        userNum2 = num;
        display.textContent = userNum2;
    } else {
        userNum2 += num;
        display.textContent = userNum2;
    }
}

function displayResult() {
    if (userNum1 && userNum2 && userOperation) {
        const result = operation(Number(userNum1), Number(userNum2), userOperation);
        display.textContent = String(result);
        userNum1 = result;
        userNum2 = null;
    }
}

numberButtons.forEach((num) => {
    num.addEventListener('click', () => {
        appendNumber(num.textContent);

    })
})

operatorButtons.forEach((op) => {
    op.addEventListener('click', (event) => {
        displayResult();
        userOperation = event.target.textContent;
    })
})

eqButton.addEventListener('click', (event) => {
    eqPressed = true;
    displayResult();
    userOperation = null;
})

