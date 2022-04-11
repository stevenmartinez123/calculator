//Calls when page refreshed
createCalculator();

//global array to save history of operations 
var operationHistory = new Array(3);

/*-----------------------Creates Calculator--------------*/
function createCalculator() {

    const content = document.querySelector('.content');

    for (let i = 0; i < 20; i++) {
        let calcButtonDivs = document.createElement('div');
        calcButtonDivs.className = 'calcButtonDivs';
        calcButtonDivs.id = 'div-' + `${(i+1)}`;
        content.appendChild(calcButtonDivs);
    }
}

/*-----------------------takes two numbers and returns results depending on operand--------------*/

function operate() {

    let valueOne = operationHistory[0];
    let operand = operationHistory[1];
    let valueTwo = operationHistory[2];

    var result = 0; 

    switch (operand) {

        case '+': result = parseInt(valueOne) + parseInt(valueTwo);
            break;
        case '-': result = parseInt(valueOne) - parseInt(valueTwo);
            break;
        case 'x': result = parseInt(valueOne) * parseInt(valueTwo);
            break;
        case '÷': result =  valueTwo == '0' ? 'NO BRATHA': parseInt(valueOne) / parseInt(valueTwo);
            break; 
        }

    screen.textContent = result.toString();
    operationHistory[0] = typeof(result) == 'number' ? result.toString() : undefined;
    operationHistory[1] = undefined;
    operationHistory[2] = undefined;
}   


/*-----------------------rename Div ID's, add text, and add event listeners--------------*/
//screen
const screen = document.querySelector('#div-1');
screen.id = 'screen';

//plus-minus sign
const plusMinus = document.querySelector('#div-2');
plusMinus.id = 'plusMinus';
plusMinus.textContent = '+ / -';
plusMinus.addEventListener('click', makeNegativeOrPositive);

//percentage 

const percentage = document.querySelector('#div-3');
percentage.id = 'percentage';
percentage.textContent = '%';
percentage.addEventListener('click', makePercentage);

//division 

const division = document.querySelector('#div-4');
division.id = 'division';
division.textContent = '÷';
division.addEventListener('click', operandClicked);

//multiply

const multiply = document.querySelector('#div-5');
multiply.id = 'multiply';
multiply.textContent = 'x';
multiply.addEventListener('click', operandClicked);

//seven

const seven = document.querySelector('#div-6');
seven.id = 'seven';
seven.textContent = '7';
seven.addEventListener('click', displayOnScreen);

//eight
const eight = document.querySelector('#div-7');
eight.id = 'eight';
eight.textContent = '8';
eight.addEventListener('click', displayOnScreen);

//nine
const nine = document.querySelector('#div-8');
nine.id = 'nine';
nine.textContent = '9';
nine.addEventListener('click', displayOnScreen);

//subtract
const subtract = document.querySelector('#div-9');
subtract.id = 'subtract';
subtract.textContent = '-';
subtract.addEventListener('click', operandClicked);


//six
const six = document.querySelector('#div-10');
six.id = 'six';
six.textContent = '6';
six.addEventListener('click', displayOnScreen);

//five
const five = document.querySelector('#div-11');
five.id = 'five';
five.textContent = '5';
five.addEventListener('click', displayOnScreen);

//four
const four = document.querySelector('#div-12');
four.id = 'four';
four.textContent = '4';
four.addEventListener('click', displayOnScreen);

//addition

const addition = document.querySelector('#div-13');
addition.id = 'addition';
addition.textContent = '+';
addition.addEventListener('click', operandClicked);

//three
const three = document.querySelector('#div-14');
three.id = 'three';
three.textContent = '3';
three.addEventListener('click', displayOnScreen);

//two
const two = document.querySelector('#div-15');
two.id = 'two';
two.textContent = '2';
two.addEventListener('click', displayOnScreen);

//one
const one = document.querySelector('#div-16');
one.id = 'one';
one.textContent = '1';
one.addEventListener('click', displayOnScreen);

//equals
const equals = document.querySelector('#div-17');
equals.id = 'equals';
equals.textContent = '=';
equals.addEventListener('click', operate);

//zero
const zero = document.querySelector('#div-18');
zero.id = 'zero';
zero.textContent = '0';
zero.addEventListener('click', displayOnScreen);

//decimal
const decimal = document.querySelector('#div-19');
decimal.id = 'decimal';
decimal.textContent = '.';
decimal.addEventListener('click', addDecimal);


