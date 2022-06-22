/* Divs */
const calDiv = document.createElement('div');
const displayDiv = document.createElement('div');
const display = document.createElement('display');
const btnDiv = document.createElement('div');
const numsDiv = document.createElement('div');
const operatorsDiv = document.createElement('div');

const btns = document.createElement('div');

/* Operator Buttons */
const addBtn = document.createElement('div');
const subBtn = document.createElement('div');
const multBtn = document.createElement('div');
const divBtn = document.createElement('div');

/* Number Buttons */
const zeroBtn = document.createElement('div');
const oneBtn = document.createElement('div');
const twoBtn = document.createElement('div');
const threeBtn = document.createElement('div');
const fourBtn = document.createElement('div');
const fiveBtn = document.createElement('div');
const sixBtn = document.createElement('div');
const sevenBtn = document.createElement('div');
const eightBtn = document.createElement('div');
const nineBtn = document.createElement('div');

/* Clear and Equals Function Buttons */
const acBtn = document.createElement('div');
const equalBtn = document.createElement('div');

/* Body and Page Selectors */
const body = document.querySelector('#bod');
const page = document.querySelector('#pg');

/* Div Selectors */
const calDivs = document.querySelectorAll('.calDivs');

/* HTML IDs */
calDiv.setAttribute('id', 'calBox');
displayDiv.setAttribute('id', 'dispDiv');
btnDiv.setAttribute('id', 'btnBox');
display.setAttribute('id', 'disp');

/* HTML Classes */
btns.classList.add('btn');
calDiv.classList.add('calDivs');
displayDiv.classList.add('calDivs');
btnDiv.classList.add('calDivs');

/* Page and Body Styles */
page.style.height = '100%';
body.style.height = '100%';
body.style.width = '100%';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.flexDirection = 'column';



/* calDivs Class Styling */
calDivs.forEach(calDiv => {
    calDiv.style.display = 'flex';
    calDiv.style.alignItems = 'center';
    calDiv.style.justifyContent = 'center';
});

/* Div Styling */
calDiv.style.height = '500px';
calDiv.style.width = '350px';
calDiv.style.display = 'flex';
calDiv.style.flexDirection = 'column';

displayDiv.style.flexGrow = '1';
displayDiv.style.borderStyle = 'solid';
displayDiv.style.display = 'flex';
displayDiv.style.alignItems = 'center';
displayDiv.style.justifyContent = 'center';
displayDiv.style.padding = '0px 25px 0px 25px';

display.style.height = '90px';
display.style.width = '325px';
display.style.borderStyle = 'solid';
display.style.flexGrow = '0';
display.style.flexShrink = '1';

btnDiv.style.flexGrow = '7';
btnDiv.style.borderStyle = 'solid';
btnDiv.style.display = 'flex';
btnDiv.style.flexDirection = 'colum';

numsDiv.style.borderStyle = 'solid';
numsDiv.style.flex = '2.5';
numsDiv.style.margin = '25px';
numsDiv.style.display = 'flex';
numsDiv.style.flexDirection = 'column';

operatorsDiv.style.borderStyle = 'solid';
operatorsDiv.style.flex = '1';
operatorsDiv.style.margin = '25px 25px 25px 0px'
operatorsDiv.style.display = 'flex';
operatorsDiv.style.flexWrap = 'true';

/* HTML Layout */
body.appendChild(calDiv);
calDiv.appendChild(displayDiv);
calDiv.appendChild(btnDiv);
displayDiv.appendChild(display);
btnBox.appendChild(numsDiv);
btnBox.appendChild(operatorsDiv);





/* Operator Selection Function for Calculator */
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
};

/* Operator Functions */
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;
