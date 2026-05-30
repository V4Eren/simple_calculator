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
    if (num2 == 0) return "error";
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
    if (userNum1 === null) {
        userNum1 = num;
        display.textContent = userNum1;
    } else if (userOperation === null){
        userNum1 += num;
        display.textContent = userNum1;
    } else if (userNum2 === null) {
        userNum2 = num;
        display.textContent = userNum2;
    } else {
        userNum2 += num;
        display.textContent = userNum2;
    }
}

function displayResult() {
    if (userNum1 !== null && userNum2 !== null && userOperation !== null) {
        const result = operation(Number(userNum1), Number(userNum2), userOperation);
        if(result === "error") {
            display.textContent = "NaN";
            return;
        }
        display.textContent = String(result).slice(0,9);
        userNum1 = String(result);
        userNum2 = null;
    }
}

numberButtons.forEach((num) => {
    num.addEventListener('click', () => {
        const displayLength = display.textContent.replace('.', '').length;
        if(displayLength >= 9) return;

        if (equalSelected) {
            userNum1 = null;
            userNum2 = null;
            userOperation = null;
            equalSelected = false;
            display.textContent = '';
        }

        if (num.id == "comma") {
            if (userOperation === null) {
                userNum1 = userNum1 === null ? '0.' : 
                                        (!userNum1.includes('.') ? `${userNum1}.` : userNum1);
                display.textContent = userNum1;
            } else {
                userNum2 = userNum2 === null ? '0.' :
                                        (!userNum2.includes('.') ? `${userNum2}.` : userNum2);
                display.textContent = userNum2;
            }
            return;
        }

        appendNumber(num.textContent);
    })
})

operatorButtons.forEach((op) => {
    op.addEventListener('click', (event) => {
        if (userNum1 == null) return;

        if(equalSelected) {
            equalSelected = false;
        }

        if(op.id === "clear") {
            userNum1 = null;
            userNum2 = null;
            userOperation = null;
            display.textContent = "0";
            return;
        }

        if(op.id == "del") {
            if (userNum2 !== null) {
                userNum2 = userNum2.slice(0,-1);
                display.textContent = userNum2 === "" ? "0" : userNum2;
            } else if (userOperation !== null) {
                userOperation = null;
                display.textContent = userNum1;
            } else if (userNum1 !== null) {
                userNum1 = userNum1.slice(0,-1);
                display.textContent = userNum1 === "" ? "0" : userNum1;
            }
            return;
        }

        

        displayResult();
        userOperation = event.target.textContent;
    })
})

eqButton.addEventListener('click', (event) => {
    equalSelected = true;
    displayResult();
    userOperation = null;
})