//clear 
const clear = document.querySelector('#div-20');
clear.id = 'clear';
clear.textContent = 'C';
clear.addEventListener('click', clearScreen);

/*------------Displays decimal on screen if none--------------*/

function addDecimal() {
    let screen = document.querySelector('#screen');
    //if still on first param of numbers add no other decmials 
    if (screen.textContent.includes('.') && operationHistory[1] == undefined) {
        return;
    //if still on first param add to text content 
    } else if (screen.textContent.length < 9 && operationHistory[1] == undefined) {
    screen.textContent = screen.textContent.concat(this.textContent);
    //if on second param and nothing yet entered value will be "0."
    } else if (screen.textContent.length < 9 && operationHistory[2] == undefined){
        operationHistory[2] = "0.";
        screen.textContent = "0.";
    //if second param already has decimal return 
    } else if (screen.textContent.length < 9 && screen.textContent.includes('.')) {
        return;
    //else add decimal to second param number
    } else if (screen.textContent.length < 9) {
        operationHistory[2] = screen.textContent.concat(this.textContent);
        screen.textContent = operationHistory[2];
    }
}

/*-----------------------Clears display screen--------------*/
function clearScreen() {
    let screen = document.querySelector('#screen');
    screen.textContent = '';
    operationHistory = new Array(3);
}

/*-----------------------Displays digits on screen--------------*/
function displayOnScreen() {
    let screen = document.querySelector('#screen');   
    let screenLength = screen.textContent.length;
    
    //if the number is zero on screen it will not display multiple zeros
    if (screen.textContent == '0') {
        screen.textContent = '';
    }

    //prevents number overflow
    if (screenLength < 9 && operationHistory[1] == undefined) {
        screen.textContent = screen.textContent.concat(this.textContent);
    } else if (screenLength < 9 && operationHistory[1].length > 0) {

        if (operationHistory[2] == undefined) {
            screen.textContent = "";
            operationHistory[2] = this.textContent;
            screen.textContent = this.textContent;
        } else {
            let addValue = this.textContent;
            let screenValue = screen.textContent;
            operationHistory[2] = screenValue.concat(addValue);
            screen.textContent = operationHistory[2];
        }
    }
    console.table(operationHistory);
}

/*--------makes numbers on screen negative or positive--------------*/

function makeNegativeOrPositive() {

    let screen = document.querySelector('#screen'); 
    let currentNum = screen.textContent;
    //if screen has empty string or 0 or only decimal e.g. '.' or '0.' with no numbers after return nothing 
    if (currentNum == '' || currentNum == '0' || currentNum == '.' || currentNum == '0.')  {
        return;
    //if starts with . e.g. .5 will print 0.5
    } else if(currentNum.startsWith('.')) {
        screen.textContent = ('-' + '0').concat(currentNum);
    //if already negative will turn results positive 
    } else if (currentNum.includes('-')) {
        screen.textContent = screen.textContent.replace('-', ' ').trim();
    //if less than nine digits and negative 
    } else if (currentNum.length < 9) {
        screen.textContent = ('-').concat(currentNum);
    } else if (currentNum.length >= 9) {
        currentNum = ('-').concat(currentNum.substring(0,8));
        screen.textContent = currentNum;
    }
    //second param in operationsHistory updated if updating second param
    if (operationHistory[2] != undefined) {
        operationHistory[2] = screen.textContent;
    }
}

/*--------converts number on screen to a percentage--------------*/

function makePercentage() {
    let screen = document.querySelector('#screen'); 
    let percentage = (parseFloat(screen.textContent) / 100);
    let numOnScreen = percentage.toString();

    if (numOnScreen.includes('e') || numOnScreen == '0' || numOnScreen.length > 9 || screen.textContent == '') {
        return;
    }
    screen.textContent = numOnScreen;

    //second param in operationsHistory updated if updating second param
    if (operationHistory[2] != undefined) {
        operationHistory[2] = screen.textContent;
        console.table(operationHistory);
    }

}

/*--------stores original param and operand in an array-----*/

function operandClicked(operand) {

    if (screen.textContent.length < 1) {
        return;
    }

    if (operationHistory[2] != undefined) {
        operate();
        operationHistory[1] = this.textContent;
        return;
    }
    operationHistory[0] = screen.textContent;
    operationHistory[1] = this.textContent;
    console.table(operationHistory);
}