/* ------------------------------Variables------------------------------ */

let dispText = '0';
let firstOp;
let secondOp;
let opr;
let answer;


/* Calculator Divs */
const calDiv = document.createElement('div');
const topDiv = document.createElement('div');
const display = document.createElement('display');
const displayNums = document.createElement('div');
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
const centsBtn = document.createElement('div');
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
equalBtn.classList.add('btn');

/* HTML Function Button Classes */
acBtn.classList.add('btn', 'funcBtn');
centsBtn.classList.add('btn', 'funcBtn');
decBtn.classList.add('btn', 'funcBtn');
negBtn.classList.add('btn', 'funcBtn');
/* ------------------------------HTML Layout------------------------------ */


/* HTML Calculator Layout */
body.appendChild(calDiv);
calDiv.appendChild(topDiv);
calDiv.appendChild(btmDiv);
topDiv.appendChild(display);
display.appendChild(displayNums);
btmDiv.appendChild(btnDiv);
btnDiv.appendChild(numsDiv);
btnDiv.appendChild(operatorsDiv);

/* HTML Number Buttons Layout */
numsDiv.appendChild(acBtn);
numsDiv.appendChild(negBtn);
numsDiv.appendChild(centsBtn);
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
    btn.style.fontFamily = 'San Francisco';
    btn.style.fontWeight = '900';
    btn.style.fontSize = '20px';;
    btn.addEventListener('mousedown', () => {
        btn.style.backgroundColor = '#845A6B';
    });
});

numBtns.forEach(numBtn => {
    numBtn.style.backgroundColor = '#827875';
    numBtn.addEventListener('mouseup', () => {
        numBtn.style.backgroundColor = '#827875';
    });
    numBtn.addEventListener('mouseout', () => {
        numBtn.style.backgroundColor = '#827875';
    });
});

funcBtns.forEach(funcBtn => {
    funcBtn.style.backgroundColor = '#E55381';
    funcBtn.addEventListener('mouseup', () => {
        funcBtn.style.backgroundColor = '#E55381';
    });
    funcBtn.addEventListener('mouseout', () => {
        funcBtn.style.backgroundColor = '#E55381';
    });
});

opBtns.forEach(opBtn => {
    opBtn.style.backgroundColor = '#EFA9AE';
    opBtn.addEventListener('mouseup', () => {
        opBtn.style.backgroundColor = '#EFA9AE';
    });
    opBtn.addEventListener('mouseout', () => {
        opBtn.style.backgroundColor = '#EFA9AE';
    });
});

equalBtn.style.backgroundColor = '#EFA9AE';

equalBtn.addEventListener('mouseup', () => {
    equalBtn.style.backgroundColor = '#EFA9AE';
});

equalBtn.addEventListener('mouseout', () => {
    equalBtn.style.backgroundColor = '#EFA9AE';
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
topDiv.style.padding = '25px 25px 25px 25px';
topDiv.style.borderRadius = '5px';
topDiv.style.backgroundColor = '#413145';

display.style.display = 'flex';
display.style.minHeight = '90px';
display.style.maxHeight = '90px'
display.style.minWidth = '328px';
display.style.maxWidth = '328px';
display.style.borderStyle = 'solid';
display.style.borderColor = '#190B28';
display.style.borderWidth = '3px'
display.style.backgroundColor = '#827875';
display.style.borderRadius = '5px';

displayNums.style.flexGrow = '1';
displayNums.style.display = 'flex';
displayNums.style.justifyContent = 'flex-end';
displayNums.style.alignItems = 'flex-end';
displayNums.style.fontFamily = 'San Francisco';
displayNums.style.fontSize = '60px';
displayNums.style.marginRight = '10px';
displayNums.style.marginLeft = '10px';

btmDiv.style.backgroundColor = '#413145';
btmDiv.style.flexGrow = '7';
btmDiv.style.borderStyle = 'solid';
btmDiv.style.display = 'flex';
btmDiv.style.justifyContent = 'center';
btmDiv.style.borderRadius = '5px';
btmDiv.style.backgroundColor = '#413145';

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
zeroBtn.textContent
decBtn.style.flex = '1';
decBtn.style.maxWidth = '76px';

/* Individual Button Text */
zeroBtn.textContent = '0';
oneBtn.textContent = '1';
twoBtn.textContent = '2';
threeBtn.textContent = '3';
fourBtn.textContent = '4';
fiveBtn.textContent = '5';
sixBtn.textContent = '6';
sevenBtn.textContent = '7';
eightBtn.textContent = '8';
nineBtn.textContent = '9';
decBtn.textContent = '.';
acBtn.textContent = 'A/C';
negBtn.textContent = '+/-';
centsBtn.textContent = '%';
addBtn.textContent = '+';
subBtn.textContent = '-';
multBtn.textContent = 'x';
divBtn.textContent = '/';
equalBtn.textContent = '=';
displayNums.textContent = dispText;

/* Display Text Content */

/* ------------------------------Functions------------------------------ */

/* Onclick Functions */

numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
        if (dispText.length > 9) {
            dispText = dispText.substring(1) + numBtn.textContent;
        } else if (dispText === '0') {
            dispText = numBtn.textContent;
        } else if (answer != null) {
            dispText = numBtn.textContent;
            answer = null;
        } else if (firstOp != null && secondOp == null) {
            dispText = numBtn.textContent;
            secondOp = numBtn.textContent;
        } else if (firstOp != null && secondOp != null) {
            secondOp += numBtn.textContent;
            dispText = secondOp;
        } else
            dispText += numBtn.textContent;
        displayNums.textContent = dispText;
    });
});

