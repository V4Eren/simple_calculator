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

function appendNumber(num) {
    display.textContent += num;
}



numberButtons.forEach((num) => {
    num.addEventListener('click', () => appendNumber(num.textContent))
})