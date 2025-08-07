// JS calculator

let valueDisplayed = "";

let detectKeyPress = (key) => {
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
