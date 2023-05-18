const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const persent = document.querySelector('.persent');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let index = 0; index < numbers.length; index += 1) {
  numbers[index].addEventListener('click', (event) => {
    let atr = event.target.textContent;
    if (!isFirstValue) {
      getFirstValue(atr);
    } else if (!isSecondValue) {
      getSecondValue(atr);
    }
  });
}

function getFirstValue(el) {
  result.innerHTML = "";
  firstValue += el;
  result.innerHTML = firstValue;
  firstValue = +firstValue;
}

function getSecondValue(el) {
  if (firstValue !== "" && sign !== "") {
    secondValue += el;
    result.innerHTML = secondValue;
    secondValue = +secondValue;
  }
}

function getSign() {
  for (let index = 0; index < signs.length; index += 1) {
    signs[index].addEventListener('click', (e) => {
      sign = e.target.textContent;
      isFirstValue = true;
    });
  }
}

getSign();

equals.addEventListener('click', () => {
  result.innerHTML = "";
  if (sign === "+") {
    resultValue = firstValue + secondValue;
  } else if (sign === "-") {
    resultValue = firstValue - secondValue;
  } else if (sign === "X") {
    resultValue = firstValue * secondValue;
  } else if (sign === "/") {
    resultValue = firstValue / secondValue;
  }
  result.innerHTML = resultValue;
  firstValue = resultValue;
  secondValue = "";

  checkResultLength();
});

function checkResultLength() {
  let resultValueString = resultValue.toString();

  if (resultValueString.length >= 8) {
    resultValue = parseFloat(resultValueString).toFixed(5);
    result.innerHTML = resultValue;
  }
}

negative.addEventListener('click', () => {
  result.innerHTML = "";
  if (firstValue !== "") {
    resultValue = -firstValue;
    firstValue = resultValue;
  }
  if (firstValue !== "" && secondValue !== "" && sign !== "") {
    resultValue = -resultValue;
  }
});

persent.addEventListener('click', () => {
  result.innerHTML = "";
  if (firstValue !== "") {
    resultValue = firstValue / 100;
    firstValue = resultValue;
  }
  if (firstValue !== "" && secondValue !== "" && sign !== "") {
    resultValue = resultValue / 100;
  }
});

clear.addEventListener('click', () => {
  result.innerHTML = "0";

  firstValue = "";
  isFirstValue = false;
  secondValue = "";
  isSecondValue = false;
  sign = "";
  resultValue = 0;
});
