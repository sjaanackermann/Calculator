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
  if ((string.charAt(0) == 'Y' || string.endsWith('=')) && (btnClicked !== 'ADD' && btnClicked !== 'SUBS' && btnClicked !== 'DIV' && btnClicked !== 'MLTP')) {
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

function operate(operand, numA, numB) {
  let answer = 0;
  switch (operand) {
      case 'ADD':
          answer = add(numA, numB);
          break;
      case 'SUBS':
          answer = substract(numA, numB);
          break;
      case 'DIV':
          answer = divide(numA, numB);
          break;
      case 'MLTP':
          answer = multiply(numA, numB);
          break;
  }
  return answer;
}

function btnPressed() {
  let buttons = [];
  buttons = document.querySelectorAll('.calc-btn');
  buttons.forEach(section => {
      section.addEventListener('click', function () {
          btnClicked = section.dataset.value;
          switch (btnClicked) {
              case '.':
                  clearScreen();
                  if (firstSymbol === false) {    
                      currentString = document.getElementById("slt").innerText = 0 + btnClicked;
                      firstSymbol = true;
                      decPoint = true;
                      break;
                  }
                  else if ((currentString.length < 8) && (decPoint === false) && (firstSymbol === true)) {
                      if (zeroFirst == 1) { 
                          currentString = document.getElementById("slt").innerText = 0 + btnClicked;
                          decPoint = true;
                          break;
                      }
                      else {
                          currentString = document.getElementById("slt").innerText = currentString + btnClicked;
                          decPoint = true;   
                          firstSymbol = true;
                          break;
                      }
                  }
                  else {  
                      document.getElementById("slt").innerText = currentString;
                      break;
                  }
              case '1':
              case '2':
              case '3':
              case '4':
              case '5':
              case '6':
              case '7':
              case '8':
              case '9':
              case '0':
                  clearScreen();
                  if (((currentString == '') || (currentString.charAt(0) == '0')) && (btnClicked == '0') && currentString.length <= 1) {
                      if (btnClicked == '0') { 
                          zeroFirst = 1;
                          firstSymbol = true;
                          currentString = document.getElementById("slt").innerText = btnClicked; 
                          break;  
                      }
                      else { 
                          document.getElementById("slt").innerText = btnClicked;
                          zeroFirst = 0; 
                          firstSymbol = true;
                          break;
                      }
                  }
                  else {
                      if (currentString.length < 8 && (decPoint === false)) {
                          if ((currentString.charAt(0) == 0) && (currentString.length == 1)) {
                              currentString = document.getElementById("slt").innerText = btnClicked;
                              firstSymbol = true;
                              zeroFirst = 0;
                              break;
                          }
                          else {
                              currentString = document.getElementById("slt").innerText = currentString + btnClicked;
                              firstSymbol = true;
                              zeroFirst = 0;
                              break;
                          }
                      }
                      else {
                          if ((btnClicked == '.') && (currentString.length < 8)) {
                              document.getElementById("slt").innerText = currentString;
                              break;
                          }
                          else if (currentString.length < 8) {
                              currentString = document.getElementById("slt").innerText = currentString + btnClicked;
                              break;
                          }
                          break;
                      }
                  }
              case 'AC':
                  currentString = '';
                  document.getElementById("slt").innerText = currentString + 0;
                  document.getElementById("flt").innerText = '';
                  resetLet();
                  break;
              case 'BKSP':
                  clearScreen();
                  let l = currentString.length;
                  if (l === 0) {  
                      currentString = '';
                      break;
                  }
                  else { 
                      if (currentString.charAt(l - 1) == '.') {     
                          currentString = currentString.slice(0, (l - 1));
                          document.getElementById("slt").innerText = currentString;
                          decPoint = false;
                          l = currentString.length;
                          if (currentString.charAt(1) == '0' && currentString.charAt(0) == '-') {
                              decPoint = false; 
                              currentString = '';
                              firstSymbol = false;
                              zeroFirst = 0;
                              document.getElementById("slt").innerText = '0';
                              break;
                          }
                          break;
                      }
                      if ((currentString.length == 1) || (currentString.length == 2 && currentString.charAt(0) == '-')) {
                          currentString = ''; 
                          document.getElementById("slt").innerText = 0;
                          firstSymbol = false;
                          decPoint = false;
                          l = currentString.length;
                          zeroFirst = 0;
                          break;
                      }
                      if (currentString.charAt(0) == 0 && currentString.length == 1) {
                          currentString = '';
                          firstSymbol = false;
                          decPoint = false;
                          document.getElementById("slt").innerText = 0;
                          break;
                      }
                      currentString = currentString.slice(0, (l - 1));
                      document.getElementById("slt").innerText = currentString;
                      l = currentString.length;
                      break;
                  }
              case 'ADD':
                  clearScreen();
                  if (leftOperand === '' && lOpNotEqls0) {
                      upperString = document.getElementById("flt").innerText = currentString + ' +';
                      leftOperand = Number(currentString);
                      operation = 'ADD';
                      currentString = '';
                      firstSymbol = false;
                      decPoint = false;
                      zeroFirst = 0;
                      break;
                  }
                  else if ((leftOperand !== '') && (rightOperand === '')) {
                      if (currentString === '') {
                          upperString = document.getElementById("flt").innerText = result + ' +';
                          operation = 'ADD';
                          break;
                      }
                      rightOperand = Number(currentString);
                      if (rightOperand === 0 && operation === 'DIV') {
                          divideByZero();
                          break;
                      }
                      else {
                          leftOperand = Number(leftOperand);

                          result = operate(operation, leftOperand, rightOperand);
                          operation = 'ADD';
                          upperString = document.getElementById("flt").innerText = result + ' +';
                          leftOperand = Math.round(result);
                          if (result.toString().length > 8) {
                              result = Math.round(result.toExponential());
                          }
                          document.getElementById("slt").innerText = result;
                          rightOperand = '';
                          currentString = '';
                          firstSymbol = false;
                          decPoint = false;
                          zeroFirst = 0;
                          break;
                      }
                  }
              case 'SUBS':
                  clearScreen();
                  if (leftOperand === '' && lOpNotEqls0) {
                      upperString = document.getElementById("flt").innerText = currentString + ' -';
                      leftOperand = Number(currentString);
                      operation = 'SUBS';
                      currentString = '';
                      firstSymbol = false;
                      decPoint = false;
                      zeroFirst = 0;
                      break;
                  }
                  else if ((leftOperand !== '') && (rightOperand == '')) {
                      if (currentString === '') {
                          upperString = document.getElementById("flt").innerText = result + ' -';
                          operation = 'SUBS';
                          break;
                      }
                      rightOperand = Number(currentString);
                      if (rightOperand === 0 && operation === 'DIV') {
                          divideByZero();
                          break;
                      }
                      else {
                          leftOperand = Number(leftOperand);
                          result = operate(operation, leftOperand, rightOperand);
                          operation = 'SUBS';
                          upperString = document.getElementById("flt").innerText = result + ' -';
                          leftOperand = result;
                          if (result.toString().length > 8) {
                              result = result.toExponential();
                              result = precise(result.toString());
                          }
                          document.getElementById("slt").innerText = result;
                          rightOperand = '';
                          currentString = '';
                          firstSymbol = false;
                          decPoint = false;
                          zeroFirst = 0;
                          break;
                      }
                  }
              case 'MLTP':
                  clearScreen();
                  if (leftOperand === '' && lOpNotEqls0) {
                      upperString = document.getElementById("flt").innerText = currentString + ' *';
                      leftOperand = Number(currentString);
                      operation = 'MLTP';
                      currentString = '';
                      firstSymbol = false;
                      decPoint = false;
                      zeroFirst = 0;
                      break;
                  }
                  else if ((leftOperand !== '') && (rightOperand == '')) {
                      if (currentString === '') {
                          upperString = document.getElementById("flt").innerText = result + ' *';
                          operation = 'MLTP';
                          break;
                      }
                      rightOperand = Number(currentString);
                      if (rightOperand === 0 && operation === 'DIV') {
                          divideByZero();
                          break;
                      }
                      else {
                          result = operate(operation, leftOperand, rightOperand);
                          operation = 'MLTP';
                          upperString = document.getElementById("flt").innerText = result + ' *';
                          leftOperand = result;
                          if (result.toString().length > 8) {
                              result = result.toExponential();
                              result = precise(result.toString());
                          }
                          document.getElementById("slt").innerText = result;
                          rightOperand = '';
                          currentString = '';
                          firstSymbol = false;
                          decPoint = false;
                          zeroFirst = 0;
                          break;
                      }
                  }
              case 'DIV':
                  clearScreen();
                  if (leftOperand === '' && lOpNotEqls0) {
                      upperString = document.getElementById("flt").innerText = currentString + ' /';
                      leftOperand = Number(currentString);
                      if (leftOperand == 0) {
                          lOpNotEqls0 = false;
                      }
                      operation = 'DIV';
                      currentString = '';
                      firstSymbol = false;
                      decPoint = false;
                      zeroFirst = 0;
                      break;
                  }
                  else if ((leftOperand !== '') && (rightOperand === '')) {
                      if (currentString === '') {
                          upperString = document.getElementById("flt").innerText = result + ' /';
                          operation = 'DIV';
                          break;
                      }
                      rightOperand = Number(currentString);
                      if (rightOperand === 0 && operation === 'DIV') {
                          divideByZero();
                          break;
                      }
                      else {
                          rightOperand = Number(currentString);
                          result = operate(operation, leftOperand, rightOperand);
                          operation = 'DIV';
                          upperString = document.getElementById("flt").innerText = result + ' /';
                          leftOperand = result;
                          if (result.toString().length > 8) {
                              result = result.toExponential();
                              result = precise(result.toString());
                          }
                          document.getElementById("slt").innerText = result;
                          rightOperand = '';
                          currentString = '';
                          firstSymbol = false;
                          decPoint = false;
                          zeroFirst = 0;
                          break;
                      }
                  }
              case 'EQL':
                  clearScreen();
                  if (leftOperand !== '' && operation !== '') {
                      if ((leftOperand !== '') && (rightOperand == '')) {
                          rightOperand = Number(currentString);
                          if (rightOperand === 0 && operation === 'DIV') {
                              divideByZero();
                              break;
                          }
                          else {
                              rightOperand = Number(currentString);
                              leftOperand = Number(leftOperand);
                              result = operate(operation, leftOperand, rightOperand);
                              let currentOp = '';
                              switch (operation) {
                                  case 'ADD':
                                      currentOp = '+';
                                      break;
                                  case 'SUBS':
                                      currentOp = '-';
                                      break;
                                  case 'MLTP':
                                      currentOp = '*';
                                      break;
                                  case 'DIV':
                                      currentOp = '/';
                                      break;
                              }
                              upperString = document.getElementById("flt").innerText = leftOperand + ' ' + currentOp + ' ' + rightOperand + ' =';
                              if (result.toString().length > 8) {
                                  result = result.toExponential();
                                  result = precise(result.toString());
                              }
                              document.getElementById("slt").innerText = result;
                              rightOperand = '';
                              currentString = '';
                              leftOperand = result;
                              firstSymbol = false;
                              decPoint = false;
                              zeroFirst = 0;
                              break;
                          }
                      }
                  }
              default: {
                  btnClicked = btnClicked;
              }
          }
          return (btnClicked);
      })
  })
}

btnPressed();