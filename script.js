let x;
let operator;
let y;
let result;

document.getElementById("result").innerText = 0;

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

let clickedButtons = document.querySelectorAll(".number");
clickedButtons.forEach(function(clickedButton) {
  clickedButton.addEventListener("click", function(event) {
    if (x === undefined) {
      x = event.target.innerText;
      document.getElementById("result").innerText = x;

      return;
    }
    if (operator === undefined) {
      x = x + event.target.innerText;
      document.getElementById("result").innerText = x;

      return;
    }
    if (operator !== undefined) {
      if (y === undefined) {
        y = event.target.innerText;
        document.getElementById("result").innerText = y;

        return;
      }
      y = y + event.target.innerText;
      document.getElementById("result").innerText = y;
      return;
    }
  });
});

document.getElementById("divide").addEventListener("click", function() {
  operator = divide;
});

document.getElementById("multiply").addEventListener("click", function() {
  operator = multiply;
});

document.getElementById("add").addEventListener("click", function() {
  operator = add;
});

document.getElementById("subtract").addEventListener("click", function() {
  operator = subtract;
});

document.getElementById("equals").addEventListener("click", function() {
  x = parseInt(x);
  y = parseInt(y);
  x = operator(x, y);
  document.getElementById("result").innerText = x;
  operator = undefined;
  y = undefined;
});

document.getElementById("clear").addEventListener("click", function() {
  x = undefined;
  operator = undefined;
  y = undefined;
  document.getElementById("result").innerText = 0;
});

document.getElementById("backarrow").addEventListener("click", function() {
  if (operator === undefined) {
    x = x.substring(0, x.length - 1);
    document.getElementById("result").innerText = x;
  }
  if (operator !== undefined) {
    y = y.substring(0, y.length - 1);
    document.getElementById("result").innerText = y;
  }
});
