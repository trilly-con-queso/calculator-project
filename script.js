function operate(a, b, operator) {
    switch (operator) {
        case '+': return add(a, b);
            break;

        case '-': return subtract(a, b);
            break;

        case '/': return divide(a, b);
            break;

        case '*': return multiply(a, b);
            break;
    }
}


let add = (a, b) => a + b;

let subtract = (a, b) => a - b;

let divide = (a, b) => a / b;

let multiply = (a, b) => a * b;

operate(6, 4, '+');