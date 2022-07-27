let btnClicked = '';
let currentString = '';
let upperString = '';
let firstSymbol = false;
let leftOperand = '';
let lOpNotEqls0 = true;
let rightOperand = '';
let operation = '';
let result = '';
let zeroFirst = 0;
let decPoint = false;

function resetLet() {
    firstSymbol = false;
    lOpNotEqls0 = true;
    decPoint = false;
    currentString = '';
    upperString = '';
    leftOperand = '';
    rightOperand = '';
    operation = '';
    result = '';
    zeroFirst = 0;
}