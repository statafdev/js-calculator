// JS calculator

let valueDisplayed = "";

let detectKeyPress = (key) => {
  if (valueDisplayed == 0) {
    valueDisplayed = "";
  }

  valueDisplayed += key;
  console.log(valueDisplayed);
  displayValue(valueDisplayed);
};

let displayValue = (value) => {
  document.getElementById("screen").innerHTML = value;
};

let detectCalculate = () => {
  valueDisplayed = eval(valueDisplayed);
  displayValue(valueDisplayed);
};

let detectReset = () => {
  valueDisplayed = "0";
  console.log("value is : ", valueDisplayed);
  displayValue(valueDisplayed);
};

document.addEventListener("keypress", (event) => {
  let k = event.key;
  if ((k >= 0 && k <= 9) || k == "-" || k == "+" || k == "/" || k == "*") {
    detectKeyPress(k);
  } else if (k == "Enter" || k == "=") {
    detectCalculate();
  }
});
