let display = document.querySelector('.display');
let displayValue = '';
let buttons = document.querySelectorAll('button');
let num1 = '';
let num2 = '';
let operator = '';

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
        let x = document.querySelector('#clear');
        x.click();
        alert("You can't divide by zero!");
        return ' ';

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

function helper(x) {
    if (num1 !== "") {
        if (num2 !== "" && operator !== "") {
            displayValue = operate(operator, Number(num1), Number(num2));
            num1 = displayValue;
            num2 = '';
            operator = x;
            displayValue += x;
        } else {
            operator = x;
            displayValue += x;
        }
    }
    updateDisplay();
}

function compute(e) {
    switch (e.target.id) {
        case 'clear':
            displayValue = '';
            num1 = '';
            num2 = '';
            operator = '';
            updateDisplay();
            break;

        case '=':
            if (num1 !== '' && num2 !== '' && operator !== '') {
                displayValue = operate(operator, Number(num1), Number(num2));
                num1 = displayValue;
                num2 = '';
                operator = '';
            }
            updateDisplay();
            break;

        case '+':
            helper('+');
            break;

        case '-':
            helper('-');
            break;

        case '*':
            helper('*');
            break;

        case '/':
            helper('/');
            break;

        default:
            if (operator === '') {
                num1 += e.target.id;
            } else {
                num2 += e.target.id;
            }
            displayValue += e.target.id;
            updateDisplay();




    }

}

function updateDisplay() {
    display.textContent = displayValue;
}

function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b  = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

buttons.forEach((button) => {
    button.style.backgroundColor = randomRGB();
    button.addEventListener('click', (e) => {
        compute(e);
    })
})



