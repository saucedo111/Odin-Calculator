let display = document.querySelector('.display');
let displayValue = '';
let buttons = document.querySelectorAll('button');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero";
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function compute(str) {
    let num1 = '';
    let num2 = '';
    let op = '';
    let flag = false;
    for (let char of str) {
        if (char === '+' || char === '-' || char === '*' || char === '/') {
            op = char;
            flag = true;
        } else {
            if (flag === false) {
                num1 += char;
            } else {
                num2 += char;
            }
        }
    }
    num1 = Number(num1);
    num2 = Number(num2);
    return operate(op, num1, num2);

}

function updateDisplay() {
    display.textContent = displayValue;
}

buttons.forEach((button) => {
    if (button.id !== 'clear' && button.id !== '=') {
        button.addEventListener('click', () => {
            displayValue = displayValue + button.textContent;
            updateDisplay();
        })
    }
    if (button.id === 'clear') {
        button.addEventListener('click', () => {
            displayValue = '';
            updateDisplay();
        })
    }
    if (button.id === '=') {
        button.addEventListener('click', () => {
            displayValue = compute(displayValue);
            updateDisplay();
        })
    }
})

