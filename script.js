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

/* Function Buttons */
const acBtn = document.createElement('div');
const negBtn = document.createElement('div');
const remainderBtn = document.createElement('div');
const equalBtn = document.createElement('div');
const decBtn = document.createElement('div');

/* Body and Page Selectors */
const body = document.querySelector('#bod');
const page = document.querySelector('#pg');

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
zeroBtn.classList.add('btn', 'numBtn');
oneBtn.classList.add('btn', 'numBtn');
twoBtn.classList.add('btn', 'numBtn');
threeBtn.classList.add('btn', 'numBtn');
fourBtn.classList.add('btn', 'numBtn');
fiveBtn.classList.add('btn', 'numBtn');
sixBtn.classList.add('btn', 'numBtn');
sevenBtn.classList.add('btn', 'numBtn');
eightBtn.classList.add('btn', 'numBtn');
nineBtn.classList.add('btn', 'numBtn');

/* HTML Operator Button Classes */
addBtn.classList.add('btn', 'opBtn');
subBtn.classList.add('btn', 'opBtn');
multBtn.classList.add('btn', 'opBtn');
divBtn.classList.add('btn', 'opBtn');
equalBtn.classList.add('btn', 'opBtn');

/* HTML Function Button Classes */
acBtn.classList.add('btn', 'funcBtn');
remainderBtn.classList.add('btn', 'funcBtn');
decBtn.classList.add('btn', 'funcBtn');
negBtn.classList.add('btn', 'funcBtn');
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

operatorsDiv.appendChild(divBtn);
operatorsDiv.appendChild(multBtn);
operatorsDiv.appendChild(subBtn);
operatorsDiv.appendChild(addBtn);
operatorsDiv.appendChild(equalBtn);

/* ------------------------------Div Selectors------------------------------ */


/* Calculator Div Selectors */
const calDivs = document.querySelectorAll('.calDivs');

/* Button Div Selectors */
const btns = document.querySelectorAll('.btn');
const numBtns = document.querySelectorAll('.btn.numBtn');
const funcBtns = document.querySelectorAll('.btn.funcBtn');
const opBtns = document.querySelectorAll('.btn.opBtn');


/* ------------------------------Class Styling Functions------------------------------ */

/* All Buttons Styling Function */
btns.forEach(btn => {
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    btn.style.width = '76px';
    btn.style.maxHeight = '65.875px';
    btn.style.minHeight = '65.875px';
    btn.style.borderStyle = 'solid';
    btn.style.borderColor = '#190B28';
    btn.style.borderRadius = '5px';
});

numBtns.forEach(numBtn => {
    numBtn.style.backgroundColor = '#827875';
});

funcBtns.forEach(funcBtn => {
    funcBtn.style.backgroundColor = '#E55381';
});

opBtns.forEach(opBtn => {
    opBtn.style.backgroundColor = '#EFA9AE';
})



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
calDiv.style.backgroundColor = '#413145';

topDiv.style.flexGrow = '1';
topDiv.style.borderStyle = 'solid';
topDiv.style.display = 'flex';
topDiv.style.alignItems = 'center';
topDiv.style.justifyContent = 'center';
topDiv.style.padding = '25px 25px 25px 25px';

display.style.minHeight = '90px';
display.style.maxHeight = '90px'
display.style.minWidth = '324px';
display.style.maxWidth = '324px';
display.style.borderStyle = 'solid';
display.style.borderColor = '#190B28';
display.style.borderWidth = '3px'
display.style.backgroundColor = '#827875';

btmDiv.style.backgroundColor = '#413145';
btmDiv.style.flexGrow = '7';
btmDiv.style.borderStyle = 'solid';
btmDiv.style.display = 'flex';
btmDiv.style.justifyContent = 'center';

btnDiv.style.display = 'flex';
btnDiv.style.margin = '25px 25px 25px 25px'

numsDiv.style.borderStyle = 'solid';
numsDiv.style.borderRadius = '6px';
numsDiv.style.borderColor = '#190B28';
numsDiv.style.backgroundColor = '#190B28';
numsDiv.style.minWidth = '237px';
numsDiv.style.maxWidth = '237px';
numsDiv.style.marginRight = '10px';
numsDiv.style.display = 'flex';
numsDiv.style.flexWrap = 'wrap';
numsDiv.style.alignContent = 'space-between';

operatorsDiv.style.borderStyle = 'solid';
operatorsDiv.style.borderRadius = '6px';
operatorsDiv.style.borderColor = '#190B28';
operatorsDiv.style.backgroundColor = '#190B28';
operatorsDiv.style.minWidth = '79px';
operatorsDiv.style.maxWidth = '79px';
operatorsDiv.style.display = 'flex';
operatorsDiv.style.flexDirection = 'column';
operatorsDiv.style.justifyContent = 'space-between';

/* Individual Button Styling */
zeroBtn.style.flex = '2';
decBtn.style.flex = '1';
decBtn.style.maxWidth = '76px';


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
