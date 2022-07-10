let add = function(num1, num2) {
  return num1 + num2;
}

let subtract = function(num1, num2) {
  return num1 - num2;
}

let multiple = function(num1, num2) {
  return num1 * num2;
}

let divide = function(num1, num2) {
  return num1 / num2;
}

let operate = function(num1, num2, operator) {
  return operator(num1, num2);
}

let num = '';
let num1 = '';
let num2 = '';
let result = '';
let operator;

let mainDisplay = document.getElementById('mainDisplay');
let digitBtn = document.querySelectorAll('.digit');
let operatorBtn = document.getElementById('operatorBtn');
let acBtn = document.getElementById('acBtn');
let equalBtn = document.getElementById('equalBtn');

let addBtn = document.getElementById('addBtn');

digitBtn.forEach(btn => btn.addEventListener('click', () => {

//  console.log('num1 ' + num1);
//  console.log('num2 ' + num2);

  if (result.toString() !== '') {
    num = '';
  }

  num += btn.textContent;
  let numToDisplay = document.createElement('div');
  numToDisplay.textContent = btn.textContent;
  mainDisplay.appendChild(numToDisplay);

  console.log(num);
}));

addBtn.addEventListener('click', () => {

  // console.log('num1 ' + num1);
  // console.log('num2 ' + num2);

  operator = add;
  let operatorToDisplay = document.createElement('div');
  operatorToDisplay.textContent = addBtn.textContent;
  mainDisplay.appendChild(operatorToDisplay);

  if ((num1 === '') && (result === '')) {
    num1 = parseInt(num);
    num = '';
  } else if ((num1 === '') && (result !== '')) {

    num1 = result;
    num = '';

  } else {
    num2 = parseInt(num);
    num = '';



    while (mainDisplay.firstChild) {
      mainDisplay.removeChild(mainDisplay.lastChild);
    }

    result = operate(num1, num2, add);

    let resultToDisplay = document.createElement('div');
    resultToDisplay.textContent = result + addBtn.textContent;
    mainDisplay.appendChild(resultToDisplay);

    num = result;
    num1 = result;

  
    console.log(result);
    // console.log(typeof result);
  }


})