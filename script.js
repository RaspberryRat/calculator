let runningTotal = [];

function addition(a,b) {
  ans = a + b;
  displayAns(ans);
  console.log(ans);
  return runningTotal.push(ans);
}

function substract(a,b) {
  ans = a - b;
  displayAns(ans);
  console.log(ans);
  return runningTotal.push(ans);
}

function multiply(a,b) {
  ans = a * b;
  displayAns(ans);
  console.log(ans);
  return runningTotal.push(ans);
}

function divide(a,b) {
  ans = a / b;
  displayAns(ans);
  console.log(ans);
  return runningTotal.push(ans);
}


function operate(a, b, c) {
  if (c === 'add') {
    return addition(a, b);
  } else if (c === 'sub') {
    return substract(a, b);
  } else if (c === 'multiply') {
    return multiply(a,b);
  } else if (c === 'divide') {
    return divide(a,b);
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
  let numCount = runningTotal.length;
  console.log(numCount);
  //if userinput is + - * / consolidate numArray, else add to numArray
  if (userInput === 'add' || userInput === 'sub' || userInput === 'multiply' || userInput === 'divide') {
    operator[0] = userInput;
    console.log(operator);
    currentNumber.push(currentInput.join(''));
    console.log(currentNumber);
    clearCurrentInput();
    

  } else if (userInput === 'equal') {
    console.log(operator);

    currentNumber.push(currentInput.join(''));
    console.log(currentNumber);
    let num1 = parseInt(currentNumber[0]);
    let num2 = parseInt(currentNumber[1]);
    c = operator[0];
    return operate(num1, num2, c);
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

function clearInput() {
  clearArr();
  clearTotal();
  clearNumArray();
  return displayAns('clear');
}


// if runningTotal is > 0, use runningTotal as first value

