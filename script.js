let runningTotal;
let numCount = 0; //needed alongside runningTotal to use multiple numbers and operators

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

//needed to feed userInput into code. Pulls button.id and feeds into saveInput
btns.forEach(button =>
  button.addEventListener('click', () => {
    if (button.id === 'clear') {
      clearInput();
    } else {
      saveInput(button.id);
      displayAns(button.id);
    }
}));

//have to be global or they reset each time a function is called. 
let currentInput = [];
let currentNumber = [];
let operator = []


function saveInput(userInput) {
  // if numCount < 1 then do create a, b,
  // if numCount > 0 then a
  if (userInput === 'add' || userInput === 'sub' || userInput === 'multiply' || userInput === 'divide') {
    if (numCount > 0 || currentNumber.length > 0) {
      if (numCount === 0) {
        currentNumber.push(currentInput.join(''));
        clearCurrentInput();
        console.log(currentNumber);
        //take currentNumber[0] and [1] and push to operate,
        //take currentNumber[2] put into varible
        //clear currentNumber then add variable to currentNumber[0]
        //
        let num1 = parseInt(currentNumber[0]);
        let num2 = parseInt(currentNumber[1]);
        c = operator[0];
        operate(num1, num2, c);
        console.log(currentNumber);

      } else if (numCount > 0) {
        console.log(currentNumber);
        currentNumber.push(currentInput.join(''));
        clearCurrentInput();
        console.log(currentNumber);
        let num2 = parseInt(currentNumber[0]);
        c = operator[0];
        return operate(runningTotal, num2, c);
      }
    } else if (numCount === 0) {
      operator[0] = userInput;
      console.log(operator);
      currentNumber.push(currentInput.join(''));
      console.log(currentNumber);
      clearCurrentInput();
    }
  } else if (userInput === 'equal') {
    if (numCount === 0) {
      currentNumber.push(currentInput.join(''));
      clearCurrentInput();
      console.log(currentNumber);
      let num1 = parseInt(currentNumber[0]);
      let num2 = parseInt(currentNumber[1]);
      c = operator[0];
      return operate(num1, num2, c);
    } else if (numCount > 0) {
      currentNumber.push(currentInput.join(''));
      clearCurrentInput();
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

function displayAns(ans) { //Shows current input and answers in calculator display
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



