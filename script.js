//sCreate a new function operate that 
//takes an operator and 2 numbers and then calls one of the above functions on the numbers.
let runningTotal = [];

function addition(numArray) {
  ans = numArray.reduce((preValue, currentValue) => parseInt(preValue) + parseInt(currentValue));	
  displayAns(ans);
  console.log(ans);
  return runningTotal.push(ans);
}

function substract(numArray) {
  ans = numArray.reduce((preValue, currentValue) => parseInt(preValue) - parseInt(currentValue));	
  displayAns(ans);
  console.log(ans);
  return runningTotal.push(ans);
}

function multiply(numArray) {
  ans = numArray.reduce((preValue, currentValue) => parseInt(preValue) * parseInt(currentValue));	
  displayAns(ans);
  console.log(ans);
  return runningTotal.push(ans);
}

function divide(numArray) {
  ans = numArray.reduce((preValue, currentValue) => parseInt(preValue) / parseInt(currentValue));	
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

let arr = [];

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
      default:
        display.textContent += `${ans}`;
     }

    
  }
  
  function clearInput() {
    arr = []
    displayAns('Input cleared');
    console.log(arr + arr.length);
  }

  let numArray = [];
  let operator = [];


  function saveInput(input) {

    if (numArray < 2 && input != 'number') {
      if (input === 'add' || input === 'sub' || input === 'multiply' || input === 'divide') {
        numArray.push(arr.join(''));
        saveOperator(input);
        console.log(numArray);
        console.log(arr);
        clearArr();
        return numArray;
      }
    }
    if (input === 'equal') {
      numArray.push(arr.join(''));
      console.log(numArray);
      calcAns(numArray, input);
      clearArr();
    } else if (input === 'add' || input === 'sub' || input === 'multiply' || input === 'divide') {
      numArray.push(arr.join(''));
      let currentOperator = operator.shift();
      calcAns(numArray, currentOperator);
    }
    arr.push(input);
    console.log(arr);
  }

 function clearArr() {
   return arr = [];
 }

 function saveOperator(input) {
   operator.push(input);
 }




 function calcAns(numArray, operator) {
   clearArr();
   switch (operator) {
    case 'add':
     addition(numArray);
     break;
    case 'sub':
      substract(numArray);
      break;
    case 'multiply':
      multiply(numArray);
      break;
    case 'divide':
      divide(numArray);
      break;
    case 'equal':
      displayAns(runningTotal);
      break;      
    default:
      alert('ERROR ERROR ERROR');
   }
  }

    






  //user presses input save to variable - maybe a loop. when user presses an operator add concatenante numbers and add
  // to array

  

  
//take each number input and add to an array
//if the unit presses an operator button, take numbers in array and combine into number
//