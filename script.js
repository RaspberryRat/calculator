//sCreate a new function operate that 
//takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function addition(a, b) {
  let ans = a + b;
  displayAns(ans);
}

function substract (a, b) {
  let ans = a - b;
  displayAns(ans);
}

function multiply(a, b) {
  let ans = a * b;
  displayAns(ans);
}

function divide(a, b) {
  let ans = a / b;
  displayAns(ans);
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
    }
  }));

let arr = [];

function saveInput(userInput) {
    //console.log(arr);
    if (userInput === 'equal' && arr.length === 3) {
      //console.log(arr.length);
      let a = parseInt(arr[0]);
      let b = parseInt(arr[1]);
      let c = arr[2];
      //console.log(typeof(c));
      //console.log('user input is ' + a, + b, + c);
      //console.log(typeof(a), typeof(b), typeof(c));
      arr = []; // arr is getting NaN
      operate(a, b, c);
      arr = [];
      //console.log('arr is ' + arr + 'and length ' + arr.length);
    } else if (userInput === 'add' || userInput === 'sub' || userInput === 'multiply' || userInput === 'divide') {
      arr.push(userInput);
      if (userInput === 'add') {
        displayAns('+');
      } else if (userInput === 'sub') {
        displayAns('-');
      } else if (userInput === 'multiply') {
        displayAns('X');
      } else if (userInput === 'divide') {
        displayAns('/');
      }
      //console.log('array is ' + arr);
    } else {
      displayAns(userInput);
      let num = parseInt(userInput);
      arr.unshift(num); // need to figure out how to add second number to second spot in array second num is currently first spot
      //console.log('ARRAY is ' + arr);
      //console.log('ARRAY length is ' + arr.length);
    }
  }

  function displayAns(ans) {
    display.textContent = `${ans}`;
  }
  
  function clearInput() {
    arr = []
    displayAns('Input cleared');
    console.log(arr + arr.length);
  }


