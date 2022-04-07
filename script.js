//sCreate a new function operate that 
//takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function addition(numArray) {
  ans = numArray.reduce((preValue, currentValue) => parseInt(preValue) + parseInt(currentValue));	
  displayAns(ans);
  console.log(ans);
}

function substract(numArray) {
  ans = numArray.reduce((preValue, currentValue) => parseInt(preValue) - parseInt(currentValue));	
  displayAns(ans);
  console.log(ans);
}

function multiply(numArray) {
  ans = numArray.reduce((preValue, currentValue) => parseInt(preValue) * parseInt(currentValue));	
  displayAns(ans);
  console.log(ans);
}

function divide(numArray) {
  ans = numArray.reduce((preValue, currentValue) => parseInt(preValue) / parseInt(currentValue));	
  displayAns(ans);
  console.log(ans);
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

//function saveInput(userInput) {
//    //console.log(arr);
//    if (userInput === 'equal' && arr.length === 3) {
//      //console.log(arr.length);
//      let a = parseInt(arr[0]);
//      let b = parseInt(arr[1]);
//      let c = arr[2];
//      //console.log(typeof(c));
//      //console.log('user input is ' + a, + b, + c);
//      //console.log(typeof(a), typeof(b), typeof(c));
//      arr = []; // arr is getting NaN
//      operate(a, b, c);
//      arr = [];
//      //console.log('arr is ' + arr + 'and length ' + arr.length);
//    } else if (userInput === 'add' || userInput === 'sub' || userInput === 'multiply' || userInput === 'divide') {
//      arr.push(userInput);
//      if (userInput === 'add') {
//        displayAns('+');
//      } else if (userInput === 'sub') {
//        displayAns('-');
//      } else if (userInput === 'multiply') {
//        displayAns('X');
//      } else if (userInput === 'divide') {
//        displayAns('/');
//      }
//      //console.log('array is ' + arr);
//    } else {
//      displayAns(userInput);
//      let num = parseInt(userInput);
//      arr.unshift(num); // need to figure out how to add second number to second spot in array second num is currently first spot
//      //console.log('ARRAY is ' + arr);
//      //console.log('ARRAY length is ' + arr.length);
//    }
//  }
//
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
        display.textContent = '';
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
  let numCount = 0;
  let numArray = [];
  let operator;


  function saveInput(num) {

    if (num === 'add' || num === 'sub' || num === 'multiply' || num === 'divide') {
      numArray[numCount] = arr.join('');
      operator = num;
      console.log(numArray);
      saveOperator(num);
      numCount ++;
      console.log(numCount);
      clearArr();
      console.log(arr);
      return numArray;
    } else if (num === 'equal') {
      numArray.push(arr.join(''));
      console.log(numArray);
      numCount = 0;
      calcAns(numArray, operator);
    }
    arr.push(num);
    console.log(arr);
  }



 function clearArr() {
   return arr = [];
 }

 function saveOperator(operator) {
   return operator = operator;
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
    default:
      alert('ERROR ERROR ERROR');
   }
  }

    






  //user presses input save to variable - maybe a loop. when user presses an operator add concatenante numbers and add
  // to array

  

  
//take each number input and add to an array
//if the unit presses an operator button, take numbers in array and combine into number
//