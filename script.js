/* ------------------------------Variables------------------------------ */

/* Calculator Divs */
const calDiv = document.createElement('div');
const topDiv = document.createElement('div');
const display = document.createElement('display');
const btmDiv = document.createElement('div');
const btnDiv = document.createElement('div');
const numsDiv = document.createElement('div');
const operatorsDiv = document.createElement('div');

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

/* Clear and Equals Buttons */
const acBtn = document.createElement('div');
const negBtn = document.createElement('div');
const remainderBtn = document.createElement('div');
const equalBtn = document.createElement('div');
const decBtn = document.createElement('div');


/* ------------------------------Selectors------------------------------ */


/* Body and Page Selectors */
const body = document.querySelector('#bod');
const page = document.querySelector('#pg');

/* Calculator Div Selectors */
const calDivs = document.querySelectorAll('.calDivs');

/* Button Div Selectors */
const btns = document.querySelectorAll('.btn');
const numBtns = document.querySelectorAll('.numBtn');


/* ------------------------------IDs and Classes------------------------------ */

/* HTML IDs */
calDiv.setAttribute('id', 'calBox');
topDiv.setAttribute('id', 'dispDiv');
btmDiv.setAttribute('id', 'btnBox');
display.setAttribute('id', 'disp');

/* HTML Div Classes */
calDiv.classList.add('calDivs');
topDiv.classList.add('calDivs');
btmDiv.classList.add('calDivs');

/* HTML Number Button Classes */
zeroBtn.classList.add('numBtn', 'btn');
oneBtn.classList.add('numBtn', 'btn');
twoBtn.classList.add('numBtn', 'btn');
threeBtn.classList.add('numBtn', 'btn');
fourBtn.classList.add('numBtn', 'btn');
fiveBtn.classList.add('numBtn', 'btn');
sixBtn.classList.add('numBtn', 'btn');
sevenBtn.classList.add('numBtn', 'btn');
eightBtn.classList.add('numBtn', 'btn');
nineBtn.classList.add('numBtn', 'btn');

/* HTML Operator Button Classes */
addBtn.classList.add('opBtn', 'btn');
subBtn.classList.add('opBtn', 'btn');
multBtn.classList.add('opBtn', 'btn');
divBtn.classList.add('opBtn', 'btn');

/* HTML Function Button Classes */
acBtn.classList.add('funcBtn', 'btn');
equalBtn.classList.add('funcBtn', 'btn');
remainderBtn.classList.add('funcBtn', 'btn');
decBtn.classList.add('funcBtn', 'btn');

/* ------------------------------Class Styling Functions------------------------------ */


/* calDivs Styling Function */
calDivs.forEach(calDiv => {
    calDiv.style.display = 'flex';
    calDiv.style.alignItems = 'center';
    calDiv.style.justifyContent = 'center';
});

/* All Buttons Styling Function */
btns.forEach(btn => {
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
});

/* Number Buttons Styling Function */
numBtns.forEach(numBtn => {

});


/* ------------------------------Individual Div Styles------------------------------ */


/* Page and Body Styles */
page.style.height = '100%';
body.style.height = '100%';
body.style.width = '100%';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.flexDirection = 'column';

/* Div Styling */
calDiv.style.height = '525px';
calDiv.style.width = '375px';
calDiv.style.display = 'flex';
calDiv.style.flexDirection = 'column';

topDiv.style.flexGrow = '1';
topDiv.style.borderStyle = 'solid';
topDiv.style.display = 'flex';
topDiv.style.alignItems = 'center';
topDiv.style.justifyContent = 'center';
topDiv.style.padding = '0px 25px 0px 25px';

display.style.minHeight = '90px';
display.style.maxHeight = '90px'
display.style.minWidth = '324px';
display.style.maxWidth = '324px';
display.style.borderStyle = 'solid';


btmDiv.style.flexGrow = '7';
btmDiv.style.borderStyle = 'solid';
btmDiv.style.display = 'flex';
btmDiv.style.justifyContent = 'center';

btnDiv.style.display = 'flex';
btnDiv.style.margin = '25px 25px 25px 25px'


numsDiv.style.borderStyle = 'solid';
numsDiv.style.minWidth = '235px';
numsDiv.style.maxWidth = '235px';
numsDiv.style.marginRight = '5px';
numsDiv.style.display = 'flex';

operatorsDiv.style.borderStyle = 'solid';
operatorsDiv.style.minWidth = '79px';
operatorsDiv.style.maxWidth = '79px';
operatorsDiv.style.display = 'flex';
operatorsDiv.style.flexDirection = 'column';


/* ------------------------------HTML Layout------------------------------ */


/* HTML Calculator Layout */
body.appendChild(calDiv);
calDiv.appendChild(topDiv);
calDiv.appendChild(btmDiv);
topDiv.appendChild(display);
btmDiv.appendChild(btnDiv);
btnDiv.appendChild(numsDiv);
btnDiv.appendChild(operatorsDiv);

/* HTML Number Buttons Layout */
numsDiv.appendChild(acBtn);
numsDiv.appendChild(negBtn);
numsDiv.appendChild(remainderBtn);
numsDiv.appendChild(sevenBtn);
numsDiv.appendChild(eightBtn);
numsDiv.appendChild(nineBtn);
numsDiv.appendChild(fourBtn);
numsDiv.appendChild(fiveBtn);
numsDiv.appendChild(sixBtn);
numsDiv.appendChild(oneBtn);
numsDiv.appendChild(twoBtn);
numsDiv.appendChild(threeBtn);
numsDiv.appendChild(zeroBtn);
numsDiv.appendChild(decBtn);


/* ------------------------------Functions------------------------------ */


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
