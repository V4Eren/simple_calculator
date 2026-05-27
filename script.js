const numberButtons = document.querySelectorAll('.num-button');
const display = document.querySelector('.displayed-value')

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

numberButtons.forEach((num) => {
    num.addEventListener('click', () => {
        appendNumber(num.textContent);

    })
})