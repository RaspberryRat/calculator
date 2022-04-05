//sCreate a new function operate that 
//takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function addition(a, b) {
  return a + b;
}

function substract (a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
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


btns.forEach(button =>
  button.addEventListener('click', () => {
    saveInput(button.id);
  }));
let arr = [];
function saveInput(userInput) {
    console.log(arr);
    if (userInput === 'add' || userInput === 'sub' || userInput === 'multiply' || userInput === 'divide') {
      arr.push(userInput);
      console.log('array is ' + arr);
    } else {
      let num = parseInt(userInput);
      arr.unshift(num);
      console.log('ARRAY is ' + arr);
      console.log('ARRAY length is ' + arr.length);
    }
    if (arr.length === 3) {
      console.log(arr.length);
      let a = parseInt(arr[0]);
      let b = parseInt(arr[1]);
      let c = arr[2];
      console.log(typeof(c));
      console.log('user input is ' + a, + b, + c);
      console.log(typeof(a), typeof(b), typeof(c));
      arr = [];
      return operate(a, b, c);
      
    }
  }



