let runningTotal;
let numCount = 0;

function addition(a,b) {
  ans = a + b;
  runningTotal = ans;
  displayAns(equal);
  console.log(ans);
  console.log(numCount);
}

function substract(a,b) {
  ans = a - b;
  displayAns(ans);
  runningTotal = ans;
  console.log(ans);
}

function multiply(a,b) {
  ans = a * b;
  displayAns(ans);
  runningTotal = ans;
  console.log(ans);
}

function divide(a,b) {
  ans = a / b;
  displayAns(ans);
  runningTotal = ans;
  console.log(ans);
}


function operate(a, b, c) {
  clearCurrentNumber();

  if (c === 'add') {
    addition(a, b);
    return numCount += 1;
  } else if (c === 'sub') {
    substract(a, b);
    return numCount += 1;
  } else if (c === 'multiply') {
    multiply(a,b);
    return numCount += 1;
  } else if (c === 'divide') {
    divide(a,b);
    return numCount += 1;
  } else {
    return 'ERROR!'
  }
}

const btns = document.querySelectorAll('button');
const display = document.querySelector('.display');


btns.forEach(button =>
  button.addEventListener('click', () => {
    if (button.id === 'clear') {
      clearInput();
    } else {
      saveInput(button.id);
      displayAns(button.id);
    }
}));

let currentInput = [];
let currentNumber = [];
let operator = []


// when press calc number add to numArray and display on screen
// when press first operator take numarray, put into a variable and clear numarray
// repeat - when press calc number add to numArray and display on screen
// when press operator again or press equal, take number1 and number2 with operator and pass to operate
// then operate should take and put into runningTotal.
// if runningTotal > 0, and press operator, use it as first number in calculation


function saveInput(userInput) {
  // if numCount < 1 then do create a, b,
  // if numCount > 0 then a
  if (userInput === 'add' || userInput === 'sub' || userInput === 'multiply' || userInput === 'divide') {
    operator[0] = userInput;
    console.log(operator);
    currentNumber.push(currentInput.join(''));
    console.log(currentNumber);
    clearCurrentInput();
  } else if (userInput === 'equal') {
    if (numCount === 0) {
      currentNumber.push(currentInput.join(''));
      console.log(currentNumber);
      let num1 = parseInt(currentNumber[0]);
      let num2 = parseInt(currentNumber[1]);
      c = operator[0];
      return operate(num1, num2, c);
    } else if (numCount > 0) {
      currentNumber.push(currentInput.join(''));
      console.log(currentNumber);
      let num2 = parseInt(currentNumber[0]);
      c = operator[0];
      return operate(runningTotal, num2, c);
    }
  } else {
    currentInput.push(userInput);
    console.log(currentInput);
  }
}






function displayAns(ans) {
  switch (ans) {
    case 'add':
      display.textContent = '';
     break;
    case 'sub':
      display.textContent = '';
      break;
    case 'multiply':
      display.textContent = '';
      break;
    case 'divide':
      display.textContent = '';
      break;
    case 'equal':
      display.textContent = `${runningTotal}`;
      break;
    case 'clear':
      display.textContent = '';
      break;
    default:
      display.textContent += `${ans}`;
   }
}

function clearCurrentInput() {
  return currentInput = [];
}

function clearCurrentNumber() {
  return currentNumber = [];
}

function clearInput() {
  clearCurrentInput();
  clearCurrentNumber();
  displayAns('clear');
  return runningTotal = 0;
}


// if runningTotal is > 0, use runningTotal as first value

