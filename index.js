const calcState = {
  firstValue: "",
  operation: undefined,
  secondValue: "",
};

function buttonPress(newValue) {
  if (typeof newValue === "number") {
    if (!calcState.operation) {
      calcState.firstValue += newValue;
      document.getElementById("input").value = calcState.firstValue;
    } else {
      calcState.secondValue += newValue;
      document.getElementById("input").value = calcState.secondValue;
    }
  } else {
    calcState.operation = newValue;
  }
  console.log(calcState);
}

// Attempting to only allow 1 decimal
function decimalPress() {
  let count = 0;
  if (count == 0) {
    count += 1;
    calcState.firstValue += ".";
    document.getElementById("input").value = calcState.firstValue;
    console.log(calcState.firstValue);
    console.log(count);
  } else {
    console.log("error");
  }
}

function clearCalc() {
  calcState.firstValue = "";
  calcState.operation = undefined;
  calcState.secondValue = "";
  document.getElementById("input").value = calcState.firstValue;
  console.log(calcState);
}

function back() {
  if (calcState.operation == undefined) {
    calcState.firstValue = calcState.firstValue.slice(0, -1);
    document.getElementById("input").value = calcState.firstValue;
  } else {
    calcState.secondValue = calcState.secondValue.slice(0, -1);
    document.getElementById("input").value = calcState.firstValue;
  }
}

function signChange() {
  let x = Number(calcState.firstValue);
  calcState.firstValue = x * -1;
  document.getElementById("input").value = calcState.firstValue;
}

function equalCalc() {
  const first = Number(calcState.firstValue);
  const second = Number(calcState.secondValue);
  let result;
  if (calcState.operation === "/") {
    result = first / second;
  } else if (calcState.operation === "*") {
    result = first * second;
  } else if (calcState.operation === "-") {
    result = first - second;
  } else if (calcState.operation === "+") {
    result = first + second;
  } else if ((calcState.operation = "undefined")) {
    result = first;
  }
  clearCalc();
  calcState.firstValue = result;
  document.getElementById("input").value = calcState.firstValue;
}
