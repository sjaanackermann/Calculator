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

function divideByZero() {
  upperString = document.getElementById("flt").innerText = "You can't do that!";
  document.getElementById("slt").innerText = "It is Undefined!";
}

function clearScreen() {
  let string = document.getElementById("flt").innerText;
  if ((string.charAt(0) == 'Y' || string.endsWith('=')) && (btnClicked !== 'ADD' && btnClicked !== 'SUBS' && btnClicked !== 'DIV' && btnClicked !== 'MLTP' && btnClicked !== 'EXP')) {
      document.getElementById("flt").innerText = ''; 
      currentString = '';
      document.getElementById("slt").innerText = currentString + 0;
      resetLet();
  }
}

function normalize(f, val) {
  let m = Math.pow(10, val);
  return parseInt(f * m, 10) / m;
}

function add(numA, numB) {
  let res = numA + numB;
  if (res == 0) {
      lOpNotEqls0 = false;
      return (normalize(numA + numB, 8));
  }
  else {
      return (normalize(numA + numB, 8));
  }
}

function substract(numA, numB) {
  let res = numA - numB;
  if (res == 0) {
      lOpNotEqls0 = false;
      return normalize(res, 7);
  }
  else {
      return normalize(res, 7);
  }
}

function divide(numA, numB) {
  return (normalize(numA / numB, 10));
}

function multiply(numA, numB) {
  let res = numA * numB;
  if (res == 0) {
      lOpNotEqls0 = false;
      return (normalize(numA * numB, 7));
  }
  else {
      return (normalize(numA * numB, 7));
  }
}

function exponent(numA, numB) {
  return (Math.pow(numA, numB));
}

function precise(x) {
  return (Number.parseFloat(x).toPrecision(7));
}