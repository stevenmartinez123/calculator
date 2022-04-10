
/*-----------------------Calls when page refreshed--------------*/
createCalculator();

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

/*-----------------------Populate Divs and Buttons--------------*/
//screen
const screen = document.querySelector('#div-1');
screen.id = 'screen';

//plus-minus sign
const plusMinus = document.querySelector('#div-2');
plusMinus.id = 'plusMinus';
plusMinus.textContent = '+ / -';

//percentage 

const percentage = document.querySelector('#div-3');
percentage.id = 'percentage';
percentage.textContent = '%';

//division 

const division = document.querySelector('#div-4');
division.id = 'division';
division.textContent = '÷';

//multiply

const multiply = document.querySelector('#div-5');
multiply.id = 'multiply';
multiply.textContent = 'x';

//seven

const seven = document.querySelector('#div-6');
seven.id = 'seven';
seven.textContent = '7';
//seven.addEventListener('click', test, false);

//eight
const eight = document.querySelector('#div-7');
eight.id = 'eight';
eight.textContent = '8';

//nine
const nine = document.querySelector('#div-8');
nine.id = 'nine';
nine.textContent = '9';

//subtract
const subtract = document.querySelector('#div-9');
subtract.id = 'subtract';
subtract.textContent = '-';

//six
const six = document.querySelector('#div-10');
six.id = 'six';
six.textContent = '6';

//five
const five = document.querySelector('#div-11');
five.id = 'five';
five.textContent = '5';

//four
const four = document.querySelector('#div-12');
four.id = 'four';
four.textContent = '4';

//addition

const addition = document.querySelector('#div-13');
addition.id = 'addition';
addition.textContent = '+';

//three
const three = document.querySelector('#div-14');
three.id = 'three';
three.textContent = '3';

//two
const two = document.querySelector('#div-15');
two.id = 'two';
two.textContent = '2';

//one
const one = document.querySelector('#div-16');
one.id = 'one';
one.textContent = '1';

//equals
const equals = document.querySelector('#div-17');
equals.id = 'equals';
equals.textContent = '=';

//zero
const zero = document.querySelector('#div-18');
zero.id = 'zero';
zero.textContent = '0';

//decimal
const decimal = document.querySelector('#div-19');
decimal.id = 'decimal';
decimal.textContent = '.';


//clear 
const clear = document.querySelector('#div-20');
clear.id = 'clear';
clear.textContent = 'C';