opBtns.forEach(opBtn => {
    opBtn.addEventListener('click', () => {
        if (dispText == '0') {
        } else if (firstOp == null && dispText != null) {
            firstOp = dispText;
            opr = opBtn.textContent;
        } else if (firstOp != null && secondOp != null) {
            dispText = operate(firstOp, secondOp, opr);
            displayNums.textContent = dispText;
            opr = opBtn.textContent
            firstOp = dispText;
            secondOp = null;
        }
    });
});

equalBtn.addEventListener('click', () => {
    if (firstOp == null || secondOp == null) {

    } else if (operate(firstOp, secondOp, opr).length > 10) {
        answer = 'Err.TooLong';
        displayNums.textContent = answer;
        firstOp = null;
        secondOp = null;
    } else if (operate(firstOp, secondOp, opr).length <= 10) {
        answer = operate(firstOp, secondOp, opr);
        displayNums.textContent = answer;
        firstOp = null;
        secondOp = null;
    }
});

acBtn.addEventListener('click', () => {
    dispText = '0';
    answer = null;
    firstOp = null;
    secondOp = null;
    opr = null;
    displayNums.textContent = '0';
});

negBtn.addEventListener('click', () => {
    if (dispText === '0') {
    } else if (dispText != '0' && secondOp != null) {
        displayNums.textContent = -(displayNums.textContent);
        dispText = displayNums.textContent;
        secondOp = dispText
    } else if (dispText != '0') {
        displayNums.textContent = -(displayNums.textContent);
        dispText = displayNums.textContent;
    }
});

centsBtn.addEventListener('click', () => {
    centsRem = displayNums.textContent.replace('.', '');
    if (displayNums.textContent === '0') {
    } else if (displayNums.textContent != '0') {
        if (displayNums.textContent.includes('.')) {
            displayNums.textContent = centsRem;
            dispText = centsRem;
        } else if (displayNums.textContent.includes('.') == false) {
            centsNum = displayNums.textContent.slice(0, -2) + '.' + displayNums.textContent.slice(-2);
            displayNums.textContent = centsNum;
            dispText = centsNum;
        }
    }
});

decBtn.addEventListener('click', () => {
    decInd = displayNums.textContent.indexOf('.');
    decRem = displayNums.textContent.substring(0, decInd);
    if (secondOp != null) {
        if (displayNums.textContent.includes('.')) {
            displayNums.textContent = decRem;
            dispText = decRem;
            secondOp = dispText;
        } else if (displayNums.textContent.includes('.') == false) {
            displayNums.textContent = displayNums.textContent + '.';
            dispText = displayNums.textContent;
            secondOp = dispText;
        }
    } else if (secondOp == null) {
        if (displayNums.textContent.includes('.')) {
            displayNums.textContent = decRem;
            dispText = decRem;
        } else if (displayNums.textContent.includes('.') == false) {
            displayNums.textContent = displayNums.textContent + '.';
            dispText = displayNums.textContent;
        }
    }
});

/* Operator Selection Function for Calculator */
function operate(a, b, operator) {
    switch (operator) {
        case '+': return ('' + add(a, b));
            break;

        case '-': return ('' + subtract(a, b));
            break;

        case '/': return ('' + divide(a, b));
            break;

        case 'x': return ('' + multiply(a, b));
            break;
    }
};



/* Operator Functions */
let add = (a, b) => parseFloat(a) + parseFloat(b);
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

