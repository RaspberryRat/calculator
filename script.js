let runningTotal;
let numCount = 0; //needed alongside runningTotal to use multiple numbers and operators


const curNumDisp = document.querySelector('.currentNumber');
const curRunTotalDis = document.querySelector('.runningTotal');
const curInputDis = document.querySelector('.currentInput');
const operatorDis = document.querySelector('.operator');
const userInputDis = document.querySelector('.userInput');

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
    operatorDis.textContent = operator;
}));

//have to be global or they reset each time a function is called. 
let currentInput = [];
let currentNumber = [];
let operator = [];


function saveInput(userInput) {
  if (userInput === 'add' || userInput === 'sub' || userInput === 'multiply' || userInput === 'divide') {
    if (currentInput.length === 0) {
      return operator[0] = userInput;
    } else {
      if (currentNumber.length != 0) { //checks if there is a number already in the array, if there is do math on number with current input
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
        if (numCount === 0) { //this checks if any operation has been saved previously, if not saves number and operator
          currentNumber.push(currentInput.join(''));
          console.log(currentNumber);
          clearCurrentInput();
          return operator[0] = userInput;
        } else if (numCount > 0) { //checks if there is a previous input
          if (currentInput.length != 0) { //does operation with current saved number and runningTotal(sum) and saves new operator to continue equation
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
    }
  } else if (userInput === 'equal') { //same operations for operators but for equal
    if (currentInput.length === 0) {
      return;
    } else { 
      if (numCount != 0) {
        if (parseInt(currentInput.join('')) === 0) {
          console.log('hi');
          clearCurrentInput();
          displayAns('destruct');
          return userInput = null;
        } else {
          let num2 = parseInt(currentInput.join(''));
          let num1 = runningTotal;
          clearCurrentInput();
          c = operator[0];
          clearCurrentNumber();
          operate(num1, num2, c);
        }
      } else if (currentNumber.length === 1) {
        if (parseInt(currentInput.join('')) === 0) {
          console.log('hi');
          clearCurrentInput();
          displayAns('destruct');
          return userInput = null;
        } else {
          currentNumber.push(currentInput.join(''));
          clearCurrentInput();
          let num1 = parseInt(currentNumber[0]);
          let num2 = parseInt(currentNumber[1]);
          c = operator[0];
          clearCurrentNumber();
          operate(num1, num2, c);
        }
      } else {
        clearCurrentInput();
      }
    }  
  } else {
    currentInput.push(userInput);
    console.log(currentInput);
  }
}

function displayAns(ans) { //Shows current input and answers in calculator display
  //if (ans === 'destruct') {//user tried to divde by 0
  //  display.textContent = 'Universe will explode in 3...';
  //  return;
  if (ans === 'clear') {
      display.textContent = '';
    } else if (numCount > 0) { //needs to properly display runningTotal after each operator
      if (ans === 'add' || ans === 'sub' || ans === 'multiply' || ans === 'divide' || ans === 'equal' || ans === 'clear') {
        display.textContent = Math.round(runningTotal * 100) / 100; //rounds answer to 2 decimal
      } else if (currentInput.length === 1) {
        display.textContent = ans;
      } else {
        display.textContent += `${ans}`;
      }
    } else {
      switch (ans) {
        case 'destruct':
          display.textContent = 'unverse';
          break;
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
          display.textContent = Math.round(runningTotal * 100) / 100; //rounds 2 decimal 
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
  return runningTotal = null;
}



