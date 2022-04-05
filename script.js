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
  } else if (c === 'mult') {
    return multiply(a,b);
  } else if (c === 'div') {
    return divide(a,b);
  } else {
    return 'ERROR!'
  }
}