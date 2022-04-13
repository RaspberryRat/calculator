let runningTotal;
let numCount = 0; //needed alongside runningTotal to use multiple numbers and operators


const curNumDisp = document.querySelector('.currentNumber');
const curRunTotalDis = document.querySelector('.runningTotal');
const curInputDis = document.querySelector('.currentInput');

function addition(a,b) {
  ans = a + b;
  runningTotal = ans;
  displayAns('equal');
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
  runningTotal = ans;
  displayAns('equal');
  console.log(ans);
}

function divide(a,b) {
  ans = a / b;
  runningTotal = ans;
  displayAns('equal');
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
    curNumDisp.textContent = currentNumber;
    curRunTotalDis.textContent = runningTotal;
    curInputDis.textContent = currentInput;
}));

//have to be global or they reset each time a function is called. 
let currentInput = [];
let currentNumber = [];
let operator = []


function saveInput(userInput) {
  if (userInput === 'add' || userInput === 'sub' || userInput === 'multiply' || userInput === 'divide') {
    if (currentNumber.length != 0) {
      currentNumber.push(currentInput.join(''));
      clearCurrentInput();
      console.log(currentNumber);
      let num1 = parseInt(currentNumber[0]);
      let num2 = parseInt(currentNumber[1]);
      c = operator[0];
      clearCurrentNumber();
      operate(num1, num2, c);
      return operator[0] = userInput;
    } else if (currentNumber.length === 0) {
      if (numCount === 0) {
        currentNumber.push(currentInput.join(''));
        console.log(currentNumber);
        clearCurrentInput();
        return operator[0] = userInput;
      } else if (numCount > 0) {
        if (currentInput.length != 0) {
          currentNumber.push(currentInput.join(''));
          clearCurrentInput();
          console.log(currentNumber);
          let num1 = runningTotal;
          let num2 = parseInt(currentNumber[0]);
          c = operator[0];
          clearCurrentNumber();
          operate(num1, num2, c);
          return operator[0] = userInput;
        }
        currentNumber.push(runningTotal);
        console.log(`runningTotal is ${runningTotal} and currentNumber is ${currentNumber}`);
        clearCurrentInput();
        return operator[0] = userInput;
      }
    }
  } else if (userInput === 'equal') {
    if (numCount != 0) {
      let num2 = parseInt(currentInput.join(''));
      let num1 = runningTotal;
      clearCurrentInput();
      c = operator[0];
      clearCurrentNumber();
      operate(num1, num2, c);
    } else if (currentNumber.length === 1) {
      currentNumber.push(currentInput.join(''));
      clearCurrentInput();
      let num1 = parseInt(currentNumber[0]);
      let num2 = parseInt(currentNumber[1]);
      c = operator[0];
      clearCurrentNumber();
      operate(num1, num2, c);
    } else {
      clearCurrentInput();
    }  
  } else {
    currentInput.push(userInput);
    console.log(currentInput);
  }
}

function displayAns(ans) { //Shows current input and answers in calculator display
  if (numCount > 0) {
    if (ans === 'add' || ans === 'sub' || ans === 'multiply' || ans === 'divide' || ans === 'equal' || ans === 'clear') {
      display.textContent = runningTotal;
    } else if (currentInput.length === 1) {
      display.textContent = ans;
    } else {
      display.textContent += `${ans}`;
    }
  } else {
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
  numCount = 0;
  return runningTotal = 0;
}



