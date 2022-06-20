const calDiv = document.createElement('div');
const displayDiv = document.createElement('div');
const display = document.createElement('display');
const btnDiv = document.createElement('div');
const numsDiv = document.createElement('div');
const operatorsDiv = document.createElement('div');
const btns = document.createElement('div');
const body = document.querySelector('#bod')
const page = document.querySelector('#pg')

calDiv.setAttribute('id', 'calBox');
displayDiv.setAttribute('id', 'display');
btnDiv.setAttribute('id', 'btnBox');
display.setAttribute('id', 'disp');

btns.classList.add('btn');
calDiv.classList.add('calDivs');
displayDiv.classList.add('calDivs');
btnDiv.classList.add('calDivs');

page.style.height = '100%';
body.style.height = '100%';
body.style.width = '100%';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.flexDirection = 'column';


const calDivs = document.querySelectorAll('.calDivs');

calDivs.forEach(calDiv => {
    calDiv.style.display = 'flex';
    calDiv.style.alignItems = 'center';
    calDiv.style.justifyContent = 'center';
});

calDiv.style.height = '500px';
calDiv.style.width = '350px';
calDiv.style.display = 'flex';
calDiv.style.flexDirection = 'column';

displayDiv.style.flexGrow = '1';
displayDiv.style.borderStyle = 'solid';
displayDiv.style.display = 'flex';
displayDiv.style.alignItems = 'center';
displayDiv.style.justifyContent = 'center';
displayDiv.style.flexDirection = 'column';



btnDiv.style.flexGrow = '7';
btnDiv.style.borderStyle = 'solid';

display.style.height = '90px';
display.style.width = '325px';
display.style.borderStyle = 'solid';
display.style.flexGrow = '0';





body.appendChild(calDiv);
calDiv.appendChild(displayDiv);
calDiv.appendChild(btnDiv);
displayDiv.appendChild(display);






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