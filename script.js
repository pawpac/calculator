let add = function(num1, num2) {
  return num1 + num2;
}

let subtract = function(num1, num2) {
  return num1 - num2;
}

let multiply = function(num1, num2) {
  return num1 * num2;
}

let divide = function(num1, num2) {
  return num1 / num2;
}

let operate = function(num1, num2, operator) {
  return operator(num1, num2);
}

const checkResult = function() {
  if (result.toString() !== '') {
    num = '';
    result = '';
  }
}

const removeDivs = function() {
  while (mainDisplay.firstChild) {
    mainDisplay.removeChild(mainDisplay.lastChild);
  }
}

const buttonType = function(type) {
let operatorToDisplay = document.createElement('div');
operatorToDisplay.textContent = type.textContent;
mainDisplay.appendChild(operatorToDisplay);
}

const displayResults = function(type) {
let resultToDisplay = document.createElement('div');
resultToDisplay.textContent = result + type.textContent;
mainDisplay.appendChild(resultToDisplay);
}

let num = '';
let num1 = '';
let num2 = '';
let result = '';
let operator;

let mainDisplay = document.getElementById('mainDisplay');
let digitBtn = document.querySelectorAll('.digit');

let acBtn = document.getElementById('acBtn');
let equalBtn = document.getElementById('equalBtn');

let addBtn = document.getElementById('addBtn');
let subtractBtn = document.getElementById('subtractBtn');
let multiplyBtn = document.getElementById('multiplyBtn');
let divideBtn = document.getElementById('divideBtn');

digitBtn.forEach(btn => btn.addEventListener('click', () => {
  checkResult();
  num += btn.textContent;
  let numToDisplay = document.createElement('div');
  numToDisplay.textContent = btn.textContent;
  mainDisplay.appendChild(numToDisplay);
}));

addBtn.addEventListener('click', () => {
  buttonType(addBtn);
  if ((num1 === '') && (result === '')) {
    num1 = parseInt(num);
    num = '';
  } else if ((num1 === '') && (result !== '')) {
    num1 = result;
    num = '';
  } else {
    num2 = parseInt(num);
    num = '';
  removeDivs();
  result = operate(num1, num2, operator);
  displayResults(addBtn);
  num = result;
  num1 = result;
  }
  operator = add;
})

subtractBtn.addEventListener('click', () => {
  buttonType(subtractBtn);
    if ((num1 === '') && (result === '')) {
      num1 = parseInt(num);
      num = '';
    } else if ((num1 === '') && (result !== '')) {
      num1 = result;
      num = '';
    } else {
      num2 = parseInt(num);
      num = '';
      removeDivs();
      result = operate(num1, num2, operator);
      displayResults(subtractBtn);
      num = result;
      num1 = result;
    }
  operator = subtract;
})

multiplyBtn.addEventListener('click', () => {
  buttonType(multiplyBtn);
    if ((num1 === '') && (result === '')) {
      num1 = parseInt(num);
      num = '';
    } else if ((num1 === '') && (result !== '')) {
      num1 = result;
      num = '';
    } else {
      num2 = parseInt(num);
      num = '';
      removeDivs();
      result = operate(num1, num2, operator);
      displayResults(multiplyBtn);
      num = result;
      num1 = result;
    }
  operator = multiply;
})

divideBtn.addEventListener('click', () => {
    buttonType(divideBtn);
    if ((num1 === '') && (result === '')) {
      num1 = parseInt(num);
      num = '';
    } else if ((num1 === '') && (result !== '')) {
      num1 = result;
      num = '';
    } else {
      num2 = parseInt(num);
      num = '';
      removeDivs();
      result = operate(num1, num2, operator);
      displayResults(divideBtn);
      num = result;
      num1 = result;
    }
  operator = divide;
})

equalBtn.addEventListener('click', () => {
  num2 = parseInt(num);
  num = '';
  removeDivs();
  result = operate(num1, num2, operator);
  let resultToDisplay = document.createElement('div');
  resultToDisplay.textContent = result;
  mainDisplay.appendChild(resultToDisplay);
  num = result;
  num1 = result;
})


