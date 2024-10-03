let clearDisplay = document.querySelector("#clearDisplay");
let divide = document.querySelector("#divide");
let multiply = document.querySelector("#multiply");
let minus = document.querySelector("#minus");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let add = document.querySelector("#add");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let equal = document.querySelector("#equal");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let zero = document.querySelector("#zero");
let a = "";
let b = "";
let opValue = null;
let display = document.querySelector("#display");
let result = null;

function inputValuesOp1() {
  a = "";
  b = "";
  opValue = null;
  result = null;

  seven.addEventListener("click", () => handleInput("7"));
  eight.addEventListener("click", () => handleInput("8"));
  nine.addEventListener("click", () => handleInput("9"));
  four.addEventListener("click", () => handleInput("4"));
  five.addEventListener("click", () => handleInput("5"));
  six.addEventListener("click", () => handleInput("6"));
  one.addEventListener("click", () => handleInput("1"));
  two.addEventListener("click", () => handleInput("2"));
  three.addEventListener("click", () => handleInput("3"));
  zero.addEventListener("click", () => handleInput("0"));

  add.addEventListener("click", () => setOperation("+"));
  minus.addEventListener("click", () => setOperation("-"));
  divide.addEventListener("click", () => setOperation("/"));
  multiply.addEventListener("click", () => setOperation("*"));

  equal.addEventListener("click", () => calculate());

  clearDisplay.addEventListener("click", () => clearD());
}

function handleInput(value) {
  if (opValue === null) {
    a += value;
    display.innerText = a;
  } else {
    b += value;
    display.innerText = b;
  }
}

function setOperation(operation) {
  if (a !== "") {
    opValue = operation;
    display.innerText = opValue;
  }
}

function calculate() {
  if (a !== "" && b !== "" && opValue !== null) {
    switch (opValue) {
      case "+":
        result = parseFloat(a) + parseFloat(b);
        break;
      case "-":
        result = parseFloat(a) - parseFloat(b);
        break;
      case "*":
        result = parseFloat(a) * parseFloat(b);
        break;
      case "/":
        result = parseFloat(a) / parseFloat(b);
        break;
    }
    display.innerText = result;
    a = result.toString();
    b = "";
    opValue = null;
  }
}

function clearD() {
  a = "";
  b = "";
  opValue = null;
  result = null;
  display.innerText = "0";
}

inputValuesOp1();
